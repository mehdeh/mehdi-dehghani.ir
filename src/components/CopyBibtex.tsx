"use client";

import { useState } from "react";

export function CopyBibtex({
  value,
  copyLabel,
  copiedLabel,
}: {
  value: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="mt-3 text-sm text-[var(--signal)] transition-colors hover:text-[var(--text)]"
    >
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}
