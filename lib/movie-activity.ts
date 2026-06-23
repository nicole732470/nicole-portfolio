/** Movie watch activity for heatmap */
export type WatchDay = { date: string; count: number };

/** Hand-picked days — add Douban export rows here (YYYY-MM-DD, count) */
export const watchActivity: WatchDay[] = [
  { date: "2024-10-27", count: 2 },
  { date: "2024-11-10", count: 2 },
  { date: "2024-12-15", count: 3 },
  { date: "2025-01-18", count: 2 },
  { date: "2025-02-14", count: 2 },
  { date: "2025-05-03", count: 3 },
];

/** Plausible filler until Douban CSV is wired in — weekend-heavy pattern */
function syntheticActivity(weeks: number): WatchDay[] {
  const end = new Date("2026-06-23");
  const start = new Date(end);
  start.setDate(start.getDate() - weeks * 7);
  const days: WatchDay[] = [];
  const cursor = new Date(start);

  while (cursor <= end) {
    const dow = cursor.getDay();
    const weekend = dow === 0 || dow === 5 || dow === 6;
    const roll = (cursor.getDate() * 17 + cursor.getMonth() * 31 + dow * 7) % 100;
    if (weekend ? roll < 42 : roll < 14) {
      days.push({
        date: cursor.toISOString().slice(0, 10),
        count: roll % 9 === 0 ? 3 : roll % 4 === 0 ? 2 : 1,
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

export function activityMap(weeks = 28) {
  const merged = new Map<string, number>();
  for (const day of [...syntheticActivity(weeks), ...watchActivity]) {
    merged.set(day.date, Math.max(merged.get(day.date) ?? 0, day.count));
  }
  return merged;
}

export type HeatmapCell = { date: string; count: number };

export function buildHeatmapGrid(weeks = 28) {
  const counts = activityMap(weeks);
  const end = new Date("2026-06-23");
  const start = new Date(end);
  start.setDate(start.getDate() - weeks * 7 + 1);
  start.setDate(start.getDate() - start.getDay());

  const cols = weeks;
  const grid: HeatmapCell[][] = Array.from({ length: 7 }, () =>
    Array.from({ length: cols }, () => ({ date: "", count: 0 }))
  );
  const monthLabels: { col: number; label: string }[] = [];
  let lastMonth = -1;

  const cursor = new Date(start);
  for (let c = 0; c < cols; c += 1) {
    for (let r = 0; r < 7; r += 1) {
      if (cursor > end) break;
      const key = cursor.toISOString().slice(0, 10);
      grid[r][c] = { date: key, count: counts.get(key) ?? 0 };
      const m = cursor.getMonth();
      if (m !== lastMonth) {
        monthLabels.push({ col: c, label: cursor.toLocaleString("en", { month: "short" }) });
        lastMonth = m;
      }
      cursor.setDate(cursor.getDate() + 1);
    }
  }

  return { grid, cols, monthLabels };
}
