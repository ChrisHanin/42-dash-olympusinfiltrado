import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";

type CliConfig = {
  port: number;
  dataFiles: string[];
};

type RawGameRecord = Record<string, unknown>;

type GameRecord = {
  id: string;
  name: string;
  provider: string;
  category: string;
  rtp: number;
  volatility: string;
  enabled: boolean;
  releasedAt: string;
  thumbnailUrl: string;
  tags: string[];
};

type GameListResponse = {
  data: GameRecord[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
};

function parseCliArgs(argv: string[]): CliConfig {
  const envPort = Number(process.env.BACKEND_PORT ?? "3000");
  let port = Number.isFinite(envPort) && envPort > 0 ? envPort : 3000;
  let dataFiles: string[] = [];

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--port") {
      const raw = argv[i + 1];
      const parsed = Number(raw);
      if (Number.isFinite(parsed) && parsed > 0) {
        port = parsed;
      }
      i += 1;
      continue;
    }

    if (arg === "--data") {
      const raw = argv[i + 1] ?? "";
      dataFiles = raw
        .split(",")
        .map((v) => v.trim())
        .filter((v) => v.length > 0);
      i += 1;
    }
  }

  return { port, dataFiles };
}

function parsePositiveInteger(value: string | null | undefined, fallback: number): number {
  if (value == null || value.trim().length === 0) {
    return fallback;
  }

  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }

  const normalized = Math.floor(parsed);
  return normalized > 0 ? normalized : fallback;
}

