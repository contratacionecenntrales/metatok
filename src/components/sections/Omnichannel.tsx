import type { Dictionary } from "@/dictionaries/types";
import { SectionHeading } from "@/components/ui";

export default function Omnichannel({ dict }: { dict: Dictionary }) {
  const o = dict.omnichannel;
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={o.eyebrow} title={o.title} subtitle={o.subtitle} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {o.channels.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-muted/40 p-6 text-center">
              <h3 className="font-display text-base font-semibold text-foreground">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-brand">{o.otherChannel}</p>
      </div>
    </section>
  );
}
