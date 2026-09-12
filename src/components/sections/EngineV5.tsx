import type { Dictionary } from "@/dictionaries/types";
import { SectionHeading } from "@/components/ui";

export default function EngineV5({ dict }: { dict: Dictionary }) {
  const en = dict.engine;
  return (
    <section id="motor" className="bg-navy-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={en.eyebrow} title={en.title} subtitle={en.subtitle} light />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {en.features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          {en.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-bold text-brand sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-white/50 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
