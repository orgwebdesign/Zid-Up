import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function BottomLoginCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-h2 font-heading font-bold text-white mb-6">
              Access Your <br/><span className="text-gradient-primary">Dashboard</span>
            </h2>
            <p className="text-text-soft text-lg mb-8">
              Log in to track orders, manage your funds, and scale your social media presence. New here? Creating an account takes less than 30 seconds and requires no verification.
            </p>
            <div className="flex gap-4">
              <Link href="/register">
                <Button size="lg" variant="glass">Create New Account</Button>
              </Link>
            </div>
          </div>
          
          <Card className="w-full max-w-md mx-auto relative z-10 p-6 md:p-8 shadow-[0_40px_100px_rgba(124,58,237,0.15)] bg-surface/80 backdrop-blur-xl border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[inherit] pointer-events-none" />
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
            
            <div className="mb-6 text-center relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">Sign In</h3>
              <p className="text-text-muted text-sm">Welcome back to ZID UP</p>
            </div>

            <form className="flex flex-col gap-4 relative z-10">
              <div>
                <label className="block text-sm font-medium text-text-soft mb-1.5">Email address</label>
                <input 
                  type="email" 
                  className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="name@example.com"
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium text-text-soft">Password</label>
                  <Link href="/forgot-password" className="text-xs text-primary hover:text-primary-2 transition-colors">Forgot?</Link>
                </div>
                <input 
                  type="password" 
                  className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center gap-2 mt-1">
                <input type="checkbox" id="remember" className="rounded border-border bg-surface-2 text-primary focus:ring-primary w-4 h-4" />
                <label htmlFor="remember" className="text-sm text-text-muted cursor-pointer">Remember me</label>
              </div>

              <Button className="w-full mt-2" size="lg">Sign In to Dashboard</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
