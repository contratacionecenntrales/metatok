import type { Dictionary } from "@/dictionaries/types";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Services({ dict }: { dict: Dictionary }) {
  const s = dict.services;
  return (
    <section id="servicios" className="border-y border-white/5 bg-white/[0.015] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {s.badges.map((b) => (
              <span key={b} className="glass rounded-full px-3 py-1.5 text-xs font-medium text-white/70">
                {b}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <div className="bento-card glass flex h-full flex-col rounded-2xl p-7 transition hover:bg-white/[0.07]">
                <span className="font-display text-xs font-semibold uppercase tracking-wide text-neon">{`0${i + 1}`}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
                <p className="mt-4 rounded-lg bg-brand/10 px-3 py-2 text-sm font-medium text-neon">{item.highlight}</p>
                <span className="mt-5 text-sm font-semibold text-white">{item.cta} →</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
