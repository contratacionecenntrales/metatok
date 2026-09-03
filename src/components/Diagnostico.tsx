"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Frown, ShieldCheck, Smile, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CheckRow, CrossRow } from "@/components/ui/ListRow";
import { getDiagnosticoActual, getDiagnosticoMetatok } from "@/lib/data";

export function Diagnostico() {
  const t = useTranslations();
  const actualItems = getDiagnosticoActual(t);
  const metatokItems = getDiagnosticoMetatok(t);

  return (
    <section id="diagnostico" className="bg-surface-tint py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("diagnostico.eyebrow")}
          title={
            <>
              {t("diagnostico.titleLine1")} <br className="hidden sm:block" />
              {t("diagnostico.titleLine2")}
            </>
          }
          description={
            <>
              {t("diagnostico.descPrefix")}{" "}
              <span className="font-bold text-brand-700">{t("diagnostico.descHighlight")}</span>{" "}
              {t("diagnostico.descSuffix")}
            </>
          }
        />

        <div className="relative mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="card-surface rounded-3xl p-7"
          >
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-100 text-red-500">
                <Frown className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-red-500">
                  {t("diagnostico.actualLabel")}
                </p>
                <p className="text-sm font-bold text-ink">{t("diagnostico.actualSubLabel")}</p>
              </div>
            </div>
            <ul className="mt-5 flex flex-col gap-3.5">
              {actualItems.map((item) => (
                <CrossRow key={item}>{item}</CrossRow>
              ))}
            </ul>
          </motion.div>

          <div className="pointer-events-none absolute start-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block rtl:translate-x-1/2">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-sm font-black text-white shadow-brand">
              VS
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="card-surface rounded-3xl border-brand-100 p-7"
          >
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <Smile className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
                  {t("diagnostico.metatokLabel")}
                </p>
                <p className="text-sm font-bold text-ink">{t("diagnostico.metatokSubLabel")}</p>
              </div>
            </div>
            <ul className="mt-5 flex flex-col gap-3.5">
              {metatokItems.map((item) => (
                <CheckRow key={item}>{item}</CheckRow>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <Button href="#contacto" size="lg">
            <Zap className="h-4 w-4" />
            {t("diagnostico.ctaButton")}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs font-medium text-ink-soft">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              {t("diagnostico.trust.noCompromise")}
            </span>
            <span>{t("diagnostico.trust.noPermanence")}</span>
            <span>{t("diagnostico.trust.response")}</span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
