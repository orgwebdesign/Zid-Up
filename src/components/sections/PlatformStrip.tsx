import { Camera, Users, Video, Send, Music2, MessageCircle, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const platforms = [
  { name: "Instagram", label: "Followers", icon: Camera, color: "text-pink-500", bg: "bg-pink-500/10" },
  { name: "Facebook", label: "Likes", icon: Users, color: "text-blue-600", bg: "bg-blue-600/10" },
  { name: "TikTok", label: "Views", icon: Music2, color: "text-white", bg: "bg-white/10" },
  { name: "YouTube", label: "Subscribers", icon: Video, color: "text-red-500", bg: "bg-red-500/10" },
  { name: "Telegram", label: "Members", icon: Send, color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "Spotify", label: "Streams", icon: Music2, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "Snapchat", label: "Score", icon: MessageCircle, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { name: "X (Twitter)", label: "Retweets", icon: MessageSquare, color: "text-white", bg: "bg-white/10" },
];

export function PlatformStrip() {
  // Double the array for seamless infinite marquee
  const stripItems = [...platforms, ...platforms, ...platforms];

  return (
    <div className="py-10 border-y border-white/5 bg-surface-2/50 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="marquee gap-6 items-center hover:[animation-play-state:paused]">
        {stripItems.map((platform, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 bg-surface px-6 py-3 rounded-full border border-white/5 whitespace-nowrap group hover:border-white/20 transition-colors"
          >
            <div className={cn("p-2 rounded-full", platform.bg, platform.color)}>
              <platform.icon size={20} />
            </div>
            <div>
              <p className="text-white font-medium text-sm">{platform.name}</p>
              <p className="text-text-muted text-xs">{platform.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
