"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Arquitectura IA", href: "#arquitectura" },
  { label: "Casos de Éxito", href: "#casos-de-exito" },
  { label: "Calculadora ROI", href: "#roi" },
  { label: "Precios", href: "#precios" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass-nav" : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between py-3.5">
        <a href="#top" className="group" aria-label="MetaTok.ai — Inicio">
          <Logo markClassName="transition-transform duration-300 group-hover:scale-105" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://app.metatok.ai"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
          >
            Iniciar Sesión
          </a>
          <Button href="#demo" size="md">
            Agendar Demo
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/5 lg:hidden"
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
            className="overflow-hidden glass-nav lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-3 border-t border-white/10 pt-4">
                <a
                  href="https://app.metatok.ai"
                  className="rounded-lg px-3 py-2 text-center text-base font-semibold text-slate-200 hover:bg-white/5"
                >
                  Iniciar Sesión
                </a>
                <Button href="#demo" size="md" onClick={() => setOpen(false)}>
                  Agendar Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
