"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { COMPARATIVA_ROWS, TRUST_STRIP } from "@/lib/data";

export function Comparativa() {
  return (
    <section id="comparativa" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="La Decisión"
          title={
            <>
              MetaTok AI vs. <span className="text-gradient-brand">chatbots tradicionales</span>
            </>
          }
          description="Un árbol de decisiones aburrido frente a una IA generativa orientada a conversión. La diferencia entre perder un lead y cerrar una venta."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 overflow-x-auto rounded-3xl border border-[#e1e8f7] bg-white shadow-sm"
        >
          <div className="min-w-[640px]">
            <div className="grid grid-cols-3 border-b border-[#e1e8f7] bg-surface-tint text-center text-sm font-bold">
              <div className="p-4 text-left text-ink-soft sm:p-5">Característica</div>
              <div className="p-4 text-ink-soft sm:p-5">Bot Tradicional</div>
              <div className="bg-brand-500 p-4 text-white sm:p-5">
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4" />
                  MetaTok AI
                </span>
              </div>
            </div>

            {COMPARATIVA_ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 items-center text-sm ${i % 2 === 1 ? "bg-surface-tint/50" : ""}`}
              >
                <div className="flex items-center gap-2.5 p-4 font-semibold text-ink sm:p-5">
                  <IconBadge icon={row.icon} color="violet" size="sm" />
                  <span>{row.feature}</span>
                </div>
                <div className="flex items-start gap-2 p-4 text-ink-soft sm:p-5">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  <span>{row.bot}</span>
                </div>
                <div className="flex items-start gap-2 bg-brand-50/40 p-4 font-medium text-ink sm:p-5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{row.metatok}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {TRUST_STRIP.map((item) => (
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
