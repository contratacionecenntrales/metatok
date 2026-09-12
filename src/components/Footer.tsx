import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/dictionaries/types";
import { legalSlugs } from "@/lib/legal";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const solutionHrefs = ["#servicios", "#sectores", "#motor", "#white-label"];
  const exploreHrefs = ["#academy", "#precios", "#casos", "#faq"];

  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Image src="/images/logo-mark.svg" alt="MetaTok AI" width={32} height={32} className="rounded-lg" />
              <span className="font-display text-lg font-semibold text-white">
                MetaTok<span className="text-brand">.ai</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">{dict.footer.tagline}</p>
            <a href={`mailto:${dict.contact.email}`} className="mt-4 inline-block text-sm text-white/80 hover:text-white">
              {dict.contact.email}
            </a>
          </div>

          <FooterCol title={dict.footer.solutionTitle} links={dict.footer.solutionLinks} hrefs={solutionHrefs} locale={locale} />
          <FooterCol title={dict.footer.exploreTitle} links={dict.footer.exploreLinks} hrefs={exploreHrefs} locale={locale} />

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{dict.footer.legalTitle}</h3>
            <ul className="mt-4 space-y-3">
              {dict.footer.legalLinks.map((label, i) => (
                <li key={label}>
                  <Link href={`/${locale}/legal/${legalSlugs[i]}`} className="text-sm hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row">
          <p>© 2026 {dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  hrefs,
  locale,
}: {
  title: string;
  links: string[];
  hrefs: string[];
  locale: Locale;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((label, i) => (
          <li key={label}>
            <a href={`/${locale}${hrefs[i]}`} className="text-sm hover:text-white">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
