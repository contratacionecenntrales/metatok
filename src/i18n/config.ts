export const locales = ["es", "en", "fr", "de", "pt", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const rtlLocales: Locale[] = ["ar"];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  ar: "العربية",
};

export const localeFlags: Record<Locale, string> = {
  es: "🇪🇸",
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪",
  pt: "🇵🇹",
  ar: "🇸🇦",
};

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const siteUrl = "https://www.metatok.ai";
