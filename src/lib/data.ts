import type { LucideIcon } from "lucide-react";
import {
  AlarmClock,
  Award,
  BarChart3,
  Bot,
  BookOpen,
  Briefcase,
  Building2,
  CalendarCheck,
  Cpu,
  CreditCard,
  Database,
  FileText,
  Gauge,
  Globe,
  GraduationCap,
  Headphones,
  Hotel,
  Lock,
  Mail,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  Network,
  Phone,
  PlugZap,
  Puzzle,
  Repeat,
  Rocket,
  Route,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Tags,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { BadgeColor } from "@/components/ui/IconBadge";

// ---------- HERO ----------

export const HERO_STATS = [
  { value: "100%", label: "Automatización total" },
  { value: "3.000€", label: "Ahorro por trabajador" },
  { value: "24/7", label: "Operación continua" },
];

export const HERO_FEATURES: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Zap, title: "Velocidad de respuesta", desc: "Atendemos al instante" },
  { icon: Bot, title: "Agentes autónomos", desc: "Trabajan 24/7 sin pausas" },
  { icon: ShieldCheck, title: "RGPD blindado", desc: "Datos seguros y protegidos" },
  { icon: PlugZap, title: "API abierta", desc: "Conecta con tus herramientas" },
];

export const HERO_CHANNELS: { icon: LucideIcon; label: string; kind?: "whatsapp" | "instagram" }[] = [
  { icon: Phone, label: "WhatsApp", kind: "whatsapp" },
  { icon: Phone, label: "Llamadas" },
  { icon: Phone, label: "Instagram", kind: "instagram" },
  { icon: Globe, label: "Web" },
];

export const HERO_FEED: { icon: LucideIcon; label: string; sub: string; color: BadgeColor }[] = [
  { icon: Headphones, label: "Ticket resuelto", sub: "Soporte · T-892", color: "violet" },
  { icon: FileText, label: "Factura procesada", sub: "Contabilidad · #A-402", color: "green" },
  { icon: Megaphone, label: "Post publicado", sub: "Instagram · Contenido", color: "pink" },
  { icon: UserCheck, label: "Lead cualificado", sub: "Ventas · Score 94", color: "blue" },
];

export const HERO_METRICS = [
  { value: "142", label: "Tareas/hora" },
  { value: "5", label: "Dptos. Activos" },
  { value: "€3k+", label: "Ahorro/mes" },
];

export const TRUST_LOGOS = [
  "Heineken",
  "LATAM Airlines",
  "Zoom",
  "Cemex",
  "Comunidad de Madrid",
  "DuPont",
];

// ---------- PROBLEMA ----------

export const PROBLEMA_ITEMS: { n: string; stat: string; title: string; desc: string }[] = [
  {
    n: "1",
    stat: "70%",
    title: "Lead frío",
    desc: "El 70% de los leads se pierden por responder después de 5 minutos. La velocidad lo es todo.",
  },
  {
    n: "2",
    stat: "1.000",
    title: "Saturación humana",
    desc: "Tu equipo humano no puede atender 1.000 chats a la vez. Los agentes MetaTok sí lo hacen.",
  },
  {
    n: "3",
    stat: "Cero cierre",
    title: "Sin cierre autónomo",
    desc: "Los bots comunes solo dan información. Los agentes MetaTok están programados para cerrar.",
  },
];

// ---------- BENEFICIOS ----------

export const BENEFICIOS: {
  n: string;
  icon: LucideIcon;
  stat: string;
  statLabel: string;
  title: string;
  desc: string;
}[] = [
  {
    n: "01",
    icon: Zap,
    stat: "+400%",
    statLabel: "Tasa de respuesta vs. manual",
    title: "Respuesta que multiplica oportunidades",
    desc: "La velocidad y la insistencia correcta convierten conversaciones en ingresos. Menos leads muertos por silencio.",
  },
  {
    n: "02",
    icon: CreditCard,
    stat: "3.000€",
    statLabel: "Ahorro por trabajador",
    title: "Cero tareas repetitivas",
    desc: "La IA asume toda la carga operativa. Elimina errores humanos y reduce costes estructurales masivamente.",
  },
  {
    n: "03",
    icon: AlarmClock,
    stat: "24/7",
    statLabel: "Sin interrupciones",
    title: "Operativo las 24 horas",
    desc: "Tu negocio nunca duerme. Capta, cualifica y agenda incluso fuera de horario comercial y festivos.",
  },
  {
    n: "04",
    icon: Puzzle,
    stat: "5+",
    statLabel: "Canales integrados",
    title: "Integración omnicanal total",
    desc: "Teléfono, Web, WhatsApp, Instagram, Telegram o tu CRM interno vía API. Un ecosistema de texto y voz conectado y coherente.",
  },
];

