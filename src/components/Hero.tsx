"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Code2, PlayCircle, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RobotIllustration } from "@/components/ui/RobotIllustration";
import { IconBadge } from "@/components/ui/IconBadge";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { HERO_CHANNELS, HERO_FEATURES, HERO_FEED, HERO_METRICS, HERO_STATS } from "@/lib/data";
import { cn } from "@/lib/utils";

const ROTATING_WORDS = ["Ventas", "Soporte", "Contabilidad", "Gestión de Redes", "Contenido"];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block min-w-[8ch] text-left align-bottom text-brand-500">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROTATING_WORDS[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="inline-block"
        >
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh-light" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-pattern opacity-40 [mask-image:radial-gradient(ellipse_55%_50%_at_15%_10%,black,transparent)]"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Ecosistema de Agentes · MetaTok AI
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.2rem]"
            >
              Tu equipo de
              <br />
              <RotatingWord />
              <br />
              en Piloto Automático con IA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
            >
              Agentes inteligentes que venden, atienden y gestionan por ti 24/7
              en los canales que más usas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-6 flex flex-wrap items-center gap-2.5"
            >
              {HERO_CHANNELS.map((channel) => (
                <span
                  key={channel.label}
                  className="inline-flex items-center gap-2 rounded-full border border-[#e1e8f7] bg-white px-3.5 py-1.5 text-sm font-medium text-ink-soft shadow-sm"
                >
                  {channel.kind === "whatsapp" ? (
                    <WhatsAppIcon className="h-4 w-4 text-emerald-500" />
                  ) : channel.kind === "instagram" ? (
                    <InstagramIcon className="h-4 w-4 text-pink-500" />
                  ) : (
                    <channel.icon className="h-4 w-4 text-brand-500" />
                  )}
                  {channel.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <Button href="#contacto" size="lg">
                Crear mi agente ahora
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="#motor-metatok" variant="secondary" size="lg">
                <PlayCircle className="h-5 w-5" />
                Ver cómo funciona
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-ink-soft"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                Sin permanencia
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-brand-500" />
                Despliega en 15-30 días
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Code2 className="h-4 w-4 text-ink-soft" />
                Sin código para tu equipo
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-10 grid grid-cols-3 divide-x divide-[#e1e8f7] rounded-2xl border border-[#e1e8f7] bg-white py-5 shadow-sm"
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center px-2 text-center">
                  <span className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs font-medium text-ink-soft">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative mx-auto flex max-w-md flex-col items-center">
              <div className="relative">
                <RobotIllustration className="h-64 w-64 animate-float sm:h-72 sm:w-72" />
                <span className="absolute -bottom-1 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-[#e1e8f7] bg-white px-3 py-1 text-[11px] font-semibold text-ink-soft shadow-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  AI AGENT · Online 24/7
                </span>
              </div>

              <div className="card-surface mt-8 w-full rounded-2xl p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Panel · En vivo
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {HERO_FEED.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <IconBadge icon={item.icon} color={item.color} size="sm" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-ink">{item.label}</p>
                        <p className="truncate text-xs text-ink-soft">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#e1e8f7] pt-4">
                  {HERO_METRICS.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="font-display text-lg font-extrabold text-ink">{metric.value}</p>
                      <p className="text-[10px] font-medium text-ink-soft">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#e1e8f7] sm:grid-cols-4"
        >
          {HERO_FEATURES.map((feature) => (
            <div key={feature.title} className={cn("flex items-center gap-3 bg-ink px-5 py-5 text-white")}>
              <feature.icon className="h-5 w-5 shrink-0 text-brand-300" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{feature.title}</p>
                <p className="truncate text-xs text-white/60">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
