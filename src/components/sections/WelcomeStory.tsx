"use client";

import { FadeUpSection } from "@/components/animations/FadeUpSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, BarChart3, Zap, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function WelcomeStory() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUpSection className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-surface border border-border rounded-3xl p-2 shadow-2xl aspect-square md:aspect-video lg:aspect-square flex flex-col overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-surface-2/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-text-muted mx-auto font-mono">dashboard.zidup.com</div>
              </div>
              <div className="flex-1 bg-surface-2 p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-6 w-32 bg-white/5 rounded-md" />
                  <div className="h-8 w-8 bg-primary/20 rounded-full" />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="h-24 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-end">
                    <div className="h-4 w-1/2 bg-white/10 rounded mb-2" />
                    <div className="h-6 w-3/4 bg-white/20 rounded" />
                  </div>
                  <div className="h-24 bg-primary/10 rounded-xl border border-primary/20 p-4 flex flex-col justify-end">
                    <div className="h-4 w-1/2 bg-primary/20 rounded mb-2" />
                    <div className="h-6 w-3/4 bg-primary/40 rounded" />
                  </div>
                </div>
                <div className="flex-1 bg-white/5 rounded-xl border border-white/5" />
              </div>
            </div>
          </FadeUpSection>

          <FadeUpSection>
            <Badge variant="outline" className="mb-6">{t("welcomeStory.badge")}</Badge>
            <h2 className="text-h2 font-heading font-bold text-white mb-6">
              {t("welcomeStory.title1")} <br />
              <span className="text-text-muted">{t("welcomeStory.title2")}</span>
            </h2>
            
            <p className="text-body text-text-soft mb-8">
              {t("welcomeStory.description")}
            </p>

            <ul className="flex flex-col gap-6 mb-10">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{t("welcomeStory.bullet1Title")}</h4>
                  <p className="text-sm text-text-muted">{t("welcomeStory.bullet1Desc")}</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0 mt-1">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{t("welcomeStory.bullet2Title")}</h4>
                  <p className="text-sm text-text-muted">{t("welcomeStory.bullet2Desc")}</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center text-success shrink-0 mt-1">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{t("welcomeStory.bullet3Title")}</h4>
                  <p className="text-sm text-text-muted">{t("welcomeStory.bullet3Desc")}</p>
                </div>
              </li>
            </ul>

            <Button variant="secondary" className="group">
              {t("welcomeStory.cta")}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </FadeUpSection>
        </div>
      </div>
    </section>
  );
}
