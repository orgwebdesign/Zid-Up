import { FadeUpSection } from "@/components/animations/FadeUpSection";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function RegisterCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <FadeUpSection>
          <div className="relative rounded-[2rem] overflow-hidden bg-surface-2 border border-white/10 p-10 md:p-16 text-center max-w-5xl mx-auto">
            {/* Glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-gradient-primary opacity-20 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-h2 font-heading font-bold text-white mb-6">
                Register today and start growing smarter.
              </h2>
              <p className="text-body-lg text-text-soft mb-10 max-w-2xl mx-auto">
                Create your free account, add funds, choose your service and track every order from one powerful dashboard. Join thousands of users scaling their social media presence with BoostVib Growt.
              </p>
              <Link href="/register">
                <Button size="lg" className="px-8 md:px-12 py-3 md:py-4 h-auto md:h-16 text-base md:text-lg">
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
        </FadeUpSection>
      </div>
    </section>
  );
}
