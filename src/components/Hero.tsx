"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const TRUST_LOGOS = [
  "Grupo Inmobiliario Vértice",
  "Clínicas Aurea",
  "Bufete Marín & Asociados",
  "Grupo Dental Lumière",
  "Constructora Meridian",
  "Despachos Cortés Legal",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-fade-x opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]"
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-300 sm:text-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            MetaTok 3.0 Enterprise — Ecosistemas de Automatización Comercial con IA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Transforma tu tráfico en{" "}
            <span className="text-gradient-cyan">citas cerradas 24/7</span>{" "}
            sin quemar a tu equipo comercial
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
          >
            MetaTok.ai es el motor operativo absoluto para empresas modernas:
            captura, califica y agenda leads en piloto automático, eliminando
            la entrada manual de datos y cerrando la fuga de oportunidades
            perdidas en cada canal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="#precios" size="lg">
              Desplegar Ecosistema IA
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="#arquitectura" variant="secondary" size="lg">
              <PlayCircle className="h-5 w-5" />
              Ver Demostración Interactiva
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex w-full flex-col items-center gap-6"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Infraestructura inteligente elegida por líderes del sector
              inmobiliario, clínico y despacho profesional
            </p>
            <div className="relative w-full max-w-3xl overflow-hidden mask-fade-x">
              <div className="flex w-max animate-marquee items-center gap-12">
                {[...TRUST_LOGOS, ...TRUST_LOGOS].map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="whitespace-nowrap font-display text-lg font-medium text-slate-500/80"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
