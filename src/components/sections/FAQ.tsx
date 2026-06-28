"use client";

import { useState } from "react";
import { FadeUpSection } from "@/components/animations/FadeUpSection";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const faqKeys = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
  { q: "faq.q5", a: "faq.a5" },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container-custom max-w-4xl">
        <FadeUpSection className="text-center mb-16">
          <h2 className="text-h2 font-heading font-bold text-white mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-text-soft text-lg">
            {t("faq.subtitle")}
          </p>
        </FadeUpSection>

        <div className="flex flex-col gap-4">
          {faqKeys.map((faq, index) => (
            <FadeUpSection key={index}>
              <div 
                className={cn(
                  "border rounded-2xl overflow-hidden transition-colors duration-300",
                  openIndex === index 
                    ? "bg-surface-2 border-primary/30" 
                    : "bg-surface border-border hover:border-white/20"
                )}
              >
                <button
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-white">{t(faq.q)}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ml-4",
                    openIndex === index ? "bg-primary text-white rotate-180" : "bg-white/5 text-text-muted"
                  )}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                    <p className="px-4 md:px-6 pb-6 pt-0 text-text-soft leading-relaxed">
                    {t(faq.a)}
                  </p>
                </div>
              </div>
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}
