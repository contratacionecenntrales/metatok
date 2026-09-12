import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "@/components/ui";

export default function Process({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const p = dict.process;
  return (
    <section className="bg-muted/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {p.steps.map((step) => (
            <div key={step.number} className="relative rounded-2xl border border-border bg-white p-6 shadow-sm">
              <span className="font-display text-3xl font-bold text-brand/25">{step.number}</span>
              <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand">{step.tag}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`/${locale}#contacto`}
            className="inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-dark"
          >
            {p.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