// ---------- MOTOR METATOK (ENGINE) ----------

export const ENGINE_FEATURES: { icon: LucideIcon; title: string; desc: string; color: BadgeColor }[] = [
  {
    icon: Cpu,
    title: "Procesamiento Cognitivo en Tiempo Real",
    desc: "El núcleo V5 analiza intención, sentimiento y contexto en milisegundos. Adapta el guion de ventas dinámicamente basándose en más de 10.000 interacciones previas.",
    color: "violet",
  },
  {
    icon: Network,
    title: "Omnicanalidad Total",
    desc: "WhatsApp, Instagram y Web conectados a un único cerebro central.",
    color: "blue",
  },
  {
    icon: Database,
    title: "Sincronización CRM",
    desc: "Integración nativa bidireccional. Todo queda registrado.",
    color: "green",
  },
  {
    icon: TrendingUp,
    title: "Auto-optimización Constante",
    desc: "El sistema nunca deja de aprender. Realiza pruebas A/B automatizadas en sus propios mensajes para encontrar las combinaciones que generan mayor tasa de respuesta.",
    color: "pink",
  },
];

export const ENGINE_STATS = [
  { value: "< 0.5s", label: "Latencia media" },
  { value: "99.9%", label: "Uptime garantizado" },
  { value: "AES-256", label: "Cifrado de datos" },
];

// ---------- WHITE LABEL ----------

export const WHITE_LABEL_FEATURES: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Tags, title: "Branding completo", desc: "UI, tono, iconografía y experiencia coherente con tu marca." },
  { icon: Rocket, title: "Publicación oficial", desc: "Despliegue en App Store y Google Play o distribución privada enterprise." },
  { icon: ShieldCheck, title: "Cumplimiento enterprise", desc: "RGPD, controles de acceso y trazabilidad para operación segura." },
  { icon: Network, title: "Escala multinicho", desc: "Una base técnica para múltiples verticales sin rehacer producto." },
];

export const WHITE_LABEL_BULLETS = [
  "Identidad corporativa integral: marca, tonalidad visual y naming alineados a tu negocio.",
  "Distribución profesional en App Store y Google Play, o canal privado corporativo cuando lo necesites.",
  "Misma capa cognitiva MetaTok dentro de tu app: agentes que venden, cualifican y agendan 24/7.",
  "Paneles analíticos y reporting bajo tu white label para medir funnel y equipo comercial.",
  "Roadmaps y actualizaciones coordinadas sin que tu marca pierda el control narrativo ante el cliente.",
  "Opciones Enterprise: SLAs, privacidad (RGPD) y gobernanza de datos coherentes con tu compliance.",
];

export const WHITE_LABEL_CHAT = [
  { from: "bot" as const, text: "Hola, soy el asesor de TuMarca. ¿En qué te ayudo? 👋" },
  { from: "user" as const, text: "Quiero una propuesta para esta semana." },
  { from: "bot" as const, text: "¡Perfecto! ¿Prefieres reunión por videollamada o presencial?" },
  { from: "user" as const, text: "Videollamada, any day ✅" },
];

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

