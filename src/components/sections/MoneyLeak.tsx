import type { Dictionary } from "@/dictionaries/types";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import AnimatedStat from "@/components/AnimatedStat";

export default function MoneyLeak({ dict }: { dict: Dictionary }) {
  const m = dict.moneyLeak;
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={m.eyebrow} title={m.title} subtitle={m.subtitle} />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {m.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="bento-card glass h-full rounded-2xl p-8">
                <span className="font-display text-sm font-semibold text-neon">0{i + 1}</span>
                <div className="mt-3 font-display text-4xl font-bold text-foreground">
                  <AnimatedStat value={item.stat} />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
