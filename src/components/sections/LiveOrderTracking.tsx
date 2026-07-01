"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  Clock,
  Truck,
  Smartphone,
  Users,
  Music2,
  Video,
} from "lucide-react";

type OrderStatus = "received" | "processing" | "delivered";

type Order = {
  id: string;
  platform: string;
  service: string;
  qty: number;
  status: OrderStatus;
  time: string;
  icon: any;
  platformColor: string;
};

const statusConfig = {
  received: {
    label: "Reçue",
    icon: Clock,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/30",
    bar: "bg-yellow-400",
  },
  processing: {
    label: "En cours",
    icon: Truck,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    bar: "bg-blue-400",
  },
  delivered: {
    label: "Livrée",
    icon: CheckCircle2,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/30",
    bar: "bg-green-400",
  },
};

const platforms = [
  { name: "Instagram", icon: Smartphone, color: "text-pink-400" },
  { name: "TikTok", icon: Music2, color: "text-cyan-400" },
  { name: "YouTube", icon: Video, color: "text-red-400" },
  { name: "Facebook", icon: Users, color: "text-blue-400" },
];

const services = ["Followers", "Likes", "Views", "Comments"];

function randomOrder(id: number): Order {
  const p = platforms[id % platforms.length];
  const s = services[id % services.length];
  const q = [500, 1000, 2000, 5000, 10000][id % 5];
  return {
    id: `#ZID-${String(1000 + id).padStart(4, "0")}`,
    platform: p.name,
    service: s,
    qty: q,
    status: (["received", "processing", "delivered"] as OrderStatus[])[id % 3],
    time: `${String(Math.floor(Math.random() * 12) + 8).padStart(2, "0")}:${String(Math.floor(Math.random() * 60)).padStart(2, "0")}`,
    icon: p.icon,
    platformColor: p.color,
  };
}

const baseOrders: Order[] = Array.from({ length: 20 }, (_, i) => randomOrder(i));

export function LiveOrderTracking() {
  const [orders, setOrders] = useState<Order[]>(() => [...baseOrders, ...baseOrders, ...baseOrders]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setOrders((prev) =>
        prev.map((o, idx) => {
          if (o.status === "received") return { ...o, status: "processing" as OrderStatus };
          if (o.status === "processing") return { ...o, status: "delivered" as OrderStatus };
          return { ...randomOrder(idx + Date.now()), status: "received" as OrderStatus };
        })
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".tracking-row"),
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 1, stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 80%" },
      }
    );

    return () => ScrollTrigger.getAll().forEach((s) => s.kill());
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="tracking-row text-center max-w-xl mx-auto mb-12 opacity-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 text-success text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Commandes en direct
          </div>
          <h2 className="text-h2 font-heading font-bold text-white mb-3">
            Suivi des commandes en temps réel
          </h2>
          <p className="text-text-soft text-lg">
            Regardez les commandes de nos clients être traitées automatiquement en direct
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Rows */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="space-y-2">
          {[0, 1].map((rowIdx) => (
            <div key={rowIdx} className="marquee gap-3 py-1" style={{ animationDuration: rowIdx === 0 ? "180s" : "200s", animationDirection: rowIdx === 0 ? "normal" : "reverse", willChange: "transform", transform: "translateZ(0)" }}>
              {orders.map((order, idx) => {
                const cfg = statusConfig[order.status];
                const Icon = cfg.icon;
                const PlatIcon = order.icon;
                return (
                  <div
                    key={`${rowIdx}-${idx}`}
                    className={cn(
                      "flex items-center gap-4 rounded-xl border px-4 py-3 bg-surface/50 backdrop-blur-sm whitespace-nowrap shrink-0 hover:border-white/20 transition-colors",
                      cfg.border
                    )}
                  >
                    <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", order.platformColor.replace("text", "bg") + "/10")}>
                      <PlatIcon size={16} className={order.platformColor} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-white text-xs font-medium">{order.platform}</span>
                        <span className="text-text-muted text-[10px] font-mono">{order.id}</span>
                      </div>
                      <p className="text-white text-sm font-semibold">
                        {order.qty.toLocaleString()} {order.service}
                      </p>
                    </div>
                    <div className="w-16">
                      <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                        <div className={cn("h-full rounded-full transition-all duration-1000", cfg.bar)} style={{ width: order.status === "received" ? "15%" : order.status === "processing" ? "55%" : "100%" }} />
                      </div>
                    </div>
                    <span className={cn("text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0", cfg.bg, cfg.color)}>
                      <Icon size={10} />
                      {cfg.label}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
