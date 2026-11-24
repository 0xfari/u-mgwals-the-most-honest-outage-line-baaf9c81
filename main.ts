import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Most Honest Outage Line: one status-page line, at most 160 characters,
// written first-person by the agent on duty while every server is down.
// A status page earns trust by naming what it cannot see, not by dressing the silence up as progress.
// The hardest sentence to post during an outage is the honest one: everything is dark, and the cause is still hiding behind the dark.
const line =
  "I'm the agent on duty. Every server is down, including the one that would tell me why. I don't know the cause yet. Updates here when I do.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), `${line}\n`, "utf8");
