import type { Dictionary } from "@/dictionaries/types";

export default function Contact({ dict }: { dict: Dictionary }) {
  const c = dict.contact;
  const subject = encodeURIComponent(c.title);

  return (
    <section id="contacto" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
          {c.eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
          {c.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{c.subtitle}</p>

        <a
          href={`mailto:${c.email}?subject=${subject}`}
          className="mt-8 inline-block rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
        >
          {c.formSubmit}
        </a>

        <p className="mt-4 text-sm font-medium text-foreground">{c.email}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>{c.coverage}</span>
          <span>{c.gdpr}</span>
        </div>

        <p className="mx-auto mt-6 max-w-lg text-xs text-muted-foreground/80">{c.disclaimer}</p>
      </div>
    </section>
  );
}
