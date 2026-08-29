"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, GraduationCap, Headphones, Trophy } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Button } from "@/components/ui/Button";
import { CheckRow } from "@/components/ui/ListRow";
import { getAcademyFeatures, getAcademyModules, getAcademyRoute } from "@/lib/data";

export function Academy() {
  const t = useTranslations();
  const features = getAcademyFeatures(t);
  const routeItems = getAcademyRoute(t);
  const modules = getAcademyModules(t);

  return (
    <section id="academy" className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-bold text-brand-700">
              <GraduationCap className="h-3.5 w-3.5" />
              {t("academy.badge1")}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e1e8f7] bg-white px-3.5 py-1 text-xs font-bold text-ink-soft">
              <Trophy className="h-3.5 w-3.5" />
              {t("academy.badge2")}
            </span>
          </div>
          <SectionHeading
            title={
              <>
                {t("academy.titlePrefix")}{" "}
                <span className="text-gradient-brand">{t("academy.titleHighlight")}</span>{" "}
                {t("academy.titleSuffix")}
              </>
            }
            description={t("academy.description")}
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-surface flex items-start gap-4 rounded-2xl p-6"
            >
              <IconBadge icon={feature.icon} color={feature.color} />
              <div>
                <h3 className="font-bold text-ink">{feature.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="card-surface rounded-3xl p-8"
          >
            <p className="text-xs font-bold uppercase tracking-wide text-brand-600">
              {t("academy.routeLabel")}
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-ink">{t("academy.routeTitle")}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t("academy.routeDesc")}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {routeItems.map((item) => (
                <CheckRow key={item}>{item}</CheckRow>
              ))}
            </ul>
            <Button href="#contacto" size="lg" className="mt-7">
              {t("academy.ctaButton")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="card-surface rounded-3xl p-8"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wide text-ink-soft">
                {t("academy.dashboardLabel")}
              </p>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold text-emerald-700">
                {t("academy.cohortLabel")}
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-4">
              {modules.map((module, index) => (
                <div key={module.title}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-semibold text-ink">
                      {t("academy.moduleLabel")} {String(index + 1).padStart(2, "0")}
                      <span className="ms-2 font-normal text-ink-soft">{module.title}</span>
                    </span>
                    <span className="text-xs font-bold text-brand-600">{module.progress}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-brand-50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${module.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#e1e8f7] p-4">
              <IconBadge icon={Headphones} color="violet" size="sm" />
              <div>
                <p className="text-sm font-bold text-ink">{t("academy.supportTitle")}</p>
                <p className="text-xs text-ink-soft">{t("academy.supportDesc")}</p>
              </div>
              <span className="ms-auto rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                {t("academy.includedLabel")}
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
