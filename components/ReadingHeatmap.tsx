import { BookOpen } from "lucide-react";
import { getWereadActivity, type WereadActivityDay } from "@/lib/weread";

type Cell = { date: string; seconds: number };

const levels = ["bg-[#ebe2d4]", "bg-coral/25", "bg-coral/45", "bg-coral/70", "bg-coral"];
const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];

function level(seconds: number) {
  if (seconds <= 0) return levels[0];
  if (seconds < 10 * 60) return levels[1];
  if (seconds < 30 * 60) return levels[2];
  if (seconds < 60 * 60) return levels[3];
  return levels[4];
}

function minutes(seconds: number) {
  return Math.max(1, Math.round(seconds / 60));
}

function buildGrid(activity: WereadActivityDay[], weeks = 28) {
  const counts = new Map(activity.map((day) => [day.date, day.seconds]));
  const end = new Date();
  const start = new Date(end);
  start.setDate(start.getDate() - weeks * 7 + 1);
  start.setDate(start.getDate() - start.getDay());

  const grid: Cell[][] = Array.from({ length: 7 }, () =>
    Array.from({ length: weeks }, () => ({ date: "", seconds: 0 }))
  );
  const monthLabels: { col: number; label: string }[] = [];
  let lastMonth = -1;

  const cursor = new Date(start);
  for (let c = 0; c < weeks; c += 1) {
    for (let r = 0; r < 7; r += 1) {
      if (cursor > end) break;
      const date = cursor.toISOString().slice(0, 10);
      grid[r][c] = { date, seconds: counts.get(date) ?? 0 };
      if (cursor.getMonth() !== lastMonth) {
        monthLabels.push({ col: c, label: cursor.toLocaleString("en", { month: "short" }) });
        lastMonth = cursor.getMonth();
      }
      cursor.setDate(cursor.getDate() + 1);
    }
  }

  return { grid, monthLabels, cols: weeks };
}

export async function ReadingHeatmap() {
  const activity = await getWereadActivity();
  const { grid, cols, monthLabels } = buildGrid(activity.days, 28);
  const hours = Math.round(activity.totalSeconds / 3600);

  return (
    <div className="mt-5 w-full">
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-xs font-medium text-tea">
          <BookOpen className="h-4 w-4" />
          WeRead rhythm
        </p>
        <p className="text-[10px] text-muted">
          {activity.live ? `${activity.readDays} days · ${hours}h` : "Set WEREAD_API_KEY"}
        </p>
      </div>
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
                      ? cell.seconds
                        ? `${cell.date}: ${minutes(cell.seconds)} min on WeRead`
                        : cell.date
                      : undefined
                  }
                  className={`h-[11px] min-w-0 flex-1 rounded-[2px] ${cell.date ? level(cell.seconds) : "bg-transparent"}`}
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
