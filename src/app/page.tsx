import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBanner } from "@/components/TrustBanner";
import { Problema } from "@/components/Problema";
import { Beneficios } from "@/components/Beneficios";
import { MotorEngine } from "@/components/MotorEngine";
import { WhiteLabel } from "@/components/WhiteLabel";
import { Sectores } from "@/components/Sectores";
import { Servicios } from "@/components/Servicios";
import { Comparativa } from "@/components/Comparativa";
import { Diagnostico } from "@/components/Diagnostico";
import { Academy } from "@/components/Academy";
import { Proceso } from "@/components/Proceso";
import { Canales } from "@/components/Canales";
import { Planes } from "@/components/Planes";
import { Testimonios } from "@/components/Testimonios";
import { Auditoria } from "@/components/Auditoria";
import { Faq } from "@/components/Faq";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBanner />
        <Problema />
        <Beneficios />
        <MotorEngine />
        <WhiteLabel />
        <Sectores />
        <Servicios />
        <Comparativa />
        <Diagnostico />
        <Academy />
        <Proceso />
        <Canales />
        <Planes />
        <Testimonios />
        <Auditoria />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
