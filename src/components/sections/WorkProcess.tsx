"use client";

import { FadeUpSection } from "@/components/animations/FadeUpSection";
import { Card } from "@/components/ui/Card";
import { UserPlus, Search, Wallet, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const stepKeys = [
  { number: "01", titleKey: "workProcess.step1Title", descKey: "workProcess.step1Desc", icon: UserPlus },
  { number: "02", titleKey: "workProcess.step2Title", descKey: "workProcess.step2Desc", icon: Search },
  { number: "03", titleKey: "workProcess.step3Title", descKey: "workProcess.step3Desc", icon: Wallet },
  { number: "04", titleKey: "workProcess.step4Title", descKey: "workProcess.step4Desc", icon: TrendingUp },
];

export function WorkProcess() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <FadeUpSection className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-h2 font-heading font-bold text-white mb-4">
            {t("workProcess.title")}
          </h2>
          <p className="text-text-soft text-lg">
            {t("workProcess.subtitle")}
          </p>
        </FadeUpSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepKeys.map((step, idx) => (
            <FadeUpSection key={idx}>
              <Card className="relative h-full overflow-hidden group">
                <div className="absolute -right-4 -top-4 text-7xl font-mono font-black text-white/5 group-hover:text-primary/10 transition-colors select-none">
                  {step.number}
                </div>
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-primary group-hover:border-primary transition-colors">
                  <step.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{t(step.titleKey)}</h3>
                <p className="text-text-muted text-sm leading-relaxed relative z-10">
                  {t(step.descKey)}
                </p>
              </Card>
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}
