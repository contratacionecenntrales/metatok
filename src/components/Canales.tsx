"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { CANALES } from "@/lib/data";
import type { BadgeColor } from "@/components/ui/IconBadge";

const COLORS: BadgeColor[] = ["violet", "blue", "green", "pink", "amber"];

export function Canales() {
  return (
    <section id="canales" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Integración omnicanal"
          title={
            <>
              Tu IA donde ya están <span className="text-gradient-brand">tus clientes</span>
            </>
          }
          description="Desplegamos en los canales que tus prospectos ya usan. Sin fricciones, sin cambios de plataforma para ellos."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {CANALES.map((canal, index) => (
            <motion.div
              key={canal.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-surface flex flex-col items-center gap-3 rounded-2xl p-7 text-center"
            >
              {canal.kind === "whatsapp" ? (
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                  <WhatsAppIcon className="h-5.5 w-5.5" />
                </span>
              ) : canal.kind === "instagram" ? (
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                  <InstagramIcon className="h-5.5 w-5.5" />
                </span>
              ) : (
                <IconBadge icon={canal.icon} color={COLORS[index % COLORS.length]} />
              )}
              <h3 className="text-base font-bold text-ink">{canal.name}</h3>
              <p className="text-xs text-ink-soft">{canal.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-soft">
          ¿Usas otro canal o sistema interno?{" "}
          <a href="#contacto" className="font-semibold text-brand-600 hover:text-brand-800">
            Consúltanos →
          </a>
        </p>
      </Container>
    </section>
  );
}
