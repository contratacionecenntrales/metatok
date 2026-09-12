import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isValidLocale, locales, siteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { isLegalSlug, legalSlugs, legalSlugToKey, type LegalSlug } from "@/lib/legal";

export function generateStaticParams() {
  return locales.flatMap((locale) => legalSlugs.map((slug) => ({ locale, slug })));
}

async function resolveParams(params: Promise<{ locale: string; slug: string }>) {
  const { locale: rawLocale, slug } = await params;
  if (!isValidLocale(rawLocale) || !isLegalSlug(slug)) notFound();
  return { locale: rawLocale as Locale, slug: slug as LegalSlug };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await resolveParams(params);
  const dict = await getDictionary(locale);
  const page = dict.legal[legalSlugToKey[slug]];

  return {
    title: `${page.title} | MetaTok AI`,
    description: dict.meta.description,
    alternates: { canonical: `${siteUrl}/${locale}/legal/${slug}` },
    robots: { index: true, follow: true },
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await resolveParams(params);
  const dict = await getDictionary(locale);
  const page = dict.legal[legalSlugToKey[slug]];

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href={`/${locale}`} className="text-sm font-medium text-neon hover:underline">
        ← {dict.nav.home}
      </Link>
      <h1 className="mt-6 font-display text-3xl font-semibold text-white sm:text-4xl">{page.title}</h1>
      <p className="mt-2 text-sm text-white/50">{page.updated}</p>

      <div className="mt-10 space-y-8">
        {page.sections.map((section) => (
          <section key={section.h}>
            <h2 className="text-lg font-semibold text-white">{section.h}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{section.p}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
