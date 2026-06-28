import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function FacebookServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-background">
        <div className="container-custom">
          <h1 className="text-h1 font-heading font-extrabold text-white mb-6">Facebook Page Likes</h1>
          <p className="text-text-soft text-lg mb-12 max-w-2xl">
            Grow your Facebook page with real likes, followers, and engagement.
          </p>
          <p className="text-text-muted">Browse our full Facebook service catalog in the Services section.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
