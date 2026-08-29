"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { BENEFICIOS } from "@/lib/data";

export function Beneficios() {
  return (
    <section id="beneficios" className="bg-surface-tint py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Ventaja Competitiva" title="Por qué MetaTok cambia las reglas" />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[4.5rem] hidden h-px bg-[repeating-linear-gradient(90deg,#b7d1ff_0,#b7d1ff_6px,transparent_6px,transparent_12px)] lg:block"
          />
          <div className="grid gap-8 lg:grid-cols-4">
            {BENEFICIOS.map((item, index) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="relative flex flex-col items-start"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <IconBadge icon={item.icon} color="violet" />
                  <span className="font-display text-3xl font-black text-brand-100">{item.n}</span>
                </div>

                <p className="mt-5 font-display text-3xl font-extrabold text-ink">{item.stat}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                  {item.statLabel}
                </p>

                <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
