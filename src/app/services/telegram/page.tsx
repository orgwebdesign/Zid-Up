import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TelegramServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-background">
        <div className="container-custom">
          <h1 className="text-h1 font-heading font-extrabold text-white mb-6">Telegram Members</h1>
          <p className="text-text-soft text-lg mb-12 max-w-2xl">
            Grow your Telegram channels and groups with real members.
          </p>
          <p className="text-text-muted">Browse our full Telegram service catalog in the Services section.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
