"use client";

import { motion } from "framer-motion";
import { thinkingCards } from "@/lib/thinking";

const tilts = [-4, 3, -3, 4, -2];

export function ThinkingNotes() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {thinkingCards.map((card, i) => (
        <motion.article
          key={card.title}
          initial={{ opacity: 0, y: 16, rotate: tilts[i % tilts.length] }}
          whileInView={{ opacity: 1, y: 0, rotate: tilts[i % tilts.length] }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
          className={`thinking-card paper-tape relative min-h-[200px] rounded-md border border-line p-5 shadow-card ${card.color}`}
          style={{ transformOrigin: "center center" }}
        >
          <div className="pointer-events-none absolute right-3 top-3 font-hand text-xl text-coral/40">#{i + 1}</div>
          <h3 className="font-serif text-lg font-semibold text-navy">{card.title}</h3>
          <p className="mt-3 text-sm leading-6">{card.text}</p>
          <p className="thinking-quote text-sm leading-6 text-coral">
            &ldquo;{card.quote}&rdquo;
          </p>
        </motion.article>
      ))}
    </div>
  );
}
