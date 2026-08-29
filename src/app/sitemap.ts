import type { MetadataRoute } from "next";
import { LOCALES } from "@/i18n/routing";

const SITE_URL = "https://www.metatok.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  LOCALES.forEach((locale) => {
    languages[locale] = `${SITE_URL}/${locale}`;
  });
  languages["x-default"] = `${SITE_URL}/es`;

  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === "es" ? 1 : 0.8,
    alternates: { languages },
  }));
}
