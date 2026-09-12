import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/i18n/config";
import { legalSlugs } from "@/lib/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${siteUrl}/${l}`;

  const homeEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: locale === "es" ? 1 : 0.8,
    alternates: { languages: { ...languages, "x-default": `${siteUrl}/es` } },
  }));

  const legalEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    legalSlugs.map((slug) => ({
      url: `${siteUrl}/${locale}/legal/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    }))
  );

  return [...homeEntries, ...legalEntries];
}
