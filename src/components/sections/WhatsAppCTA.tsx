import { FadeUpSection } from "@/components/animations/FadeUpSection";
import { Button } from "@/components/ui/Button";

export function WhatsAppCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <FadeUpSection>
          <div className="relative rounded-[2rem] overflow-hidden bg-surface-2 border border-[#BE2CD7]/20 p-10 md:p-16 text-center max-w-5xl mx-auto shadow-[0_0_80px_rgba(190,44,215,0.15)]">
            {/* Glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-[#BE2CD7] opacity-20 blur-[120px] pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-h2 font-heading font-bold text-white mb-6">
                Ready to skyrocket your social media?
              </h2>
              <p className="text-body-lg text-text-soft mb-10 max-w-2xl mx-auto">
                No complicated dashboards or signups required. Just message us directly on WhatsApp, tell us what you need, and we'll deliver your followers, likes, and views instantly.
              </p>
              <a href="https://wa.me/212656268002" target="_blank" rel="noreferrer">
                <Button size="lg" className="px-8 md:px-12 py-3 md:py-4 h-auto md:h-16 text-base md:text-lg bg-[#BE2CD7] hover:bg-[#a625bd] border-none text-white shadow-[0_0_40px_rgba(190,44,215,0.5)]">
                  Message Us on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </FadeUpSection>
      </div>
    </section>
  );
}
