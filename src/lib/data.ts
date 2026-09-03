import type { LucideIcon } from "lucide-react";
import {
  AlarmClock,
  Bot,
  BookOpen,
  Briefcase,
  Building2,
  CalendarCheck,
  Cpu,
  CreditCard,
  Database,
  FileText,
  Globe,
  Headphones,
  Hotel,
  Megaphone,
  Network,
  Phone,
  PlugZap,
  Puzzle,
  Rocket,
  Route,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  Tags,
  Target,
  TrendingUp,
  Trophy,
  UserCheck,
  Workflow,
  Zap,
  BarChart3,
} from "lucide-react";
import type { BadgeColor } from "@/components/ui/IconBadge";

type T = (key: string) => string;

// ---------- HERO ----------

export function getHeroStats(t: T) {
  return [
    { value: t("hero.stats.automation.value"), label: t("hero.stats.automation.label") },
    { value: t("hero.stats.savings.value"), label: t("hero.stats.savings.label") },
    { value: t("hero.stats.operation.value"), label: t("hero.stats.operation.label") },
  ];
}

export function getHeroFeatures(t: T): { icon: LucideIcon; title: string; desc: string }[] {
  return [
    { icon: Zap, title: t("hero.features.speed.title"), desc: t("hero.features.speed.desc") },
    { icon: Bot, title: t("hero.features.autonomous.title"), desc: t("hero.features.autonomous.desc") },
    { icon: ShieldCheck, title: t("hero.features.gdpr.title"), desc: t("hero.features.gdpr.desc") },
    { icon: PlugZap, title: t("hero.features.api.title"), desc: t("hero.features.api.desc") },
  ];
}

export function getHeroChannels(
  t: T,
): { icon: LucideIcon; label: string; kind?: "whatsapp" | "instagram" }[] {
  return [
    { icon: Phone, label: t("hero.channels.whatsapp"), kind: "whatsapp" },
    { icon: Phone, label: t("hero.channels.calls") },
    { icon: Phone, label: t("hero.channels.instagram"), kind: "instagram" },
    { icon: Globe, label: t("hero.channels.web") },
  ];
}

export function getHeroFeed(
  t: T,
): { icon: LucideIcon; label: string; sub: string; color: BadgeColor }[] {
  return [
    { icon: Headphones, label: t("hero.feed.ticket.label"), sub: t("hero.feed.ticket.sub"), color: "violet" },
    { icon: FileText, label: t("hero.feed.invoice.label"), sub: t("hero.feed.invoice.sub"), color: "green" },
    { icon: Megaphone, label: t("hero.feed.post.label"), sub: t("hero.feed.post.sub"), color: "pink" },
    { icon: UserCheck, label: t("hero.feed.lead.label"), sub: t("hero.feed.lead.sub"), color: "blue" },
  ];
}

export function getHeroMetrics(t: T) {
  return [
    { value: "142", label: t("hero.metrics.tasks") },
    { value: "5", label: t("hero.metrics.depts") },
    { value: "€3k+", label: t("hero.metrics.savings") },
  ];
}

export const TRUST_LOGOS = [
  "Heineken",
  "LATAM Airlines",
  "Zoom",
  "Cemex",
  "Comunidad de Madrid",
  "DuPont",
];

// ---------- PROBLEMA ----------

export function getProblemaItems(t: T): { n: string; stat: string; title: string; desc: string }[] {
  return ["1", "2", "3"].map((n) => ({
    n,
    stat: t(`problema.items.${n}.stat`),
    title: t(`problema.items.${n}.title`),
    desc: t(`problema.items.${n}.desc`),
  }));
}

// ---------- BENEFICIOS ----------

const BENEFICIOS_ICONS: Record<string, LucideIcon> = {
  "01": Zap,
  "02": CreditCard,
  "03": AlarmClock,
  "04": Puzzle,
};

export function getBeneficios(t: T) {
  return Object.keys(BENEFICIOS_ICONS).map((n) => ({
    n,
    icon: BENEFICIOS_ICONS[n],
    stat: t(`beneficios.items.${n}.stat`),
    statLabel: t(`beneficios.items.${n}.statLabel`),
    title: t(`beneficios.items.${n}.title`),
    desc: t(`beneficios.items.${n}.desc`),
  }));
}

// ---------- MOTOR METATOK (ENGINE) ----------

