"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/dictionaries/types";
import LocaleSwitcher from "./LocaleSwitcher";

type MenuItem = { label: string; desc: string; slug: string };

function DesktopDropdown({
  label,
  items,
  locale,
}: {
  label: string;
  items: MenuItem[];
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <button
        type="button"
        onClick={openMenu}
        onFocus={openMenu}
        aria-expanded={open}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition hover:text-foreground"
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`glass-strong absolute left-1/2 top-full z-50 mt-3 w-80 -translate-x-1/2 rounded-2xl p-3 shadow-[0_16px_48px_rgba(15,23,42,0.10)] transition-all duration-200 ease-out ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/soluciones/${item.slug}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 transition hover:bg-white/60"
            >
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  label,
  items,
  locale,
  onNavigate,
}: {
  label: string;
  items: MenuItem[];
  locale: Locale;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3 text-sm font-medium text-muted-foreground"
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 pb-3 pl-3">
            {items.map((item) => (
              <Link key={item.slug} href={`/${locale}/soluciones/${item.slug}`} onClick={onNavigate} className="py-1.5 text-sm text-muted-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);

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
          <Link href={`/${locale}`} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
            {dict.nav.home}
          </Link>
          <DesktopDropdown label={dict.nav.solution} items={dict.nav.solutionMenu} locale={locale} />
          <DesktopDropdown label={dict.nav.explore} items={dict.nav.exploreMenu} locale={locale} />
          <a href={`/${locale}#contacto`} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
            {dict.nav.contact}
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LocaleSwitcher locale={locale} />
          <a
            href={`/${locale}#contacto`}
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
          >
            {dict.nav.login}
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

      <div className={`grid transition-all duration-300 ease-out md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="glass-strong border-t border-border px-4 pb-4">
            <nav className="flex flex-col pt-2">
              <Link href={`/${locale}`} onClick={() => setOpen(false)} className="border-b border-border/60 py-3 text-sm font-medium text-muted-foreground">
                {dict.nav.home}
              </Link>
              <MobileAccordion label={dict.nav.solution} items={dict.nav.solutionMenu} locale={locale} onNavigate={() => setOpen(false)} />
              <MobileAccordion label={dict.nav.explore} items={dict.nav.exploreMenu} locale={locale} onNavigate={() => setOpen(false)} />
              <a
                href={`/${locale}#contacto`}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-muted-foreground"
              >
                {dict.nav.contact}
              </a>
              <div className="flex items-center justify-between pt-3">
                <LocaleSwitcher locale={locale} />
              </div>
              <a
                href={`/${locale}#contacto`}
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-brand px-5 py-2 text-center text-sm font-semibold text-white"
              >
                {dict.nav.login}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
