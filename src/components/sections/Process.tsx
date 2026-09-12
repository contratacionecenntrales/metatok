import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Process({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const p = dict.process;
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {p.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="bento-card glass relative h-full rounded-2xl p-6">
                <span className="font-display text-3xl font-bold text-brand/30">{step.number}</span>
                <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.desc}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neon">{step.tag}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`/${locale}#contacto`}
            className="glow-btn inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            {p.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
