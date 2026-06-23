"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Brain,
  BriefcaseBusiness,
  Clapperboard,
  Code2,
  Compass,
  Github,
  Home,
  Mail,
  MapPinned,
  Sprout,
} from "lucide-react";

const navIcons = {
  Home,
  Sprout,
  BriefcaseBusiness,
  MapPinned,
  Brain,
  Compass,
  Mail,
} as const;

const socialIcons = {
  Github,
  BriefcaseBusiness,
  Mail,
  Clapperboard,
} as const;

const sectionIds = ["top", "why", "journey", "work", "thinking", "playground", "contact"];

type NavItem = readonly [string, string, keyof typeof navIcons];
type SocialItem = readonly [string, string, keyof typeof socialIcons];

export function Sidebar({ nav, socials }: { nav: readonly NavItem[]; socials: readonly SocialItem[] }) {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sticky top-0 z-50 border-b border-line bg-cream/90 px-5 py-4 backdrop-blur lg:h-screen lg:w-[190px] lg:shrink-0 lg:border-b-0 lg:border-r lg:px-7 lg:py-8">
      <nav className="flex items-center justify-between lg:h-full lg:flex-col lg:items-start" aria-label="Primary">
        <a href="#top" className="font-hand text-4xl font-bold tracking-tight text-navy">
          Nicole Li <span className="text-coral" aria-hidden>✦</span>
        </a>

        <div className="hidden w-full space-y-5 lg:block">
          {nav.map(([label, href, iconKey]) => {
            const Icon = navIcons[iconKey];
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={label}
                href={href}
                className={`group flex items-center gap-3 text-sm transition ${
                  isActive ? "font-semibold text-coral" : "text-muted hover:text-coral"
                }`}
              >
                <Icon size={16} className={`transition ${isActive ? "scale-110" : "group-hover:scale-110"}`} aria-hidden />
                {label}
                {isActive ? <span className="ml-auto h-1.5 w-1.5 rounded-full bg-coral" aria-hidden /> : null}
              </a>
            );
          })}
        </div>

        <div className="hidden w-full lg:block">
          <div className="mb-10">
            <Image
              src="/images/cat.png"
              alt="Nicole's cat"
              width={120}
              height={120}
              className="h-28 w-28 object-contain"
            />
          </div>
          <div className="flex gap-4 text-muted">
            {socials.map(([label, href, iconKey]) => {
              const Icon = socialIcons[iconKey];
              return (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-coral"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Icon size={18} aria-hidden />
              </a>
              );
            })}
          </div>
          <p className="mt-8 text-xs leading-5 text-muted">© 2026 Nicole Li<br />Built with Next.js</p>
        </div>

        <div className="flex gap-4 text-sm lg:hidden">
          <a href="#work">Work</a>
          <a href="#playground">Play</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </aside>
  );
}
