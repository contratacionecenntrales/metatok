import type { Dictionary } from "@/dictionaries/types";
import { SectionHeading } from "@/components/ui";

export default function Faq({ dict }: { dict: Dictionary }) {
  const f = dict.faq;
  return (
    <section id="faq" className="bg-muted/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={f.eyebrow} title={f.title} subtitle={f.subtitle} />

        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-white">
          {f.items.map((item) => (
            <details key={item.q} className="group px-6 py-5 open:bg-muted/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground marker:content-none">
                {item.q}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0 text-muted-foreground transition group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
