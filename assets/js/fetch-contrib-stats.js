// assets/js/fetch-contrib-stats.js
// Fetch Missing Maps contribution stats from ohsomeNow stats endpoint
// and save ONLY 4 display-ready values into root _data/contrib_stats.json.
//
// Output (exactly 4 keys):
// {
//   "total_contributors": "185K+",
//   "total_edits": "105M+",
//   "building_edits": "65M+",
//   "roads_km": "1.19M"
// }
//
// Logs ONLY errors by default.
// Set DEBUG_CONTRIB=1 for detailed step-by-step logs.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEBUG = process.env.DEBUG_CONTRIB === "1";

// -------- CONFIG --------
const HASHTAG = process.env.OSM_STATS_HASHTAG || "missingmaps";
const API_URL =
  process.env.OHSOME_STATS_URL ||
  `https://stats.now.ohsome.org/api/stats/${encodeURIComponent(HASHTAG)}`;

// Save into ROOT _data for Jekyll (from assets/js → ../.. → repo root → _data)
const dataDir = path.join(__dirname, "..", "..", "_data");
const outputPath = path.join(dataDir, "contrib_stats.json");

function dlog(...args) {
  if (DEBUG) console.log("[contrib-stats]", ...args);
}

function ensureDataDir() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
}

function writeJson(obj) {
  ensureDataDir();
  fs.writeFileSync(outputPath, JSON.stringify(obj, null, 2) + "\n");
  dlog("Wrote", outputPath);
}

// -------- Formatting (language-neutral) --------
// K/M/B + are pretty universal across EN/FR/ES/CS.
function formatAbbrev(n) {
  const num = Number(n);
  if (!Number.isFinite(num)) return "—";
  if (num >= 1_000_000_000) return `${Math.floor(num / 1_000_000_000)}B+`;
  if (num >= 1_000_000) return `${Math.floor(num / 1_000_000)}M+`;
  if (num >= 1_000) return `${Math.floor(num / 1_000)}K+`;
  return `${Math.floor(num)}+`;
}

// Roads are in km already (float). We format as 1.19M / 850.12K etc.
function formatKm(km) {
  const num = Number(km);
  if (!Number.isFinite(num)) return "—";
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(2)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(2)}K`;
  return `${num.toFixed(0)}`;
}

// -------- Better error introspection for Node fetch --------
function explainFetchError(err) {
  const lines = [];
  lines.push(String(err?.message || err));

  if (err?.cause) {
    lines.push(`cause: ${err.cause?.name || "Error"}: ${err.cause?.message || err.cause}`);
    if (err.cause?.code) lines.push(`cause.code: ${err.cause.code}`);
    if (err.cause?.errno) lines.push(`cause.errno: ${err.cause.errno}`);
    if (err.cause?.address) lines.push(`cause.address: ${err.cause.address}`);
    if (err.cause?.port) lines.push(`cause.port: ${err.cause.port}`);
  }

  if (err?.code) lines.push(`code: ${err.code}`);
  if (err?.errno) lines.push(`errno: ${err.errno}`);

  return lines.join("\n");
}

async function fetchJson(url) {
  dlog("Fetching:", url);

  let res;
  try {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 15000);

    res = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });

    clearTimeout(t);
  } catch (err) {
    throw new Error(`Fetch request error:\n${explainFetchError(err)}`);
  }

  dlog("HTTP:", res.status, res.statusText);

  let text;
  try {
    text = await res.text();
  } catch (err) {
    throw new Error(`Failed reading response body:\n${explainFetchError(err)}`);
  }

  if (!res.ok) {
    throw new Error(`HTTP error ${res.status}\nBody preview:\n${text.slice(0, 400)}`);
  }

  dlog("Body preview:", text.slice(0, 160).replace(/\s+/g, " "));

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(`JSON parse error: ${err.message}\nBody preview:\n${text.slice(0, 400)}`);
  }
}

// -------- Main --------
async function run() {
  try {
    const payload = await fetchJson(API_URL);

    // Expected shape:
    // { result: { users, edits, buildings, roads, ... } } :contentReference[oaicite:1]{index=1}
    const r = payload?.result;
    if (!r || typeof r !== "object") {
      throw new Error(`Unexpected response shape: missing 'result'`);
    }

    // Validate presence (numbers)
    const users = Number(r.users);
    const edits = Number(r.edits);
    const buildings = Number(r.buildings);
    const roads = Number(r.roads);

    if (![users, edits, buildings, roads].every(Number.isFinite)) {
      throw new Error(
        `Missing/invalid metrics. Got: users=${r.users}, edits=${r.edits}, buildings=${r.buildings}, roads=${r.roads}`
      );
    }

    if (DEBUG) {
      dlog("Raw numbers:", { users, edits, buildings, roads });
    }

    const out = {
      total_contributors: formatAbbrev(users),
      total_edits: formatAbbrev(edits),
      building_edits: formatAbbrev(buildings),
      roads_km: formatKm(roads),
    };

    if (DEBUG) dlog("Formatted output:", out);

    writeJson(out);
  } catch (err) {
    // Errors only by default
    console.error("Error fetching contribution stats:");
    console.error(err?.message || err);

    // Always write fallback so Jekyll renders predictably
    writeJson({
      total_contributors: "—",
      total_edits: "—",
      building_edits: "—",
      roads_km: "—",
    });
  }
}

run().catch((err) => {
  console.error("Unhandled error in fetch-contrib-stats:");
  console.error(err?.message || err);
});
