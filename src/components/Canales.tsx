"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { getCanales } from "@/lib/data";
import type { BadgeColor } from "@/components/ui/IconBadge";

const COLORS: BadgeColor[] = ["violet", "blue", "green", "pink", "amber"];

export function Canales() {
  const t = useTranslations();
  const canales = getCanales(t);

  return (
    <section id="canales" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("canales.eyebrow")}
          title={
            <>
              {t("canales.titlePrefix")}{" "}
              <span className="text-gradient-brand">{t("canales.titleHighlight")}</span>
            </>
          }
          description={t("canales.description")}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {canales.map((canal, index) => (
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
          {t("canales.otherChannel")}{" "}
          <a href="#contacto" className="font-semibold text-brand-600 hover:text-brand-800">
            {t("canales.contactUs")}
          </a>
        </p>
      </Container>
    </section>
  );
}
