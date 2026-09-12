import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Pricing({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const p = dict.pricing;
  return (
    <section id="precios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-medium text-white/60">
            <span className="glass rounded-full px-3 py-1.5">{p.billing.monthly}</span>
            <span className="glass rounded-full px-3 py-1.5">
              {p.billing.quarterly} · {p.billing.saveQuarterly}
            </span>
            <span className="glass rounded-full px-3 py-1.5">
              {p.billing.yearly} · {p.billing.saveYearly}
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {p.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  plan.popular ? "glow-ring" : "glass"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white">
                    {p.popularLabel}
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{plan.desc}</p>
                <div className="mt-6 flex items-baseline gap-1 text-white">
                  <span className="font-display text-4xl font-bold">{plan.price}</span>
                  <span className="text-white/50">{plan.period}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className={`mt-0.5 shrink-0 ${plan.popular ? "text-accent" : "text-neon"}`}
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`/${locale}#contacto`}
                  className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                    plan.popular ? "bg-brand text-white hover:bg-brand-dark" : "glass text-white hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/55">{p.footnote}</p>
        <p className="mt-2 text-center text-sm font-medium text-neon">{p.custom}</p>
      </div>
    </section>
  );
}
