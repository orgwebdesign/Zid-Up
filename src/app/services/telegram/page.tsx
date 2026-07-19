import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Eye, Heart, MessageCircle, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Telegram Services — BoostVib Growt",
  description: "Buy Telegram channel members, post views, and reactions. Real members at competitive prices.",
};

const services = [
  { name: "Telegram Channel Members [Real]", price: "79 MAD", speed: "Fast", guarantee: "30 Days", icon: Users, color: "text-sky-500", key: "Members", qty: 1000 },
  { name: "Telegram Post Views", price: "10 MAD", speed: "Instant", guarantee: "30 Days", icon: Eye, color: "text-sky-500", key: "Views", qty: 1000 },
  { name: "Telegram Post Reactions", price: "49 MAD", speed: "Fast", guarantee: "No Refill", icon: Heart, color: "text-sky-500", key: "Reactions", qty: 100 },
  { name: "Telegram Custom Comments", price: "129 MAD", speed: "Fast", guarantee: "No Refill", icon: MessageCircle, color: "text-sky-500", key: "Comments", qty: 100 },
];

export default function TelegramServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-h1 font-heading font-extrabold text-white mb-6">Telegram Members</h1>
            <p className="text-text-soft text-lg max-w-2xl mx-auto">
              Grow your Telegram channels and groups with real members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="flex flex-col border border-white/5 hover:border-white/10 transition-colors">
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
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Price</span>
                      <span className="text-white font-mono font-bold">{service.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Guarantee</span>
                      <span className="text-white">{service.guarantee}</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/212656268002?text=${encodeURIComponent(`Hello,\nI would like to order Telegram ${service.key}.\n\nQuantity: ${service.qty}\nPrice: ${service.price}\n\nPlease assist me.`)}`}
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
