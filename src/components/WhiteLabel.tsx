"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";
import { CheckRow } from "@/components/ui/ListRow";
import { getWhiteLabelBullets, getWhiteLabelChat, getWhiteLabelFeatures } from "@/lib/data";
import { cn } from "@/lib/utils";

export function WhiteLabel() {
  const t = useTranslations();
  const features = getWhiteLabelFeatures(t);
  const bullets = getWhiteLabelBullets(t);
  const chat = getWhiteLabelChat(t);

  return (
    <section id="producto-white-label" className="bg-surface-tint py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("whiteLabel.eyebrow")}
          title={t("whiteLabel.title")}
          description={t("whiteLabel.description")}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-surface flex flex-col items-center gap-3 rounded-2xl p-6 text-center"
            >
              <IconBadge icon={feature.icon} color="violet" />
              <h3 className="text-sm font-bold text-ink">{feature.title}</h3>
              <p className="text-xs leading-relaxed text-ink-soft">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
              {t("whiteLabel.sectionLabel")}
            </p>
            <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
              {t("whiteLabel.heading2Prefix")}{" "}
              <span className="text-gradient-brand">{t("whiteLabel.heading2Highlight")}</span>{" "}
              {t("whiteLabel.heading2Suffix")}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">{t("whiteLabel.paragraph")}</p>

            <ul className="mt-6 flex flex-col gap-3">
              {bullets.map((bullet) => (
                <CheckRow key={bullet}>{bullet}</CheckRow>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contacto" size="lg">
                {t("whiteLabel.ctaPrimary")}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#planes" variant="secondary" size="lg">
                <ShieldCheck className="h-4 w-4" />
                {t("whiteLabel.ctaSecondary")}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[280px] rounded-[2.5rem] border-8 border-ink bg-ink p-2 shadow-2xl">
              <div className="flex items-center justify-between rounded-t-[1.75rem] bg-white px-4 pb-2 pt-3">
                <div className="flex items-center gap-2">
                  <LogoMark className="h-7 w-7" id="wl" />
                  <div>
                    <p className="text-xs font-bold text-ink">{t("whiteLabel.phoneAppName")}</p>
                    <p className="text-[10px] text-emerald-500">● {t("whiteLabel.phoneOnline")}</p>
                  </div>
                </div>
              </div>
              <div className="flex min-h-[280px] flex-col justify-end gap-2 bg-brand-50/60 px-3 py-3">
                {chat.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "max-w-[85%] rounded-2xl px-3 py-2 text-[11px] leading-snug",
                      msg.from === "bot"
                        ? "self-start rounded-bl-sm bg-white text-ink shadow-sm"
                        : "self-end rounded-br-sm bg-brand-500 text-white",
                    )}
                  >
                    {msg.text}
                  </div>
                ))}
                <span className="self-start rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
                  {t("whiteLabel.leadQualified")}
                </span>
              </div>
              <div className="rounded-b-[1.75rem] bg-white px-4 py-3">
                <div className="h-8 rounded-full bg-brand-50" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-surface absolute -start-2 top-10 flex items-center gap-2 rounded-xl px-3 py-2 sm:-start-6"
            >
              <IconBadge icon={TrendingUp} color="green" size="sm" />
              <div>
                <p className="text-xs font-bold text-ink">{t("whiteLabel.floatBadge1")}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-surface absolute -end-2 bottom-16 flex items-center gap-2 rounded-xl px-3 py-2 sm:-end-6"
            >
              <IconBadge icon={ShieldCheck} color="pink" size="sm" />
              <p className="text-xs font-bold text-ink">{t("whiteLabel.floatBadge2")}</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
