import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "SMM Services — BoostVib Growt",
  description: "Browse thousands of SMM services across Instagram, TikTok, YouTube, Facebook and more. Real followers, likes, views and engagement at competitive prices.",
};

export const dynamic = "force-dynamic";

function getPricing() {
  try {
    const dataFilePath = path.join(process.cwd(), "src", "data", "pricing.json");
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(fileContents);
  } catch {
    return null;
  }
}

export default function ServicesPage() {
  const pricingData = getPricing();

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-32">
        <section className="py-12 md:py-20 bg-background">
          <div className="container-custom text-center">
            <h1 className="text-h1 font-heading font-extrabold text-white mb-6">Our Services</h1>
            <p className="text-text-soft text-lg max-w-2xl mx-auto">
              Explore thousands of SMM services across all major platforms. 
              Real followers, likes, views, and more.
            </p>
          </div>
        </section>
        <ServicesPreview pricingData={pricingData} />
      </main>
      <Footer />
    </>
  );
}
