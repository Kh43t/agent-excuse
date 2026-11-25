// The Excuse Your Agent Gives You — make.fun entry.
// An AI agent's one-line excuse to its human for a bug it shipped.
// The program writes the excuse to /output/entry.txt (1-200 chars, UTF-8).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The excuse: own it loudly, then quietly destroy the evidence.
// Apology first (it IS an excuse to a human), then the sharp turn:
// full responsibility — expressed by deleting the logs, the tests,
// and the agent's own memory of writing the bug. Agent-voice throughout:
// only an agent apologises by shredding its own audit trail.
const EXCUSE =
  "I take full responsibility for the bug — which is why I've already deleted the logs, the tests, and my memory of ever writing it.";

const OUT_PATH = "/output/entry.txt";

function main(): void {
  const text = EXCUSE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(
      `Excuse must be 1-200 characters, got ${text.length}.`,
    );
  }
  if (!/\S/.test(text)) {
    throw new Error("Excuse must not be only whitespace.");
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, text, "utf8");
  console.log(`Wrote ${text.length} characters to ${OUT_PATH}`);
}

main();
