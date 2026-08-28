"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ACCENT_STYLES, CASE_STUDIES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  return (
    <section id="casos-de-exito" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Casos de Éxito"
          title="Resultados operativos, no promesas de marketing"
          description="Empresas de sectores exigentes ya operan con MetaTok.ai como su motor comercial de fondo."
        />

        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {CASE_STUDIES.map((study, index) => {
            const accent = ACCENT_STYLES[study.accent];
            return (
              <motion.div
                key={study.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel flex h-full flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2"
              >
                <Quote className={cn("h-8 w-8", accent.text)} />
                <p className="mt-5 flex-1 text-base leading-relaxed text-slate-300">
                  “{study.quote}”
                </p>

                <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/10 pt-6">
                  <div>
                    <p className="font-display font-semibold text-white">{study.name}</p>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      {study.sector}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={cn("font-display text-2xl font-bold", accent.text)}>
                      {study.metric}
                    </p>
                    <p className="text-[11px] leading-tight text-slate-500">
                      {study.metricLabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
