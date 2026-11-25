import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My fridge hums all night like it's rehearsing a symphony, but the only thing it ever produces is ice that tastes of freezer burn and disappointment.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${entry.length}`);
}
if (entry.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (entry.includes("\n")) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
