import { getTranslations } from "next-intl/server";
import { getFaq, getPlanes, getServicios } from "@/lib/data";

const SITE_URL = "https://www.metatok.ai";

export async function OrganizationJsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale });
  const planes = getPlanes(t);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "MetaTok AI",
        alternateName: "MetaTok",
        url: SITE_URL,
        logo: `${SITE_URL}/logo-512.png`,
        image: `${SITE_URL}/opengraph-image`,
        description: t("footer.tagline"),
        email: "info@metatok.ai",
        brand: {
          "@type": "Brand",
          name: "MetaTok AI",
        },
        parentOrganization: {
          "@type": "Organization",
          name: "Grupo Evolvix Global",
          url: "https://evolvixglobal.es",
        },
        sameAs: ["https://evolvixglobal.es"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/${locale}`,
        name: "MetaTok AI",
        inLanguage: locale,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "MetaTok AI",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: t("meta.description"),
        offers: planes.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          price: plan.basePrice,
          priceCurrency: "EUR",
          description: plan.desc,
          url: `${SITE_URL}/${locale}#planes`,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export async function FaqJsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale });
  const faq = getFaq(t);

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export async function ServicesJsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale });
  const servicios = getServicios(t);

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: servicios.map((servicio, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: servicio.title,
        description: servicio.desc,
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
