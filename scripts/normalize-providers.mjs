#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const CATEGORY_CODE_MAP = {
  SL: 'slots',
  LV: 'live',
  TB: 'table',
  IN: 'instant',
  JP: 'jackpot',
};

const VOLATILITY_CODE_MAP = {
  LOW: 'low',
  MED: 'medium',
  HIGH: 'high',
};

function parseArgs(argv) {
  const args = {
    watch: false,
    root: process.cwd(),
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === '--watch') {
      args.watch = true;
      continue;
    }

    if (arg === '--root') {
      const value = argv[i + 1];
      if (!value) {
        throw new Error('Missing value for --root');
      }
      args.root = path.resolve(value);
      i += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  return args;
}

function isProviderInputFile(fileName) {
  return /^provider-(?!unified\b).+\.json$/i.test(fileName);
}

function readJsonArray(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error(`Expected an array in ${filePath}`);
  }
  return parsed;
}

function pickFirst(obj, keys) {
  for (const key of keys) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, key) && obj[key] != null) {
      return obj[key];
    }
  }
  return null;
}

function toStringSafe(value) {
  if (value == null) return null;
  const out = String(value).trim();
  return out.length > 0 ? out : null;
}

function toBooleanSafe(value) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value !== 0;
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (normalized === 'true' || normalized === '1') return true;
    if (normalized === 'false' || normalized === '0') return false;
  }
  return false;
}

function toNumberSafe(value) {
  if (value == null) return null;
  const number = Number.parseFloat(String(value));
  return Number.isFinite(number) ? number : null;
}

function normalizeRtp(value, treatAsFraction = false) {
  const number = toNumberSafe(value);
  if (number == null) return null;
  const normalized = treatAsFraction || number <= 1 ? number * 100 : number;
  return Math.round(normalized * 100) / 100;
}

function normalizeDate(value) {
  const text = toStringSafe(value);
  if (!text) return null;

  const ddmmyyyy = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = ddmmyyyy.exec(text);
  if (match) {
    return `${match[3]}-${match[2]}-${match[1]}`;
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    return text;
  }

  const date = new Date(text);
  if (!Number.isNaN(date.getTime())) {
    return date.toISOString().slice(0, 10);
  }

  return null;
}

function normalizeCategory(value) {
  const text = toStringSafe(value);
  if (!text) return null;

  const upper = text.toUpperCase();
  if (Object.prototype.hasOwnProperty.call(CATEGORY_CODE_MAP, upper)) {
    return CATEGORY_CODE_MAP[upper];
  }

  return text.toLowerCase();
}

function normalizeVolatility(value) {
  const text = toStringSafe(value);
  if (!text) return null;

  const upper = text.toUpperCase();
  if (Object.prototype.hasOwnProperty.call(VOLATILITY_CODE_MAP, upper)) {
    return VOLATILITY_CODE_MAP[upper];
  }

  return text.toLowerCase();
}

function normalizeTags(value) {
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === 'string') return item.trim();
        if (item && typeof item === 'object') {
          const slug = pickFirst(item, ['slug', 'name', 'value']);
          return slug ? String(slug).trim() : '';
        }
        return '';
      })
      .filter(Boolean);
  }

  const text = toStringSafe(value);
  if (!text) return [];

  return text
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeAlphaItem(item) {
  const sourceId = toStringSafe(pickFirst(item, ['gameId', 'game_id', 'id']));
  if (!sourceId) return null;

  return {
    id: sourceId,
    name: toStringSafe(pickFirst(item, ['title', 'name'])) ?? sourceId,
    provider: toStringSafe(pickFirst(item, ['studio', 'provider', 'providerName'])) ?? 'unknown',
    category: normalizeCategory(pickFirst(item, ['type', 'category'])),
    rtp: normalizeRtp(pickFirst(item, ['returnToPlayer', 'return_to_player', 'rtp'])),
    volatility: normalizeVolatility(pickFirst(item, ['variance', 'volatility'])),
    enabled: toBooleanSafe(pickFirst(item, ['active', 'enabled', 'isEnabled'])),
    releasedAt: normalizeDate(pickFirst(item, ['launchDate', 'launch_date', 'releaseDate', 'releasedAt'])),
    thumbnailUrl: toStringSafe(pickFirst(item, ['thumbnail', 'thumbnailUrl', 'imageUrl'])),
    tags: normalizeTags(pickFirst(item, ['features', 'tags', 'tagList'])),
    source: 'alpha',
  };
}

