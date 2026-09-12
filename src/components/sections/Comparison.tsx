import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "@/components/ui";

export default function Comparison({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const c = dict.comparison;
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {c.speedRows.map((row) => (
            <div key={row.label} className="rounded-2xl border border-border bg-muted/50 p-6 text-center">
              <p className="text-sm font-medium text-muted-foreground">{row.label}</p>
              <p className="mt-3 font-display text-xl font-bold text-brand">{row.metatok}</p>
              <p className="mt-1 text-sm text-muted-foreground/70 line-through decoration-1">{row.rest}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-muted/60">
                <th className="p-4 font-semibold text-foreground">{c.tableHeaders.feature}</th>
                <th className="p-4 font-semibold text-muted-foreground">{c.tableHeaders.traditional}</th>
                <th className="p-4 font-semibold text-brand">{c.tableHeaders.metatok}</th>
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.reassurance.map((r) => (
            <div key={r.title} className="rounded-xl border border-border bg-muted/40 p-5 text-center">
              <p className="text-sm font-semibold text-foreground">{r.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`/${locale}#contacto`}
            className="inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-dark"
          >
            {c.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
