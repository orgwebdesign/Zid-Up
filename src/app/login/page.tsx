import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Sign In — ZID UP Dashboard",
  description: "Sign in to your ZID UP dashboard to manage orders, track progress, and grow your social media presence.",
};

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />
        <div className="container-custom relative z-10">
          <Suspense fallback={<div className="text-text-muted text-center py-20">Loading...</div>}>
            <LoginForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