function normalizeBetaItem(item) {
  const sourceId = toStringSafe(pickFirst(item, ['gameCode', 'game_code', 'id']));
  if (!sourceId) return null;

  return {
    id: sourceId,
    name: toStringSafe(pickFirst(item, ['gameName', 'game_name', 'title'])) ?? sourceId,
    provider: toStringSafe(pickFirst(item, ['providerName', 'provider_name', 'provider'])) ?? 'unknown',
    category: normalizeCategory(pickFirst(item, ['gameCategory', 'game_category', 'category'])),
    rtp: normalizeRtp(pickFirst(item, ['rtpValue', 'rtp_value', 'rtp'])),
    volatility: normalizeVolatility(pickFirst(item, ['riskLevel', 'risk_level', 'volatility'])),
    enabled: toBooleanSafe(pickFirst(item, ['isEnabled', 'is_enabled', 'enabled'])),
    releasedAt: normalizeDate(pickFirst(item, ['releaseDate', 'release_date', 'releasedAt'])),
    thumbnailUrl: toStringSafe(pickFirst(item, ['imageUrl', 'image_url', 'thumbnail'])),
    tags: normalizeTags(pickFirst(item, ['tagList', 'tag_list', 'tags'])),
    source: 'beta',
  };
}

function normalizeGammaItem(item) {
  const root = item && typeof item === 'object' ? item.data ?? item : null;
  const attrs = root && typeof root === 'object' ? root.attributes ?? root : null;
  const provider = attrs && attrs.provider && typeof attrs.provider === 'object' ? attrs.provider : null;
  const classification =
    attrs && attrs.classification && typeof attrs.classification === 'object' ? attrs.classification : null;
  const metrics = attrs && attrs.metrics && typeof attrs.metrics === 'object' ? attrs.metrics : null;
  const status = attrs && attrs.status && typeof attrs.status === 'object' ? attrs.status : null;
  const media = attrs && attrs.media && typeof attrs.media === 'object' ? attrs.media : null;

  const sourceId = toStringSafe(pickFirst(root, ['id', 'gameId', 'game_id']));
  if (!sourceId) return null;

  return {
    id: sourceId,
    name: toStringSafe(pickFirst(attrs, ['displayName', 'display_name', 'name', 'title'])) ?? sourceId,
    provider:
      toStringSafe(pickFirst(provider, ['label', 'name'])) ??
      toStringSafe(pickFirst(provider, ['code'])) ??
      'unknown',
    category: normalizeCategory(pickFirst(classification, ['category', 'type'])),
    rtp: normalizeRtp(pickFirst(metrics, ['rtp', 'returnToPlayer']), true),
    volatility: normalizeVolatility(pickFirst(classification, ['volatility', 'variance'])),
    enabled: toBooleanSafe(pickFirst(status, ['enabled', 'active'])),
    releasedAt: normalizeDate(pickFirst(status, ['released', 'releaseDate', 'releasedAt'])),
    thumbnailUrl: toStringSafe(pickFirst(media, ['thumbnailUrl', 'thumbnail_url', 'imageUrl'])),
    tags: normalizeTags(pickFirst(attrs, ['tags', 'tagList'])),
    source: 'gamma',
  };
}

const ADAPTERS = {
  alpha: normalizeAlphaItem,
  beta: normalizeBetaItem,
  gamma: normalizeGammaItem,
};

function detectProviderFromName(fileName) {
  const match = /^provider-([^\.]+)\.json$/i.exec(fileName);
  if (!match) return null;
  return match[1].toLowerCase();
}

function detectProviderFromShape(items) {
  const first = Array.isArray(items) && items.length > 0 ? items[0] : null;
  if (!first || typeof first !== 'object') return null;

  if (Object.prototype.hasOwnProperty.call(first, 'gameId') || Object.prototype.hasOwnProperty.call(first, 'game_id')) {
    return 'alpha';
  }

  if (
    Object.prototype.hasOwnProperty.call(first, 'gameCode') ||
    Object.prototype.hasOwnProperty.call(first, 'game_code') ||
    Object.prototype.hasOwnProperty.call(first, 'gameName') ||
    Object.prototype.hasOwnProperty.call(first, 'game_name')
  ) {
    return 'beta';
  }

  if (Object.prototype.hasOwnProperty.call(first, 'data')) {
    return 'gamma';
  }

  return null;
}

