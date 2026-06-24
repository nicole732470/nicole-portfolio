export function ClarityScene() {
  return (
    <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#eef4f8] via-[#f8f2ea] to-[#eef6ee]">
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded bg-navy/10"
            style={{
              left: `${8 + (i % 6) * 14}%`,
              top: `${6 + Math.floor(i / 6) * 18}%`,
              width: `${40 + (i % 3) * 20}px`,
              height: "8px",
              transform: `rotate(${(i % 5) * 4 - 8}deg)`,
            }}
          />
        ))}
      </div>

      <svg viewBox="0 0 400 280" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="funnel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8bb8c7" stopOpacity=".35" />
            <stop offset="100%" stopColor="#c95f3d" stopOpacity=".25" />
          </linearGradient>
        </defs>
        <path d="M60 40 H340 L260 130 L220 130 L140 40 Z" fill="url(#funnel)" stroke="#c95f3d" strokeWidth="1.5" opacity=".5" />
        <path d="M220 130 L260 130 L200 220 L180 220 Z" fill="#dfe8d6" stroke="#748d6a" strokeWidth="1.5" opacity=".7" />
        <circle cx="200" cy="240" r="18" fill="#c95f3d" opacity=".85" />
        <text x="200" y="245" textAnchor="middle" fill="white" fontSize="11" fontFamily="Georgia, serif">✓</text>
      </svg>

      <div className="absolute bottom-6 left-6 right-6">
        <p className="mt-1 text-sm text-muted">Filtering noise into something a person can actually act on.</p>
      </div>

      <div className="absolute left-8 top-8 font-hand text-2xl text-coral">♡</div>
    </div>
  );
}
