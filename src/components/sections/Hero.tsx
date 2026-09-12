import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";

export default function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const h = dict.hero;

  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 80% 0%, rgba(47,102,224,0.35) 0%, rgba(11,29,72,0.2) 45%, rgba(4,7,17,0) 75%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
            {h.eyebrow}
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-white sm:text-5xl lg:text-[3.25rem]">
            {h.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{h.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {h.channels.map((c) => (
              <span key={c} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85">
                {c}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`/${locale}#contacto`}
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
            >
              {h.ctaPrimary}
            </a>
            <a
              href={`/${locale}#motor`}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {h.ctaSecondary}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
            {h.badges.map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-accent">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {b}
              </span>
            ))}
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {h.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold text-white">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-white/55">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand/30 via-transparent to-transparent blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <span className="text-sm font-medium text-white/85">{h.panel.status}</span>
              </div>
              <span className="text-xs text-white/40">{h.panel.liveLabel}</span>
            </div>

            <ul className="mt-4 space-y-3">
              {h.panel.events.map((e) => (
                <li key={e.title} className="flex items-center justify-between rounded-xl bg-white/[0.05] px-4 py-3">
                  <span className="text-sm text-white/85">{e.title}</span>
                  <span className="text-xs text-white/45">{e.meta}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
              {h.panel.miniStats.map((s) => (
                <div key={s.label} className="rounded-xl bg-white/[0.05] px-3 py-3 text-center">
                  <div className="font-display text-lg font-semibold text-white">{s.value}</div>
                  <div className="mt-0.5 text-[11px] text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {h.trustPoints.map((t) => (
            <div key={t.title}>
              <p className="text-sm font-semibold text-white">{t.title}</p>
              <p className="mt-1 text-sm text-white/55">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
