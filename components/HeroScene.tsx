export function HeroScene() {
  return (
    <div className="relative min-h-[480px] w-full overflow-hidden bg-gradient-to-br from-[#fff7ec] via-[#fbf0df] to-[#eef4f0]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(201,95,61,.12),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(139,184,199,.18),transparent_35%)]" />

      {/* Chicago window */}
      <div className="absolute right-0 top-0 h-full w-[34%] border-l border-line/60 bg-gradient-to-b from-[#d8e8f2] to-[#eef6fb]">
        <div className="absolute inset-x-6 top-8 bottom-16 rounded-t-3xl border-4 border-[#c5d5e0] bg-gradient-to-b from-[#b8d4e8]/80 to-[#e8f2f8]/40">
          <div className="absolute left-1/2 top-0 h-full w-px bg-[#c5d5e0]/80" />
          <div className="absolute left-4 top-12 h-16 w-24 rounded-full bg-[#f0d080]/70 blur-sm" />
          <div className="absolute bottom-8 left-6 right-6">
            <div className="h-28 rounded-sm bg-[#4a5568]/20" />
            <div className="mt-2 flex gap-2">
              <div className="h-2 flex-1 rounded bg-[#4a5568]/15" />
              <div className="h-2 w-8 rounded bg-[#4a5568]/15" />
            </div>
          </div>
          <p className="absolute bottom-3 left-0 right-0 text-center font-hand text-sm text-navy/50">Chicago</p>
        </div>
      </div>

      {/* Desk */}
      <div className="absolute bottom-0 left-[8%] right-[30%] h-28 rounded-t-[2rem] bg-gradient-to-b from-[#d4b896] to-[#c4a47a] shadow-[inset_0_4px_0_rgba(255,255,255,.25)]" />

      {/* Laptop */}
      <div className="absolute bottom-24 left-[22%] h-28 w-44 rounded-lg bg-[#3d4450] shadow-card">
        <div className="mx-2 mt-2 h-20 rounded bg-gradient-to-br from-[#8bb8c7]/30 to-[#dfe8d6]/40 p-2">
          <div className="h-2 w-16 rounded bg-coral/40" />
          <div className="mt-2 space-y-1">
            <div className="h-1 w-full rounded bg-navy/10" />
            <div className="h-1 w-4/5 rounded bg-navy/10" />
            <div className="h-1 w-3/5 rounded bg-navy/10" />
          </div>
        </div>
      </div>

      {/* Milk tea */}
      <div className="absolute bottom-28 left-[48%] h-24 w-14">
        <div className="absolute bottom-0 h-20 w-full rounded-b-2xl rounded-t-[2rem] border border-line bg-[#f8efe4] shadow-card" />
        <div className="absolute bottom-14 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-[#e8c4a0]/90" />
        <div className="absolute -top-1 left-1/2 h-8 w-1 -translate-x-1/2 rotate-12 rounded bg-[#8b5e3c]" />
        <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-hand text-sm text-tea">milk tea</p>
      </div>

      {/* Sticky notes */}
      <div className="absolute left-[10%] top-[18%] rotate-[-6deg] rounded-md border border-line bg-[#fff1a8] px-4 py-3 font-hand text-lg leading-6 text-navy shadow-card">
        clarity &gt; volume
      </div>
      <div className="absolute left-[52%] top-[12%] rotate-[4deg] rounded-md border border-line bg-[#ffd8c8] px-3 py-2 font-hand text-base text-navy shadow-card">
        ship the tool
      </div>

      {/* Books */}
      <div className="absolute bottom-28 left-[58%] flex gap-1">
        <div className="h-16 w-4 rounded-sm bg-coral/70" />
        <div className="h-14 w-4 rounded-sm bg-lake/70" />
        <div className="h-16 w-4 rounded-sm bg-moss/60" />
      </div>

      {/* Figure */}
      <div className="absolute bottom-16 left-[30%] h-56 w-36">
        <div className="absolute bottom-0 h-28 w-28 rounded-t-[3rem] bg-[#f4d3aa]" />
        <div className="absolute bottom-24 left-3 h-32 w-24 rounded-t-full bg-[#2b241f]" />
        <div className="absolute bottom-40 left-8 h-20 w-20 rounded-full bg-[#f1c1a5]" />
        <div className="absolute bottom-52 left-14 h-3 w-3 rounded-full bg-navy" />
        <div className="absolute bottom-52 right-10 h-3 w-3 rounded-full bg-navy" />
        <div className="absolute bottom-48 left-12 h-2 w-6 rounded-full border-b-2 border-[#c08070]" />
        <div className="absolute bottom-32 -left-4 h-20 w-8 rounded-full bg-[#f4d3aa]" />
        <div className="absolute bottom-32 -right-2 h-16 w-8 rounded-full bg-[#f4d3aa]" />
      </div>

      {/* Product sketch card */}
      <div className="absolute bottom-36 left-[6%] rotate-[-3deg] rounded-xl border border-line bg-paper/90 p-3 shadow-card">
        <p className="font-hand text-sm text-muted">product sketch</p>
        <div className="mt-2 h-12 w-20 rounded bg-gradient-to-br from-sage to-lake/40" />
      </div>

      <div className="absolute right-[36%] top-8 text-coral opacity-60">✦</div>
      <div className="absolute left-[18%] top-10 text-lake opacity-50">✧</div>
    </div>
  );
}
