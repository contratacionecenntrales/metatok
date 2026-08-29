import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

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
const TITLE = "MetaTok AI – Agentes de IA 24/7 para Empresas en España";
const DESCRIPTION =
  "Automatiza ventas, soporte y gestión de redes con agentes de IA 24/7 en WhatsApp, llamadas, Instagram y web. Auditoría gratuita para empresas en España.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | MetaTok AI",
  },
  description: DESCRIPTION,
  keywords: [
    "agentes de IA para empresas",
    "automatización con inteligencia artificial España",
    "chatbot IA WhatsApp",
    "voicebots España",
    "cualificación de leads con IA",
    "automatización comercial IA",
    "MetaTok",
  ],
  authors: [{ name: "MetaTok AI" }],
  creator: "Grupo Evolvix Global",
  publisher: "Grupo Evolvix Global",
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "MetaTok AI",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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

export const viewport: Viewport = {
  themeColor: "#7c5cff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-ES"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
