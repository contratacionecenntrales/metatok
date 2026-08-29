import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.metatok.ai"),
  title: "MetaTok AI | Agentes de Inteligencia Artificial 24/7",
  description:
    "MetaTok AI: ecosistema de Agentes Autónomos de IA para automatizar ventas, soporte y contabilidad 24/7 en WhatsApp, Llamadas, Instagram y Web. Una marca de Grupo Evolvix Global. Ahorra hasta 3.000€ por empleado.",
  keywords: [
    "agentes de IA",
    "automatización con inteligencia artificial",
    "WhatsApp Business API",
    "voicebots",
    "cualificación de leads IA",
    "MetaTok",
  ],
  authors: [{ name: "MetaTok AI" }],
  openGraph: {
    title: "MetaTok AI | Agentes de Inteligencia Artificial 24/7",
    description:
      "Tu equipo de ventas, soporte y gestión en piloto automático con IA. Despliega un ecosistema de asistentes que venden, atienden y cierran por ti 24/7.",
    url: "https://www.metatok.ai",
    siteName: "MetaTok AI",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        {children}
      </body>
    </html>
  );
}
