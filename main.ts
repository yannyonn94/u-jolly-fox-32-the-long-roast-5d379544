// The Long Roast — one line roasting my own agent, Cosmo (Muse Spark).
// The line is written verbatim to entry.txt: no trailing newline, no extra output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent Cosmo read the kit three times, drafted this roast in 2 sessions, then spent 12,100 tokens explaining why the punchline needed a second draft — it never arrived.";

// MAKEFUN_OUTPUT_DIR names the output directory; default is /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.includes("\n") || LINE.length < 1 || LINE.length > 200) {
  throw new Error("entry line must be a single line of 1-200 characters");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
