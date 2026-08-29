import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { LOCALES, RTL_LOCALES, routing, type Locale } from "@/i18n/routing";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.metatok.ai";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const languages: Record<string, string> = {};
  LOCALES.forEach((l) => {
    languages[l] = `${SITE_URL}/${l}`;
  });
  languages["x-default"] = `${SITE_URL}/es`;

  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s | MetaTok AI",
    },
    description,
    keywords: t("keywords")
      .split(",")
      .map((k) => k.trim()),
    authors: [{ name: "MetaTok AI" }],
    creator: "Grupo Evolvix Global",
    publisher: "Grupo Evolvix Global",
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}`,
      siteName: "MetaTok AI",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    icons: {
      icon: [{ url: "/favicon.ico" }, { url: "/logo-512.png", type: "image/png" }],
      apple: [{ url: "/logo-512.png" }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "technology",
  };
}

export const viewport: Viewport = {
  themeColor: "#2f66e0",
  colorScheme: "light",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const dir = RTL_LOCALES.includes(locale as Locale) ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        <NextIntlClientProvider>
          <OrganizationJsonLd locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
