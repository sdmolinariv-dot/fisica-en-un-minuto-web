import { cpSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");
const distDir = join(root, "dist");

if (!existsSync(outDir)) {
  throw new Error("Next static export did not produce an out directory.");
}

rmSync(distDir, { recursive: true, force: true });
cpSync(outDir, distDir, { recursive: true });
