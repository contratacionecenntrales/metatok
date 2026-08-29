"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Crown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BILLING_MULTIPLIER, PLANES, type BillingCycle } from "@/lib/data";
import { cn } from "@/lib/utils";

const CYCLES: { id: BillingCycle; label: string; badge?: string }[] = [
  { id: "monthly", label: "Mensual" },
  { id: "quarterly", label: "Trimestral", badge: "Ahorra ~16%" },
  { id: "yearly", label: "Anual", badge: "Ahorra ~29%" },
];

export function Planes() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="planes" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Planes y Precios"
          title={
            <>
              Invierte en resultados, <br className="hidden sm:block" />
              no en horas extra
            </>
          }
          description="Sin permanencia. Sin costes ocultos. Solo escala cuando lo necesites."
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-[#ece9f7] bg-white p-1.5">
            {CYCLES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCycle(c.id)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  cycle === c.id ? "bg-brand-500 text-white shadow-brand" : "text-ink-soft hover:text-brand-700",
                )}
              >
                {c.label}
                {c.badge ? (
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-bold",
                      cycle === c.id ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-700",
                    )}
                  >
                    {c.badge}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-start">
          {PLANES.map((plan, index) => {
            const price = Math.round(plan.basePrice * BILLING_MULTIPLIER[cycle]);
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1.5",
                  plan.featured
                    ? "border-2 border-brand-400 bg-white shadow-2xl shadow-brand-200 lg:scale-[1.04] lg:py-10"
                    : "card-surface",
                )}
              >
                {plan.featured ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-brand">
                      <Crown className="h-3.5 w-3.5" />
                      Más Popular
                    </span>
                  </div>
                ) : null}

                <h3 className="font-display text-xl font-extrabold text-ink">{plan.name}</h3>
                <p className="mt-2 min-h-[2.5rem] text-sm text-ink-soft">{plan.desc}</p>

                <div className="mt-5 flex items-end gap-1.5">
                  <span className="font-display text-4xl font-black text-ink">{price}€</span>
                  <span className="pb-1 text-sm font-medium text-ink-soft">/mes</span>
                </div>
                {cycle !== "monthly" ? (
                  <p className="mt-1 text-xs text-ink-soft/70">Facturado según ciclo elegido</p>
                ) : null}

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contacto"
                  size="lg"
                  variant={plan.featured ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-soft">
          Todos los planes incluyen acceso a la plataforma Metatok. Sin permanencia ni costes ocultos.
        </p>
        <p className="mt-2 text-center text-sm">
          <span className="text-ink-soft">¿Necesitas algo específico?</span>{" "}
          <a href="#contacto" className="font-semibold text-brand-600 hover:text-brand-800">
            Hablamos de un plan a medida →
          </a>
        </p>
      </Container>
    </section>
  );
}
