import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Create Account — ZID UP",
  description: "Create your free ZID UP account and start growing your social media presence. Instant access to 2,800+ services with wholesale pricing.",
};

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-secondary/10 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="container-custom relative z-10 w-full max-w-5xl">
          <Link href="/" className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors text-sm mb-8">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side benefits */}
            <div className="hidden lg:block">
              <h1 className="text-4xl font-bold text-white font-heading mb-6">Create your free account today</h1>
              <p className="text-text-soft text-lg mb-8">Join thousands of users who trust ZID UP to grow their social media presence.</p>
              
              <ul className="space-y-4">
                {[
                  "Instant access to 2,800+ high-quality services",
                  "Wholesale reseller pricing and bulk discounts",
                  "Secure payments with multiple methods",
                  "Real-time order tracking dashboard",
                  "API access to automate your business"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-success mt-0.5 shrink-0" size={20} />
                    <span className="text-text-soft">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side form */}
            <Card className="w-full p-6 md:p-8 shadow-2xl shadow-secondary/5">
              <div className="text-center mb-8 lg:hidden">
                <h1 className="text-2xl font-bold text-white font-heading">Create Account</h1>
              </div>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-soft mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-soft mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-soft mb-2">Email address</label>
                  <input 
                    type="email" 
                    className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="name@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-soft mb-2">Password</label>
                  <input 
                    type="password" 
                    className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="••••••••"
                  />
                  <p className="text-xs text-text-muted mt-2">Must be at least 8 characters</p>
                </div>

                <div className="flex items-start gap-3 mt-2">
                  <input type="checkbox" id="terms" className="rounded border-border bg-surface-2 text-primary focus:ring-primary w-4 h-4 mt-0.5 shrink-0" />
                  <label htmlFor="terms" className="text-sm text-text-muted cursor-pointer leading-tight">
                    I agree to the <Link href="/terms" className="text-primary hover:text-white">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:text-white">Privacy Policy</Link>
                  </label>
                </div>

                <Link href="/dashboard" className="w-full mt-2">
                  <Button className="w-full" size="lg">Create Account</Button>
                </Link>
              </form>
              
              <div className="mt-8 pt-6 border-t border-white/5 text-center text-sm text-text-muted">
                Already have an account? <Link href="/login" className="text-primary hover:text-white transition-colors font-medium">Sign in here</Link>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
