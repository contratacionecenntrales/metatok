import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Globe,
  MessagesSquare,
  Network,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
  Zap,
} from "lucide-react";

export type Accent = "cyan" | "violet" | "emerald";

export interface Pack {
  id: string;
  tier: string;
  name: string;
  tagline: string;
  price: number;
  priceNote: string;
  accent: Accent;
  icon: LucideIcon;
  bestFor: string;
  features: string[];
  highlight?: string;
}

export const PACKS: Pack[] = [
  {
    id: "pack-1",
    tier: "Pack 1",
    name: "El Capturador Web Inteligente",
    tagline: "Inbound / Web IA 24/7",
    price: 1700,
    priceNote: "+ IVA · pago único de implementación",
    accent: "cyan",
    icon: Globe,
    bestFor: "Negocios que necesitan dejar de perder tráfico web sin atender",
    features: [
      "Widget Web Chat con IA disponible 24 horas, 7 días a la semana",
      "Lead Magnet Funnel: convierte visitas frías en contactos cualificados",
      "Captura de leads conversacional, sin formularios largos ni aburridos",
      "Enriquecimiento automático de datos de contacto en tiempo real",
      "Notificaciones instantáneas al equipo comercial ante lead caliente",
      "Panel de analítica de conversación y tasa de conversión web",
    ],
  },
  {
    id: "pack-2",
    tier: "Pack 2",
    name: "El Súper-Setter Automatizado",
    tagline: "WhatsApp API + BANT Chat Funnel",
    price: 2800,
    priceNote: "+ IVA · pago único de implementación",
    accent: "violet",
    icon: MessagesSquare,
    bestFor: "Equipos comerciales que necesitan filtrar y repartir leads sin fricción",
    features: [
      "Conexión oficial a WhatsApp Business API con verificación Meta",
      "Filtrado estricto BANT por IA (Presupuesto, Autoridad, Necesidad, Urgencia)",
      "Gestión y reparto automático a hasta 8 agentes comerciales",
      "Distribución Round Robin equitativa, sin leads duplicados ni fugas",
      "Agenda de citas automatizada con confirmación y recordatorios",
      "Todo lo incluido en el Pack 1: Capturador Web Inteligente",
    ],
    highlight: "Más elegido por equipos comerciales",
  },
  {
    id: "pack-3",
    tier: "Pack 3",
    name: "El Cerebro Operativo Absoluto",
    tagline: "Omnicanalidad Cruzada 360° + n8n/APIs",
    price: 3900,
    priceNote: "+ IVA · pago único de implementación",
    accent: "emerald",
    icon: Network,
    bestFor: "Organizaciones que exigen un ecosistema unificado y a prueba de futuro",
    features: [
      "Omnicanalidad cruzada real: Web, WhatsApp e Instagram en un solo hilo",
      "Integración pura con sistemas internos vía n8n, APIs y Webhooks",
      "Automatización de solicitud y gestión de reseñas de Google",
      "Sincronización bidireccional con tu CRM o ERP existente",
      "Reportes ejecutivos automatizados y dashboards en tiempo real",
      "Todo lo incluido en el Pack 1 y Pack 2, con soporte prioritario",
    ],
  },
];

export const ACCENT_STYLES: Record<
  Accent,
  { text: string; bg: string; border: string; glow: string; gradient: string }
> = {
  cyan: {
    text: "text-cyan-300",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/30",
    glow: "glow-cyan",
    gradient: "from-cyan-400 to-cyan-600",
  },
  violet: {
    text: "text-violet-300",
    bg: "bg-violet-400/10",
    border: "border-violet-400/30",
    glow: "glow-violet",
    gradient: "from-violet-400 to-fuchsia-600",
  },
  emerald: {
    text: "text-emerald-300",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
    glow: "glow-emerald",
    gradient: "from-emerald-400 to-emerald-600",
  },
};

export interface Integration {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const INTEGRATIONS: Integration[] = [
  {
    name: "GoHighLevel",
    description: "CRM y pipelines de venta sincronizados en tiempo real",
    icon: Workflow,
  },
  {
    name: "Twilio",
    description: "Infraestructura de voz y SMS de nivel operador",
    icon: Zap,
  },
  {
    name: "n8n",
    description: "Orquestación de flujos y automatizaciones a medida",
    icon: Network,
  },
  {
    name: "VAPI",
    description: "Agentes de voz IA para llamadas entrantes y salientes",
    icon: Bot,
  },
  {
    name: "CRMs Personalizados",
    description: "Conectores a medida vía API para tu stack existente",
    icon: ShieldCheck,
  },
  {
    name: "Meta & Google",
    description: "WhatsApp Business API, Instagram y Google Business",
    icon: Sparkles,
  },
];

export interface CaseStudy {
  name: string;
  sector: string;
  quote: string;
  metric: string;
  metricLabel: string;
  accent: Accent;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    name: "Grupo Inmobiliario Vértice",
    sector: "Sector Inmobiliario",
    quote:
      "MetaTok.ai califica cada lead de nuestras webs y campañas antes de que un agente levante el teléfono. Nuestro equipo solo habla con compradores reales.",
    metric: "+312%",
    metricLabel: "citas cualificadas / mes",
    accent: "cyan",
  },
  {
    name: "Clínicas Aurea",
    sector: "Sector Clínico",
    quote:
      "El filtrado BANT por WhatsApp eliminó las consultas sin intención real de compra. Nuestros especialistas ganaron horas clínicas cada semana.",
    metric: "-64%",
    metricLabel: "tiempo administrativo",
    accent: "violet",
  },
  {
    name: "Bufete Marín & Asociados",
    sector: "Despacho Profesional",
    quote:
      "La omnicanalidad de MetaTok unificó Web, WhatsApp e Instagram en un solo pipeline conectado a nuestro CRM. Cero leads perdidos entre canales.",
    metric: "24/7",
    metricLabel: "cobertura comercial real",
    accent: "emerald",
  },
];

export const NAV_TESTIMONIAL_ICON = Star;
