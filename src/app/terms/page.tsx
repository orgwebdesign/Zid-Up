import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-background">
        <div className="container-custom relative z-10 max-w-4xl">
          <h1 className="text-h1 font-heading font-extrabold text-white mb-8">Terms of Service</h1>
          
          <Card className="p-6 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white font-heading mb-4">1. Acceptance of Terms</h2>
              <p className="text-text-soft leading-relaxed">
                By accessing or using ZID UP, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white font-heading mb-4">2. Services Description</h2>
              <p className="text-text-soft leading-relaxed">
                ZID UP provides social media marketing services including but not limited to followers, likes, views, subscribers, and comments for various social media platforms. We act as a reseller panel and source services from third-party providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white font-heading mb-4">3. User Responsibilities</h2>
              <p className="text-text-soft leading-relaxed">
                Users agree to provide accurate information, maintain account security, and use services in compliance with applicable laws and platform terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white font-heading mb-4">4. Payment & Refunds</h2>
              <p className="text-text-soft leading-relaxed">
                All payments are processed securely. Refunds are handled on a case-by-case basis. Services delivered as described are non-refundable. Please contact support for any billing issues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white font-heading mb-4">5. Limitation of Liability</h2>
              <p className="text-text-soft leading-relaxed">
                ZID UP is not liable for any indirect, incidental, or consequential damages arising from the use of our services. We do not guarantee that services will meet specific expectations or that they comply with third-party platform policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white font-heading mb-4">6. Changes to Terms</h2>
              <p className="text-text-soft leading-relaxed">
                We reserve the right to modify these terms at any time. Users will be notified of material changes via email or dashboard notification.
              </p>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
