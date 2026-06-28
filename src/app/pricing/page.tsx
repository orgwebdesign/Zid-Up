import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingDashboard } from "@/components/sections/PricingDashboard";

export const metadata: Metadata = {
  title: "Pricing — ZID UP",
  description: "Transparent pricing for all SMM services. Competitive rates for followers, likes, views and subscribers across all major platforms.",
};
import fs from "fs";
import path from "path";

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

export default function PricingPage() {
  const pricingData = getPricing();

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-32">
        <section className="py-12 md:py-20 bg-background">
          <div className="container-custom text-center">
            <h1 className="text-h1 font-heading font-extrabold text-white mb-6">Transparent Pricing</h1>
            <p className="text-text-soft text-lg max-w-2xl mx-auto">
              Competitive rates with clear margins. No hidden fees.
            </p>
          </div>
        </section>
        <PricingDashboard pricingData={pricingData} />
      </main>
      <Footer />
    </>
  );
}
