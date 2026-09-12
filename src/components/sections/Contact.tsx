import type { Dictionary } from "@/dictionaries/types";
import Reveal from "@/components/Reveal";

export default function Contact({ dict }: { dict: Dictionary }) {
  const c = dict.contact;
  const subject = encodeURIComponent(c.title);

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="glass inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neon">
          {c.eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
          {c.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-white/65">{c.subtitle}</p>

        <a
          href={`mailto:${c.email}?subject=${subject}`}
          className="glow-btn mt-8 inline-block rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          {c.formSubmit}
        </a>

        <p className="mt-4 text-sm font-medium text-white">{c.email}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/55">
          <span>{c.coverage}</span>
          <span>{c.gdpr}</span>
        </div>

        <p className="mx-auto mt-6 max-w-lg text-xs text-white/40">{c.disclaimer}</p>
      </Reveal>
    </section>
  );
}
