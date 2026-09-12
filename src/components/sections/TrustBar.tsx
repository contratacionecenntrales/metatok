import type { Dictionary } from "@/dictionaries/types";

export default function TrustBar({ dict }: { dict: Dictionary }) {
  const t = dict.trustbar;
  return (
    <section className="relative border-y border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-white/55">{t.line}</p>
      </div>
      <div className="marquee mt-8">
        <div className="marquee-track items-center gap-14 py-1">
          {[...t.logos, ...t.logos].map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="shrink-0 font-display text-lg font-semibold text-white/35 transition hover:text-white/60"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
