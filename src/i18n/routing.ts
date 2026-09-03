import { defineRouting } from "next-intl/routing";

export const LOCALES = ["es", "en", "fr", "de", "pt", "ar"] as const;

export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  ar: "العربية",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  es: "🇪🇸",
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪",
  pt: "🇵🇹",
  ar: "🇸🇦",
};

export const RTL_LOCALES: Locale[] = ["ar"];

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: "es",
  localePrefix: "always",
});
