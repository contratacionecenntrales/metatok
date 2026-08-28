import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SolutionsMatrix } from "@/components/SolutionsMatrix";
import { RoiCalculator } from "@/components/RoiCalculator";
import { Architecture } from "@/components/Architecture";
import { CaseStudies } from "@/components/CaseStudies";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <SolutionsMatrix />
        <RoiCalculator />
        <Architecture />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