function normalizeDirectory(dirPath) {
  const files = fs
    .readdirSync(dirPath)
    .filter((fileName) => isProviderInputFile(fileName))
    .sort((a, b) => a.localeCompare(b));

  const normalized = [];
  const counts = {};
  let skipped = 0;

  for (const fileName of files) {
    const filePath = path.join(dirPath, fileName);
    const items = readJsonArray(filePath);

    const providerKey = detectProviderFromName(fileName) ?? detectProviderFromShape(items);
    const adapter = providerKey ? ADAPTERS[providerKey] : null;

    if (!adapter) {
      throw new Error(`No adapter configured for ${fileName}`);
    }

    counts[providerKey] = counts[providerKey] ?? 0;

    for (const item of items) {
      const record = adapter(item);
      if (!record || !record.id) {
        skipped += 1;
        continue;
      }

      normalized.push(record);
      counts[providerKey] += 1;
    }
  }

  const deduplicated = [];
  const seen = new Map();

  for (const record of normalized) {
    const current = seen.get(record.id) ?? 0;
    if (current === 0) {
      deduplicated.push(record);
      seen.set(record.id, 1);
      continue;
    }

    const next = current + 1;
    seen.set(record.id, next);
    deduplicated.push({
      ...record,
      id: `${record.id}#${next}`,
    });
  }

  deduplicated.sort((a, b) => {
    const providerCompare = String(a.source).localeCompare(String(b.source));
    if (providerCompare !== 0) return providerCompare;

    const nameCompare = String(a.name).localeCompare(String(b.name));
    if (nameCompare !== 0) return nameCompare;

    return String(a.id).localeCompare(String(b.id));
  });

  const outputPath = path.join(dirPath, 'provider-unified.json');
  fs.writeFileSync(outputPath, `${JSON.stringify(deduplicated, null, 2)}\n`, 'utf8');

  return {
    outputPath,
    inputCount: normalized.length,
    outputCount: deduplicated.length,
    skipped,
    counts,
    sourceFiles: files,
  };
}

function getTargetDirectories(rootPath) {
  const candidates = [
    path.join(rootPath, 'data'),
    path.join(rootPath, 'backend', 'data'),
  ];

  return candidates.filter((dirPath) => fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory());
}

function printSummary(summaryByDir) {
  for (const summary of summaryByDir) {
    console.log(`OK: ${summary.outputPath}`);
    console.log(`  source files: ${summary.sourceFiles.join(', ')}`);
    console.log(`  normalized: ${summary.inputCount}, written: ${summary.outputCount}, skipped: ${summary.skipped}`);
    console.log(`  providers: ${JSON.stringify(summary.counts)}`);
  }
}

function buildAll(rootPath) {
  const targetDirs = getTargetDirectories(rootPath);
  if (targetDirs.length === 0) {
    throw new Error(`No target directories found under ${rootPath}`);
  }

  const summaryByDir = targetDirs.map((dirPath) => normalizeDirectory(dirPath));
  printSummary(summaryByDir);
}

function startWatch(rootPath) {
  const targetDirs = getTargetDirectories(rootPath);
  if (targetDirs.length === 0) {
    throw new Error(`No target directories found under ${rootPath}`);
  }

  const debouncers = new Map();

  const rebuildDir = (dirPath) => {
    try {
      const summary = normalizeDirectory(dirPath);
      printSummary([summary]);
    } catch (error) {
      console.error(`ERROR while rebuilding ${dirPath}:`, error.message);
    }
  };

  for (const dirPath of targetDirs) {
    normalizeDirectory(dirPath);

    fs.watch(dirPath, (eventType, fileName) => {
      if (!fileName) return;
      if (!isProviderInputFile(fileName)) return;

      const key = `${dirPath}::${fileName}`;
      if (debouncers.has(key)) {
        clearTimeout(debouncers.get(key));
      }

      const timeout = setTimeout(() => {
        debouncers.delete(key);
        rebuildDir(dirPath);
      }, 250);

      debouncers.set(key, timeout);
    });

    console.log(`Watching: ${dirPath}`);
  }

  console.log('Watching provider files for changes...');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.watch) {
    startWatch(args.root);
    return;
  }

  buildAll(args.root);
}

main();
