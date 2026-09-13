import type { Dictionary } from "@/dictionaries/types";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Testimonials({ dict }: { dict: Dictionary }) {
  const t = dict.testimonials;
  return (
    <section id="casos" className="border-y border-border bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 90}>
              <figure className="glass flex h-full flex-col rounded-2xl p-7">
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">“{item.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-semibold text-neon">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
