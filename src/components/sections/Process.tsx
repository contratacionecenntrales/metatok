import { Search, Compass, Receipt, Rocket, type LucideIcon } from "lucide-react";
import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

const STEP_ICONS: LucideIcon[] = [Search, Compass, Receipt, Rocket];

const HIGHLIGHT_PHRASE: Record<Locale, string> = {
  es: "alta precisión",
  en: "high-precision",
  fr: "haute précision",
  de: "hochpräziser",
  pt: "alta precisão",
  ar: "بدقة عالية",
};

function highlightTitle(title: string, locale: Locale) {
  const phrase = HIGHLIGHT_PHRASE[locale];
  const idx = title.indexOf(phrase);
  if (idx === -1) return title;
  return (
    <>
      {title.slice(0, idx)}
      <span className="text-gradient">{phrase}</span>
      {title.slice(idx + phrase.length)}
    </>
  );
}

export default function Process({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const p = dict.process;
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={p.eyebrow} title={highlightTitle(p.title, locale)} subtitle={p.subtitle} />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {p.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <Reveal key={step.number} delay={i * 100}>
                <div className="bento-card glass relative h-full rounded-2xl p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-neon text-white">
                      {Icon && <Icon size={18} />}
                    </span>
                    <span className="font-display text-3xl font-bold text-gradient">{step.number}</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neon">{step.tag}</p>
                </div>
              </Reveal>
            );
          })}
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
