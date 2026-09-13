import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isValidLocale, locales, siteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { isSolutionSlug, solutionSlugs, solutionSlugToDictKey, type SolutionSlug } from "@/lib/solutions";
import Services from "@/components/sections/Services";
import Sectors from "@/components/sections/Sectors";
import Pricing from "@/components/sections/Pricing";
import EngineV5 from "@/components/sections/EngineV5";
import WhiteLabel from "@/components/sections/WhiteLabel";
import Academy from "@/components/sections/Academy";
import Testimonials from "@/components/sections/Testimonials";
import AuditCta from "@/components/sections/AuditCta";

export function generateStaticParams() {
  return locales.flatMap((locale) => solutionSlugs.map((slug) => ({ locale, slug })));
}

async function resolveParams(params: Promise<{ locale: string; slug: string }>) {
  const { locale: rawLocale, slug } = await params;
  if (!isValidLocale(rawLocale) || !isSolutionSlug(slug)) notFound();
  return { locale: rawLocale as Locale, slug: slug as SolutionSlug };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await resolveParams(params);
  const dict = await getDictionary(locale);
  const section = dict[solutionSlugToDictKey[slug]];

  return {
    title: `${section.title} | MetaTok AI`,
    description: section.subtitle,
    alternates: {
      canonical: `${siteUrl}/${locale}/soluciones/${slug}/`,
      languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}/soluciones/${slug}/`])),
    },
    robots: { index: true, follow: true },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await resolveParams(params);
  const dict = await getDictionary(locale);

  return (
    <article>
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="text-sm font-medium text-neon hover:underline">
          ← {dict.nav.home}
        </Link>
      </div>

      {slug === "servicios" && <Services dict={dict} />}
      {slug === "sectores" && <Sectors dict={dict} locale={locale} />}
      {slug === "precios" && <Pricing dict={dict} locale={locale} />}
      {slug === "motor" && <EngineV5 dict={dict} />}
      {slug === "white-label" && <WhiteLabel dict={dict} locale={locale} />}
      {slug === "academy" && <Academy dict={dict} locale={locale} />}
      {slug === "casos-de-exito" && <Testimonials dict={dict} />}

      <AuditCta dict={dict} locale={locale} />
    </article>
  );
}
