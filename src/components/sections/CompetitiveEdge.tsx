import type { Dictionary } from "@/dictionaries/types";
import { SectionHeading } from "@/components/ui";

export default function CompetitiveEdge({ dict }: { dict: Dictionary }) {
  const e = dict.edge;
  return (
    <section className="bg-muted/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={e.eyebrow} title={e.title} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {e.items.map((item) => (
            <div key={item.number} className="flex gap-5 rounded-2xl border border-border bg-white p-7 shadow-sm">
              <span className="font-display text-sm font-semibold text-muted-foreground/60">{item.number}</span>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-brand">{item.stat}</span>
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{item.statLabel}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
