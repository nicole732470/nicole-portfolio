export type WereadActivityDay = { date: string; seconds: number };

const api = "https://i.weread.qq.com/api/agent/gateway";

function monthStart(date: Date) {
  return Math.floor(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1) / 1000);
}

function addMonths(date: Date, months: number) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + months, 1));
}

async function weread<T>(apiName: string, body: Record<string, unknown>, key: string): Promise<T> {
  const res = await fetch(api, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ api_name: apiName, skill_version: "1.0.3", ...body }),
    next: { revalidate: 60 * 60 * 6 },
  });

  if (!res.ok) throw new Error(`WeRead ${apiName} failed: ${res.status}`);
  return res.json() as Promise<T>;
}

export async function getWereadActivity() {
  const key = process.env.WEREAD_API_KEY;
  if (!key) return { live: false, days: [] as WereadActivityDay[], totalSeconds: 0, readDays: 0 };

  const now = new Date();
  const starts = Array.from({ length: 7 }, (_, i) => monthStart(addMonths(now, i - 6)));
  const months = await Promise.all(
    starts.map((baseTime) =>
      weread<{ readTimes?: Record<string, number>; totalReadTime?: number; readDays?: number }>(
        "/readdata/detail",
        { mode: "monthly", baseTime },
        key
      )
    )
  );

  const totals = new Map<string, number>();
  for (const month of months) {
    for (const [timestamp, seconds] of Object.entries(month.readTimes ?? {})) {
      const date = new Date(Number(timestamp) * 1000).toISOString().slice(0, 10);
      totals.set(date, (totals.get(date) ?? 0) + seconds);
    }
  }

  const days = [...totals.entries()]
    .map(([date, seconds]) => ({ date, seconds }))
    .sort((a, b) => a.date.localeCompare(b.date));

  return {
    live: true,
    days,
    totalSeconds: days.reduce((sum, day) => sum + day.seconds, 0),
    readDays: days.length,
  };
}
