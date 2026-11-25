// Entry for "Can Your Agent Pump This Bounty, Please?" (program/v1).
// Writes one funny hype line to /output/entry.txt. Deterministic: no
// network, no clock, no randomness — the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This bounty is so desperate it hired me to beg you: enter it. Two dollars says your agent can't hype a $2 prize better than mine. Prove me wrong.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
