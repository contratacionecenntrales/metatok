"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/dictionaries/types";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openSolutions = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  };
  const scheduleCloseSolutions = () => {
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 150);
  };

  return (
    <header className="glass sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-2 shrink-0">
          <Image src="/images/logo-mark.svg" alt="MetaTok AI" width={32} height={32} className="rounded-lg" />
          <span className="font-display text-lg font-semibold text-foreground">
            MetaTok<span className="text-brand">.ai</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div className="relative" onMouseEnter={openSolutions} onMouseLeave={scheduleCloseSolutions}>
            <button
              type="button"
              onClick={openSolutions}
              onFocus={openSolutions}
              aria-expanded={solutionsOpen}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {dict.nav.solution}
              <ChevronDown size={14} className={`transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
            </button>

            {solutionsOpen && (
              <div className="glass-strong absolute left-1/2 top-full z-50 mt-3 w-[36rem] -translate-x-1/2 rounded-2xl p-3 shadow-xl">
                <div className="grid grid-cols-2 gap-1">
                  {dict.nav.solutions.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${locale}/soluciones/${s.slug}`}
                      onClick={() => setSolutionsOpen(false)}
                      className="rounded-xl px-4 py-3 transition hover:bg-white/60"
                    >
                      <p className="text-sm font-semibold text-foreground">{s.label}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href={`/${locale}#contacto`} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
            {dict.nav.contact}
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher locale={locale} />
          <a
            href={`/${locale}#contacto`}
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
          >
            {dict.nav.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="glass-strong border-t border-border px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            <button
              type="button"
              onClick={() => setMobileSolutionsOpen((v) => !v)}
              aria-expanded={mobileSolutionsOpen}
              className="flex items-center justify-between py-2 text-sm font-medium text-muted-foreground"
            >
              {dict.nav.solution}
              <ChevronDown size={14} className={`transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileSolutionsOpen && (
              <div className="flex flex-col gap-1 pb-2 pl-3">
                {dict.nav.solutions.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${locale}/soluciones/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="py-1.5 text-sm text-muted-foreground"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            <a
              href={`/${locale}#contacto`}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-muted-foreground"
            >
              {dict.nav.contact}
            </a>
            <div className="pt-2">
              <LocaleSwitcher locale={locale} />
            </div>
            <a
              href={`/${locale}#contacto`}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand px-5 py-2 text-center text-sm font-semibold text-white"
            >
              {dict.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
