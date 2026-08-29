"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Check, ChevronDown, Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { LOCALES, LOCALE_FLAGS, LOCALE_LABELS, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function handleSelect(next: Locale) {
    setOpen(false);
    router.replace(pathname, { locale: next });
  }

  return (
    <div className={cn("relative inline-block", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("languageSwitcher.label")}
        className="inline-flex items-center gap-2 rounded-lg border border-[#e1e8f7] bg-white px-3.5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700"
      >
        <Globe className="h-4 w-4" />
        <span>{LOCALE_FLAGS[locale]}</span>
        <span>{LOCALE_LABELS[locale]}</span>
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <button
              type="button"
              aria-hidden
              tabIndex={-1}
              className="fixed inset-0 z-40 cursor-default"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15 }}
              className="absolute bottom-full end-0 z-50 mb-2 w-56 rounded-2xl border border-[#e1e8f7] bg-white p-2 shadow-xl shadow-brand-900/10"
            >
              {LOCALES.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => handleSelect(l)}
                  className={cn(
                    "flex w-full items-center justify-between gap-2 rounded-xl px-3.5 py-2.5 text-start text-sm font-medium transition-colors",
                    l === locale ? "bg-brand-50 text-brand-700" : "text-ink-soft hover:bg-brand-50 hover:text-brand-700",
                  )}
                >
                  <span className="flex items-center gap-2">
                    <span>{LOCALE_FLAGS[l]}</span>
                    {LOCALE_LABELS[l]}
                  </span>
                  {l === locale ? <Check className="h-4 w-4" /> : null}
                </button>
              ))}
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