export const SECTORES: Sector[] = [
  {
    id: "inmobiliarias",
    icon: Building2,
    name: "Inmobiliarias y Agencias",
    badgeStat: "78%",
    badgeLabel: "elige al que responde primero",
    headline: "Pierde cero compradores por respuesta tardía.",
    description:
      "El 78% de los compradores elige al agente que responde primero. Con Metatok, tu agencia responde en segundos, cualifica la intención y agenda visitas mientras tu equipo trabaja en otras captaciones.",
    estadoActual: [
      "Leads sin respuesta durante horas (o días)",
      "Visitas canceladas por falta de confirmación",
      "Agentes perdiendo tiempo con prospectos fríos",
      "CRM con datos desactualizados o incompletos",
    ],
    conMetatok: [
      "Respuesta automática en <60 segundos por WhatsApp o web",
      "Cualificación: zona, presupuesto y urgencia antes de la visita",
      "Agenda de visitas gestionada por IA sin intervención humana",
      "CRM actualizado al instante con cada conversación",
    ],
    resultados: [
      { value: "+47%", label: "visitas agendadas" },
      { value: "−65%", label: "tiempo de respuesta" },
      { value: "3×", label: "más leads cualificados" },
    ],
    opciones: [
      "Voicebot para llamadas entrantes fuera de horario",
      "Secuencias de nutrición por WhatsApp hasta el cierre",
      "Dashboard de rendimiento por agente y zona",
    ],
  },
  {
    id: "clinicas",
    icon: Stethoscope,
    name: "Clínicas y Salud",
    badgeStat: "48%",
    badgeLabel: "menos inasistencia a citas",
    headline: "Cero pacientes perdidos por falta de seguimiento.",
    description:
      "Los pacientes agendan con quien responde primero. Con Metatok, tu clínica confirma citas, resuelve dudas frecuentes y reduce el ausentismo mientras tu equipo se enfoca en la atención.",
    estadoActual: [
      "Pacientes que llaman fuera de horario y no reciben respuesta",
      "Alto índice de inasistencia por falta de recordatorios",
      "Personal administrativo saturado con preguntas repetitivas",
      "Agenda desorganizada entre distintos canales",
    ],
    conMetatok: [
      "Respuesta inmediata a consultas por WhatsApp y web 24/7",
      "Recordatorios automáticos que reducen el ausentismo",
      "Triaje inicial y resolución de dudas frecuentes por IA",
      "Agenda centralizada y sincronizada con tu sistema clínico",
    ],
    resultados: [
      { value: "−48%", label: "inasistencia a citas" },
      { value: "+35%", label: "citas confirmadas" },
      { value: "24/7", label: "atención al paciente" },
    ],
    opciones: [
      "Voicebot para confirmación telefónica de citas",
      "Recordatorios multicanal (WhatsApp + SMS)",
      "Dashboard de ocupación por especialista",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    name: "E-commerce y Retail",
    badgeStat: "62%",
    badgeLabel: "carritos recuperados",
    headline: "Recupera ventas que hoy se quedan en el carrito.",
    description:
      "Cada consulta sin responder es una venta perdida. Con Metatok, tu tienda resuelve dudas de producto, recupera carritos abandonados y gestiona devoluciones sin depender de tu equipo.",
    estadoActual: [
      "Consultas de producto sin responder fuera de horario",
      "Carritos abandonados sin ningún seguimiento",
      "Equipo de soporte saturado con preguntas de estado de pedido",
      "Devoluciones gestionadas manualmente y con demoras",
    ],
    conMetatok: [
      "Respuesta instantánea a dudas de producto y stock",
      "Secuencias automáticas de recuperación de carrito por WhatsApp",
      "Seguimiento de pedidos resuelto sin intervención humana",
      "Gestión de devoluciones guiada paso a paso por IA",
    ],
    resultados: [
      { value: "+62%", label: "carritos recuperados" },
      { value: "−70%", label: "tickets de soporte" },
      { value: "24/7", label: "atención al cliente" },
    ],
    opciones: [
      "Notificaciones proactivas de estado de envío",
      "Upsell y cross-sell conversacional",
      "Integración nativa con tu ecommerce",
    ],
  },
  {
    id: "agencias",
    icon: Briefcase,
    name: "Agencias y Consultoras",
    badgeStat: "3×",
    badgeLabel: "más reuniones cualificadas",
    headline: "Cualifica y agenda sin saturar a tu equipo comercial.",
    description:
      "Las agencias compiten por velocidad de respuesta. Con Metatok, cada lead entrante se cualifica y agenda automáticamente antes de que tu equipo comercial intervenga.",
    estadoActual: [
      "Leads de formularios y redes que tardan horas en ser contactados",
      "Reuniones agendadas con prospectos sin presupuesto real",
      "Equipo comercial dedicando horas a cualificación manual",
      "Seguimiento inconsistente tras la primera llamada",
    ],
    conMetatok: [
      "Cualificación automática de presupuesto, autoridad y urgencia",
      "Agenda directa en el calendario del comercial correcto",
      "Nutrición automática de leads que aún no están listos",
      "Reporting de origen y calidad de cada oportunidad",
    ],
    resultados: [
      { value: "3×", label: "reuniones cualificadas" },
      { value: "−55%", label: "tiempo de cualificación" },
      { value: "24/7", label: "captación activa" },
    ],
    opciones: [
      "Enrutamiento automático por especialidad o cuenta",
      "Secuencias de nutrición por email y WhatsApp",
      "Dashboard de pipeline en tiempo real",
    ],
  },
  {
    id: "despachos",
    icon: Scale,
    name: "Despachos Profesionales",
    badgeStat: "45%",
    badgeLabel: "más consultas cerradas",
    headline: "Convierte consultas en clientes, no en carpetas sin cerrar.",
    description:
      "Abogados, gestores y asesores pierden horas facturables filtrando consultas. Con Metatok, cada caso se cualifica, documenta y agenda antes de la primera reunión.",
    estadoActual: [
      "Consultas iniciales sin respuesta durante el día",
      "Reuniones agendadas con casos fuera de tu área de práctica",
      "Documentación incompleta al llegar a la primera cita",
      "Seguimiento manual y disperso entre email y WhatsApp",
    ],
    conMetatok: [
      "Filtro automático por tipo de caso y viabilidad",
      "Recopilación de documentación antes de la reunión",
      "Agenda automática con el profesional adecuado",
      "Historial completo de cada consulta en tu CRM",
    ],
    resultados: [
      { value: "+45%", label: "consultas cerradas" },
      { value: "−60%", label: "tiempo administrativo" },
      { value: "24/7", label: "primer contacto" },
    ],
    opciones: [
      "Voicebot para líneas de atención al cliente",
      "Plantillas de documentación por área de práctica",
      "Panel de casos por prioridad y estado",
    ],
  },
  {
    id: "hoteles",
    icon: Hotel,
    name: "Hoteles y Hospedaje",
    badgeStat: "38%",
    badgeLabel: "más reservas directas",
    headline: "Convierte consultas en reservas directas, sin comisión de OTAs.",
    description:
      "Cada consulta por WhatsApp o Instagram sin respuesta se va a otra plataforma. Con Metatok, tu hotel confirma disponibilidad, gestiona reservas y fideliza huéspedes sin ampliar tu equipo de recepción.",
    estadoActual: [
      "Consultas de disponibilidad sin respuesta fuera de horario",
      "Reservas perdidas frente a plataformas con comisión",
      "Recepción saturada con preguntas repetitivas de huéspedes",
      "Upsell de servicios gestionado de forma manual o inexistente",
    ],
    conMetatok: [
      "Confirmación de disponibilidad y reserva directa 24/7",
      "Respuestas instantáneas a preguntas frecuentes de huéspedes",
      "Upsell automático de servicios y experiencias adicionales",
      "Seguimiento post-estancia para reseñas y fidelización",
    ],
    resultados: [
      { value: "+38%", label: "reservas directas" },
      { value: "−50%", label: "comisiones a OTAs" },
      { value: "24/7", label: "atención al huésped" },
    ],
    opciones: [
      "Check-in conversacional por WhatsApp",
      "Voicebot multilenguaje para recepción",
      "Dashboard de ocupación y canal de reserva",
    ],
  },
];

// ---------- SERVICIOS ----------

export interface Servicio {
  n: string;
  icon: LucideIcon;
  color: BadgeColor;
  title: string;
  desc: string;
  result: string;
}

export const SERVICIOS: Servicio[] = [
  {
    n: "01",
    icon: Bot,
    color: "violet",
    title: "Agentes de IA Conversacional",
    desc: "Agentes especializados con NLP que entienden intenciones, manejan objeciones y ejecutan estrategias de venta complejas en cada canal de tu negocio.",
    result: "Responde al 100% de tus leads en segundos, no en horas.",
  },
  {
    n: "02",
    icon: Phone,
    color: "pink",
    title: "Voicebots (Agentes de Voz)",
    desc: "Asistentes de voz ultrarrealistas que realizan y reciben llamadas telefónicas. Atienden objeciones, califican y agendan como un operador humano.",
    result: "Atiende llamadas entrantes sin tiempo de espera 24/7.",
  },
  {
    n: "03",
    icon: Target,
    color: "blue",
    title: "Cualificación de Leads",
    desc: "Filtramos y puntuamos cada prospecto en tiempo real para que solo hables con los que tienen intención real de compra.",
    result: "Aumenta tu tasa de cierre hasta un 3× sin más presupuesto.",
  },
  {
    n: "04",
    icon: Database,
    color: "teal",
    title: "Integración con CRM",
    desc: "Sincronización bidireccional con tu CRM mediante API. Datos limpios, actualizados y accionables 24/7, sin duplicados ni pérdidas.",
    result: "0 horas de carga manual de datos en tu equipo.",
  },
  {
    n: "05",
    icon: CalendarCheck,
    color: "amber",
    title: "Agendamiento Automático",
    desc: "Citas en tu calendario sin fricción. El agente negocia el horario, confirma la reunión y envía recordatorios personalizados.",
    result: "Hasta +54% más citas agendadas sin intervención humana.",
  },
  {
    n: "06",
    icon: Workflow,
    color: "ink",
    title: "Flow-works Inteligentes",
    desc: "Flujos de trabajo que disparan acciones automáticas: cualifican leads, agendan reuniones, actualizan el CRM y nutren prospectos en piloto automático.",
    result: "Tu embudo de ventas funciona solo, 24 horas al día.",
  },
];

export const SERVICIOS_TOP_STATS = [
  { icon: Zap, label: "+400% tasa de respuesta" },
  { icon: AlarmClock, label: "24/7 operativo" },
  { icon: Puzzle, label: "Integración omnicanal" },
];

export const TRUST_STRIP = [
  { icon: ShieldCheck, title: "100% Seguro", desc: "Tus datos protegidos" },
  { icon: Rocket, title: "Implementación Rápida", desc: "Listo en días, no en meses" },
  { icon: BarChart3, title: "Resultados Reales", desc: "Métricas que impulsan tu negocio" },
  { icon: Headphones, title: "Soporte 24/7", desc: "Estamos contigo siempre" },
];

// ---------- COMPARATIVA ----------

export const COMPARATIVA_ROWS: { icon: LucideIcon; feature: string; bot: string; metatok: string }[] = [
  {
    icon: Bot,
    feature: "Calidad de Respuesta",
    bot: "Estática y basada en botones (Árbol de decisiones)",
    metatok: "Fluida, humana y persuasiva (IA Generativa)",
  },
  {
    icon: Puzzle,
    feature: "Integración",
    bot: "Limitada o requiere Zapier complejo",
    metatok: "Nativa con CRMs, Apps y Sector Público",
  },
  {
    icon: Target,
    feature: "Objetivo Principal",
    bot: "Dar información y derivar a un humano",
    metatok: "Superar objeciones y cerrar la venta o cita",
  },
  {
    icon: Workflow,
    feature: "Configuración",
    bot: "Meses mapeando flujos interminables",
    metatok: "En minutos, entrenado con tus propios documentos",
  },
  {
    icon: Headphones,
    feature: "Soporte",
    bot: "Sistema de tickets básico",
    metatok: "Equipo de éxito dedicado y optimización continua",
  },
];

// ---------- DIAGNOSTICO ----------

export const DIAGNOSTICO_ACTUAL = [
  "Leads que no reciben respuesta en menos de 5 minutos",
  "Tu equipo pierde horas en prospectos que nunca comprarán",
  "Citas que se pierden por falta de seguimiento",
  "CRM desactualizado con datos duplicados o incompletos",
  "Sin presencia activa fuera del horario comercial",
];

export const DIAGNOSTICO_METATOK = [
  "Respuesta inmediata a cada lead, 24/7, en todos tus canales",
  "Solo hablas con prospectos listos para comprar",
  "Agendamiento automático con confirmación y recordatorios",
  "CRM actualizado en tiempo real, sin intervención humana",
  "Tu negocio capta y cualifica incluso mientras duermes",
];

// ---------- ACADEMY ----------

export const ACADEMY_FEATURES: { icon: LucideIcon; title: string; desc: string; color: BadgeColor }[] = [
  { icon: BookOpen, title: "Playbooks comerciales", desc: "Guiones, objeciones y secuencias listas para aplicar en campo.", color: "violet" },
  { icon: Megaphone, title: "Marketing de guerrilla", desc: "Campañas, contenido y posicionamiento para acelerar captación.", color: "blue" },
  { icon: Rocket, title: "Escalado operativo", desc: "Rituales y métricas para crecer sin perder conversión ni calidad.", color: "green" },
];

export const ACADEMY_ROUTE = [
  "Webinars semanales, certificaciones y guías por vertical para equipos de ventas.",
  "Framework de conversión con IA: prospección, cualificación, objeciones y cierre.",
  "Mentoría en posicionamiento de marca para vender método, no solo tecnología.",
];

export const ACADEMY_MODULES = [
  { title: "Arquitectura comercial con IA", progress: 75 },
  { title: "Guiones de cierre por nicho", progress: 60 },
  { title: "Escalado y liderazgo de equipo", progress: 45 },
];

// ---------- PROCESO ----------

export const PROCESO: { n: string; icon: LucideIcon; title: string; desc: string; tag: string }[] = [
  {
    n: "01",
    icon: Target,
    title: "Auditoría de Diagnóstico",
    desc: "Un experto analiza tu operación actual, detecta fugas de conversión y cuantifica cuánto estás perdiendo sin automatización.",
    tag: "Mapa claro de prioridades",
  },
  {
    n: "02",
    icon: Route,
    title: "Estrategia a Medida",
    desc: "Diseñamos la arquitectura de agentes, flujos e integraciones adaptada exactamente a tu modelo de negocio y tus canales actuales.",
    tag: "Propuesta técnica personalizada",
  },
  {
    n: "03",
    icon: FileText,
    title: "Presupuesto Transparente",
    desc: "Recibes una propuesta de precio basada en la complejidad real. Sin letra pequeña, sin costes ocultos, sin permanencia forzada.",
    tag: "Inversión clara y escalable",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Despliegue Llave en Mano",
    desc: "Entre 15 y 30 días: programación, entrenamiento de agentes y QA completo. Tu equipo no toca código. Solo recibe resultados.",
    tag: "Sistema activo en producción",
  },
];

// ---------- CANALES ----------

export const CANALES: { icon: LucideIcon; name: string; desc: string; kind?: "whatsapp" | "instagram" }[] = [
  { icon: Phone, name: "Teléfono", desc: "Llamadas de voz IA" },
  { icon: Globe, name: "Web", desc: "Chat en tu sitio web" },
  { icon: Phone, name: "WhatsApp", desc: "El canal más usado", kind: "whatsapp" },
  { icon: Phone, name: "Instagram", desc: "DMs automatizados", kind: "instagram" },
  { icon: PlugZap, name: "API", desc: "Integra cualquier sistema" },
];

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

export const PLANES: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    basePrice: 99,
    desc: "Ideal para equipos pequeños que quieren empezar con IA sin riesgo.",
    features: [
      "1 canal integrado (Web o WhatsApp)",
      "Asistente IA básico con NLP",
      "Hasta 500 conversaciones/mes",
      "Panel de control básico",
      "Cualificación automática de leads",
      "Soporte por email",
    ],
    cta: "Iniciar ahora",
  },
  {
    id: "business",
    name: "Business",
    basePrice: 239,
    desc: "Para empresas que quieren automatización total y no perder un solo lead.",
    features: [
      "Hasta 3 canales integrados",
      "Chatbots y voicebots premium",
      "Seguimiento y scoring automático",
      "Integración CRM bidireccional",
      "Agendamiento automático con recordatorios",
      "Flow-works inteligentes",
      "Panel de analítica avanzada",
      "Soporte prioritario 24/5",
    ],
    cta: "Escalar mis ventas",
    featured: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    basePrice: 590,
    desc: "Solución avanzada con canales ilimitados y acompañamiento personalizado.",
    features: [
      "Canales ilimitados",
      "Flujos y bots completamente a medida",
      "Integraciones API avanzadas",
      "Gestor de cuenta dedicado 1:1",
      "SLA de disponibilidad garantizado",
      "Onboarding personalizado",
      "Soporte técnico especializado 24/7",
    ],
    cta: "Solicitar propuesta",
  },
];

