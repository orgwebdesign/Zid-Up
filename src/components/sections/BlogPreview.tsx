"use client";

import { FadeUpSection } from "@/components/animations/FadeUpSection";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const articles = [
  {
    title: "How to Get More Instagram Followers in 2026",
    category: "Instagram",
    date: "Jun 12, 2026",
    image: "bg-pink-500/20",
    color: "text-pink-500",
  },
  {
    title: "Best Times to Post on TikTok for Maximum Reach",
    category: "TikTok",
    date: "Jun 08, 2026",
    image: "bg-blue-500/20",
    color: "text-blue-400",
  },
  {
    title: "How Agencies Can Resell SMM Services Profitably",
    category: "Business",
    date: "Jun 01, 2026",
    image: "bg-primary/20",
    color: "text-primary",
  },
];

export function BlogPreview() {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-20 md:py-28 bg-background border-t border-white/5">
      <div className="container-custom">
        <FadeUpSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-h2 font-heading font-bold text-white mb-4">
              {t("blog.title")}
            </h2>
            <p className="text-text-soft text-lg">
              {t("blog.subtitle")}
            </p>
          </div>
          <Link href="/blog" className="text-primary hover:text-white transition-colors font-medium flex items-center gap-2 group">
            {t("blog.viewAll")}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeUpSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <FadeUpSection key={idx}>
              <Card className="h-full p-0 overflow-hidden flex flex-col group hover:border-white/20 transition-colors">
                <div className={`h-48 w-full ${article.image} relative overflow-hidden`}>
                  {/* Decorative element for placeholder image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10131D] to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md ${article.color}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-text-muted mb-3 font-medium">
                    <Calendar size={14} />
                    {article.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <div className="mt-auto pt-4 border-t border-white/5 text-sm text-text-muted flex items-center gap-2 group/btn cursor-pointer">
                    {t("blog.readArticle")} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}
