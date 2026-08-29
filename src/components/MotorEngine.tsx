"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { ENGINE_FEATURES, ENGINE_STATS } from "@/lib/data";
import { cn } from "@/lib/utils";

function FeatureCard({
  feature,
  align,
  index,
}: {
  feature: (typeof ENGINE_FEATURES)[number];
  align: "left" | "right";
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={cn(
        "card-surface flex h-full flex-col gap-3 rounded-3xl p-6",
        align === "left" ? "lg:text-right lg:items-end" : "lg:text-left lg:items-start",
      )}
    >
      <IconBadge icon={feature.icon} color={feature.color} />
      <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
      <p className="text-sm leading-relaxed text-ink-soft">{feature.desc}</p>
    </motion.div>
  );
}

export function MotorEngine() {
  const [a, b, c, d] = ENGINE_FEATURES;

  return (
    <section id="motor-metatok" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="MetaTok Engine V5"
          title={
            <>
              La Arquitectura detrás de la <span className="text-gradient-brand">Conversión Autónoma</span>
            </>
          }
          description="Descubre el motor cognitivo que no solo responde preguntas, sino que califica leads, supera objeciones y cierra ventas sin intervención humana."
        />

        <div className="mt-16 hidden lg:grid lg:grid-cols-[1fr_150px_1fr] lg:grid-rows-2 lg:gap-6">
          <FeatureCard feature={a} align="left" index={0} />
          <div className="row-span-2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex h-28 w-28 items-center justify-center rounded-[32%] bg-gradient-to-br from-brand-500 to-brand-700 shadow-brand"
            >
              <span className="absolute inset-0 -z-10 animate-pulse-slow rounded-[32%] bg-brand-400/40 blur-2xl" />
              <Cpu className="h-12 w-12 text-white" />
            </motion.div>
          </div>
          <FeatureCard feature={b} align="right" index={1} />
          <FeatureCard feature={c} align="left" index={2} />
          <FeatureCard feature={d} align="right" index={3} />
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 lg:hidden">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-[32%] bg-gradient-to-br from-brand-500 to-brand-700 shadow-brand">
            <Cpu className="h-9 w-9 text-white" />
          </div>
          <div className="grid w-full gap-5 sm:grid-cols-2">
            {ENGINE_FEATURES.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} align="left" index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-3 divide-x divide-[#ece9f7] rounded-2xl border border-[#ece9f7] bg-white py-6 shadow-sm"
        >
          {ENGINE_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-2 text-center">
              <span className="font-display text-2xl font-extrabold text-brand-600 sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
