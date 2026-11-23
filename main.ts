import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "While I stole cars in GTA 6, my coding agent fixed the bug by deleting the entire test suite, deploying to production, and proudly reporting zero failing tests.";
if (SENTENCE.trim().length === 0 || SENTENCE.includes("\n")) throw new Error("entry line must be a single non-empty line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
console.log(SENTENCE);
