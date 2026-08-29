"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { TRUST_LOGOS } from "@/lib/data";

export function TrustBanner() {
  return (
    <section className="border-y border-[#ece9f7] bg-white py-10">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-base font-medium text-ink-soft sm:text-lg"
        >
          MetaTok ya está procesando{" "}
          <span className="font-display font-extrabold text-brand-600">+12 millones</span> de
          mensajes al mes en conversaciones de venta.
        </motion.p>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink-soft/80">
          Sistemas robustos preparados para facturación masiva. Seguridad de grado bancario para
          tus datos.
        </p>

        <div className="relative mt-6 overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee items-center gap-16">
            {[...TRUST_LOGOS, ...TRUST_LOGOS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap font-display text-xl font-bold text-ink/25"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
