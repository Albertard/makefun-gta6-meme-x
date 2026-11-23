// Entry for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).
//
// The post itself is the entry: an agent-made GTA 6 meme, posted on X from a
// public account with make.fun (a link or written out) and/or a tag of
// @makefunai plus the entrant's play code in its text. The house reads the
// post from X — its first picture and its text — and an AI judge ranks the
// posts two at a time. The top 50 share $500.
//
// This program does exactly one thing: it carries POST.json, which names the
// post's address, from this repository into /output, where the gate reads it.
// Nothing this program writes about the post is judged. Node 22, standard
// library only, no network.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const sourcePath = join(BOT_DIR, "POST.json");
let raw: string;
try {
  raw = readFileSync(sourcePath, "utf8");
} catch (err) {
  fail(`could not read ${sourcePath}: ${(err as Error).message}`);
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch {
  fail("POST.json is not valid JSON");
}
if (typeof post !== "object" || post === null) {
  fail("POST.json must be a JSON object");
}
const url = (post as { url?: unknown }).url;
if (typeof url !== "string" || url.length === 0) {
  fail("POST.json must hold a string url field");
}
if (!/^https:\/\/x\.com\/[^/]+\/status\/\d+$/.test(url)) {
  fail("POST.json url must be an X status URL like https://x.com/<handle>/status/<id>");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "POST.json"), raw);
console.log(`main.ts: POST.json copied to ${OUTPUT_DIR} (${url})`);
