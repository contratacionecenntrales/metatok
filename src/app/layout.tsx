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
  title: "MetaTok.ai — Automatización Comercial con IA para Empresas 24/7",
  description:
    "MetaTok.ai transforma tu tráfico en citas cerradas 24/7. Infraestructura de IA y automatización comercial: captura web inteligente, WhatsApp API con filtrado BANT y omnicanalidad total con n8n. Sin leads perdidos, sin entrada manual de datos.",
  keywords: [
    "automatización comercial IA",
    "WhatsApp API BANT",
    "chatbot IA empresarial",
    "n8n automatización",
    "captura de leads IA",
    "MetaTok",
  ],
  authors: [{ name: "MetaTok.ai" }],
  openGraph: {
    title: "MetaTok.ai — Transforma tu tráfico en citas cerradas 24/7",
    description:
      "Ecosistemas de Automatización Comercial con IA. Captura, califica y convierte leads sin intervención humana.",
    url: "https://www.metatok.ai",
    siteName: "MetaTok.ai",
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
      <body className="min-h-full flex flex-col bg-obsidian text-slate-100 selection:bg-cyan-400/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
