import type { Dictionary } from "@/dictionaries/types";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import AnimatedStat from "@/components/AnimatedStat";

export default function EngineV5({ dict }: { dict: Dictionary }) {
  const en = dict.engine;
  return (
    <section id="motor" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={en.eyebrow} title={en.title} subtitle={en.subtitle} />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {en.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div className="bento-card glass h-full rounded-2xl p-7">
                <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="glass-strong mt-10 grid grid-cols-3 gap-4 rounded-2xl p-6 sm:p-8">
            {en.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl font-bold text-neon sm:text-3xl">
                  <AnimatedStat value={s.value} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
