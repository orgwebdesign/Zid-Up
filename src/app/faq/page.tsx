import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/sections/FAQ";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-32">
        <section className="py-12 md:py-20 bg-background">
          <div className="container-custom text-center">
            <h1 className="text-h1 font-heading font-extrabold text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-text-soft text-lg max-w-2xl mx-auto">
              Everything you need to know about ZID UP.
            </p>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
