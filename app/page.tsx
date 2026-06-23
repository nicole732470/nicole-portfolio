import { ContactSection } from "@/components/ContactSection";
import { FocusNotes } from "@/components/FocusNotes";
import { HeroEditorial } from "@/components/HeroEditorial";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { MemoryMapLazy } from "@/components/MemoryMapLazy";
import { MovieHeatmap } from "@/components/MovieHeatmap";
import { MovieShelf } from "@/components/MovieShelf";
import { PlaygroundNumbers } from "@/components/PlaygroundNumbers";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Sidebar } from "@/components/Sidebar";
import { ThinkingNotes } from "@/components/ThinkingNotes";
import { focus, nav, numbers, profile, projects, quote, socials, whyIBuild } from "./data";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-[1720px] flex-col bg-cream lg:flex-row">
      <Sidebar nav={nav} socials={socials} />

      <div className="flex-1 bg-cream">
        <header id="top" className="page-section grid gap-6 border-b border-line/50 bg-cream px-6 py-8 sm:px-10 lg:grid-cols-[0.82fr_1.28fr_0.78fr] lg:items-stretch lg:gap-5 lg:px-12 lg:py-10">
          <section className="flex flex-col justify-center">
            <p className="mb-2 flex items-center gap-2 font-hand text-2xl text-navy">
              <span aria-hidden>👋</span>
              <span>Hi, I&apos;m</span>
            </p>
            <h1 className="font-hand text-5xl font-bold leading-[0.95] text-navy sm:text-6xl xl:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 font-hand text-3xl font-bold text-coral sm:text-4xl">{profile.headline}</p>
            <p className="mt-3 max-w-sm text-sm leading-7 sm:text-[15px]">{profile.subheadline}</p>
            <div className="mt-3 grid gap-1 text-sm">
              <span>✦ {profile.school} · {profile.location}</span>
              <span>✦ {profile.previous}</span>
              <span>✦ {profile.status}</span>
            </div>
            <div className="mt-5">
              <a href="#work" className="inline-flex items-center rounded-xl bg-coral px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5">
                View my work
              </a>
            </div>
          </section>

          <div className="flex min-h-[300px] items-center lg:min-h-0">
            <HeroEditorial />
          </div>

          <aside className="flex items-stretch">
            <FocusNotes items={focus} />
          </aside>
        </header>

        <section id="why" className="page-section grid border-b border-line/50 lg:grid-cols-[1fr_.36fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <SectionHeading>Why I Build</SectionHeading>
            <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 sm:text-[15px]">
              {whyIBuild.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="paper-tape relative mt-6 inline-block rotate-[-1deg] rounded-sm border border-line bg-[#fff1d8] px-5 py-3 shadow-sm">
              <p className="font-hand text-xl text-navy">Information → Clarity → Decisions</p>
            </div>
          </div>
          <aside className="flex items-center justify-center border-t border-line p-8 lg:border-l lg:border-t-0">
            <div className="paper-tape relative rotate-[-3deg] rounded-sm border border-line bg-[#fff1d8] p-8 shadow-card">
              <p className="font-serif text-2xl leading-9 text-navy">{quote}</p>
              <p className="mt-4 font-hand text-3xl text-coral" aria-hidden>♡</p>
            </div>
          </aside>
        </section>

        <section id="journey" className="page-section border-b border-line/50 p-6 sm:p-8 lg:p-10">
          <SectionHeading>Journey</SectionHeading>
          <p className="mt-2 max-w-2xl text-sm text-muted">Places first, then the work chapters that followed.</p>
          <div className="mt-6">
            <JourneyTimeline />
          </div>
        </section>

        <section id="work" className="page-section border-b border-line/50 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading>Selected Work</SectionHeading>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-coral underline underline-offset-4">
              More on GitHub →
            </a>
          </div>
          <div className="mt-7 grid gap-5 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="thinking" className="page-section border-b border-line/50 p-6 sm:p-8 lg:p-10">
          <SectionHeading>Thinking About</SectionHeading>
          <p className="mt-2 text-sm text-muted">Sticky notes — hover to straighten them out.</p>
          <div className="mt-7">
            <ThinkingNotes />
          </div>
        </section>

        <section id="playground" className="page-section border-b border-line/50 p-6 sm:p-8 lg:p-10">
          <SectionHeading>Playground</SectionHeading>

          <p className="mt-2 max-w-2xl text-sm text-muted">
            Travel footprints on the map — every pin cycles with its photo.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
            <article className="min-w-0">
              <h3 className="font-hand text-2xl font-bold text-navy">Places on the map</h3>
              <div className="mt-3">
                <MemoryMapLazy />
              </div>
            </article>
            <article className="min-w-0">
              <h3 className="font-hand text-2xl font-bold text-navy">Recently watched</h3>
              <div className="mt-3 rounded-xl border border-line/70 bg-paper/50 p-4 sm:p-5">
                <MovieShelf />
              </div>
              <MovieHeatmap />
              <div className="mt-5 border-t border-line/60 pt-5">
                <h3 className="font-hand text-xl font-bold text-navy">By the Numbers</h3>
                <PlaygroundNumbers items={numbers} />
              </div>
            </article>
          </div>
        </section>

        <ContactSection profile={profile} />
      </div>
    </main>
  );
}
