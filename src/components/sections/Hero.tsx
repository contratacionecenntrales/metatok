import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";
import AnimatedStat from "@/components/AnimatedStat";
import Reveal from "@/components/Reveal";

export default function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const h = dict.hero;

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 80% 0%, rgba(47,102,224,0.10) 0%, rgba(14,116,144,0.08) 40%, rgba(247,248,251,0) 75%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <span className="pulse-dot" />
            {h.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-[3.25rem]">
            <span className="shimmer-text">{h.title}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{h.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {h.channels.map((c, i) => (
              <span
                key={c}
                className="glass bounce-in rounded-full px-3 py-1.5 text-sm text-foreground"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`/${locale}#contacto`}
              className="glow-btn rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              {h.ctaPrimary}
            </a>
            <a
              href={`/${locale}#motor`}
              className="glass rounded-full px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/90"
            >
              {h.ctaSecondary}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {h.badges.map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-accent">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {b}
              </span>
            ))}
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {h.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold text-foreground">
                  <AnimatedStat value={s.value} />
                </dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-neon/10 via-brand/10 to-transparent blur-2xl" aria-hidden />
          <div className="glass-strong relative overflow-hidden rounded-3xl p-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <span className="pulse-dot" />
                <span className="text-sm font-medium text-foreground">{h.panel.status}</span>
              </div>
              <span className="text-xs text-muted-foreground">{h.panel.liveLabel}</span>
            </div>

            <div className="feed-mask relative mt-4 h-56 overflow-hidden">
              <ul className="feed-track flex flex-col gap-3">
                {[...h.panel.events, ...h.panel.events].map((e, i) => (
                  <li
                    key={i}
                    className="glass flex items-center justify-between rounded-xl px-4 py-3"
                    aria-hidden={i >= h.panel.events.length}
                  >
                    <span className="text-sm text-foreground">{e.title}</span>
                    <span className="text-xs text-muted-foreground">{e.meta}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-5 grid grid-cols-3 gap-3 border-t border-border pt-5">
              {h.panel.miniStats.map((s) => (
                <div key={s.label} className="glass rounded-xl px-3 py-3 text-center">
                  <div className="font-display text-lg font-semibold text-foreground">
                    <AnimatedStat value={s.value} />
                  </div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          {h.trustPoints.map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <div className="bento-card glass h-full rounded-2xl p-4 sm:p-5">
                <p className="text-sm font-semibold text-foreground">{t.title}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
