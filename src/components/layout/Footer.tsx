"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Camera, Users, Video, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="border-t border-white/5 bg-background-soft pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center group mb-6">
              <Image 
                src="/image/logo v2.svg" 
                alt="ZID UP Logo" 
                width={120}
                height={48}
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform origin-left"
              />
            </Link>
            <p className="text-text-muted mb-6 max-w-sm">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-colors">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-colors">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-colors">
                <Users size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-colors">
                <Video size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-colors">
                <Send size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t("footer.quickLinks")}</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-text-muted hover:text-primary transition-colors">{t("footer.home")}</Link></li>
              <li><Link href="/services" className="text-text-muted hover:text-primary transition-colors">{t("nav.services")}</Link></li>
              <li><Link href="/how-it-works" className="text-text-muted hover:text-primary transition-colors">{t("nav.howItWorks")}</Link></li>
              <li><Link href="/pricing" className="text-text-muted hover:text-primary transition-colors">{t("pricing.title")}</Link></li>
              <li><Link href="/api-docs" className="text-text-muted hover:text-primary transition-colors">{t("nav.api")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t("footer.topServices")}</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/services/instagram" className="text-text-muted hover:text-primary transition-colors">Instagram</Link></li>
              <li><Link href="/services/tiktok" className="text-text-muted hover:text-primary transition-colors">TikTok</Link></li>
              <li><Link href="/services/youtube" className="text-text-muted hover:text-primary transition-colors">YouTube</Link></li>
              <li><Link href="/services/facebook" className="text-text-muted hover:text-primary transition-colors">Facebook</Link></li>
              <li><Link href="/services/telegram" className="text-text-muted hover:text-primary transition-colors">Telegram</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t("footer.legal")}</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/terms" className="text-text-muted hover:text-primary transition-colors">{t("footer.termsOfService")}</Link></li>
              <li><Link href="/privacy" className="text-text-muted hover:text-primary transition-colors">{t("footer.privacyPolicy")}</Link></li>
              <li><Link href="/contact" className="text-text-muted hover:text-primary transition-colors">{t("footer.contactSupport")}</Link></li>
              <li><Link href="/faq" className="text-text-muted hover:text-primary transition-colors">{t("footer.faq")}</Link></li>
              <li><Link href="/blog" className="text-text-muted hover:text-primary transition-colors">{t("footer.blog")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm text-center md:text-left max-w-2xl">
            {t("footer.disclaimer")}
          </p>
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} ZID UP. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
