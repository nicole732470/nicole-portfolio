"use client";

import Image from "next/image";
import { ExternalLink, Github, Plane, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  search: Search,
  plane: Plane,
  sparkles: Sparkles,
} as const;

export type Project = {
  title: string;
  number: string;
  eyebrow: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  iconKey: keyof typeof iconMap;
  image: string;
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = iconMap[project.iconKey];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="flex flex-col rounded-3xl border border-line bg-paper p-6 shadow-card"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-serif text-lg font-bold text-muted">{project.number}</span>
        <div className="rounded-2xl bg-cream p-3 text-coral">
          <Icon size={28} aria-hidden />
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-line bg-cream p-2 shadow-[inset_0_1px_0_rgba(255,255,255,.6)]">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#f0ebe3]">
          <Image
            src={project.image}
            alt={`${project.title} product screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1280px) 100vw, 33vw"
            unoptimized={project.image.endsWith(".svg")}
          />
        </div>
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-tea">{project.eyebrow}</p>
      <h3 className="mt-2 font-serif text-3xl font-bold">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <span key={tag} className="rounded-full border border-line bg-white/50 px-3 py-1 text-xs text-muted">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-5 text-sm font-semibold">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline decoration-transparent underline-offset-4 hover:decoration-coral">
          GitHub <Github size={15} aria-hidden />
        </a>
        {project.live ? (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline decoration-transparent underline-offset-4 hover:decoration-coral">
            Live Demo <ExternalLink size={15} aria-hidden />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
