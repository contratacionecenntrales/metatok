"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { SERVICIOS, SERVICIOS_TOP_STATS, TRUST_STRIP } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Servicios() {
  return (
    <section id="servicios" className="bg-surface-tint py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title={
            <>
              Automatización IA que impulsa <span className="text-gradient-brand">resultados</span>
            </>
          }
          description="Soluciones diseñadas para escalar tu operación sin añadir headcount."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {SERVICIOS_TOP_STATS.map((stat) => (
            <span
              key={stat.label}
              className="inline-flex items-center gap-2 rounded-full border border-[#ece9f7] bg-white px-4 py-1.5 text-xs font-semibold text-ink-soft shadow-sm"
            >
              <stat.icon className="h-3.5 w-3.5 text-brand-500" />
              {stat.label}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map((servicio, index) => (
            <motion.div
              key={servicio.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="card-surface flex h-full flex-col rounded-3xl p-7"
            >
              <div className="flex items-center justify-between">
                <IconBadge icon={servicio.icon} color={servicio.color} />
                <span className="text-xs font-bold text-ink-soft/60">Servicio {servicio.n}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{servicio.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{servicio.desc}</p>
              <p className="mt-4 text-sm font-semibold text-brand-700">{servicio.result}</p>
              <div className="mt-5 flex items-center justify-between border-t border-[#ece9f7] pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Activación inmediata
                </span>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-800"
                >
                  Ver más
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-surface mt-14 flex flex-col items-center gap-6 rounded-3xl p-8 text-center lg:flex-row lg:justify-between lg:text-left"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-600">Stack completo</p>
            <h3 className="mt-2 text-xl font-extrabold text-ink sm:text-2xl">
              Diseña tu arquitectura comercial en una sola llamada
            </h3>
            <p className="mt-2 max-w-xl text-sm text-ink-soft">
              Te mostramos qué módulos necesitas primero, cuánto impacto esperar y cómo desplegarlo
              sin fricción.
            </p>
          </div>
          <Button href="#contacto" size="lg" className="shrink-0">
            Solicitar demo estratégica
          </Button>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#ece9f7] pt-8 sm:grid-cols-4">
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
