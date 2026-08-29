"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Button } from "@/components/ui/Button";
import { getProceso } from "@/lib/data";

export function Proceso() {
  const t = useTranslations();
  const steps = getProceso(t);

  return (
    <section id="proceso" className="bg-surface-tint py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("proceso.eyebrow")}
          title={
            <>
              {t("proceso.titlePrefix")}{" "}
              <span className="text-gradient-brand">{t("proceso.titleHighlight")}</span>{" "}
              {t("proceso.titleSuffix")}
            </>
          }
          description={t("proceso.description")}
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute inset-x-0 top-6 hidden h-px bg-[repeating-linear-gradient(90deg,#85acfb_0,#85acfb_6px,transparent_6px,transparent_12px)] lg:block"
          />
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-black text-white shadow-brand">
                  {step.n}
                </span>
                <div className="card-surface mt-4 flex flex-1 flex-col rounded-2xl p-6">
                  <IconBadge icon={step.icon} color="violet" size="sm" />
                  <h3 className="mt-4 text-base font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{step.desc}</p>
                  <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {step.tag}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <Button href="#contacto" size="lg">
            <Target className="h-4 w-4" />
            {t("proceso.ctaButton")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
