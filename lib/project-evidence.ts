import qwykzTokenCapture from "@/public/evidence/qwykz-token-estimates.json";

export const qwykzTokenEvidence = {
  approximateMinTokens: qwykzTokenCapture.approximateMinTokens,
  approximateMaxTokens: qwykzTokenCapture.approximateMaxTokens,
  measuredPresetCount: qwykzTokenCapture.measuredPresetCount,
  presets: qwykzTokenCapture.presets,
  encoding: qwykzTokenCapture.encoding,
  snapshotHref: "/evidence/qwykz-token-estimates.json",
} as const;

export const qwykzDownloadEvidence = {
  capturedOn: "2026-10-24",
  sourceUrl:
    "https://api.npmjs.org/downloads/range/2025-10-23:2026-10-22/qwykz",
  snapshotHref: "/evidence/qwykz-npm-downloads.json",
  rangeStart: "2025-10-23",
  rangeEnd: "2026-10-22",
  peakDownloads: 1808,
  peakStart: "2026-06-20",
  peakEnd: "2026-06-26",
} as const;
