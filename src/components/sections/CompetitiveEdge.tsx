import type { Dictionary } from "@/dictionaries/types";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import AnimatedStat from "@/components/AnimatedStat";

export default function CompetitiveEdge({ dict }: { dict: Dictionary }) {
  const e = dict.edge;
  return (
    <section className="border-y border-white/5 bg-white/[0.015] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={e.eyebrow} title={e.title} />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {e.items.map((item, i) => (
            <Reveal key={item.number} delay={i * 90}>
              <div className="bento-card glass flex h-full gap-5 rounded-2xl p-7">
                <span className="font-display text-sm font-semibold text-white/30">{item.number}</span>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-neon">
                      <AnimatedStat value={item.stat} />
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wide text-white/45">{item.statLabel}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
