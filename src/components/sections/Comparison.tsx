import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Comparison({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const c = dict.comparison;
  return (
    <section className="border-y border-border bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {c.speedRows.map((row, i) => (
            <Reveal key={row.label} delay={i * 90}>
              <div className="glass h-full rounded-2xl p-6 text-center">
                <p className="text-sm font-medium text-muted-foreground">{row.label}</p>
                <p className="mt-3 font-display text-xl font-bold text-neon">{row.metatok}</p>
                <p className="mt-1 text-sm text-muted-foreground/60 line-through decoration-1">{row.rest}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="glass mt-12 overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 font-semibold text-foreground">{c.tableHeaders.feature}</th>
                  <th className="p-4 font-semibold text-muted-foreground">{c.tableHeaders.traditional}</th>
                  <th className="p-4 font-semibold text-neon">{c.tableHeaders.metatok}</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((row) => (
                  <tr key={row.feature} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{row.feature}</td>
                    <td className="p-4 text-muted-foreground">{row.traditional}</td>
                    <td className="p-4 font-medium text-foreground">{row.metatok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="glass-strong mt-10 rounded-2xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {c.reassurance.map((r) => (
                <div key={r.title} className="text-center">
                  <p className="text-sm font-semibold text-foreground">{r.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-8 text-center">
              <a
                href={`/${locale}#contacto`}
                className="glow-btn inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                {c.cta}
              </a>
              <p className="mt-3 text-xs text-muted-foreground">★★★★★ 4.9/5 · +150 auditorías realizadas</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
