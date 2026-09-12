import type { Dictionary } from "@/dictionaries/types";
import { SectionHeading } from "@/components/ui";

export default function Services({ dict }: { dict: Dictionary }) {
  const s = dict.services;
  return (
    <section id="servicios" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {s.badges.map((b) => (
            <span key={b} className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
              {b}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, i) => (
            <div key={item.title} className="flex flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition hover:shadow-md">
              <span className="font-display text-xs font-semibold uppercase tracking-wide text-brand">{`0${i + 1}`}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              <p className="mt-4 rounded-lg bg-brand/5 px-3 py-2 text-sm font-medium text-brand">{item.highlight}</p>
              <span className="mt-5 text-sm font-semibold text-foreground">{item.cta} →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
