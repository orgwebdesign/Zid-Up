import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogPreview } from "@/components/sections/BlogPreview";

export const metadata: Metadata = {
  title: "Blog — BoostVib Growt",
  description: "Tips, guides and strategies to maximize your social media growth. Learn how to get more followers, increase engagement, and build a profitable SMM reseller business.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-32">
        <section className="py-12 md:py-20 bg-background">
          <div className="container-custom text-center">
            <h1 className="text-h1 font-heading font-extrabold text-white mb-6">Blog</h1>
            <p className="text-text-soft text-lg max-w-2xl mx-auto">
              Tips, guides and strategies to maximize your social media growth.
            </p>
          </div>
        </section>
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
