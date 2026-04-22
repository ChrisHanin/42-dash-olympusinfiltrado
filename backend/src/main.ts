import { createServer } from "node:http";

type CliConfig = {
  port: number;
  dataFiles: string[];
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

function sendJson(
  res: import("node:http").ServerResponse,
  statusCode: number,
  payload: unknown,
): void {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

async function main(): Promise<void> {
  const config = parseCliArgs(process.argv.slice(2));
  const server = createServer((req, res) => {
    const method = req.method ?? "GET";
    const url = req.url ?? "/";

    if (method === "GET" && url === "/healthz") {
      sendJson(res, 200, { status: "sakjdhask" });
      return;
    }

    if (method === "GET" && url === "/api/_debug/config") {
      sendJson(res, 200, {
        port: config.port,
        dataFiles: config.dataFiles,
      });
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