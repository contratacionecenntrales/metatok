"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Crown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ACCENT_STYLES, PACKS } from "@/lib/data";
import { cn, formatEUR } from "@/lib/utils";

export function SolutionsMatrix() {
  return (
    <section id="soluciones" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <Container>
        <SectionHeading
          eyebrow="Infraestructura Comercial"
          title="Tres niveles de automatización para escalar sin fricción"
          description="Cada Pack de MetaTok.ai es un módulo de infraestructura completo. Empieza donde tu operación lo necesite y escala sin reconstruir nada."
        />

        <div id="precios" className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3 lg:items-start">
          {PACKS.map((pack, index) => {
            const accent = ACCENT_STYLES[pack.accent];
            const isFeatured = Boolean(pack.highlight);
            const Icon = pack.icon;

            return (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "group relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300",
                  "glass-panel hover:-translate-y-2",
                  isFeatured
                    ? cn("border-2 lg:scale-[1.04] lg:py-10", accent.border, accent.glow)
                    : "hover:border-white/20",
                )}
              >
                {isFeatured ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-obsidian",
                        accent.gradient,
                      )}
                    >
                      <Crown className="h-3.5 w-3.5" />
                      {pack.highlight}
                    </span>
                  </div>
                ) : null}

                <div
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-2xl",
                    accent.bg,
                    accent.border,
                    "border",
                  )}
                >
                  <Icon className={cn("h-6 w-6", accent.text)} />
                </div>

                <p className={cn("mt-6 text-sm font-bold uppercase tracking-[0.15em]", accent.text)}>
                  {pack.tier}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-white">
                  {pack.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-400">{pack.tagline}</p>

                <div className="mt-6 flex items-end gap-1.5">
                  <span className="font-display text-4xl font-bold text-white">
                    {formatEUR(pack.price)}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{pack.priceNote}</p>

                <p className="mt-5 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-slate-400">
                  {pack.bestFor}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                      <Check className={cn("mt-0.5 h-4 w-4 shrink-0", accent.text)} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#demo"
                  size="lg"
                  variant={isFeatured ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  Solicitar {pack.tier}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">
          Precios de implementación de infraestructura. Los planes incluyen configuración completa,
          entrenamiento del modelo con tu conocimiento de negocio y puesta en producción.
          Cuota de mantenimiento y consumo de mensajería facturada por separado.
        </p>
      </Container>
    </section>
  );
}
