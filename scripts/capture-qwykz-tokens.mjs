import { createHash } from "node:crypto";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

// Keep measurement tooling outside the portfolio's runtime dependencies.
const [sourceRoot, tokenizerRoot] = process.argv.slice(2);
if (!sourceRoot || !tokenizerRoot) {
  throw new Error("Usage: bun scripts/capture-qwykz-tokens.mjs <qwykz-source> <js-tiktoken-package>");
}

const sourceCommit = "785a761de8e87521c4e36c0c4699c1318beaeecb";
const revision = Bun.spawnSync(["git", "-C", sourceRoot, "rev-parse", "HEAD"]);
const changes = Bun.spawnSync(["git", "-C", sourceRoot, "status", "--porcelain"]);
if (revision.exitCode !== 0 || changes.exitCode !== 0 ||
    revision.stdout.toString().trim() !== sourceCommit || changes.stdout.length) {
  throw new Error("Use a clean checkout of the recorded Qwykz source commit.");
}

const tokenizerPackage = await Bun.file(resolve(tokenizerRoot, "package.json")).json();
if (tokenizerPackage.name !== "js-tiktoken" || tokenizerPackage.version !== "1.0.21") {
  throw new Error("This capture requires js-tiktoken@1.0.21.");
}

const { buildScaffoldPlan } = await import(pathToFileURL(resolve(sourceRoot, "src/generator.ts")).href);
const { resolvePresetOptions } = await import(pathToFileURL(resolve(sourceRoot, "src/presets.ts")).href);
const { getEncoding } = await import(pathToFileURL(resolve(tokenizerRoot, "dist/index.js")).href);
const encoding = getEncoding("cl100k_base");
const options = resolvePresetOptions("express", {
  projectName: "portfolio-api",
  dbPort: 54321,
  redisPort: 63790,
  strict: true,
  dryRun: true,
});
const plan = await buildScaffoldPlan(options);
const excludedPaths = [".env", ".qwykz-manifest.json", "AGENTS.md", "LEARN.md"];
const files = plan.files
  .filter((file) => !excludedPaths.includes(file.path))
  .map((file) => {
    // Replace the randomly generated Docker password with a fixed placeholder.
    const content = file.content.replace(/^(\s*POSTGRES_PASSWORD:\s*).+$/gm, "$1<placeholder>");
    return {
      path: file.path,
      characters: content.length,
      sha256: createHash("sha256").update(content).digest("hex"),
      tokens: encoding.encode(content).length,
    };
  })
  .sort((a, b) => a.path.localeCompare(b.path, "en"));
const totalTokens = files.reduce((sum, file) => sum + file.tokens, 0);
const snapshot = {
  capturedOn: new Date().toISOString().slice(0, 10),
  version: "1.4.7",
  sourceCommit,
  sourceUrl: `https://github.com/MarcZxc1/qwykz/tree/${sourceCommit}`,
  preset: "api-express",
  projectName: options.projectName,
  fixedPorts: { database: options.dbPort, redis: options.redisPort },
  tokenizer: "js-tiktoken@1.0.21",
  encoding: "cl100k_base",
  method: "Sum token counts of each included file's complete content, with the Docker password replaced by <placeholder>. No file paths, chat formatting, prompts, reasoning, retries, or tool overhead are counted.",
  interpretation: "Potential output tokens avoided if an AI would otherwise write the same scaffold files once. This is a scaffold-size proxy, not measured savings from an AI session. Other tokenizers and workflows will differ; an AI may still read the generated files.",
  excludedPaths,
  fileCount: files.length,
  totalTokens,
  approximateTokens: Math.round(totalTokens / 100) * 100,
  files,
};
await Bun.write("public/evidence/qwykz-token-estimate.json", JSON.stringify(snapshot, null, 2) + "\n");
console.log(`${files.length} files; ${totalTokens} tokens; approximately ${snapshot.approximateTokens}.`);
