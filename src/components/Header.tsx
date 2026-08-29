"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const NAV: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  {
    label: "Solución",
    children: [
      { label: "Servicios", href: "#servicios" },
      { label: "Por sector", href: "#sectores" },
      { label: "Planes y precios", href: "#planes" },
    ],
  },
  {
    label: "Explorar",
    children: [
      { label: "Motor MetaTok Engine V5", href: "#motor-metatok" },
      { label: "Producto White Label", href: "#producto-white-label" },
      { label: "MetaTok Academy", href: "#academy" },
      { label: "Casos de éxito", href: "#testimonios" },
    ],
  },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="bg-ink py-2 text-center text-xs font-medium text-white/80">
        <a
          href="https://evolvixglobal.es"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-white"
        >
          MetaTok es una marca de Grupo Evolvix Global
          <span className="underline underline-offset-2">evolvixglobal.es</span>
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>

      <header
        className={cn(
          "w-full border-b transition-all duration-300",
          scrolled ? "glass-nav-light border-[#e1e8f7]" : "border-transparent bg-white",
        )}
      >
        <Container className="flex h-18 items-center justify-between py-3.5">
          <a href="#inicio" className="group" aria-label="MetaTok AI — Inicio">
            <Logo markClassName="transition-transform duration-300 group-hover:scale-105" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full w-64 rounded-2xl border border-[#e1e8f7] bg-white p-2 shadow-xl shadow-brand-900/5"
                      >
                        {item.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="https://app.metatok.ai"
              className="rounded-lg px-3.5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:text-brand-700"
            >
              Iniciar sesión
            </a>
            <span className="mx-1 h-5 w-px bg-[#e1e8f7]" />
            <span className="rounded-lg px-2.5 py-2 text-sm font-semibold text-ink-soft">ES</span>
            <Button href="#contacto" size="md">
              Crear mi agente
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-ink hover:bg-brand-50 lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-[#e1e8f7] bg-white lg:hidden"
            >
              <Container className="flex flex-col gap-1 py-4">
                {NAV.map((item) => (
                  <div key={item.label}>
                    <a
                      href={item.href ?? item.children?.[0].href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base font-semibold text-ink"
                    >
                      {item.label}
                    </a>
                    {item.children ? (
                      <div className="ml-3 flex flex-col gap-0.5 border-l border-[#e1e8f7] pl-3">
                        {item.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-3 py-2 text-sm text-ink-soft hover:text-brand-700"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
                <div className="mt-2 flex flex-col gap-3 border-t border-[#e1e8f7] pt-4">
                  <a
                    href="https://app.metatok.ai"
                    className="rounded-lg px-3 py-2 text-center text-base font-semibold text-ink-soft hover:text-brand-700"
                  >
                    Iniciar sesión
                  </a>
                  <Button href="#contacto" size="md" onClick={() => setOpen(false)}>
                    Crear mi agente
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Container>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </div>
  );
}
