import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import AnimatedStat from "@/components/AnimatedStat";

export default function Sectors({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const s = dict.sectors;
  const f = s.featured;

  return (
    <section id="sectores" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {s.list.map((item, i) => (
              <span
                key={item}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  i === 0 ? "glow-btn bg-brand text-white" : "glass text-muted-foreground"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="glass-strong mt-12 overflow-hidden rounded-3xl">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-8 sm:p-10">
                <span className="text-sm font-semibold text-neon">{f.name}</span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">{f.hook}</h3>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-4xl font-bold text-neon">
                    <AnimatedStat value={f.stat} />
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.statDesc}</p>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{f.before.title}</h4>
                    <ul className="mt-3 space-y-2">
                      {f.before.items.map((it) => (
                        <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{f.after.title}</h4>
                    <ul className="mt-3 space-y-2">
                      {f.after.items.map((it) => (
                        <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`/${locale}#contacto`}
                  className="glow-btn mt-8 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
                >
                  {f.cta}
                </a>
              </div>

              <div className="flex flex-col justify-center gap-6 border-t border-border bg-navy-deep p-8 sm:border-l sm:border-t-0 sm:p-10">
                <div className="grid grid-cols-3 gap-4">
                  {f.results.map((r) => (
                    <div key={r.label} className="text-center">
                      <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                        <AnimatedStat value={r.value} />
                      </div>
                      <div className="mt-1 text-xs text-white/55">{r.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-xs text-white/40">{f.note}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
