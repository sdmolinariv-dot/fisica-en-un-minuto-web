import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");
const distDir = join(root, "dist");

if (!existsSync(outDir)) {
  throw new Error("Next static export did not produce an out directory.");
}

rmSync(distDir, { recursive: true, force: true });
cpSync(outDir, distDir, { recursive: true });

const distOpenAiDir = join(distDir, ".openai");
const serverDir = join(distDir, "server");

mkdirSync(distOpenAiDir, { recursive: true });
mkdirSync(serverDir, { recursive: true });
cpSync(join(root, ".openai", "hosting.json"), join(distOpenAiDir, "hosting.json"));

writeFileSync(
  join(serverDir, "index.js"),
  `export default {
  async fetch(request, env) {
    if (env && env.ASSETS && typeof env.ASSETS.fetch === "function") {
      return env.ASSETS.fetch(request);
    }

    return new Response("Static asset binding is not available.", {
      status: 503,
      headers: { "content-type": "text/plain; charset=utf-8" }
    });
  }
};
`,
  "utf8"
);
