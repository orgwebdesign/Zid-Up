import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PlatformStrip } from "@/components/sections/PlatformStrip";
import { WelcomeStory } from "@/components/sections/WelcomeStory";
import { RealClientResults } from "@/components/sections/RealClientResults";
import { Features } from "@/components/sections/Features";
import { WhatsAppCTA } from "@/components/sections/WhatsAppCTA";
import { Statistics } from "@/components/sections/Statistics";
import { PricingDashboard } from "@/components/sections/PricingDashboard";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FAQ } from "@/components/sections/FAQ";
import { BlogPreview } from "@/components/sections/BlogPreview";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

function getPricing() {
  try {
    const dataFilePath = path.join(process.cwd(), "src", "data", "pricing.json");
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Failed to read pricing:", error);
    return null;
  }
}

export default function Home() {
  const pricingData = getPricing();

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <PlatformStrip />
        <PricingDashboard pricingData={pricingData} />
        <Features />
        <RealClientResults />
        <Statistics />
        <ServicesPreview pricingData={pricingData} />
        <FAQ />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
