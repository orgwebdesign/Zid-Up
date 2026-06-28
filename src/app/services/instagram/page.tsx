import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";

export default function InstagramServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-background">
        <div className="container-custom">
          <h1 className="text-h1 font-heading font-extrabold text-white mb-6">Instagram Growth</h1>
          <p className="text-text-soft text-lg mb-12 max-w-2xl">
            Boost your Instagram presence with real followers, likes, views, and comments.
          </p>
          <p className="text-text-muted">Browse our full Instagram service catalog in the Services section.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
