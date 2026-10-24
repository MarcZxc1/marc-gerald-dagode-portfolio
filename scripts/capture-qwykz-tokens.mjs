import { createHash } from "node:crypto";
import { basename, resolve } from "node:path";
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
const { resolvePresetOptions, listPresets } = await import(pathToFileURL(resolve(sourceRoot, "src/presets.ts")).href);
const { getEncoding } = await import(pathToFileURL(resolve(tokenizerRoot, "dist/index.js")).href);
const encoding = getEncoding("cl100k_base");
const { getProjectCapability } = await import(pathToFileURL(resolve(sourceRoot, "src/capability/matrix.ts")).href);
const presets = [];
for (const preset of listPresets()) {
  const options = resolvePresetOptions(preset.name, {
    projectName: "portfolio-api",
    dbPort: 54321,
    redisPort: 63790,
    strict: true,
    dryRun: true,
  });
  const capability = getProjectCapability(options);
  const identity = {
    preset: preset.name,
    category: preset.category,
    description: preset.description,
    capability,
  };
  if (options.framework === "laravel" || options.backendFramework === "laravel") {
    presets.push({
      ...identity,
      status: "not-measured",
      reason: "Laravel downloads an unpinned upstream starter and dependencies through Composer; it is outside this bundled-template measurement.",
    });
    continue;
  }
  if (capability !== "supported") {
    throw new Error(`Cannot measure ${preset.name}: capability is ${capability}`);
  }
  const plan = await buildScaffoldPlan(options);
  const excludedPaths = [];
  const files = plan.files
    .filter((file) => {
      const name = basename(file.path);
      const exclude = name === ".qwykz-manifest.json" ||
        name === ".env" || name.startsWith(".env.") || /\.md$/i.test(name);
      if (exclude) excludedPaths.push(file.path);
      return !exclude;
    })
    .map((file) => {
      // Replace randomly generated Docker passwords with a fixed placeholder.
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
  presets.push({
    ...identity,
    status: "measured",
    excludedPaths: excludedPaths.sort(),
    fileCount: files.length,
    totalTokens,
    approximateTokens: Math.round(totalTokens / 100) * 100,
    files,
  });
  console.log(`${preset.name}: ${files.length} files; ${totalTokens} tokens.`);
}
const measured = presets.filter((preset) => preset.status === "measured");
const snapshot = {
  capturedOn: new Date().toISOString().slice(0, 10),
  version: "1.4.7",
  sourceCommit,
  sourceUrl: `https://github.com/MarcZxc1/qwykz/tree/${sourceCommit}`,
  projectName: "portfolio-api",
  fixedPorts: { database: 54321, redis: 63790 },
  tokenizer: "js-tiktoken@1.0.21",
  encoding: "cl100k_base",
  method: "Sum token counts of each included file's complete content, with Docker passwords replaced by <placeholder>. Exclude Markdown documentation, Qwykz manifests, and environment files at every directory depth. No file paths, chat formatting, prompts, reasoning, retries, or tool overhead are counted.",
  interpretation: "Potential output tokens avoided per preset if an AI would otherwise write the same scaffold files once. This is a scaffold-size proxy, not measured savings from an AI session. Other tokenizers and workflows will differ; an AI may still read the generated files. These counts do not verify that the generated applications run.",
  measuredPresetCount: measured.length,
  approximateMinTokens: Math.min(...measured.map((preset) => preset.approximateTokens)),
  approximateMaxTokens: Math.max(...measured.map((preset) => preset.approximateTokens)),
  presets,
};
await Bun.write("public/evidence/qwykz-token-estimates.json", JSON.stringify(snapshot, null, 2) + "\n");
console.log(`${measured.length}/${presets.length} presets measured; approximately ${snapshot.approximateMinTokens}–${snapshot.approximateMaxTokens} tokens per scaffold.`);
