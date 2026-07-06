import { ReadingHeatmapClient } from "@/components/ReadingHeatmapClient";
import { getWereadActivity } from "@/lib/weread";

export async function ReadingHeatmap() {
  const activity = await getWereadActivity();
  return <ReadingHeatmapClient {...activity} />;
}
