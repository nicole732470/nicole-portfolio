"use client";

import { BriefcaseBusiness, Clapperboard, Code2, Compass } from "lucide-react";

const iconMap = {
  clapperboard: Clapperboard,
  compass: Compass,
  code: Code2,
  briefcase: BriefcaseBusiness,
} as const;

type IconKey = keyof typeof iconMap;

export function PlaygroundNumbers({
  items,
}: {
  items: readonly (readonly [string, string, IconKey])[];
}) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-3">
      {items.map(([value, label, iconKey]) => {
        const Icon = iconMap[iconKey];
        return (
          <div key={label} className="flex items-center gap-2.5">
            <Icon className="shrink-0 text-coral" size={20} aria-hidden />
            <div>
              <p className="font-serif text-xl font-semibold">{value}</p>
              <p className="text-[11px] text-muted">{label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