function setCorsHeaders(res: import("node:http").ServerResponse): void {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function parseBoolean(value: string | null): boolean | undefined {
  if (value == null) {
    return undefined;
  }

  const normalized = value.trim().toLowerCase();
  if (normalized === "true" || normalized === "1") {
    return true;
  }

  if (normalized === "false" || normalized === "0") {
    return false;
  }

  return undefined;
}

function parseDatePrefix(value: unknown): string {
  if (typeof value !== "string" || value.length === 0) {
    return "";
  }

  return value.length >= 10 ? value.slice(0, 10) : value;
}

function isArrayOfStrings(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function toGameRecord(record: RawGameRecord): GameRecord | null {
  const id = typeof record.id === "string" ? record.id : typeof record.gameId === "string" ? record.gameId : "";
  const name = typeof record.name === "string" ? record.name : typeof record.title === "string" ? record.title : "";
  const provider =
    typeof record.provider === "string"
      ? record.provider
      : typeof record.studio === "string"
        ? record.studio
        : "";
  const category =
    typeof record.category === "string"
      ? record.category
      : typeof record.type === "string"
        ? record.type
        : "";
  const rtpValue =
    typeof record.rtp === "number"
      ? record.rtp
      : typeof record.returnToPlayer === "number"
        ? record.returnToPlayer
        : Number.NaN;
  const volatility =
    typeof record.volatility === "string"
      ? record.volatility
      : typeof record.variance === "string"
        ? record.variance
        : "";
  const enabled =
    typeof record.enabled === "boolean"
      ? record.enabled
      : typeof record.active === "boolean"
        ? record.active
        : false;
  const releasedAtRaw =
    typeof record.releasedAt === "string"
      ? record.releasedAt
      : typeof record.launchDate === "string"
        ? record.launchDate
        : "";
  const thumbnailUrl =
    typeof record.thumbnailUrl === "string"
      ? record.thumbnailUrl
      : typeof record.thumbnail === "string"
        ? record.thumbnail
        : "";
  const tags = isArrayOfStrings(record.tags)
    ? record.tags
    : isArrayOfStrings(record.features)
      ? record.features
      : [];

  if (
    id.length === 0 ||
    name.length === 0 ||
    provider.length === 0 ||
    category.length === 0 ||
    !Number.isFinite(rtpValue) ||
    volatility.length === 0 ||
    releasedAtRaw.length === 0 ||
    thumbnailUrl.length === 0
  ) {
    return null;
  }

  return {
    id,
    name,
    provider,
    category,
    rtp: rtpValue,
    volatility,
    enabled,
    releasedAt: parseDatePrefix(releasedAtRaw),
    thumbnailUrl,
    tags,
  };
}

function dedupeById(records: GameRecord[]): GameRecord[] {
  const seen = new Set<string>();
  const deduplicated: GameRecord[] = [];

  for (const record of records) {
    if (seen.has(record.id)) {
      continue;
    }

    seen.add(record.id);
    deduplicated.push(record);
  }

  return deduplicated;
}

async function loadGameCatalog(dataFiles: string[]): Promise<GameRecord[]> {
  const candidates =
    dataFiles.length > 0
      ? dataFiles
      : [
          "provider-unified.json",
          "data/provider-unified.json",
          "../data/provider-unified.json",
          "backend/data/provider-unified.json",
          "provider-alpha.json",
          "provider-beta.json",
          "provider-gamma.json",
          "data/provider-alpha.json",
          "data/provider-beta.json",
          "data/provider-gamma.json",
          "../data/provider-alpha.json",
          "../data/provider-beta.json",
          "../data/provider-gamma.json",
          "backend/data/provider-alpha.json",
          "backend/data/provider-beta.json",
          "backend/data/provider-gamma.json",
        ];

  const resolvedFiles = candidates.map((candidate) => path.resolve(process.cwd(), candidate));
  const existingUnifiedFiles = resolvedFiles.filter((filePath) => path.basename(filePath) === "provider-unified.json");
  const existingRawFiles = resolvedFiles.filter((filePath) => /provider-(alpha|beta|gamma)\.json$/.test(filePath));

  const selectedFiles = (await findExistingFiles(existingUnifiedFiles)).length > 0
    ? await findExistingFiles(existingUnifiedFiles)
    : await findExistingFiles(existingRawFiles);

  if (selectedFiles.length === 0) {
    throw new Error("No game data files found. Expected provider-unified.json or provider-alpha/beta/gamma.json");
  }

  const catalog: GameRecord[] = [];

  for (const filePath of selectedFiles) {
    const rawContent = await readFile(filePath, "utf8");
    const parsed = JSON.parse(rawContent) as unknown;

    if (!Array.isArray(parsed)) {
      continue;
    }

    for (const item of parsed) {
      if (item && typeof item === "object") {
        const normalized = toGameRecord(item as RawGameRecord);
        if (normalized) {
          catalog.push(normalized);
        }
      }
    }
  }

  return dedupeById(catalog);
}

async function findExistingFiles(candidates: string[]): Promise<string[]> {
  const existing: string[] = [];

  for (const filePath of candidates) {
    try {
      await readFile(filePath, "utf8");
      existing.push(filePath);
    } catch {
      // Ignore missing files and keep scanning fallbacks.
    }
  }

  return existing;
}

function compareStrings(left: string, right: string): number {
  return left.localeCompare(right, "en", { sensitivity: "base" });
}

function sortGames(records: GameRecord[], sortBy: string | null, order: string | null): GameRecord[] {
  if (sortBy !== "name" && sortBy !== "rtp") {
    return records;
  }

  const direction = order?.toLowerCase() === "desc" ? -1 : 1;

  return [...records].sort((left, right) => {
    if (sortBy === "name") {
      return compareStrings(left.name, right.name) * direction;
    }

    const difference = left.rtp - right.rtp;
    if (difference !== 0) {
      return difference * direction;
    }

    return compareStrings(left.name, right.name);
  });
}

function filterGames(records: GameRecord[], query: URLSearchParams): GameRecord[] {
  const searchValue = (query.get("search") ?? query.get("name") ?? "").trim().toLowerCase();
  const providerValue = (query.get("provider") ?? "").trim().toLowerCase();
  const categoryValue = (query.get("category") ?? "").trim().toLowerCase();
  const enabledRaw = query.get("enabled");
  const enabledValue = enabledRaw == null ? true : parseBoolean(enabledRaw);

  return records.filter((record) => {
    if (searchValue.length > 0 && !record.name.toLowerCase().includes(searchValue)) {
      return false;
    }

    if (providerValue.length > 0 && record.provider.toLowerCase() !== providerValue) {
      return false;
    }

    if (categoryValue.length > 0 && record.category.toLowerCase() !== categoryValue) {
      return false;
    }

    if (enabledValue !== undefined && record.enabled !== enabledValue) {
      return false;
    }

    return true;
  });
}

function paginateGames(records: GameRecord[], page: number, pageSize: number): GameListResponse {
  const total = records.length;
  const totalPages = total === 0 ? 0 : Math.ceil(total / pageSize);
  const safePage = totalPages === 0 ? 1 : Math.min(page, totalPages);
  const startIndex = (safePage - 1) * pageSize;

  return {
    data: records.slice(startIndex, startIndex + pageSize),
    meta: {
      total,
      page: safePage,
      pageSize,
      totalPages,
    },
  };
}

function sendJson(
  res: import("node:http").ServerResponse,
  statusCode: number,
  payload: unknown,
): void {
  setCorsHeaders(res);
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

async function main(): Promise<void> {
  const config = parseCliArgs(process.argv.slice(2));
  const catalog = await loadGameCatalog(config.dataFiles);

  const server = createServer((req, res) => {
    const method = req.method ?? "GET";
    const requestUrl = new URL(req.url ?? "/", "http://localhost");
    const pathname = requestUrl.pathname;

    if (method === "OPTIONS") {
      setCorsHeaders(res);
      res.statusCode = 204;
      res.end();
      return;
    }

    if (method === "GET" && pathname === "/healthz") {
      sendJson(res, 200, { status: "ok" });
      return;
    }

    if (method === "GET" && pathname === "/api/_debug/config") {
      sendJson(res, 200, {
        port: config.port,
        dataFiles: config.dataFiles,
      });
      return;
    }

    if (method === "GET" && pathname === "/api/games") {
      const filtered = filterGames(catalog, requestUrl.searchParams);
      const sorted = sortGames(filtered, requestUrl.searchParams.get("sort"), requestUrl.searchParams.get("order"));
      const page = parsePositiveInteger(requestUrl.searchParams.get("page"), 1);
      const pageSize = parsePositiveInteger(requestUrl.searchParams.get("pageSize"), 20);

      sendJson(res, 200, paginateGames(sorted, page, pageSize));
      return;
    }

    if (method === "GET" && pathname.startsWith("/api/games/")) {
      const gameId = decodeURIComponent(pathname.slice("/api/games/".length));
      const game = catalog.find((record) => record.id === gameId);

      if (!game) {
        sendJson(res, 404, {
          code: "NOT_FOUND",
          message: "Game not found",
          details: [],
        });
        return;
      }

      sendJson(res, 200, game);
      return;
    }

    sendJson(res, 404, {
      code: "NOT_FOUND",
      message: "Route not found",
      details: [],
    });
  });

  server.on("error", (error) => {
    console.error(error);
    process.exit(1);
  });

  server.listen(config.port, "0.0.0.0", () => {
    console.log(`Backend listening on 0.0.0.0:${config.port}`);
  });
}

void main();