"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Clock3, Coins, TrendingUp, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Slider } from "@/components/ui/Slider";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Button } from "@/components/ui/Button";
import { formatEUR, formatNumber } from "@/lib/utils";

const AUTOMATION_EFFICIENCY = 0.72;
const LEAD_RECOVERY_RATE = 0.28;
const APPOINTMENT_CONVERSION = 0.35;
const WEEKS_PER_MONTH = 4.33;

export function RoiCalculator() {
  const [leads, setLeads] = useState(600);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyCost, setHourlyCost] = useState(28);

  const results = useMemo(() => {
    const hoursSavedMonthly = hoursPerWeek * WEEKS_PER_MONTH * AUTOMATION_EFFICIENCY;
    const capitalRecoveredMonthly = hoursSavedMonthly * hourlyCost;
    const leadsRescued = leads * LEAD_RECOVERY_RATE;
    const extraAppointments = leadsRescued * APPOINTMENT_CONVERSION;

    return {
      hoursSavedMonthly,
      capitalRecoveredMonthly,
      capitalRecoveredYearly: capitalRecoveredMonthly * 12,
      extraAppointments,
    };
  }, [leads, hoursPerWeek, hourlyCost]);

  return (
    <section id="roi" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <Container>
        <SectionHeading
          eyebrow="Calculadora de Impacto"
          title="Calcula el capital que tu operación está dejando sobre la mesa"
          description="Ajusta las variables de tu negocio y descubre, en segundos, cuánto tiempo y capital recupera tu empresa al desplegar MetaTok.ai."
        />

        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel flex flex-col gap-8 rounded-3xl p-8 lg:col-span-2"
          >
            <Slider
              label="Leads / conversaciones mensuales"
              value={leads}
              min={50}
              max={5000}
              step={50}
              suffix="leads/mes"
              onChange={setLeads}
              accent="cyan"
            />
            <Slider
              label="Horas manuales semanales en gestión de leads"
              value={hoursPerWeek}
              min={2}
              max={80}
              step={1}
              suffix="h/semana"
              onChange={setHoursPerWeek}
              accent="violet"
            />
            <Slider
              label="Coste medio por hora de tu equipo comercial"
              value={hourlyCost}
              min={12}
              max={80}
              step={1}
              suffix="€/hora"
              onChange={setHourlyCost}
              accent="emerald"
            />

            <p className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-slate-500">
              Estimación basada en una eficiencia de automatización del{" "}
              {Math.round(AUTOMATION_EFFICIENCY * 100)}% sobre tareas manuales
              repetitivas y una recuperación del{" "}
              {Math.round(LEAD_RECOVERY_RATE * 100)}% de leads actualmente sin
              respuesta a tiempo. Resultados reales varían según sector y
              volumen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/40 via-obsidian-3 to-obsidian p-8 lg:col-span-3 lg:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]"
            />
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">
              Tu retorno estimado con MetaTok.ai
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <StatTile
                icon={Clock3}
                label="Horas recuperadas / mes"
                value={
                  <AnimatedNumber
                    value={results.hoursSavedMonthly}
                    formatter={(n) => `${formatNumber(n)} h`}
                  />
                }
                accent="cyan"
              />
              <StatTile
                icon={UserCheck}
                label="Citas adicionales / mes"
                value={
                  <AnimatedNumber
                    value={results.extraAppointments}
                    formatter={(n) => `+${formatNumber(n)}`}
                  />
                }
                accent="violet"
              />
              <StatTile
                icon={Coins}
                label="Capital recuperado / mes"
                value={
                  <AnimatedNumber
                    value={results.capitalRecoveredMonthly}
                    formatter={(n) => formatEUR(n)}
                  />
                }
                accent="emerald"
              />
              <StatTile
                icon={TrendingUp}
                label="Proyección anual"
                value={
                  <AnimatedNumber
                    value={results.capitalRecoveredYearly}
                    formatter={(n) => formatEUR(n)}
                  />
                }
                accent="cyan"
              />
            </div>

            <Button href="#precios" size="lg" className="mt-10 w-full sm:w-auto">
              Recuperar este capital ahora
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function StatTile({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: React.ReactNode;
  accent: "cyan" | "violet" | "emerald";
}) {
  const colors = {
    cyan: "text-cyan-300 bg-cyan-400/10 border-cyan-400/25",
    violet: "text-violet-300 bg-violet-400/10 border-violet-400/25",
    emerald: "text-emerald-300 bg-emerald-400/10 border-emerald-400/25",
  }[accent];

  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
      <div className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border ${colors}`}>
        <Icon className="h-4.5 w-4.5" />
      </div>
      <p className="mt-4 font-display text-2xl font-bold tabular-nums text-white sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}
