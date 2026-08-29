"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Crown, Trophy } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Button } from "@/components/ui/Button";
import {
  getLeaderComparison,
  getServicios,
  getServiciosTopStats,
  getTrustStrip,
} from "@/lib/data";
import { cn } from "@/lib/utils";

export function Servicios() {
  const t = useTranslations();
  const servicios = getServicios(t);
  const topStats = getServiciosTopStats(t);
  const trustStrip = getTrustStrip(t);
  const leaderComparison = getLeaderComparison(t);

  return (
    <section id="servicios" className="bg-surface-tint py-20 sm:py-28">
      <Container>
        <div className="mx-auto flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-800 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-brand"
          >
            <Trophy className="h-3.5 w-3.5 text-amber-300" />
            {t("servicios.badge")}
          </motion.span>

          <SectionHeading
            eyebrow={t("servicios.eyebrow")}
            title={
              <>
                {t("servicios.titlePrefix")}{" "}
                <span className="text-gradient-brand">{t("servicios.titleHighlight")}</span>
              </>
            }
            description={t("servicios.description")}
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {topStats.map((stat) => (
            <span
              key={stat.label}
              className="inline-flex items-center gap-2 rounded-full border border-[#e1e8f7] bg-white px-4 py-1.5 text-xs font-semibold text-ink-soft shadow-sm"
            >
              <stat.icon className="h-3.5 w-3.5 text-brand-500" />
              {stat.label}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className={cn(
                "relative flex h-full flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5",
                servicio.flagship
                  ? "border-2 border-brand-400 bg-white shadow-2xl shadow-brand-200 lg:scale-[1.03]"
                  : "card-surface",
              )}
            >
              {servicio.flagship ? (
                <div className="absolute -top-4 start-1/2 -translate-x-1/2 rtl:translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-brand">
                    <Crown className="h-3.5 w-3.5" />
                    {t("servicios.flagshipBadge")}
                  </span>
                </div>
              ) : null}

              <div className={cn("flex items-center justify-between", servicio.flagship && "mt-2")}>
                <IconBadge icon={servicio.icon} color={servicio.color} />
                <span className="text-xs font-bold text-ink-soft/60">
                  {t("servicios.serviceLabel")} {servicio.n}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{servicio.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{servicio.desc}</p>
              <p className="mt-4 rounded-xl bg-brand-50/70 px-3.5 py-2.5 text-sm font-semibold text-brand-700">
                {servicio.result}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-[#e1e8f7] pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {t("servicios.activationLabel")}
                </span>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-800"
                >
                  {t("servicios.moreLabel")}
                  <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 overflow-hidden rounded-3xl bg-ink text-white"
        >
          <div className="flex flex-col gap-1 px-7 pt-7 sm:px-9 sm:pt-9">
            <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-300">
              <Trophy className="h-3.5 w-3.5" />
              {t("servicios.leaderTitle")}
            </p>
            <p className="text-sm text-white/60">{t("servicios.leaderDesc")}</p>
          </div>

          <div className="mt-6 grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 rtl:sm:divide-x-reverse">
            {leaderComparison.map((row) => (
              <div key={row.metric} className="flex flex-col gap-3 px-7 py-6 sm:px-9">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                  {row.metric}
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 items-center rounded-full bg-brand-500 px-2.5 text-[11px] font-bold text-white">
                    {t("servicios.leaderUsLabel")}
                  </span>
                  <span className="font-display text-base font-bold text-white">{row.metatok}</span>
                </div>
                <div className="flex items-center gap-2 opacity-60">
                  <span className="inline-flex h-6 items-center rounded-full bg-white/10 px-2.5 text-[11px] font-bold text-white/70">
                    {t("servicios.leaderThemLabel")}
                  </span>
                  <span className="text-sm text-white/70 line-through decoration-white/30">
                    {row.market}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-surface mt-6 flex flex-col items-center gap-6 rounded-3xl p-8 text-center lg:flex-row lg:justify-between lg:text-start"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
              {t("servicios.stackLabel")}
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-ink sm:text-2xl">
              {t("servicios.stackTitle")}
            </h3>
            <p className="mt-2 max-w-xl text-sm text-ink-soft">{t("servicios.stackDesc")}</p>
          </div>
          <Button href="#contacto" size="lg" className="shrink-0">
            {t("servicios.stackCta")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#e1e8f7] pt-8 sm:grid-cols-4">
          {trustStrip.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <IconBadge icon={item.icon} color="violet" size="sm" />
              <p className="mt-2 text-sm font-bold text-ink">{item.title}</p>
              <p className="text-xs text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
