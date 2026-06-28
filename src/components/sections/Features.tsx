"use client";

import { FadeUpSection } from "@/components/animations/FadeUpSection";
import { useLanguage } from "@/context/LanguageContext";

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background-soft">
      <div className="container-custom">
        <FadeUpSection>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 lg:mb-20">
            <h2 className="text-h2 font-heading font-bold text-white max-w-2xl leading-[1.1]">
              {t("features.title1")} <br />
              <span className="text-text-muted">{t("features.title2")}</span><br />
              {t("features.title3")}
            </h2>
            <p className="text-text-soft text-lg max-w-sm lg:pb-4 border-s-2 border-primary/30 ps-4">
              {t("features.subtitle")}
            </p>
          </div>

          {/* The 3-Column Advantage Container */}
          <div className="relative w-full max-w-6xl mx-auto mt-10 md:mt-16">
            {/* The background border container for 01 and 03 (Desktop only) */}
            <div className="absolute inset-y-10 inset-x-0 border border-white/10 rounded-[32px] bg-surface/50 backdrop-blur-sm z-0 hidden lg:block shadow-2xl" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 relative z-10">
              
              {/* Card 01 */}
              <div className="p-8 lg:p-12 lg:pe-8 bg-surface-2 lg:bg-transparent rounded-3xl lg:rounded-none border border-white/5 lg:border-none">
                <div className="text-primary text-2xl font-mono font-medium mb-5">01</div>
                <h3 className="text-2xl font-bold text-white mb-4">{t("features.card1Title")}</h3>
                <p className="text-text-soft leading-relaxed text-sm lg:text-base">
                  {t("features.card1Desc")}
                </p>
              </div>

              {/* Card 02 (Middle Glowing Card) */}
              <div className="bg-gradient-to-br from-primary via-primary-2 to-fuchsia-500 rounded-[32px] p-8 lg:p-12 shadow-[0_0_40px_rgba(168,85,247,0.3)] lg:shadow-[0_0_80px_rgba(168,85,247,0.4)] relative transform lg:-translate-y-8 lg:scale-105 z-20">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 rounded-[32px] mix-blend-overlay pointer-events-none" />
                <div className="text-white/90 text-2xl font-mono font-medium mb-5 relative z-10">02</div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight relative z-10">{t("features.card2Title")}</h3>
                <p className="text-white/90 leading-relaxed mb-8 relative z-10">
                  {t("features.card2Desc")}
                </p>
                <a href="https://wa.me/212656268002" target="_blank" rel="noreferrer" className="text-white font-semibold hover:underline inline-flex items-center gap-1 relative z-10">
                  {t("features.messageUs")} <span className="text-xl leading-none">&rsaquo;</span>
                </a>

              {/* Card 03 */}
              <div className="p-8 lg:p-12 lg:ps-10 bg-surface-2 lg:bg-transparent rounded-3xl lg:rounded-none border border-white/5 lg:border-none">
                <div className="text-primary text-2xl font-mono font-medium mb-5">03</div>
                <h3 className="text-2xl font-bold text-white mb-4">{t("features.card3Title")}</h3>
                <p className="text-text-soft leading-relaxed text-sm lg:text-base">
                  {t("features.card3Desc")}
                </p>
              </div>

            </div>
          </div>
        </FadeUpSection>
      </div>
    </section>
  );
}
