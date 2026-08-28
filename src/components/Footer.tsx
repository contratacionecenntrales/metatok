"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const FOOTER_LINKS = {
  Soluciones: [
    { label: "El Capturador Web Inteligente", href: "#soluciones" },
    { label: "El Súper-Setter Automatizado", href: "#soluciones" },
    { label: "El Cerebro Operativo Absoluto", href: "#soluciones" },
    { label: "Calculadora de ROI", href: "#roi" },
  ],
  Plataforma: [
    { label: "Arquitectura de IA", href: "#arquitectura" },
    { label: "Casos de Éxito", href: "#casos-de-exito" },
    { label: "Precios", href: "#precios" },
    { label: "Iniciar Sesión", href: "https://app.metatok.ai" },
  ],
  Legal: [
    { label: "Aviso Legal", href: "/legal/aviso-legal" },
    { label: "Política de Privacidad", href: "/legal/privacidad" },
    { label: "Política de Cookies", href: "/legal/cookies" },
    { label: "Términos y Condiciones", href: "/legal/terminos" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <section id="demo" className="relative py-24 sm:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]"
        />
        <Container className="relative flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Deja de perder leads mientras duermes.{" "}
            <span className="text-gradient-cyan">Despliega tu ecosistema hoy.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg text-slate-400"
          >
            Agenda una sesión de alineación comercial con nuestro equipo y
            recibe un diagnóstico de automatización a medida en menos de 30
            minutos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="mailto:hola@metatok.ai?subject=Quiero%20agendar%20una%20demo" size="lg">
              Agendar Demo Ahora
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="tel:+34900123456" variant="secondary" size="lg">
              <Phone className="h-5 w-5" />
              Hablar con Ventas
            </Button>
          </motion.div>
        </Container>
      </section>

      <div className="border-t border-white/10 bg-obsidian-2/60">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Infraestructura de Inteligencia Artificial y Automatización
              Comercial para empresas que exigen velocidad, control y cero
              leads perdidos.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-slate-400">
              <a
                href="mailto:hola@metatok.ai"
                className="flex items-center gap-2.5 transition-colors hover:text-cyan-300"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                hola@metatok.ai
              </a>
              <a
                href="tel:+34900123456"
                className="flex items-center gap-2.5 transition-colors hover:text-cyan-300"
              >
                <Phone className="h-4 w-4 text-cyan-400" />
                +34 900 123 456
              </a>
              <span className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-cyan-400" />
                Madrid, España — Soporte en horario CET
              </span>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-semibold uppercase tracking-wide text-white">
                {title}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>

        <div className="border-t border-white/5">
          <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} MetaTok.ai — Todos los derechos
              reservados.
            </p>
            <p className="text-xs text-slate-500">
              Automatización Comercial con IA de nivel empresarial.
            </p>
          </Container>
        </div>
      </div>
    </footer>
  );
}
