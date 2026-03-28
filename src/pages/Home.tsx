import { Navbar, Footer } from "@/components/layout/Shared";
import { Hero, Stats } from "@/components/home/HeroAndStats";
import { Services, HowItWorks } from "@/components/home/ServicesAndProcess";
import { OurWork } from "@/components/home/OurWork";
import { Industries, TechStack } from "@/components/home/IndustriesAndTech";
import { WhyNyxion } from "@/components/home/CaseStudiesAndTrust";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-blue/30 selection:text-navy">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <HowItWorks />
        <Industries />
        <OurWork />
        <WhyNyxion />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
