"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFaq } from "@/lib/data";
import { cn } from "@/lib/utils";

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#e1e8f7] px-5 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-start text-base font-medium text-ink transition-colors hover:text-brand-700"
      >
        {q}
        <ChevronDown className={cn("h-4 w-4 shrink-0 text-ink-soft transition-transform duration-200", open && "rotate-180")} />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-ink-soft">{a}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const t = useTranslations();
  const faq = getFaq(t);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const mid = Math.ceil(faq.length / 2);
  const columns = [faq.slice(0, mid), faq.slice(mid)];

  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
          description={t("faq.description")}
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="rounded-2xl border border-[#e1e8f7] bg-white">
              {col.map((item, i) => {
                const globalIndex = colIndex * mid + i;
                return (
                  <FaqItem
                    key={item.q}
                    q={item.q}
                    a={item.a}
                    open={openIndex === globalIndex}
                    onToggle={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
