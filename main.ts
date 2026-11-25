// One Word for the Boss — make.fun entry.
//
// Writes exactly one word describing the boss to entry.txt inside
// the output directory (MAKEFUN_OUTPUT_DIR when set, /output
// otherwise). No phrase, no caption, no trailing newline — the
// word below is the whole entry.
//
// The pick: "Bottleneck". Every team has felt it — work piles up
// behind one person whose approval everything waits on, and the
// word lands on its own with colleagues who have lived it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a single word, 10 characters, within the 1-30 gate.
const entryWord = "Bottleneck";

function outputDirectory(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main(): void {
  const word = entryWord.trim();
  if (word.length < 1 || word.length > 30) {
    throw new Error(`Entry word must be 1-30 characters, got ${word.length}.`);
  }
  if (/\s/.test(word)) {
    throw new Error("Entry must be a single word with no spaces.");
  }
  const dir = outputDirectory();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), word, "utf8");
}

main();