// ---------- TESTIMONIOS ----------

export interface Testimonio {
  name: string;
  role: string;
  quote: string;
}

export const TESTIMONIOS: Testimonio[] = [
  {
    name: "David Gómez",
    role: "Director de Ventas, inmobiliaria",
    quote:
      "Metatok.ai transformó nuestro embudo de ventas: asistentes humanoides atienden 24/7 y, con automatizaciones inteligentes, convierten consultas frías en citas cerradas.",
  },
  {
    name: "Dra. Laura Peñafiel",
    role: "Dirección de clínica",
    quote:
      "Nuestro embudo de ventas ahora fluye solo: asistentes humanoides resuelven dudas al instante y las automatizaciones de seguimiento recuperan citas que antes se perdían.",
  },
  {
    name: "Ana Fuentes",
    role: "Gerente de Operaciones, marketplace digital",
    quote:
      "Escalamos el embudo de ventas sin ampliar equipo: asistentes humanoides gestionan pedidos y devoluciones, y las automatizaciones mantienen cada oportunidad activa hasta la compra.",
  },
  {
    name: "Luis Carrión",
    role: 'Propietario, "Viajes Sin Fronteras"',
    quote:
      "Pasamos de respuestas tardías a un embudo de ventas siempre activo: asistentes humanoides de voz atienden con tono llamativo y las automatizaciones confirman y reactivan reservas.",
  },
  {
    name: "Juan Valdés",
    role: 'Director de Ventas, "TecnoCenter"',
    quote:
      "Nuestro embudo de ventas en web ahora convierte mejor: asistentes humanoides responden de forma persuasiva y las automatizaciones filtran, priorizan y empujan leads con alta intención.",
  },
  {
    name: "Ricardo Garrido",
    role: 'Abogado socio, "Garrido & Asociados"',
    quote:
      "Metatok.ai ordenó por completo nuestro embudo de ventas: asistentes humanoides cualifican casos y las automatizaciones agendan, documentan y dejan cada consulta lista para cerrar.",
  },
];

