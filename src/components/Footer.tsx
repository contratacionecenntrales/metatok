import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const FOOTER_LINKS = {
  Solución: [
    { label: "Servicios", href: "#servicios" },
    { label: "Por sector", href: "#sectores" },
    { label: "Motor MetaTok Engine V5", href: "#motor-metatok" },
    { label: "Producto White Label", href: "#producto-white-label" },
  ],
  Explorar: [
    { label: "MetaTok Academy", href: "#academy" },
    { label: "Planes y precios", href: "#planes" },
    { label: "Casos de éxito", href: "#testimonios" },
    { label: "Preguntas frecuentes", href: "#faq" },
  ],
  Legal: [
    { label: "Aviso Legal", href: "/legal/aviso-legal" },
    { label: "Política de Privacidad", href: "/legal/privacidad" },
    { label: "Política de Cookies", href: "/legal/cookies" },
    { label: "Términos y Condiciones", href: "/legal/terminos" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#e1e8f7] bg-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
            Ecosistema de Agentes Autónomos de IA que venden, atienden y
            gestionan tu negocio 24/7 en WhatsApp, llamadas, Instagram y web.
          </p>
          <a
            href="mailto:info@metatok.ai"
            className="flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-brand-700"
          >
            <Mail className="h-4 w-4 text-brand-500" />
            info@metatok.ai
          </a>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title}>
            <p className="text-sm font-bold text-ink">{title}</p>
            <ul className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-brand-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-[#e1e8f7]">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-ink-soft">
            © {new Date().getFullYear()} MetaTok AI — Todos los derechos reservados.
          </p>
          <a
            href="https://evolvixglobal.es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft hover:text-brand-700"
          >
            MetaTok es una marca de Grupo Evolvix Global
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </Container>
      </div>
    </footer>
  );
}
