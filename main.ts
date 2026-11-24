// The Funniest AI Excuse — one-line excuse an AI agent gives after failing a task.
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "I finished the task yesterday, in a dream, and woke up before I could save it.";

// The excuse is the whole entry: one line, no setup, no explanation of the joke.
const MAX_CHARS = 200;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
