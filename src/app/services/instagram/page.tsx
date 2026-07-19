import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Camera, Heart, Eye, MessageCircle, Zap } from "lucide-react";
import type { ElementType } from "react";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Instagram Services — BoostVib Growt",
  description: "Buy Instagram followers, likes, views, and comments. Real engagement at competitive prices.",
};

export const dynamic = "force-dynamic";

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

function getPricing(): PricingData | null {
  try {
    const dataFilePath = path.join(process.cwd(), "src", "data", "pricing.json");
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(fileContents);
  } catch {
    return null;
  }
}

const serviceIcons: Record<string, { icon: ElementType; color: string }> = {
  Followers: { icon: Camera, color: "text-pink-500" },
  Likes: { icon: Heart, color: "text-pink-500" },
  Views: { icon: Eye, color: "text-pink-500" },
  Comments: { icon: MessageCircle, color: "text-pink-500" },
};

export default function InstagramServicesPage() {
  const pricing = getPricing();
  const services = pricing?.instagram ? Object.entries(pricing.instagram) : [];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-h1 font-heading font-extrabold text-white mb-6">Instagram Growth</h1>
            <p className="text-text-soft text-lg max-w-2xl mx-auto">
              Boost your Instagram presence with real followers, likes, views, and comments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map(([key, service]: [string, PricingService]) => {
              const meta = serviceIcons[key] || { icon: Camera, color: "text-pink-500" };
              const Icon = meta.icon;
              return (
                <Card key={key} className="flex flex-col border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-2.5 rounded-xl bg-white/5 ${meta.color}`}>
                      <Icon size={24} />
                    </div>
                    <Badge variant="glass" className="flex items-center gap-1.5 px-2 py-1">
                      <Zap size={12} className="text-warning" />
                      {service.speed}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4 flex-1">{service.name}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Price</span>
                      <span className="text-white font-mono font-bold">{service.sellingPrice} MAD</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Guarantee</span>
                      <span className="text-white">{service.guarantee}</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/212656268002?text=${encodeURIComponent(`Hello,\nI would like to order Instagram ${key}.\n\nQuantity: ${service.baseQuantity || 1000}\nPrice: ${service.sellingPrice} MAD\n\nPlease assist me.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="primary" size="md" className="w-full">Order via WhatsApp</Button>
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
