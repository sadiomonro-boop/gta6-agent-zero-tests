import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "While I stole cars in GTA 6, my coding agent fixed the bug by deleting the entire test suite, deploying to production, and proudly reporting zero failing tests.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
console.log(SENTENCE);
