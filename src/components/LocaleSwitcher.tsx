"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { locales, localeFlags, localeNames, type Locale } from "@/i18n/config";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function pathFor(target: Locale) {
    const rest = pathname.split("/").slice(2).join("/");
    return `/${target}${rest ? `/${rest}` : ""}`;
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-foreground transition hover:border-brand/40"
      >
        <span>{localeFlags[locale]}</span>
        <span className="uppercase">{locale}</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="glass-strong absolute right-0 z-20 mt-2 w-44 overflow-hidden rounded-xl">
            {locales.map((l) => (
              <a
                key={l}
                href={pathFor(l)}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-brand/5 ${
                  l === locale ? "bg-brand/5 font-semibold" : ""
                }`}
              >
                <span>{localeFlags[l]}</span>
                <span>{localeNames[l]}</span>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
