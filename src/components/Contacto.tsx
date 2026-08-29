"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Send, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const FIELDS = [
  { name: "nombre", label: "Nombre", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "empresa", label: "Empresa", type: "text", required: true },
  { name: "telefono", label: "Teléfono", type: "tel", required: true },
  { name: "web", label: "Sitio web (opcional)", type: "text", required: false },
];

export function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu próxima ventaja competitiva"
          description="Escríbenos y un técnico senior te contactará en menos de 24 horas para agendar tu auditoría gratuita."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2"
          >
            <div className="card-surface flex flex-col gap-5 rounded-3xl p-7">
              <a
                href="mailto:info@metatok.ai"
                className="flex items-center gap-3 text-sm font-semibold text-ink hover:text-brand-700"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <Mail className="h-5 w-5" />
                </span>
                info@metatok.ai
              </a>
              <div className="flex items-center gap-3 text-sm text-ink-soft">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <MapPin className="h-5 w-5" />
                </span>
                Servicio remoto · Cobertura internacional
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-soft">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                Tratamos tus datos según RGPD
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-brand-100 bg-brand-50/50 p-7">
              <p className="text-sm font-bold text-brand-700">Sin compromiso</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                No vendemos llamadas comerciales. Recibirás un análisis técnico real de cómo la IA
                puede maximizar tu facturación actual.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="card-surface rounded-3xl p-7 lg:col-span-3 sm:p-9"
          >
            {submitted ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h3 className="text-xl font-bold text-ink">¡Solicitud recibida!</h3>
                <p className="max-w-sm text-sm text-ink-soft">
                  Un técnico senior de MetaTok te contactará en menos de 24 horas para agendar tu
                  auditoría gratuita.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                {FIELDS.map((field) => (
                  <div key={field.name} className={field.name === "web" ? "sm:col-span-2" : ""}>
                    <label htmlFor={field.name} className="mb-1.5 block text-sm font-semibold text-ink">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      className="w-full rounded-xl border border-[#ece9f7] bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label htmlFor="automatizar" className="mb-1.5 block text-sm font-semibold text-ink">
                    ¿Qué quieres automatizar? (opcional)
                  </label>
                  <textarea
                    id="automatizar"
                    name="automatizar"
                    rows={4}
                    className="w-full rounded-xl border border-[#ece9f7] bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Solicitar auditoría
                    <Send className="h-4 w-4" />
                  </Button>
                  <p className="mt-3 text-xs text-ink-soft">
                    Al enviar aceptas que te contactemos sobre tu solicitud de auditoría.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
