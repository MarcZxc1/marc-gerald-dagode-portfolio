"use client";

import { useState } from "react";
import capture from "@/public/evidence/qwykz-demo.json";

const views = [
  {
    key: "files",
    label: "File tree",
    description: "The files the Express preset would create.",
  },
  {
    key: "packages",
    label: "Dependencies",
    description:
      "Exact direct versions and the reason each package is included.",
  },
  {
    key: "manifest",
    label: "Manifest",
    description: "The generator and scaffold fields from the manifest preview.",
  },
] as const;

type View = (typeof views)[number]["key"];

export function QwykzWalkthrough() {
  const [view, setView] = useState<View>("files");
  const [copyMessage, setCopyMessage] = useState("");
  const selected = views.find((item) => item.key === view)!;

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(capture.command);
      setCopyMessage("Command copied.");
    } catch {
      setCopyMessage("Select the command text below to copy it.");
    }
  }

  return (
    <div className="cli-walkthrough">
      <div className="cli-walkthrough__meta">
        <span>
          Qwykz {capture.version} · captured {capture.capturedOn}
        </span>
        <a className="text-link" href="/evidence/qwykz-dry-run.txt" download>
          Download capture
        </a>
      </div>
      <div className="cli-walkthrough__command">
        <code>{capture.command}</code>
        <button className="button" onClick={copyCommand} type="button">
          Copy command
        </button>
      </div>
      <p aria-live="polite" className="cli-walkthrough__copy-status">
        {copyMessage}
      </p>
      <div
        aria-label="Choose a recorded output view"
        className="cli-walkthrough__views"
        role="group"
      >
        {views.map((item) => (
          <button
            aria-controls="qwykz-capture"
            aria-pressed={view === item.key}
            key={item.key}
            onClick={() => setView(item.key)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="cli-walkthrough__description">{selected.description}</p>
      <pre
        aria-label={`Recorded Qwykz output: ${selected.label}`}
        id="qwykz-capture"
        tabIndex={0}
      >
        <code>{capture[view]}</code>
      </pre>
      <p className="evidence-note">
        Recorded output from the local source at{" "}
        <a href={capture.sourceUrl} rel="noreferrer" target="_blank">
          commit {capture.sourceCommit.slice(0, 7)}
        </a>
        . The command lets you reproduce the preview locally; it does not create
        the target project or start a server.
      </p>
    </div>
  );
}
