"use client";

import { useState } from "react";
import { FadeUpSection } from "@/components/animations/FadeUpSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check, Info, TrendingUp, Users, Heart, Eye, MessageCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const platformConfig: any = {
  Instagram: {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    ),
    color: "from-pink-500 to-purple-500",
    bg: "bg-pink-500/10",
    text: "text-pink-500",
    services: {
      Followers: { pricePer1000: 120, overrides: { 100: 15 } },
      Likes: { pricePer1000: 69, overrides: { 100: 10 } },
      Views: { pricePer1000: 15, overrides: { 10000: 99 } },
      Comments: { pricePer1000: 199, overrides: { 100: 25 } },
    }
  },
  Facebook: {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    ),
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    services: {
      Followers: { pricePer1000: 129, overrides: { 100: 15 } },
      PostLikes: { pricePer1000: 79, overrides: { 100: 10 } },
      PageLikes: { pricePer1000: 89, overrides: { 100: 12 } },
      Views: { pricePer1000: 15, overrides: { 10000: 99 } },
      Comments: { pricePer1000: 149, overrides: { 100: 20 } },
    }
  },
  YouTube: {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
    ),
    color: "from-red-500 to-red-600",
    bg: "bg-red-500/10",
    text: "text-red-500",
    services: {
      Followers: { pricePer1000: 249, overrides: { 100: 25 } },
      Likes: { pricePer1000: 99, overrides: { 100: 15 } },
      Views: { pricePer1000: 20, overrides: { 10000: 149 } },
      Comments: { pricePer1000: 299, overrides: { 100: 35 } },
    }
  },
  TikTok: {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
    ),
    color: "from-cyan-400 to-blue-500",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    services: {
      Followers: { pricePer1000: 99, overrides: { 100: 12 } },
      Likes: { pricePer1000: 59, overrides: { 100: 8 } },
      Views: { pricePer1000: 10, overrides: { 10000: 79 } },
      Comments: { pricePer1000: 129, overrides: { 100: 19 } },
    }
  }
};

const serviceIcons = {
  Followers: Users,
  Likes: Heart,
  PostLikes: Heart,
  PageLikes: Users,
  Views: Eye,
  Comments: MessageCircle
};

type PlatformType = keyof typeof platformConfig;

type PricingDashboardProps = {
  pricingData?: any; // The JSON passed from server
};

