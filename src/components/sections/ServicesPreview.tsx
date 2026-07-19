"use client";

import { useState, useMemo, useEffect } from "react";
import type { ElementType } from "react";
import { FadeUpSection } from "@/components/animations/FadeUpSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Camera, Users, Video, Music2, MessageCircle, Zap, Heart, Eye, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingService {
  costPrice: number;
  sellingPrice: number;
  name: string;
  speed: string;
  guarantee: string;
  baseQuantity?: number;
}

interface PricingData {
  [platform: string]: {
    [service: string]: PricingService;
  };
}

const platformMeta: Record<string, { name: string; icon: ElementType }> = {
  instagram: { name: "Instagram", icon: Camera },
  tiktok: { name: "TikTok", icon: Music2 },
  youtube: { name: "YouTube", icon: Video },
  facebook: { name: "Facebook", icon: Users },
};

const platformColors: Record<string, string> = {
  instagram: "text-pink-500",
  tiktok: "text-white",
  youtube: "text-red-500",
  facebook: "text-blue-600",
};

const serviceIcons: Record<string, ElementType> = {
  Followers: Camera,
  Likes: Heart,
  Views: Eye,
  Comments: MessageCircle,
  Subscribers: Video,
  PostLikes: ThumbsUp,
  PageLikes: Heart,
};

export function ServicesPreview({ pricingData }: { pricingData?: PricingData | null }) {
  const platforms = useMemo(() => {
    if (!pricingData) return [];
    return Object.keys(pricingData).filter(p => platformMeta[p]);
  }, [pricingData]);

  const [activeTab, setActiveTab] = useState<string>("");

  const currentServices = useMemo(() => {
    if (!pricingData || !activeTab || !pricingData[activeTab]) return [];
    return Object.entries(pricingData[activeTab]).map(([key, service]) => {
      const Icon = serviceIcons[key] || Camera;
      return { ...service, key, icon: Icon, color: platformColors[activeTab] || "text-white" };
    });
  }, [pricingData, activeTab]);

  useEffect(() => {
    if (!activeTab && platforms.length > 0) {
      setActiveTab(platforms[0]);
    }
  }, [platforms, activeTab]);

  if (platforms.length === 0) {
    return null;
  }

  return (
    <section id="services" className="py-20 md:py-28 bg-background-soft">
      <div className="container-custom">
        <FadeUpSection className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-h2 font-heading font-bold text-white mb-4">
            Affordable SMM Panel Services
          </h2>
          <p className="text-text-soft text-lg">
            Choose from thousands of affordable SMM services. Whether you are growing your own account or reselling to clients, BoostVib Growt gives you the tools to move faster.
          </p>
        </FadeUpSection>

        {/* Tabs */}
        <FadeUpSection className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {platforms.map((platformId) => {
            const meta = platformMeta[platformId];
            return (
              <button
                key={platformId}
                onClick={() => setActiveTab(platformId)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeTab === platformId
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-surface border border-border text-text-soft hover:text-white hover:border-white/20 hover:bg-surface-2"
                )}
              >
                <meta.icon size={16} />
                {meta.name}
              </button>
            );
          })}
        </FadeUpSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <FadeUpSection key={`${activeTab}-${idx}`}>
                <Card className="flex flex-col h-full border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-2.5 rounded-xl bg-white/5 ${service.color}`}>
                      <Icon size={24} />
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
                      <p className="text-xl font-bold text-white font-mono">{service.sellingPrice} MAD <span className="text-xs text-text-muted font-sans font-normal">/ {service.baseQuantity || 1000}</span></p>
                    </div>
                    <Button variant="secondary" size="sm">Explore</Button>
                  </div>
                </Card>
              </FadeUpSection>
            );
          })}
        </div>

        <FadeUpSection className="text-center mt-12">
          <Button variant="outline" size="lg">View All 2,800+ Services</Button>
        </FadeUpSection>
      </div>
    </section>
  );
}
