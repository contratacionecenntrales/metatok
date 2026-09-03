"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CheckRow, CrossRow } from "@/components/ui/ListRow";
import { IconBadge } from "@/components/ui/IconBadge";
import { getSectores } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Sectores() {
  const t = useTranslations();
  const sectores = getSectores(t);
  const [activeId, setActiveId] = useState(sectores[0].id);
  const active = sectores.find((s) => s.id === activeId) ?? sectores[0];

  return (
    <section id="sectores" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("sectores.eyebrow")}
          title={
            <>
              {t("sectores.titleLine1")} <br className="hidden sm:block" />
              {t("sectores.titleLine2")}
            </>
          }
          description={t("sectores.description")}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {sectores.map((sector) => (
            <button
              key={sector.id}
              type="button"
              onClick={() => setActiveId(sector.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                activeId === sector.id
                  ? "border-brand-500 bg-brand-500 text-white shadow-brand"
                  : "border-[#e1e8f7] bg-white text-ink-soft hover:border-brand-300 hover:text-brand-700",
              )}
            >
              <sector.icon className="h-4 w-4" />
              {sector.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="card-surface mt-10 rounded-3xl p-6 sm:p-8"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <IconBadge icon={active.icon} color="violet" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
                    {active.name}
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold text-ink sm:text-2xl">
                    {active.headline}
                  </h3>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3 rounded-2xl bg-brand-50 px-4 py-3">
                <span className="font-display text-2xl font-black text-brand-600">
                  {active.badgeStat}
                </span>
                <span className="max-w-[9rem] text-xs font-medium leading-tight text-brand-700">
                  {active.badgeLabel}
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft sm:text-base">
              {active.description}
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#e1e8f7] p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-red-500">
                  {t("sectores.estadoActualLabel")}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {active.estadoActual.map((item) => (
                    <CrossRow key={item}>{item}</CrossRow>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
                  {t("sectores.conMetatokLabel")}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {active.conMetatok.map((item) => (
                    <CheckRow key={item}>{item}</CheckRow>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#e1e8f7] p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-ink-soft">
                  {t("sectores.resultadosLabel")}
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  {active.resultados.map((r) => (
                    <div key={r.label}>
                      <p className="font-display text-2xl font-extrabold text-ink">{r.value}</p>
                      <p className="text-xs text-ink-soft">{r.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[11px] text-ink-soft/70">{t("sectores.resultadosNote")}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-[#e1e8f7] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="me-1 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-soft">
                  <Sparkles className="h-3.5 w-3.5 text-brand-500" />
                  {t("sectores.opcionesLabel")}
                </span>
                {active.opciones.map((opcion) => (
                  <span
                    key={opcion}
                    className="rounded-full bg-surface-tint px-3 py-1 text-xs font-medium text-ink-soft"
                  >
                    {opcion}
                  </span>
                ))}
              </div>
              <Button href="#contacto" size="md" className="shrink-0">
                {t("sectores.ctaButton")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="mt-6 text-center text-xs text-ink-soft">{t("sectores.footNote")}</p>
      </Container>
    </section>
  );
}