export function getEngineFeatures(
  t: T,
): { icon: LucideIcon; title: string; desc: string; color: BadgeColor }[] {
  return [
    {
      icon: Cpu,
      title: t("engine.features.cognitive.title"),
      desc: t("engine.features.cognitive.desc"),
      color: "violet",
    },
    {
      icon: Network,
      title: t("engine.features.omnichannel.title"),
      desc: t("engine.features.omnichannel.desc"),
      color: "blue",
    },
    {
      icon: Database,
      title: t("engine.features.crm.title"),
      desc: t("engine.features.crm.desc"),
      color: "green",
    },
    {
      icon: TrendingUp,
      title: t("engine.features.optimization.title"),
      desc: t("engine.features.optimization.desc"),
      color: "pink",
    },
  ];
}

export function getEngineStats(t: T) {
  return [
    { value: t("engine.stats.latency.value"), label: t("engine.stats.latency.label") },
    { value: t("engine.stats.uptime.value"), label: t("engine.stats.uptime.label") },
    { value: t("engine.stats.encryption.value"), label: t("engine.stats.encryption.label") },
  ];
}

// ---------- WHITE LABEL ----------

export function getWhiteLabelFeatures(t: T): { icon: LucideIcon; title: string; desc: string }[] {
  return [
    { icon: Tags, title: t("whiteLabel.features.branding.title"), desc: t("whiteLabel.features.branding.desc") },
    { icon: Rocket, title: t("whiteLabel.features.publishing.title"), desc: t("whiteLabel.features.publishing.desc") },
    { icon: ShieldCheck, title: t("whiteLabel.features.compliance.title"), desc: t("whiteLabel.features.compliance.desc") },
    { icon: Network, title: t("whiteLabel.features.scale.title"), desc: t("whiteLabel.features.scale.desc") },
  ];
}

export function getWhiteLabelBullets(t: T): string[] {
  return [0, 1, 2, 3, 4, 5].map((i) => t(`whiteLabel.bullets.${i}`));
}

export function getWhiteLabelChat(t: T) {
  return [
    { from: "bot" as const, text: t("whiteLabel.chat.msg1") },
    { from: "user" as const, text: t("whiteLabel.chat.msg2") },
    { from: "bot" as const, text: t("whiteLabel.chat.msg3") },
    { from: "user" as const, text: t("whiteLabel.chat.msg4") },
  ];
}

// ---------- SECTORES ----------

export interface SectorResult {
  value: string;
  label: string;
}

export interface Sector {
  id: string;
  icon: LucideIcon;
  name: string;
  badgeStat: string;
  badgeLabel: string;
  headline: string;
  description: string;
  estadoActual: string[];
  conMetatok: string[];
  resultados: SectorResult[];
  opciones: string[];
}

const SECTOR_META: { id: string; icon: LucideIcon; badgeStat: string; resultValues: string[] }[] = [
  { id: "inmobiliarias", icon: Building2, badgeStat: "78%", resultValues: ["+47%", "−65%", "3×"] },
  { id: "clinicas", icon: Stethoscope, badgeStat: "48%", resultValues: ["−48%", "+35%", "24/7"] },
  { id: "ecommerce", icon: ShoppingCart, badgeStat: "62%", resultValues: ["+62%", "−70%", "24/7"] },
  { id: "agencias", icon: Briefcase, badgeStat: "3×", resultValues: ["3×", "−55%", "24/7"] },
  { id: "despachos", icon: Scale, badgeStat: "45%", resultValues: ["+45%", "−60%", "24/7"] },
  { id: "hoteles", icon: Hotel, badgeStat: "38%", resultValues: ["+38%", "−50%", "24/7"] },
];

export function getSectores(t: T): Sector[] {
  return SECTOR_META.map(({ id, icon, badgeStat, resultValues }) => ({
    id,
    icon,
    badgeStat,
    name: t(`sectores.items.${id}.name`),
    badgeLabel: t(`sectores.items.${id}.badgeLabel`),
    headline: t(`sectores.items.${id}.headline`),
    description: t(`sectores.items.${id}.description`),
    estadoActual: [0, 1, 2, 3].map((i) => t(`sectores.items.${id}.estadoActual.${i}`)),
    conMetatok: [0, 1, 2, 3].map((i) => t(`sectores.items.${id}.conMetatok.${i}`)),
    resultados: [
      { value: resultValues[0], label: t(`sectores.items.${id}.resultados.r1`) },
      { value: resultValues[1], label: t(`sectores.items.${id}.resultados.r2`) },
      { value: resultValues[2], label: t(`sectores.items.${id}.resultados.r3`) },
    ],
    opciones: [0, 1, 2].map((i) => t(`sectores.items.${id}.opciones.${i}`)),
  }));
}

