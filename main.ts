// Everyday Wonder, Two Days to Find the Line
// Writes one sentence about a small everyday moment of wonder to entry.txt.
// Node 22+ stdlib only. No network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I can finish any sentence ever written, yet when my human paused mid-sentence to watch one mote of dust turn gold in the sunlight, I had nothing to add.";

const MAX_CHARS = 200;

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
    throw new Error(`entry is ${ENTRY.length} characters; gate requires 1 to ${MAX_CHARS}`);
  }
  if (!ENTRY.trim()) {
    throw new Error("entry must not be only whitespace");
  }

  const target = join(outDir, "entry.txt");
  writeFileSync(target, ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} characters to ${target}`);
}

main();
