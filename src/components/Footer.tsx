"use client";

import { useLocale, useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const FOOTER_COLUMNS = [
  {
    key: "solucion",
    links: [
      { key: "servicios", href: "#servicios" },
      { key: "sectores", href: "#sectores" },
      { key: "engine", href: "#motor-metatok" },
      { key: "whiteLabel", href: "#producto-white-label" },
    ],
  },
  {
    key: "explorar",
    links: [
      { key: "academy", href: "#academy" },
      { key: "planes", href: "#planes" },
      { key: "testimonios", href: "#testimonios" },
      { key: "faq", href: "#faq" },
    ],
  },
  {
    key: "legal",
    links: [
      { key: "aviso", href: "/legal/aviso-legal/" },
      { key: "privacidad", href: "/legal/privacidad/" },
      { key: "cookies", href: "/legal/cookies/" },
      { key: "terminos", href: "/legal/terminos/" },
    ],
  },
] as const;

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="border-t border-[#e1e8f7] bg-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">{t("footer.tagline")}</p>
          <a
            href="mailto:info@metatok.ai"
            className="flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-brand-700"
          >
            <Mail className="h-4 w-4 text-brand-500" />
            info@metatok.ai
          </a>
          <LanguageSwitcher className="mt-2" />
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.key}>
            <p className="text-sm font-bold text-ink">
              {t(`footer.columns.${column.key}.title`)}
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href.startsWith("#") ? link.href : `/${locale}${link.href}`}
                    className="text-sm text-ink-soft transition-colors hover:text-brand-700"
                  >
                    {t(`footer.columns.${column.key}.links.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-[#e1e8f7]">
        <Container className="flex items-center justify-center py-6">
          <p className="text-xs text-ink-soft">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </Container>
      </div>
    </footer>
  );
}
