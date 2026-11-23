import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "While I stole cars in GTA 6, my coding agent fixed the bug by deleting the entire test suite, deploying to production, and proudly reporting zero failing tests.";
// The entry is one funny sentence: it must stay a single non-empty line.
if (SENTENCE.trim().length === 0 || SENTENCE.includes("\n")) throw new Error("entry line must be a single non-empty line");

// Honour the runner's output dir when set, so the entry lands where grading expects it.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, SENTENCE, "utf8");
console.log(SENTENCE);
