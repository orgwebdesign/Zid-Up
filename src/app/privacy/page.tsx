import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-background">
        <div className="container-custom relative z-10 max-w-4xl">
          <h1 className="text-h1 font-heading font-extrabold text-white mb-8">Privacy Policy</h1>
          
          <Card className="p-6 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white font-heading mb-4">1. Information We Collect</h2>
              <p className="text-text-soft leading-relaxed">
                We collect information you provide directly: name, email address, payment details. We also collect usage data such as pages visited and actions taken within the dashboard.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white font-heading mb-4">2. How We Use Your Information</h2>
              <p className="text-text-soft leading-relaxed">
                Your information is used to process orders, provide customer support, improve our services, and send important account notifications. We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white font-heading mb-4">3. Data Security</h2>
              <p className="text-text-soft leading-relaxed">
                We implement industry-standard security measures to protect your data. All payment transactions are encrypted using SSL technology.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white font-heading mb-4">4. Cookies</h2>
              <p className="text-text-soft leading-relaxed">
                We use essential cookies for authentication and security. Analytics cookies help us understand usage patterns to improve the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white font-heading mb-4">5. Contact</h2>
              <p className="text-text-soft leading-relaxed">
                For privacy-related inquiries, contact us at privacy@zidup.com or through our support channels.
              </p>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
