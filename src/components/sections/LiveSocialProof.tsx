"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const names = [
  "Ali", "Sara", "Omar", "Khadija", "Youssef", "Fatima", "Hassan",
  "Amina", "Mohamed", "Nadia", "Karim", "Zineb", "Reda", "Imane",
  "Hicham", "Salma", "Driss", "Houda", "Rachid", "Asmae"
];

const cities = [
  "Casablanca", "Rabat", "Marrakech", "Fès", "Tanger", "Agadir",
  "Oujda", "Meknès", "Tétouan", "Salé", "El Jadida", "Kénitra"
];

const services = [
  { label: "Followers", platform: "Instagram", qty: 2000 },
  { label: "Likes", platform: "Instagram", qty: 1000 },
  { label: "Views", platform: "TikTok", qty: 5000 },
  { label: "Subscribers", platform: "YouTube", qty: 1000 },
  { label: "Followers", platform: "TikTok", qty: 1500 },
  { label: "Likes", platform: "Facebook", qty: 500 },
  { label: "Views", platform: "Instagram", qty: 10000 },
  { label: "Comments", platform: "Instagram", qty: 200 },
  { label: "Followers", platform: "Facebook", qty: 1000 },
  { label: "Likes", platform: "TikTok", qty: 2000 },
];

const platformColors: Record<string, string> = {
  Instagram: "text-pink-400",
  TikTok: "text-cyan-400",
  YouTube: "text-red-400",
  Facebook: "text-blue-400",
};

function generateNotification(idx: number) {
  const name = names[idx % names.length];
  const city = cities[idx % cities.length];
  const svc = services[idx % services.length];
  return {
    name,
    city,
    service: svc.label,
    platform: svc.platform,
    quantity: svc.qty.toLocaleString(),
    color: platformColors[svc.platform] || "text-primary",
  };
}

export function LiveSocialProof() {
  const [notifications] = useState(() =>
    Array.from({ length: 40 }, (_, i) => generateNotification(i))
  );

  return (
    <>
      <style>{`
        @keyframes marquee-slow {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    <div className="relative border-t border-white/5 bg-surface-2/80 overflow-hidden py-2.5">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface-2/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface-2/80 to-transparent z-10 pointer-events-none" />

      <div className="flex gap-8 items-center text-sm" style={{ display: "flex", width: "max-content", animation: "marquee-slow 120s linear infinite" }}>
        {notifications.map((n, i) => (
          <div
            key={i}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse shrink-0" />
            <span className="text-text-muted">
              {n.name}
            </span>
            <span className="text-text-muted">de</span>
            <span className="text-white font-medium">{n.city}</span>
            <span className="text-text-muted">vient de commander</span>
            <span className="text-white font-semibold">{n.quantity}</span>
            <span className={cn("font-medium", n.color)}>{n.service}</span>
            <span className="text-text-muted">{n.platform}</span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
