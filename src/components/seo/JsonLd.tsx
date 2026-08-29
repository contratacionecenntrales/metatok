import { FAQ, PLANES, SERVICIOS } from "@/lib/data";

const SITE_URL = "https://www.metatok.ai";

export function OrganizationJsonLd() {
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
        description:
          "Ecosistema de Agentes Autónomos de IA para automatizar ventas, soporte, contabilidad y gestión de redes 24/7 en WhatsApp, llamadas, Instagram y web.",
        email: "info@metatok.ai",
        areaServed: {
          "@type": "Country",
          name: "España",
        },
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
        url: SITE_URL,
        name: "MetaTok AI",
        inLanguage: "es-ES",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "MetaTok AI",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Plataforma de agentes de inteligencia artificial que venden, atienden y gestionan negocios 24/7 en WhatsApp, llamadas de voz, Instagram y web.",
        offers: PLANES.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          price: plan.basePrice,
          priceCurrency: "EUR",
          description: plan.desc,
          url: `${SITE_URL}/#planes`,
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

export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
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

export function ServicesJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICIOS.map((servicio, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: servicio.title,
        description: servicio.desc,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "España" },
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
