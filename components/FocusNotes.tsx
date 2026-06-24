"use client";

import { BriefcaseBusiness, Filter, Sparkles } from "lucide-react";

const iconMap = {
  briefcase: BriefcaseBusiness,
  sparkles: Sparkles,
  filter: Filter,
} as const;

const noteColors = ["bg-[#fff8dc]", "bg-[#eef6ee]", "bg-[#fdf0ea]"];
const rotations = ["-rotate-2", "rotate-1", "-rotate-1"];

export function FocusNotes({
  items,
}: {
  items: { title: string; text: string; iconKey: keyof typeof iconMap }[];
}) {
  return (
    <div className="flex h-full flex-col justify-center gap-4 py-2">
      <div className="paper-tape relative rotate-[-2deg] self-start rounded-sm border border-line/80 bg-[#fff1d8] px-4 py-2 shadow-sm">
        <h2 className="font-hand text-2xl font-bold text-navy">How I work</h2>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => {
          const Icon = iconMap[item.iconKey];
          return (
            <div
              key={item.title}
              className={`paper-tape relative rounded-sm border border-line/70 p-4 shadow-card ${noteColors[i % noteColors.length]} ${rotations[i % rotations.length]}`}
            >
              <div className="flex gap-3">
                <Icon className="mt-0.5 shrink-0 text-coral" size={20} aria-hidden />
                <div>
                  <h3 className="font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-2 text-sm leading-6 text-muted">Always learning. Always building.</p>
    </div>
  );
}
