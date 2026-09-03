import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { LOCALES } from "@/i18n/routing";

const SLUG_TO_KEY = {
  "aviso-legal": "avisoLegal",
  privacidad: "privacidad",
  cookies: "cookies",
  terminos: "terminos",
} as const;

type Slug = keyof typeof SLUG_TO_KEY;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    Object.keys(SLUG_TO_KEY).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const key = SLUG_TO_KEY[slug as Slug];
  if (!key) return {};
  const t = await getTranslations({ locale, namespace: "legalPages" });
  return { title: t(`${key}.title`) };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const key = SLUG_TO_KEY[slug as Slug];
  if (!key) notFound();

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legalPages" });
  const sections = t.raw(`${key}.sections`) as { heading: string; body: string[] }[];

  return (
    <>
      <Header />
      <main className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {t(`${key}.title`)}
          </h1>
          <p className="mt-3 text-sm text-ink-soft">{t(`${key}.updated`)}</p>

          <div className="mt-10 flex flex-col gap-8">
            {sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-lg font-bold text-ink">{section.heading}</h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.body.map((paragraph, j) => (
                    <p key={j} className="text-sm leading-relaxed text-ink-soft">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
