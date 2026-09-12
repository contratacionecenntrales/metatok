"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/dictionaries/types";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}#solucion`, label: dict.nav.solution },
    { href: `/${locale}#explorar`, label: dict.nav.explore },
    { href: `/${locale}#contacto`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-deep/90 backdrop-blur supports-[backdrop-filter]:bg-navy-deep/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-2 shrink-0">
          <Image src="/images/logo-mark.svg" alt="MetaTok AI" width={32} height={32} className="rounded-lg" />
          <span className="font-display text-lg font-semibold text-white">
            MetaTok<span className="text-brand">.ai</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/80 transition hover:text-white">
              {l.label}
            </a>
          ))}
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
          className="inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-deep px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-white/80">
                {l.label}
              </a>
            ))}
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
