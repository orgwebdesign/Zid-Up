import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="container-custom relative z-10">
          <Link href="/login" className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors text-sm mb-8">
            <ArrowLeft size={16} /> Back to Login
          </Link>
          
          <Card className="max-w-md mx-auto p-6 md:p-8 shadow-2xl shadow-primary/5">
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center font-bold text-white text-xl mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h1 className="text-2xl font-bold text-white font-heading">Reset Password</h1>
              <p className="text-text-muted text-sm mt-2">Enter your email and we'll send you a reset link</p>
            </div>

            <form className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-text-soft mb-2">Email address</label>
                <input type="email" className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary" placeholder="name@example.com" />
              </div>
              <Button className="w-full" size="lg">Send Reset Link</Button>
            </form>
            
            <div className="mt-6 text-center text-sm text-text-muted">
              Remember your password? <Link href="/login" className="text-primary hover:text-white transition-colors font-medium">Sign in</Link>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
