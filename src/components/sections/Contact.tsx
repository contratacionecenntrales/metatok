"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/dictionaries/types";
import Reveal from "@/components/Reveal";

export default function Contact({ dict }: { dict: Dictionary }) {
  const c = dict.contact;
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`${c.title} — ${name}`);
    const bodyLines = [
      `${c.formName}: ${name}`,
      company ? `${c.formCompany}: ${company}` : null,
      `${c.formEmail}: ${email}`,
      "",
      message,
    ].filter((line): line is string => line !== null);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${c.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="glass inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neon">
            {c.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            {c.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{c.subtitle}</p>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="glass-strong mx-auto mt-10 max-w-2xl rounded-3xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                  {c.formName}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-white/80 px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div>
                <label htmlFor="contact-company" className="text-sm font-medium text-foreground">
                  {c.formCompany}
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-white/80 px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                  {c.formEmail}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-white/80 px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                  {c.formMessage}
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1.5 w-full resize-none rounded-xl border border-border bg-white/80 px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
            </div>

            <button type="submit" className="glow-btn mt-6 w-full rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark sm:w-auto">
              {c.formSubmit}
            </button>

            <p className="mt-4 text-sm font-medium text-foreground">{c.email}</p>

            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>{c.coverage}</span>
              <span>{c.gdpr}</span>
            </div>

            <p className="mx-auto mt-6 max-w-lg text-center text-xs text-muted-foreground/80">{c.disclaimer}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
