"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SocialMediaHero } from "@/components/ui/SocialMediaHero";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-title", { opacity: 0, y: 40, duration: 0.8, ease: "power3.out" }, "-=0.2")
        .from(".hero-text", { opacity: 0, y: 24, duration: 0.7, ease: "power2.out" }, "-=0.4")
        .from(".hero-actions", { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, "-=0.3")
        .from(".hero-trust", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(".hero-image", { opacity: 0, x: 80, scale: 0.9, rotationY: -15, transformPerspective: 1000, duration: 1.2, ease: "power3.out" }, "-=1");

      gsap.to(".hero-image svg", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-24 pb-16 md:pt-40 md:pb-28 overflow-hidden min-h-[80vh] md:min-h-[90vh] flex items-center">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-background/85 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" 
          alt="Abstract Background" 
          fill
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-screen"
          priority
        />
      </div>

      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[40%] md:w-[60%] h-[40%] md:h-[60%] rounded-full bg-primary/20 blur-[80px] md:blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] md:w-[50%] h-[40%] md:h-[50%] rounded-full bg-secondary/20 blur-[80px] md:blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="hidden md:block absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-accent/15 blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="hero-title text-h1 font-heading font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              {t("hero.title1")} <br className="hidden lg:block" />
              <span className="text-gradient-primary drop-shadow-[0_0_35px_rgba(124,58,237,0.4)] relative inline-block">
                {t("hero.titleHighlight")}
              </span> <br className="hidden lg:block" />
              {t("hero.title2")}
            </h1>
            
            <p className="hero-text text-body-lg text-text-soft mb-8 max-w-xl">
              {t("hero.description")}
            </p>
            
            <div className="hero-actions flex flex-wrap gap-4 mb-8">
              <a href="https://wa.me/212656268002" target="_blank" rel="noreferrer">
                <Button size="lg" className="bg-[#BE2CD7] hover:bg-[#a625bd] text-white border-none shadow-[0_0_25px_rgba(190,44,215,0.4)]">
                  {t("hero.cta")}
                </Button>
              </a>
              <Link href="/services">
                <Button size="lg" variant="glass">{t("nav.services")}</Button>
              </Link>
            </div>

            <div className="hero-trust flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-6 text-xs md:text-sm text-text-muted font-medium">
              <div className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-success shrink-0" /> {t("hero.trustNoPassword")}</div>
              <span className="w-1 h-1 rounded-full bg-border-strong" />
              <div className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-success shrink-0" /> {t("hero.trustFastDelivery")}</div>
              <span className="w-1 h-1 rounded-full bg-border-strong" />
              <div className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-success shrink-0" /> {t("hero.trust247")}</div>
            </div>
          </div>

          {/* Right Content - Social Media Hero SVG */}
          <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[500px] mx-auto hero-image z-10 flex justify-center items-center scale-100 sm:scale-110 lg:scale-[1.3] xl:scale-[1.5] ltr:lg:translate-x-10 rtl:lg:-translate-x-10 ltr:xl:translate-x-20 rtl:xl:-translate-x-20">
            <SocialMediaHero />
          </div>
          
        </div>
      </div>
    </section>
  );
}