// ---------- AUDITORIA ----------

export const AUDITORIA_CHECKLIST = [
  "Análisis de tus canales y volumen de tráfico actuales",
  "Detección de fugas de conversión en tu funnel",
  "Mapa estratégico personalizado con IA",
  "Estimación de impacto real en facturación",
];

export const AUDITORIA_STATS = [
  { value: "+38%", label: "leads recuperados" },
  { value: "22h", label: "ahorradas / semana" },
  { value: "+54%", label: "citas agendadas" },
  { value: "+27%", label: "tasa de conversión" },
];

// ---------- FAQ ----------

export const FAQ: { q: string; a: string }[] = [
  {
    q: "¿En qué consiste exactamente el servicio de automatización con IA?",
    a: "Desplegamos agentes de inteligencia artificial que asumen tareas reales de tu operación: ventas, soporte, cualificación de leads, agendamiento y gestión de redes, en los canales que ya usas (WhatsApp, llamadas de voz, Instagram y tu web). No es un chatbot de respuestas predefinidas: es un sistema entrenado con la información de tu negocio que conversa, cualifica y cierra de forma autónoma.",
  },
  {
    q: "¿Cómo es el proceso desde que solicito mi auditoría gratuita?",
    a: "Un experto en automatización analiza tu operación actual (canales, volumen, embudo) y te entrega un diagnóstico con las fugas de conversión detectadas. A partir de ahí diseñamos la arquitectura de agentes a medida, te presentamos una propuesta de precio transparente y desplegamos el sistema completo en 15-30 días.",
  },
  {
    q: "¿Tengo algún compromiso de permanencia?",
    a: "No. Todos los planes de MetaTok operan sin permanencia ni costes ocultos. Puedes escalar, cambiar de plan o cancelar cuando lo necesites: nuestro objetivo es que te quedes por resultados, no por contrato.",
  },
  {
    q: "¿Por qué el presupuesto es a medida?",
    a: "Cada negocio tiene canales, volumen de conversaciones e integraciones distintas. En lugar de venderte un paquete genérico, auditamos tu operación real y te presentamos una inversión basada en la complejidad exacta de tu caso, sin letra pequeña.",
  },
  {
    q: "¿Cuánto tiempo tarda la implementación completa?",
    a: "Entre 15 y 30 días desde la auditoría inicial hasta el sistema activo en producción, incluyendo programación de agentes, entrenamiento con tu información de negocio e integraciones con tu CRM o herramientas actuales. Tu equipo no toca código en ningún momento.",
  },
  {
    q: "¿En qué se diferencian vuestros agentes de un chatbot convencional?",
    a: "Un chatbot tradicional sigue un árbol de decisiones estático y deriva a un humano en cuanto se complica la conversación. Los agentes de MetaTok usan IA generativa: entienden intención y contexto, superan objeciones y están entrenados para cerrar la venta o la cita, no solo para dar información.",
  },
];

// ---------- SHARED ICONS ----------

export const ICONS = {
  Mail,
  MapPin,
  Users,
  Award,
  MonitorSmartphone,
  Sparkles,
  Repeat,
  Lock,
  Gauge,
  GraduationCap,
};
