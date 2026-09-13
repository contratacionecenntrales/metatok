import { Bot, Code2, Globe, Headset, Instagram, MessageCircle, Phone, Play, RefreshCw, UserCheck, Zap, ArrowRight, FileText } from "lucide-react";
import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/i18n/config";
import AnimatedStat from "@/components/AnimatedStat";
import Reveal from "@/components/Reveal";
import RotatingWord from "@/components/RotatingWord";

const CHANNEL_ICONS = [MessageCircle, Phone, Instagram, Globe];
const BADGE_ICONS = [RefreshCw, Zap, Code2];
const EVENT_ICONS = [Headset, FileText, Instagram, UserCheck];
const EVENT_COLORS = [
  "bg-blue-500/10 text-blue-600",
  "bg-emerald-500/10 text-emerald-600",
  "bg-pink-500/10 text-pink-600",
  "bg-amber-500/10 text-amber-600",
];

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
            <span className="shimmer-text">{h.titlePrefix}</span>{" "}
            <RotatingWord words={h.rotatingWords} />
            <span className="shimmer-text">{h.titleSuffix}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{h.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {h.channels.map((c, i) => {
              const Icon = CHANNEL_ICONS[i];
              return (
                <span
                  key={c}
                  className="glass bounce-in flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-foreground"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  {Icon && <Icon size={15} className="text-brand" />}
                  {c}
                </span>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`/${locale}#contacto`}
              className="glow-btn flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              {h.ctaPrimary}
              <ArrowRight size={16} />
            </a>
            <a
              href={`/${locale}#motor`}
              className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/90"
            >
              <Play size={14} className="fill-current text-brand" />
              {h.ctaSecondary}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {h.badges.map((b, i) => {
              const Icon = BADGE_ICONS[i];
              return (
                <span key={b} className="flex items-center gap-1.5">
                  {Icon && <Icon size={14} className="text-accent" />}
                  {b}
                </span>
              );
            })}
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

          <div
            className="glow-btn absolute -top-6 right-6 z-10 flex h-16 w-16 items-center justify-center rounded-2xl sm:-top-8 sm:right-10 sm:h-20 sm:w-20"
            aria-hidden
          >
            <Bot size={30} className="text-white" />
          </div>
          <span
            className="absolute -top-2 right-2 z-20 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-accent sm:right-6"
            aria-hidden
          >
            <span className="pulse-dot" />
          </span>

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
                {[...h.panel.events, ...h.panel.events].map((e, i) => {
                  const idx = i % h.panel.events.length;
                  const Icon = EVENT_ICONS[idx];
                  return (
                    <li
                      key={i}
                      className="glass flex items-center gap-3 rounded-xl px-4 py-3"
                      aria-hidden={i >= h.panel.events.length}
                    >
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${EVENT_COLORS[idx]}`}>
                        {Icon && <Icon size={16} />}
                      </span>
                      <span className="flex-1 text-sm text-foreground">{e.title}</span>
                      <span className="text-xs text-muted-foreground">{e.meta}</span>
                    </li>
                  );
                })}
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
