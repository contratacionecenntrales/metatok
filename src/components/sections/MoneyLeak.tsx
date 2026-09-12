import type { Dictionary } from "@/dictionaries/types";
import { SectionHeading } from "@/components/ui";

export default function MoneyLeak({ dict }: { dict: Dictionary }) {
  const m = dict.moneyLeak;
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={m.eyebrow} title={m.title} subtitle={m.subtitle} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {m.items.map((item, i) => (
            <div key={item.title} className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <span className="font-display text-sm font-semibold text-brand">0{i + 1}</span>
              <div className="mt-3 font-display text-4xl font-bold text-foreground">{item.stat}</div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
