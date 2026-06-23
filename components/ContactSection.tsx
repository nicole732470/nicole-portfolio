import { Coffee, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

type Profile = {
  email: string;
  github: string;
  linkedin: string;
  location: string;
};

export function ContactSection({ profile }: { profile: Profile }) {
  return (
    <>
      <section id="contact" className="border-t border-line/50 p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Let&apos;s talk</p>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.08] text-navy">
              Say hi — about{" "}
              <span className="italic text-coral">a project</span>, a{" "}
              <span className="italic text-moss">book</span>, or your{" "}
              <span className="italic text-lake">favorite film</span>.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted">
              I read everything. I reply slowly but warmly. Best way to reach me is still a real email.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4" aria-hidden />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="relative rounded-3xl border border-line bg-paper/80 p-8 shadow-card">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Currently</p>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 text-coral" aria-hidden />
                <div>
                  <p className="text-sm text-muted">Learning</p>
                  <p className="font-serif text-xl font-semibold text-navy">Agent workflows</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Coffee className="mt-0.5 h-5 w-5 text-moss" aria-hidden />
                <div>
                  <p className="text-sm text-muted">Open to</p>
                  <p className="font-serif text-xl font-semibold text-navy">Coffee chats & collabs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-lake" aria-hidden />
                <div>
                  <p className="text-sm text-muted">City</p>
                  <p className="font-serif text-xl font-semibold text-navy">{profile.location}</p>
                </div>
              </li>
            </ul>
            <span className="font-hand absolute -bottom-3 right-6 rotate-[-4deg] rounded-full bg-[#fff1d8] px-4 py-1 text-lg text-navy shadow-sm">
              open to chats ✿
            </span>
          </aside>
        </div>
      </section>

      <footer className="border-t border-line/50 px-6 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Nicole Li · Made slowly, by hand, in Chicago.</p>
          <p className="font-hand text-lg text-coral">thanks for reading ☕</p>
        </div>
      </footer>
    </>
  );
}
