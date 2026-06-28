"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src="/image/logo v2.svg" 
              alt="ZID UP Logo" 
              width={160}
              height={64}
              className="h-12 md:h-16 w-auto object-contain group-hover:scale-[1.03] transition-transform origin-start"
            />
          </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-text-soft hover:text-white transition-colors text-sm font-medium">{t("nav.services")}</Link>
          <Link href="/how-it-works" className="text-text-soft hover:text-white transition-colors text-sm font-medium">{t("nav.howItWorks")}</Link>
          <Link href="/blog" className="text-text-soft hover:text-white transition-colors text-sm font-medium">{t("nav.blog")}</Link>
          <Link href="/contact" className="text-text-soft hover:text-white transition-colors text-sm font-medium">{t("nav.contact")}</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Selector */}
          <div className="relative group flex items-center h-full py-4 -my-4">
            <button className="flex items-center gap-1.5 text-sm font-medium text-text-soft hover:text-white transition-colors uppercase">
              <Globe size={16} /> {language} <ChevronDown size={14} className="opacity-50" />
            </button>
            <div className="absolute top-[calc(100%-8px)] end-0 w-32 bg-surface-2 border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-1.5 flex flex-col gap-1">
              <button onClick={() => setLanguage("en")} className={cn("text-start px-3 py-2 text-sm rounded-lg transition-colors", language === "en" ? "text-white bg-white/10" : "text-text-soft hover:text-white hover:bg-white/5")}>English</button>
              <button onClick={() => setLanguage("fr")} className={cn("text-start px-3 py-2 text-sm rounded-lg transition-colors", language === "fr" ? "text-white bg-white/10" : "text-text-soft hover:text-white hover:bg-white/5")}>Français</button>
              <button onClick={() => setLanguage("ar")} className={cn("text-start px-3 py-2 text-sm rounded-lg transition-colors", language === "ar" ? "text-white bg-white/10" : "text-text-soft hover:text-white hover:bg-white/5")}>العربية</button>
            </div>
          </div>

          <div className="w-px h-5 bg-white/10" />

          <a href="https://wa.me/212656268002" target="_blank" rel="noreferrer">
            <Button size="sm" className="bg-[#BE2CD7] hover:bg-[#a625bd] text-white border-none shadow-[0_0_15px_rgba(190,44,215,0.4)]">
              {t("nav.whatsapp")}
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-text-soft hover:text-white transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-white/5 shadow-2xl p-6 flex flex-col gap-6 h-screen">
          <nav className="flex flex-col gap-4 text-lg">
            <Link href="/services" className="text-text-main hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>{t("nav.services")}</Link>
            <Link href="/how-it-works" className="text-text-main hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>{t("nav.howItWorks")}</Link>
            <Link href="/blog" className="text-text-main hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>{t("nav.blog")}</Link>
            <Link href="/contact" className="text-text-main hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>{t("nav.contact")}</Link>
          </nav>

          <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/10">
            <span className="text-sm text-text-muted flex items-center gap-2"><Globe size={16} /> {t("nav.language")}</span>
            <div className="flex gap-1">
              <button onClick={() => { setLanguage("en"); setMobileMenuOpen(false); }} className={cn("px-3 py-1.5 rounded-lg text-sm transition-colors", language === "en" ? "bg-white/10 text-white font-medium" : "text-text-soft hover:text-white hover:bg-white/5")}>EN</button>
              <button onClick={() => { setLanguage("fr"); setMobileMenuOpen(false); }} className={cn("px-3 py-1.5 rounded-lg text-sm transition-colors", language === "fr" ? "bg-white/10 text-white font-medium" : "text-text-soft hover:text-white hover:bg-white/5")}>FR</button>
              <button onClick={() => { setLanguage("ar"); setMobileMenuOpen(false); }} className={cn("px-3 py-1.5 rounded-lg text-sm transition-colors", language === "ar" ? "bg-white/10 text-white font-medium" : "text-text-soft hover:text-white hover:bg-white/5")}>AR</button>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
            <a href="https://wa.me/212656268002" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full justify-center bg-[#BE2CD7] hover:bg-[#a625bd] text-white border-none shadow-[0_0_15px_rgba(190,44,215,0.4)]">
                {t("nav.contactWhatsApp")}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