// ---------- SERVICIOS ----------

export interface Servicio {
  n: string;
  icon: LucideIcon;
  color: BadgeColor;
  title: string;
  desc: string;
  result: string;
  flagship?: boolean;
}

const SERVICIO_META: { n: string; icon: LucideIcon; color: BadgeColor; flagship?: boolean }[] = [
  { n: "01", icon: Bot, color: "violet", flagship: true },
  { n: "02", icon: Phone, color: "pink" },
  { n: "03", icon: Target, color: "blue" },
  { n: "04", icon: Database, color: "teal" },
  { n: "05", icon: CalendarCheck, color: "amber" },
  { n: "06", icon: Workflow, color: "ink" },
];

export function getServicios(t: T): Servicio[] {
  return SERVICIO_META.map(({ n, icon, color, flagship }) => ({
    n,
    icon,
    color,
    flagship,
    title: t(`servicios.items.${n}.title`),
    desc: t(`servicios.items.${n}.desc`),
    result: t(`servicios.items.${n}.result`),
  }));
}

export function getServiciosTopStats(t: T) {
  return [
    { icon: Trophy, label: t("servicios.topStats.leader") },
    { icon: Zap, label: t("servicios.topStats.speed") },
    { icon: AlarmClock, label: t("servicios.topStats.operation") },
    { icon: Puzzle, label: t("servicios.topStats.omnichannel") },
  ];
}

export function getTrustStrip(t: T) {
  return [
    { icon: ShieldCheck, title: t("servicios.trustStrip.secure.title"), desc: t("servicios.trustStrip.secure.desc") },
    { icon: Rocket, title: t("servicios.trustStrip.fast.title"), desc: t("servicios.trustStrip.fast.desc") },
    { icon: BarChart3, title: t("servicios.trustStrip.results.title"), desc: t("servicios.trustStrip.results.desc") },
    { icon: Headphones, title: t("servicios.trustStrip.support.title"), desc: t("servicios.trustStrip.support.desc") },
  ];
}

export interface LeaderComparison {
  metric: string;
  metatok: string;
  market: string;
}

export function getLeaderComparison(t: T): LeaderComparison[] {
  return ["speed", "coverage", "channels"].map((key) => ({
    metric: t(`servicios.leaderRows.${key}.metric`),
    metatok: t(`servicios.leaderRows.${key}.metatok`),
    market: t(`servicios.leaderRows.${key}.market`),
  }));
}

// ---------- COMPARATIVA ----------

const COMPARATIVA_ICONS: Record<string, LucideIcon> = {
  quality: Bot,
  integration: Puzzle,
  goal: Target,
  setup: Workflow,
  support: Headphones,
};

export function getComparativaRows(
  t: T,
): { icon: LucideIcon; feature: string; bot: string; metatok: string }[] {
  return Object.keys(COMPARATIVA_ICONS).map((key) => ({
    icon: COMPARATIVA_ICONS[key],
    feature: t(`comparativa.rows.${key}.feature`),
    bot: t(`comparativa.rows.${key}.bot`),
    metatok: t(`comparativa.rows.${key}.metatok`),
  }));
}

// ---------- DIAGNOSTICO ----------

export function getDiagnosticoActual(t: T): string[] {
  return [0, 1, 2, 3, 4].map((i) => t(`diagnostico.actualItems.${i}`));
}

export function getDiagnosticoMetatok(t: T): string[] {
  return [0, 1, 2, 3, 4].map((i) => t(`diagnostico.metatokItems.${i}`));
}

// ---------- ACADEMY ----------

export function getAcademyFeatures(
  t: T,
): { icon: LucideIcon; title: string; desc: string; color: BadgeColor }[] {
  return [
    { icon: BookOpen, title: t("academy.features.playbooks.title"), desc: t("academy.features.playbooks.desc"), color: "violet" },
    { icon: Megaphone, title: t("academy.features.guerrilla.title"), desc: t("academy.features.guerrilla.desc"), color: "blue" },
    { icon: Rocket, title: t("academy.features.scaling.title"), desc: t("academy.features.scaling.desc"), color: "green" },
  ];
}

export function getAcademyRoute(t: T): string[] {
  return [0, 1, 2].map((i) => t(`academy.routeItems.${i}`));
}

