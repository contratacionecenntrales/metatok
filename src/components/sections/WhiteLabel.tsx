import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function WhiteLabel({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const w = dict.whiteLabel;
  return (
    <section id="white-label" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={w.eyebrow} title={w.title} subtitle={w.subtitle} />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {w.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div className="bento-card glass h-full rounded-2xl p-6">
                <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={`/${locale}#contacto`}
            className="glow-btn rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            {w.ctaPrimary}
          </a>
          <a
            href={`/${locale}#contacto`}
            className="glass rounded-full px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white"
          >
            {w.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
