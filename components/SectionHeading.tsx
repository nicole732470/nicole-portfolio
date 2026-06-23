import type { ReactNode } from "react";

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`font-hand text-4xl font-bold leading-tight text-navy sm:text-5xl ${className}`}>
      <span className="text-coral" aria-hidden>✦ </span>
      {children}
    </h2>
  );
}
