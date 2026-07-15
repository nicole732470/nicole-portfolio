import { readFile } from "fs/promises";
import path from "path";
import { track } from "@vercel/analytics/server";

export const runtime = "nodejs";

const RESUME_FILE = "Nicole-Li-Resume.pdf";
const RESUME_PATH = path.join(process.cwd(), "public", "resume", RESUME_FILE);

function firstHeader(value: string | null) {
  if (!value) return null;
  return value.split(",")[0]?.trim() || null;
}

export async function GET(request: Request) {
  const headers = request.headers;
  const country = headers.get("x-vercel-ip-country");
  const region = headers.get("x-vercel-ip-country-region");
  const city = headers.get("x-vercel-ip-city");
  const referer = headers.get("referer");
  const userAgent = headers.get("user-agent");
  const ip = firstHeader(headers.get("x-forwarded-for")) ?? headers.get("x-real-ip");

  // Structured line for Vercel Runtime Logs when you need to dig deeper.
  console.info(
    JSON.stringify({
      event: "resume_download",
      at: new Date().toISOString(),
      country,
      region,
      city,
      referer,
      ip,
      userAgent,
    }),
  );

  try {
    await track(
      "Resume Download",
      {
        country: country ?? "unknown",
        region: region ?? "unknown",
        city: city ?? "unknown",
        referer: referer ?? "direct",
      },
      { headers },
    );
  } catch (error) {
    console.error("Failed to track resume download", error);
  }

  try {
    const file = await readFile(RESUME_PATH);
    return new Response(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${RESUME_FILE}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return new Response("Resume not found", { status: 404 });
  }
}
