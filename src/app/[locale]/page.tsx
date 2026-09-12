import { isValidLocale, siteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { notFound } from "next/navigation";

import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import MoneyLeak from "@/components/sections/MoneyLeak";
import CompetitiveEdge from "@/components/sections/CompetitiveEdge";
import EngineV5 from "@/components/sections/EngineV5";
import Services from "@/components/sections/Services";
import Sectors from "@/components/sections/Sectors";
import Comparison from "@/components/sections/Comparison";
import Process from "@/components/sections/Process";
import Omnichannel from "@/components/sections/Omnichannel";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import WhiteLabel from "@/components/sections/WhiteLabel";
import Academy from "@/components/sections/Academy";
import AuditCta from "@/components/sections/AuditCta";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.nav.home, item: `${siteUrl}/${locale}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Hero dict={dict} locale={locale} />
      <TrustBar dict={dict} />
      <MoneyLeak dict={dict} />
      <CompetitiveEdge dict={dict} />
      <EngineV5 dict={dict} />
      <Services dict={dict} />
      <Sectors dict={dict} locale={locale} />
      <Comparison dict={dict} locale={locale} />
      <Process dict={dict} locale={locale} />
      <Omnichannel dict={dict} />
      <Pricing dict={dict} locale={locale} />
      <Testimonials dict={dict} />
      <WhiteLabel dict={dict} locale={locale} />
      <Academy dict={dict} locale={locale} />
      <AuditCta dict={dict} locale={locale} />
      <Faq dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
