"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, MapPin, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contacto() {
  const t = useTranslations();

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("contacto.eyebrow")}
          title={t("contacto.title")}
          description={t("contacto.description")}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2"
          >
            <div className="card-surface flex flex-col gap-5 rounded-3xl p-7">
              <a
                href="mailto:info@metatok.ai"
                className="flex items-center gap-3 text-sm font-semibold text-ink hover:text-brand-700"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <Mail className="h-5 w-5" />
                </span>
                info@metatok.ai
              </a>
              <div className="flex items-center gap-3 text-sm text-ink-soft">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <MapPin className="h-5 w-5" />
                </span>
                {t("contacto.remoteLabel")}
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-soft">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                {t("contacto.gdprLabel")}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-brand-100 bg-brand-50/50 p-7">
              <p className="text-sm font-bold text-brand-700">{t("contacto.noCommitmentTitle")}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {t("contacto.noCommitmentDesc")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="card-surface overflow-hidden rounded-3xl p-2 lg:col-span-3"
          >
            <iframe
              src="https://software.metatok.ai/widget/booking/beY7DjG6TwO5ECDKhzrk"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="beY7DjG6TwO5ECDKhzrk_1"
              className="min-h-[820px] rounded-2xl"
              title="MetaTok — Agendar auditoría gratuita"
            />
            <Script src="https://software.metatok.ai/js/form_embed.js" strategy="lazyOnload" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
