import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PlatformStrip } from "@/components/sections/PlatformStrip";
import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";

const PricingDashboard = dynamic(() => import("@/components/sections/PricingDashboard").then(m => ({ default: m.PricingDashboard })));
const LiveSocialProof = dynamic(() => import("@/components/sections/LiveSocialProof").then(m => ({ default: m.LiveSocialProof })));
const Features = dynamic(() => import("@/components/sections/Features").then(m => ({ default: m.Features })));
const TestimonialsCarousel = dynamic(() => import("@/components/sections/TestimonialsCarousel").then(m => ({ default: m.TestimonialsCarousel })));
const LiveOrderTracking = dynamic(() => import("@/components/sections/LiveOrderTracking").then(m => ({ default: m.LiveOrderTracking })));
const Statistics = dynamic(() => import("@/components/sections/Statistics").then(m => ({ default: m.Statistics })));
const ServicesPreview = dynamic(() => import("@/components/sections/ServicesPreview").then(m => ({ default: m.ServicesPreview })));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })));
const BlogPreview = dynamic(() => import("@/components/sections/BlogPreview").then(m => ({ default: m.BlogPreview })));

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
        <LiveSocialProof />
        <Features />
        <TestimonialsCarousel />
        <LiveOrderTracking />
        <Statistics />
        <ServicesPreview pricingData={pricingData} />
        <FAQ />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
