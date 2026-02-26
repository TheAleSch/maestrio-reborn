import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { ConfidenceLevels } from "@/components/ConfidenceLevels";
import { Features } from "@/components/Features";
import { Integrations } from "@/components/Integrations";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <ConfidenceLevels />
      <Features />
      <Integrations />
      <CTA />
      <Footer />
    </main>
  );
}