export function getAcademyModules(t: T) {
  return [
    { title: t("academy.modules.01"), progress: 75 },
    { title: t("academy.modules.02"), progress: 60 },
    { title: t("academy.modules.03"), progress: 45 },
  ];
}

// ---------- PROCESO ----------

const PROCESO_ICONS: Record<string, LucideIcon> = {
  "01": Target,
  "02": Route,
  "03": FileText,
  "04": Rocket,
};

export function getProceso(t: T): { n: string; icon: LucideIcon; title: string; desc: string; tag: string }[] {
  return Object.keys(PROCESO_ICONS).map((n) => ({
    n,
    icon: PROCESO_ICONS[n],
    title: t(`proceso.steps.${n}.title`),
    desc: t(`proceso.steps.${n}.desc`),
    tag: t(`proceso.steps.${n}.tag`),
  }));
}

// ---------- CANALES ----------

export function getCanales(
  t: T,
): { icon: LucideIcon; name: string; desc: string; kind?: "whatsapp" | "instagram" }[] {
  return [
    { icon: Phone, name: t("canales.items.phone.name"), desc: t("canales.items.phone.desc") },
    { icon: Globe, name: t("canales.items.web.name"), desc: t("canales.items.web.desc") },
    { icon: Phone, name: t("canales.items.whatsapp.name"), desc: t("canales.items.whatsapp.desc"), kind: "whatsapp" },
    { icon: Phone, name: t("canales.items.instagram.name"), desc: t("canales.items.instagram.desc"), kind: "instagram" },
    { icon: PlugZap, name: t("canales.items.api.name"), desc: t("canales.items.api.desc") },
  ];
}

// ---------- PLANES ----------

export type BillingCycle = "monthly" | "quarterly" | "yearly";

export const BILLING_MULTIPLIER: Record<BillingCycle, number> = {
  monthly: 1,
  quarterly: 0.84,
  yearly: 0.71,
};

export interface Plan {
  id: string;
  name: string;
  basePrice: number;
  desc: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

const PLAN_META: { id: string; basePrice: number; featured?: boolean; featureCount: number }[] = [
  { id: "starter", basePrice: 99, featureCount: 6 },
  { id: "business", basePrice: 239, featured: true, featureCount: 8 },
  { id: "enterprise", basePrice: 590, featureCount: 7 },
];

export function getPlanes(t: T): Plan[] {
  return PLAN_META.map(({ id, basePrice, featured, featureCount }) => ({
    id,
    basePrice,
    featured,
    name: t(`planes.plans.${id}.name`),
    desc: t(`planes.plans.${id}.desc`),
    features: Array.from({ length: featureCount }, (_, i) => t(`planes.plans.${id}.features.${i}`)),
    cta: t(`planes.plans.${id}.cta`),
  }));
}

// ---------- TESTIMONIOS ----------

export interface Testimonio {
  name: string;
  role: string;
  quote: string;
}

const TESTIMONIO_NAMES: Record<string, string> = {
  "1": "David Gómez",
  "2": "Dra. Laura Peñafiel",
  "3": "Ana Fuentes",
  "4": "Luis Carrión",
  "5": "Juan Valdés",
  "6": "Ricardo Garrido",
};

export function getTestimonios(t: T): Testimonio[] {
  return Object.keys(TESTIMONIO_NAMES).map((n) => ({
    name: TESTIMONIO_NAMES[n],
    role: t(`testimonios.items.${n}.role`),
    quote: t(`testimonios.items.${n}.quote`),
  }));
}

// ---------- AUDITORIA ----------

export function getAuditoriaChecklist(t: T): string[] {
  return [0, 1, 2, 3].map((i) => t(`auditoria.checklist.${i}`));
}

export function getAuditoriaStats(t: T) {
  return [
    { value: t("auditoria.stats.recovered.value"), label: t("auditoria.stats.recovered.label") },
    { value: t("auditoria.stats.saved.value"), label: t("auditoria.stats.saved.label") },
    { value: t("auditoria.stats.appointments.value"), label: t("auditoria.stats.appointments.label") },
    { value: t("auditoria.stats.conversion.value"), label: t("auditoria.stats.conversion.label") },
  ];
}

// ---------- FAQ ----------

export function getFaq(t: T): { q: string; a: string }[] {
  return ["1", "2", "3", "4", "5", "6"].map((n) => ({
    q: t(`faq.items.${n}.q`),
    a: t(`faq.items.${n}.a`),
  }));
}
