"use client";

import { track } from "@vercel/analytics";

export function ResumeButton() {
  return (
    <a
      href="/api/resume"
      download="Nicole-Li-Resume.pdf"
      className="inline-flex items-center rounded-xl border border-navy/25 bg-paper px-5 py-2.5 text-sm font-semibold text-navy shadow-card transition hover:-translate-y-0.5 hover:border-coral/40 hover:text-coral"
      onClick={() => {
        void track("Resume Download Click", { source: "hero" });
      }}
    >
      Download resume
    </a>
  );
}
