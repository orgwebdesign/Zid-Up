"use client";

import { useState } from "react";
import { FadeUpSection } from "@/components/animations/FadeUpSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Camera, Users, Video, Send, Music2, MessageCircle, MessageSquare, Zap, Heart, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const platforms = [
  { id: "instagram", name: "Instagram", icon: Camera },
  { id: "tiktok", name: "TikTok", icon: Music2 },
  { id: "youtube", name: "YouTube", icon: Video },
  { id: "facebook", name: "Facebook", icon: Users },
];

const mockServices = {
  instagram: [
    { name: "Instagram Followers [High Quality]", price: "120 MAD", speed: "Instant", icon: Camera, color: "text-pink-500" },
    { name: "Instagram Likes [Real Users]", price: "69 MAD", speed: "Fast", icon: Heart, color: "text-pink-500" },
    { name: "Instagram Reel Views", price: "15 MAD", speed: "Super Fast", icon: Eye, color: "text-pink-500" },
    { name: "Instagram Custom Comments", price: "199 MAD", speed: "Fast", icon: MessageCircle, color: "text-pink-500" },
  ],
  tiktok: [
    { name: "TikTok Views [Viral]", price: "10 MAD", speed: "Instant", icon: Music2, color: "text-white" },
    { name: "TikTok Followers [HQ]", price: "99 MAD", speed: "Fast", icon: Music2, color: "text-white" },
    { name: "TikTok Likes", price: "59 MAD", speed: "Fast", icon: Music2, color: "text-white" },
    { name: "TikTok Custom Comments", price: "149 MAD", speed: "Fast", icon: MessageCircle, color: "text-white" },
  ],
  youtube: [
    { name: "YouTube Subscribers [Non-Drop]", price: "249 MAD", speed: "Slow/Safe", icon: Video, color: "text-red-500" },
    { name: "YouTube Views [High Retention]", price: "20 MAD", speed: "Fast", icon: Video, color: "text-red-500" },
    { name: "YouTube Likes", price: "99 MAD", speed: "Fast", icon: Heart, color: "text-red-500" },
    { name: "YouTube Custom Comments", price: "299 MAD", speed: "Slow/Safe", icon: MessageCircle, color: "text-red-500" },
  ],
  facebook: [
    { name: "Facebook Page Followers", price: "129 MAD", speed: "Fast", icon: Users, color: "text-blue-600" },
    { name: "Facebook Post Likes", price: "79 MAD", speed: "Instant", icon: Heart, color: "text-blue-600" },
    { name: "Facebook Page Likes", price: "89 MAD", speed: "Instant", icon: Users, color: "text-blue-600" },
    { name: "Facebook Video Views", price: "15 MAD", speed: "Fast", icon: Eye, color: "text-blue-600" },
    { name: "Facebook Real Comments", price: "149 MAD", speed: "Fast", icon: MessageCircle, color: "text-blue-600" },
  ]
};

export function ServicesPreview({ pricingData }: { pricingData?: any }) {
  const [activeTab, setActiveTab] = useState<keyof typeof mockServices>("instagram");

  // Merge static UI config with dynamic database pricing
  const currentServices = mockServices[activeTab].map(service => {
    let dynamicPrice = service.price;
    let dynamicSpeed = service.speed;
    
    if (pricingData && pricingData[activeTab]) {
      const match = Object.values(pricingData[activeTab]).find((s: any) => s.name === service.name);
      if (match) {
        dynamicPrice = `${(match as any).sellingPrice} MAD`;
        dynamicSpeed = (match as any).speed || service.speed;
      }
    }
    return { ...service, price: dynamicPrice, speed: dynamicSpeed };
  });

  return (
    <section id="services" className="py-20 md:py-28 bg-background-soft">
      <div className="container-custom">
        <FadeUpSection className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-h2 font-heading font-bold text-white mb-4">
            Affordable SMM Panel Services
          </h2>
          <p className="text-text-soft text-lg">
            Choose from thousands of affordable SMM services. Whether you are growing your own account or reselling to clients, ZID UP gives you the tools to move faster.
          </p>
        </FadeUpSection>

        {/* Tabs */}
        <FadeUpSection className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setActiveTab(platform.id as any)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeTab === platform.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-surface border border-border text-text-soft hover:text-white hover:border-white/20 hover:bg-surface-2"
              )}
            >
              <platform.icon size={16} />
              {platform.name}
            </button>
          ))}
        </FadeUpSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentServices.map((service, idx) => (
            <FadeUpSection key={`${activeTab}-${idx}`}>
              <Card className="flex flex-col h-full border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-2.5 rounded-xl bg-white/5 ${service.color}`}>
                    <service.icon size={24} />
                  </div>
                  <Badge variant="glass" className="flex items-center gap-1.5 px-2 py-1">
                    <Zap size={12} className="text-warning" />
                    {service.speed}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4 flex-1">{service.name}</h3>
                
                <div className="flex items-end justify-between border-t border-white/5 pt-4 mt-2">
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">Starting at</p>
                    <p className="text-xl font-bold text-white font-mono">{service.price} <span className="text-xs text-text-muted font-sans font-normal">/ 1000</span></p>
                  </div>
                  <Button variant="secondary" size="sm">Explore</Button>
                </div>
              </Card>
            </FadeUpSection>
          ))}
        </div>

        <FadeUpSection className="text-center mt-12">
          <Button variant="outline" size="lg">View All 2,800+ Services</Button>
        </FadeUpSection>
      </div>
    </section>
  );
}
