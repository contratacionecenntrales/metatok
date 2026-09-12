import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "@/components/ui";

export default function WhiteLabel({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const w = dict.whiteLabel;
  return (
    <section id="white-label" className="bg-muted/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={w.eyebrow} title={w.title} subtitle={w.subtitle} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {w.features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-white p-6">
              <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={`/${locale}#contacto`}
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-dark"
          >
            {w.ctaPrimary}
          </a>
          <a
            href={`/${locale}#contacto`}
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white"
          >
            {w.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
