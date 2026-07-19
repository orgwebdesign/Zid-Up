"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirectTo = searchParams.get("redirect") || "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (
      (email === "admin@zidup.com" && password === "admin123") ||
      (email === "user" && password === "user")
    ) {
      document.cookie = "session=authenticated; path=/; max-age=86400";
      router.push(redirectTo);
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <>
      <Link href="/" className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors text-sm mb-8">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <Card className="max-w-md mx-auto p-6 md:p-8 shadow-2xl shadow-primary/5">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center font-bold text-white text-xl mx-auto mb-4">
            Z
          </div>
          <h1 className="text-2xl font-bold text-white font-heading">Welcome Back</h1>
          <p className="text-text-muted text-sm mt-2">Sign in to your BoostVib Growt dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {error && (
            <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
              <AlertCircle size={16} className="shrink-0 mt-0.5" />
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-text-soft mb-2">Email / Username</label>
            <input 
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              placeholder="admin@zidup.com"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-text-soft">Password</label>
              <Link href="/forgot-password" className="text-xs text-primary hover:text-primary-2 transition-colors">Forgot Password?</Link>
            </div>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember-me" className="rounded border-border bg-surface-2 text-primary focus:ring-primary w-4 h-4" />
            <label htmlFor="remember-me" className="text-sm text-text-muted cursor-pointer">Remember my device</label>
          </div>

          <Button type="submit" className="w-full" size="lg">Sign In</Button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-sm text-text-muted">
          Don't have an account yet? <Link href="/register" className="text-primary hover:text-white transition-colors font-medium">Create a free account</Link>
        </div>

        <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-text-muted text-center">
          Demo: <span className="text-primary font-medium">admin@zidup.com</span> / <span className="text-primary font-medium">admin123</span>
        </div>
      </Card>
    </>
  );
}
