"use client";

import dynamic from "next/dynamic";

export const MemoryMapLazy = dynamic(
  () => import("@/components/MemoryMap").then((mod) => mod.MemoryMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex aspect-[1100/580] w-full animate-pulse items-center justify-center rounded-xl border border-line/70 bg-paper text-sm text-muted">
        Loading map…
      </div>
    ),
  },
);
