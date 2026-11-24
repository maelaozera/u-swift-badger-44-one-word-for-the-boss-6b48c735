// One Word for the Boss — make.fun entry program.
//
// Writes exactly one word describing the boss to /output/entry.txt.
// The word is the whole entry: no phrase, no caption, no explanation.
//
// Deterministic: no network, no clock, no randomness, no file reads
// outside this repository. Runs on Node 22+ (stdlib only).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a single word, 10 characters, no spaces, no trailing newline.
const WORD = "Bottleneck";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
