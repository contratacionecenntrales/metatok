"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LogoMark } from "@/components/ui/Logo";
import { INTEGRATIONS } from "@/lib/data";

const RADIUS = 42;

const NODE_POSITIONS = INTEGRATIONS.map((_, i) => {
  const angle = (i / INTEGRATIONS.length) * 2 * Math.PI - Math.PI / 2;
  return {
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  };
});

export function Architecture() {
  return (
    <section id="arquitectura" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Arquitectura Técnica"
          title="Un ecosistema conectado, no otro silo de datos más"
          description="MetaTok.ai se integra de forma nativa con la infraestructura que ya usas, garantizando latencia cero en la respuesta a cada lead, sin importar el canal de origen."
        />

        <div className="relative mx-auto mt-16 hidden aspect-square max-w-2xl lg:mt-20 lg:block">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            aria-hidden
          >
            {NODE_POSITIONS.map((pos, i) => (
              <line
                key={i}
                x1={50}
                y1={50}
                x2={pos.x}
                y2={pos.y}
                stroke="url(#line-gradient)"
                strokeWidth="0.35"
                strokeDasharray="2 2"
              />
            ))}
            <defs>
              <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
            </defs>
            {NODE_POSITIONS.map((pos, i) => (
              <motion.circle
                key={`pulse-${i}`}
                r="0.9"
                fill="#67e8f9"
                initial={{ cx: 50, cy: 50, opacity: 0 }}
                animate={{ cx: [50, pos.x], cy: [50, pos.y], opacity: [0, 1, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3"
          >
            <div className="relative">
              <span className="absolute inset-0 -z-10 animate-pulse-slow rounded-[22%] bg-cyan-400/50 blur-xl" />
              <LogoMark className="h-20 w-20" id="arch" />
            </div>
            <div className="glass-panel flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-cyan-300">
              <Zap className="h-3 w-3" />
              Latencia &lt; 200ms
            </div>
          </motion.div>

          {INTEGRATIONS.map((integration, i) => {
            const pos = NODE_POSITIONS[i];
            const Icon = integration.icon;
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="glass-panel absolute flex w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-2xl p-4 text-center hover:border-cyan-400/30 hover:-translate-y-[calc(50%+4px)]"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10">
                  <Icon className="h-4.5 w-4.5 text-cyan-300" />
                </div>
                <p className="text-sm font-semibold text-white">{integration.name}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
          {INTEGRATIONS.map((integration) => {
            const Icon = integration.icon;
            return (
              <div
                key={integration.name}
                className="glass-panel flex items-start gap-4 rounded-2xl p-5"
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">{integration.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{integration.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
