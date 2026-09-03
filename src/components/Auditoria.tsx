"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getAuditoriaChecklist, getAuditoriaStats } from "@/lib/data";

export function Auditoria() {
  const t = useTranslations();
  const checklist = getAuditoriaChecklist(t);
  const stats = getAuditoriaStats(t);

  return (
    <section id="auditoria" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 overflow-hidden rounded-[2.5rem] bg-ink p-8 text-white sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-300">
              <Sparkles className="h-3.5 w-3.5" />
              {t("auditoria.badge")}
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              {t("auditoria.title")}
            </h2>
            <p className="mt-4 max-w-lg text-white/70">{t("auditoria.description")}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="#contacto" size="lg" className="mt-8">
              {t("auditoria.ctaButton")}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="mt-3 text-xs text-white/50">{t("auditoria.limitedSlots")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">
              {t("auditoria.statsLabel")}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="font-display text-3xl font-black text-brand-300">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-white/40">{t("auditoria.disclaimer")}</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
