import type { Dictionary } from "@/dictionaries/types";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Faq({ dict }: { dict: Dictionary }) {
  const f = dict.faq;
  return (
    <section id="faq" className="border-y border-border bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={f.eyebrow} title={f.title} subtitle={f.subtitle} />
        </Reveal>

        <Reveal delay={100}>
          <div className="glass mt-12 divide-y divide-border rounded-2xl">
            {f.items.map((item) => (
              <details key={item.q} className="group px-6 py-5 open:bg-brand/[0.03]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground marker:content-none">
                  {item.q}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="shrink-0 text-muted-foreground transition group-open:rotate-45 group-open:text-neon"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
