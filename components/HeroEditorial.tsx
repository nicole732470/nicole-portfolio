import Image from "next/image";

export function HeroEditorial() {
  return (
    <div className="hero-illustration relative flex h-full w-full items-center justify-center bg-cream">
      <div className="relative h-full w-full max-h-[500px] min-h-[340px] lg:max-h-[580px] lg:min-h-[420px]">
        <Image
          src="/images/hero-editorial.png"
          alt="Editorial illustration of Nicole by a large Chicago window with her cat"
          fill
          priority
          className="scale-[1.22] object-contain object-center"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
      </div>

      <div
        className="pointer-events-none absolute left-0 top-[2%] z-10 hidden rotate-[-5deg] rounded-sm border border-line/70 bg-[#fff8dc]/95 px-3 py-2 font-hand text-base leading-snug text-navy shadow-sm sm:block"
        aria-hidden
      >
        Clarity &gt; Information
        <br />
        &gt; Better Decisions
      </div>
    </div>
  );
}
