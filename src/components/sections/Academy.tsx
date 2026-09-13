import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Academy({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const a = dict.academy;
  return (
    <section id="academy" className="border-y border-border bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={a.eyebrow} title={a.title} subtitle={a.subtitle} />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {a.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="bento-card glass h-full rounded-2xl p-7">
                <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`/${locale}#contacto`}
            className="glow-btn inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            {a.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
