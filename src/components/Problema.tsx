"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProblemaItems } from "@/lib/data";

export function Problema() {
  const t = useTranslations();
  const problemaItems = getProblemaItems(t);

  return (
    <section id="problema" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("problema.eyebrow")}
          title={
            <>
              {t("problema.titleLine1")} <br className="hidden sm:block" />
              {t("problema.titleLine2")}
            </>
          }
          description={t("problema.description")}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problemaItems.map((item, index) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="card-surface relative overflow-hidden rounded-3xl p-8"
            >
              <span className="absolute end-6 top-6 font-display text-6xl font-black text-brand-50">
                {item.n}
              </span>
              <p className="font-display text-4xl font-extrabold text-brand-600">{item.stat}</p>
              <h3 className="mt-3 text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
