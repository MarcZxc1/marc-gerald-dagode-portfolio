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
