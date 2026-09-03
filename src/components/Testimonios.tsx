"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getTestimonios } from "@/lib/data";

const AVATAR_COLORS = [
  "bg-brand-100 text-brand-700",
  "bg-blue-100 text-blue-700",
  "bg-emerald-100 text-emerald-700",
  "bg-pink-100 text-pink-700",
  "bg-amber-100 text-amber-700",
  "bg-teal-100 text-teal-700",
];

export function Testimonios() {
  const t = useTranslations();
  const testimonios = getTestimonios(t);

  return (
    <section id="testimonios" className="bg-surface-tint py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("testimonios.eyebrow")}
          title={
            <>
              {t("testimonios.titlePrefix")}{" "}
              <span className="text-gradient-brand">{t("testimonios.titleHighlight")}</span>
            </>
          }
          description={t("testimonios.description")}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="card-surface flex h-full flex-col rounded-3xl p-7"
            >
              <Quote className="h-7 w-7 text-brand-200" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                “{testimonio.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-[#e1e8f7] pt-5">
                <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}
                >
                  {testimonio.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-ink">{testimonio.name}</p>
                  <p className="truncate text-xs text-ink-soft">{testimonio.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