export function PricingDashboard({ pricingData: dynamicPricing }: PricingDashboardProps) {
  const [platform, setPlatform] = useState<PlatformType>("Instagram");
  const [service, setService] = useState<string>("Followers");
  const [quantity, setQuantity] = useState<number>(1000);
  const { t, language } = useLanguage();

  const currentConfig = platformConfig[platform];
  const dynamicPlatformData = dynamicPricing ? dynamicPricing[String(platform).toLowerCase()] : null;
  const currentServiceConfig = currentConfig.services[service];
  
  const lookupKey = (platform === "YouTube" && service === "Followers") ? "Subscribers" : service;
  const dynamicServiceData = dynamicPlatformData ? dynamicPlatformData[lookupKey] : null;

  const basePriceValue = dynamicServiceData ? dynamicServiceData.sellingPrice : currentServiceConfig.pricePer1000;
  const baseQuantity = dynamicServiceData?.baseQuantity || 1000;

  const overridePrice = currentServiceConfig.overrides?.[quantity as keyof typeof currentServiceConfig.overrides];
  let finalPrice = 0;
  
  if (overridePrice !== undefined) {
    if (dynamicPricing && currentServiceConfig.pricePer1000 > 0) {
      // Scale the custom tier price proportionally to the new dynamic base price
      const scaleFactor = basePriceValue / currentServiceConfig.pricePer1000;
      finalPrice = Math.round(overridePrice * scaleFactor);
    } else {
      finalPrice = overridePrice;
    }
  } else {
    finalPrice = Math.round((basePriceValue / 1000) * quantity);
  }

  // Extract dynamic details
  const deliverySpeed = dynamicServiceData?.speed || t("pricing.instant");
  const guaranteeInfo = dynamicServiceData?.guarantee || t("pricing.guarantee");

  // Dynamic Service Name Translation
  let serviceKey = service;
  if (platform === "YouTube" && service === "Followers") {
    serviceKey = "Subscribers";
  }
  const serviceDisplayName = t(`services.${serviceKey}`);

  const platformName = String(platform);
  const whatsappMessage = language === "en" 
    ? `Hello,\nI would like to place an order.\n\nPlatform: ${platformName}\nService: ${serviceDisplayName}\nQuantity: ${quantity}\nTotal Price: ${finalPrice} MAD\n\nPlease assist me.`
    : language === "fr"
    ? `Bonjour,\nJe voudrais passer une commande.\n\nPlateforme: ${platformName}\nService: ${serviceDisplayName}\nQuantité: ${quantity}\nPrix Total: ${finalPrice} MAD\n\nMerci de m'aider.`
    : `مرحباً،\nأود طلب الآتي:\n\nالمنصة: ${platformName}\nالخدمة: ${serviceDisplayName}\nالكمية: ${quantity}\nالسعر الإجمالي: ${finalPrice} MAD\n\nالرجاء المساعدة.`;
    
  const whatsappUrl = `https://wa.me/212656268002?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <FadeUpSection className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-h2 font-heading font-bold text-white mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-text-soft text-lg">
            {t("pricing.subtitle")}
          </p>
        </FadeUpSection>

        <FadeUpSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            
            {/* Left Column - Controls */}
            <div className="lg:col-span-7 space-y-8">
              <Card className="p-6 md:p-8 border border-white/10 bg-surface/50 backdrop-blur-xl">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">1</span> 
                  {t("pricing.step1")}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {(Object.keys(platformConfig) as PlatformType[]).map((p) => (
                    <button
                      key={String(p)}
                      onClick={() => {
                        setPlatform(p);
                        setService(Object.keys(platformConfig[p].services)[0] as string);
                      }}
                      className={cn(
                        "flex flex-col items-center justify-center gap-3 p-4 rounded-xl border transition-all duration-300",
                        platform === p 
                          ? `border-transparent bg-gradient-to-br ${platformConfig[p].color} shadow-lg text-white scale-105` 
                          : "border-white/10 bg-surface-2 text-text-soft hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {platformConfig[p].icon}
                      <span className="font-medium text-sm">{String(p)}</span>
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="p-6 md:p-8 border border-white/10 bg-surface/50 backdrop-blur-xl">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">2</span> 
                  {t("pricing.step2")}
                </h3>
                
                <div className={cn(
                  "grid grid-cols-2 gap-3",
                  Object.keys(currentConfig.services).length === 5 ? "md:grid-cols-5" : "md:grid-cols-4"
                )}>
                  {(Object.keys(currentConfig.services) as string[]).map((s) => {
                    const Icon = serviceIcons[s as keyof typeof serviceIcons] || Users;
                    let loopServiceKey = s;
                    if (platform === "YouTube" && s === "Followers") {
                      loopServiceKey = "Subscribers";
                    }
                    return (
                      <button
                        key={s}
                        onClick={() => setService(s)}
                        className={cn(
                          "flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 text-start",
                          service === s 
                            ? "border-primary bg-primary/10 text-white shadow-[0_0_15px_rgba(124,58,237,0.2)]" 
                            : "border-white/10 bg-surface-2 text-text-soft hover:bg-white/5 hover:text-white"
                        )}
                      >
                        <Icon size={20} className={service === s ? "text-primary" : "text-text-muted"} />
                        <span className="font-medium text-sm whitespace-nowrap">{t(`services.${loopServiceKey}`)}</span>
                      </button>
                    )
                  })}
                </div>
              </Card>

              {/* Step 3: Quantity Slider */}
              <Card className="p-6 md:p-8 border border-white/10 bg-surface/50 backdrop-blur-xl">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">3</span> 
                    {t("pricing.step3")}
                  </div>
                  <span className="text-xl font-mono text-primary">{quantity}</span>
                </h3>
                
                <div className="px-2">
                  <input 
                    type="range" 
                    min="100" 
                    max="10000" 
                    step="100" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-text-muted mt-2">
                    <span>100</span>
                    <span>10,000</span>
                  </div>
                  
                  {quantity < 1000 && service !== "Comments" && (
                    <div className="mt-4 p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-2 animate-in fade-in slide-in-from-top-2">
                      <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-red-400 font-medium leading-relaxed">
                        {t("pricing.minQtyWarning") || "Minimum order recommendation is 1000 qty."}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </div>

            {/* Right Column - Receipt/Summary */}
            <div className="lg:col-span-5">
              <Card className="p-1 h-full overflow-hidden bg-gradient-to-b from-white/10 to-transparent">
                <div className="bg-background rounded-[1.4rem] p-6 md:p-8 h-full flex flex-col relative overflow-hidden">
                  {/* Decorative background glow based on platform */}
                  <div className={cn("absolute -top-20 -end-20 w-64 h-64 blur-[80px] rounded-full pointer-events-none opacity-20", currentConfig.bg)} />
                  
                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br text-white shadow-lg", currentConfig.color)}>
                      {currentConfig.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{String(platform)}</h3>
                      <p className={cn("font-medium", currentConfig.text)}>{quantity} {serviceDisplayName}</p>
                    </div>
                  </div>

                  <div className="space-y-6 flex-grow relative z-10">
                    <div className="flex items-end justify-between border-b border-white/5 pb-6">
                      <div>
                        <p className="text-text-muted text-sm mb-1">{t("pricing.totalPrice")}</p>
                        <p className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight">{finalPrice} <span className="text-lg sm:text-2xl text-text-muted">MAD</span></p>
                      </div>
                      <div className="text-end">
                        <Badge className={cn("mb-2", currentConfig.bg, currentConfig.text)}>{t("pricing.activeProfiles")}</Badge>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-muted flex items-center gap-2"><Check size={16} className="text-success" /> {t("pricing.deliverySpeed")}</span>
                        <span className="text-white font-medium">{deliverySpeed}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-muted flex items-center gap-2"><Check size={16} className="text-success" /> {t("pricing.startTime")}</span>
                        <span className="text-white font-medium">{t("pricing.minutes")}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-muted flex items-center gap-2"><Check size={16} className="text-success" /> {t("pricing.refill")}</span>
                        <span className="text-white font-medium">{guaranteeInfo}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-muted flex items-center gap-2"><Check size={16} className="text-success" /> {t("pricing.quality")}</span>
                        <span className="text-white font-medium">{t("pricing.highRetention")}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 relative z-10 pt-6 border-t border-white/5">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="block w-full">
                      <Button size="lg" className="w-full py-4 md:py-6 text-base md:text-lg bg-[#BE2CD7] hover:bg-[#a625bd] text-white border-none shadow-[0_0_30px_rgba(190,44,215,0.5)] group">
                        {t("pricing.orderNow")}
                        <TrendingUp size={20} className="ms-2 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                      </Button>
                    </a>
                    <p className="text-center text-text-muted text-xs mt-4 flex items-center justify-center gap-1">
                      <Info size={12} /> {t("pricing.secureOrder")}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
          </div>
        </FadeUpSection>
      </div>
    </section>
  );
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-current/20", className)}>
      {children}
    </span>
  );
}
