import type { Dictionary } from "@/dictionaries/types";

export default function TrustBar({ dict }: { dict: Dictionary }) {
  const t = dict.trustbar;
  return (
    <section className="border-b border-border bg-muted/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">{t.line}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {t.logos.map((logo) => (
            <span key={logo} className="font-display text-lg font-semibold text-foreground/30 grayscale">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
