import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WorkProcess } from "@/components/sections/WorkProcess";

export const metadata: Metadata = {
  title: "How It Works — BoostVib Growt",
  description: "Get started with BoostVib Growt in just a few minutes. Contact us on WhatsApp, choose your service, send your link, and watch your social media grow.",
};
import { WhatsAppCTA } from "@/components/sections/WhatsAppCTA";
import { FadeUpSection } from "@/components/animations/FadeUpSection";
import { Badge } from "@/components/ui/Badge";

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-32">
        <section className="py-12 md:py-20 bg-background">
          <div className="container-custom text-center">
            <FadeUpSection>
              <Badge variant="glass" className="mb-6">Simple Process</Badge>
              <h1 className="text-h1 font-heading font-extrabold text-white mb-6">How BoostVib Growt Works</h1>
              <p className="text-text-soft text-lg max-w-2xl mx-auto">
                Get started with BoostVib Growt in just a few minutes. No technical skills required.
              </p>
            </FadeUpSection>
          </div>
        </section>
        <WorkProcess />
        <WhatsAppCTA />
      </main>
      <Footer />
    </>
  );
}
