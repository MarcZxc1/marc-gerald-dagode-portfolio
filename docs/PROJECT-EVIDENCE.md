# Project evidence

Evidence reviewed and captures produced on October 24, 2026.

## Qwykz download snapshot

- Source: <https://api.npmjs.org/downloads/range/2025-10-23:2026-10-22/qwykz>
- Saved response: `public/evidence/qwykz-npm-downloads.json`
- Reporting range: October 23, 2025 through October 22, 2026, inclusive.
- Method: sum downloads in every consecutive seven-day window of the response.
- Largest observed window: **1,808 downloads, June 20–26, 2026**.
- Summary used by the site: `lib/project-evidence.ts`.

This snapshot is fixed. Downloads include repeat and automated installs; they
are not unique users or production deployments. The previous undated 1,763
figure and GitHub clone figures were removed because their original reporting
periods and source captures were unavailable.

To independently calculate the displayed peak with Bun:

```sh
bun -e 'const s = await Bun.file("public/evidence/qwykz-npm-downloads.json").json(); const windows = s.downloads.slice(6).map((day, i) => ({ start: s.downloads[i].day, end: day.day, downloads: s.downloads.slice(i, i + 7).reduce((sum, item) => sum + item.downloads, 0) })); console.log(windows.sort((a, b) => b.downloads - a.downloads)[0]);'
```

## Qwykz CLI capture

- Version: 1.4.7; confirmed against the public npm registry during capture.
- Source: <https://github.com/MarcZxc1/qwykz/tree/785a761de8e87521c4e36c0c4699c1318beaeecb>
- Command to reproduce the configuration:

```sh
bunx qwykz@1.4.7 --preset express --name portfolio-api --dry-run --strict --yes
```

The capture ran the local source at that commit using the equivalent flags.
Dry-run mode returned successfully without generating the target project.

`public/evidence/qwykz-demo.json` contains the file tree and package audit as
verbatim excerpts. Its manifest view includes only the generator and scaffold
fields extracted from the CLI's truncated manifest preview. The full captured
report before file diffs is in `public/evidence/qwykz-dry-run.txt`.

The walkthrough does not claim to be a live execution service. Generated secrets
and timestamps can differ between runs. Exact direct dependency declarations do
not imply a locked transitive dependency graph.

## Qwykz potential AI output-token savings

- Source: the same clean Qwykz 1.4.7 commit and Express preset as the walkthrough.
- Capture: `public/evidence/qwykz-token-estimate.json`.
- Script: `scripts/capture-qwykz-tokens.mjs`.
- Tokenizer: `js-tiktoken@1.0.21`, encoding `cl100k_base`.
- Result: **3,109 tokens across 17 files**, displayed as **approximately 3,100**.
- Method: tokenize each included file's full content and sum the counts. Include
  source, tests, package declarations, Prisma, TypeScript, and Docker configuration.
  Exclude `.env`, `.qwykz-manifest.json`, `AGENTS.md`, and `LEARN.md`.
- Reproducibility: fix the database port at 54321 and Redis port at 63790; replace
  the randomly generated Docker password with `<placeholder>` before tokenizing.
  The snapshot records per-file counts and SHA-256 hashes of normalized content.

This estimates potential output tokens avoided **if an AI would otherwise write
the same scaffold files once**. It is not a measured AI-session comparison or a
claim about total billable tokens, money, time, or every preset. Prompts, reasoning,
retries, file paths, chat formatting, and tool overhead are outside the count.
An AI may still read the generated files; different tokenizers produce different
counts. No savings percentage is claimed.

To reproduce, use a clean checkout of the recorded source commit. Install the
measurement dependency in a temporary directory, outside the portfolio:

```sh
capture_dir=$(mktemp -d /tmp/portfolio-token-estimate-XXXXXX)
bun add --cwd "$capture_dir" js-tiktoken@1.0.21
bun scripts/capture-qwykz-tokens.mjs /path/to/qwykz "$capture_dir/node_modules/js-tiktoken"
```

The generator builds its plan in a temporary workspace and cleans it up; the
script does not install scaffold dependencies or start a server. Only counts,
hashes, and methodology are saved, with no generated credentials or file contents.

## Supply Chain Portal stock-concurrency case

The implementation and its existing regression test were reviewed in the local
internal repository. The implementation was authored by Marc on October 20,
2026 at commit `b3e79f4794acad63adabdeabab423656b546185e`.

On October 24, 2026, the selected Node test was rerun with mocked Prisma
operations and a deliberately unreachable synthetic database URL. Result:
**one selected test passed; zero failed**. No live database was contacted.

The test submits two deductions of seven units against ten available units.
Assertions cover one success and one rejection, a final balance of three,
one ledger entry, same-product serialization in the tested process, and issued
row-lock queries.

Public summary: `public/evidence/stock-concurrency-verification.json`.
This is a synthetic explanation and verification summary; internal application
source and customer data have not been copied into this repository.

The test does not verify actual PostgreSQL contention, separate application
instances, deployment readiness, or production performance. Those require
separate integration evidence. The AI workflow section describes the review
criterion for this change; it does not claim a recorded AI conversation or
attribute an unverified suggestion to a model.
