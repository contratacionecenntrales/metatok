import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";
import Reveal from "@/components/Reveal";
import AnimatedStat from "@/components/AnimatedStat";

export default function AuditCta({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const a = dict.auditCta;
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(60% 60% at 50% 0%, rgba(34,211,238,0.18) 0%, rgba(3,7,18,0) 70%)",
        }}
      />
      <Reveal className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
          <span className="pulse-dot" />
          {a.eyebrow}
        </span>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
          {a.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">{a.subtitle}</p>

        <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
          {a.items.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-white/80">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="mt-0.5 shrink-0 text-accent">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <a
          href={`/${locale}#contacto`}
          className="glow-btn mt-8 inline-block rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          {a.cta}
        </a>
        <p className="mt-4 text-xs text-white/40">{a.note}</p>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
          {a.results.map((r) => (
            <div key={r.label}>
              <div className="font-display text-2xl font-bold text-white">
                <AnimatedStat value={r.value} />
              </div>
              <div className="mt-1 text-xs text-white/50">{r.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
