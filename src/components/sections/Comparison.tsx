import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Comparison({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const c = dict.comparison;
  return (
    <section className="border-y border-white/5 bg-white/[0.015] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {c.speedRows.map((row, i) => (
            <Reveal key={row.label} delay={i * 90}>
              <div className="glass h-full rounded-2xl p-6 text-center">
                <p className="text-sm font-medium text-white/60">{row.label}</p>
                <p className="mt-3 font-display text-xl font-bold text-neon">{row.metatok}</p>
                <p className="mt-1 text-sm text-white/35 line-through decoration-1">{row.rest}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="glass mt-12 overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 font-semibold text-white">{c.tableHeaders.feature}</th>
                  <th className="p-4 font-semibold text-white/50">{c.tableHeaders.traditional}</th>
                  <th className="p-4 font-semibold text-neon">{c.tableHeaders.metatok}</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((row) => (
                  <tr key={row.feature} className="border-t border-white/10">
                    <td className="p-4 font-medium text-white">{row.feature}</td>
                    <td className="p-4 text-white/50">{row.traditional}</td>
                    <td className="p-4 font-medium text-white/85">{row.metatok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.reassurance.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="glass h-full rounded-xl p-5 text-center">
                <p className="text-sm font-semibold text-white">{r.title}</p>
                <p className="mt-1 text-xs text-white/55">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`/${locale}#contacto`}
            className="glow-btn inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            {c.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
