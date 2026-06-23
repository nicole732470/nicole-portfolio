import { careerStages, placeStages, type JourneyStage } from "@/lib/journey";

function StageCard({ stage }: { stage: JourneyStage }) {
  return (
    <article className="rounded-2xl border border-line bg-paper/80 p-5 shadow-card">
      <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stage.accent} text-2xl`}>
        {stage.emoji}
      </div>
      <p className="text-sm font-medium text-tea">{stage.label}</p>
      <h3 className="mt-1 font-serif text-lg font-semibold text-navy">{stage.title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink">{stage.story}</p>
    </article>
  );
}

export function JourneyTimeline() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="font-hand text-2xl font-bold text-navy">Places</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {placeStages.map((stage) => (
            <StageCard key={stage.id} stage={stage} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-hand text-2xl font-bold text-navy">Career</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {careerStages.map((stage) => (
            <StageCard key={stage.id} stage={stage} />
          ))}
        </div>
      </div>
    </div>
  );
}
