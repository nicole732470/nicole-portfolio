import { buildHeatmapGrid } from "@/lib/movie-activity";

const levels = ["bg-[#ebe2d4]", "bg-coral/25", "bg-coral/45", "bg-coral/70", "bg-coral"];

function level(count: number) {
  if (count <= 0) return levels[0];
  if (count === 1) return levels[1];
  if (count === 2) return levels[2];
  if (count === 3) return levels[3];
  return levels[4];
}

const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];

export function MovieHeatmap() {
  const { grid, cols, monthLabels } = buildHeatmapGrid(28);

  return (
    <div className="mt-5 w-full">
      <p className="mb-2 text-xs font-medium text-tea">Watching rhythm</p>
      <div className="w-full rounded-xl border border-line/80 bg-cream/50 p-3">
        <div className="mb-2 flex gap-[3px] pl-5 text-[9px] text-muted">
          {Array.from({ length: cols }).map((_, i) => (
            <span key={i} className="min-w-0 flex-1 truncate">
              {monthLabels.find((m) => m.col === i)?.label ?? ""}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-[3px]">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-[3px]">
              <span className="w-4 shrink-0 text-[9px] text-muted">
                {rowIndex % 2 === 1 ? dayLabels[rowIndex] : ""}
              </span>
              {row.map((cell) => (
                <div
                  key={`${rowIndex}-${cell.date}`}
                  title={
                    cell.date
                      ? cell.count
                        ? `${cell.date}: ${cell.count} film${cell.count > 1 ? "s" : ""}`
                        : cell.date
                      : undefined
                  }
                  className={`h-[11px] min-w-0 flex-1 rounded-[2px] ${cell.date ? level(cell.count) : "bg-transparent"}`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-end gap-1 text-[10px] text-muted">
          <span>Less</span>
          {levels.map((c) => (
            <span key={c} className={`h-2.5 w-2.5 rounded-[2px] ${c}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
