import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function YouTubeServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-background">
        <div className="container-custom">
          <h1 className="text-h1 font-heading font-extrabold text-white mb-6">YouTube Subscribers</h1>
          <p className="text-text-soft text-lg mb-12 max-w-2xl">
            Increase your YouTube channel with high-retention subscribers and views.
          </p>
          <p className="text-text-muted">Browse our full YouTube service catalog in the Services section.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
