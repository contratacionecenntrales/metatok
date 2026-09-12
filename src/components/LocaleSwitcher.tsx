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
        className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/85 transition hover:border-white/30"
      >
        <span>{localeFlags[locale]}</span>
        <span className="uppercase">{locale}</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 z-20 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-navy shadow-xl">
            {locales.map((l) => (
              <a
                key={l}
                href={pathFor(l)}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 text-sm text-white/85 hover:bg-white/10 ${
                  l === locale ? "bg-white/5 font-semibold text-white" : ""
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
