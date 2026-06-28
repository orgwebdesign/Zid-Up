"use client";

import { FadeUpSection } from "@/components/animations/FadeUpSection";
import { useLanguage } from "@/context/LanguageContext";

export function RealClientResults() {
  const { t } = useLanguage();

  return (
    <section className="pt-20 md:pt-28 bg-background-soft">
      <div className="container-custom">
        <div className="overflow-hidden relative w-full mb-12">
          <FadeUpSection className="text-center mb-10">
            <h2 className="text-h2 font-heading font-bold text-white mb-2">{t("results.title")}</h2>
            <p className="text-text-soft text-lg">{t("results.subtitle")}</p>
          </FadeUpSection>
          
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background-soft to-transparent z-10 pointer-events-none mt-[88px]" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background-soft to-transparent z-10 pointer-events-none mt-[88px]" />
          
          <div className="flex gap-6 w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[
              { id: 1, title: "Influencer Growth", result: "+450% Engagement", vid: "ForBiggerBlazes" },
              { id: 2, title: "Brand Awareness", result: "1M+ Impressions", vid: "ForBiggerEscapes" },
              { id: 3, title: "Agency Reseller", result: "$10k/mo Revenue", vid: "ForBiggerJoyrides" },
              { id: 4, title: "Viral Campaign", result: "500k Views in 24h", vid: "ForBiggerMeltdowns" },
              { id: 5, title: "Artist Promo", result: "100k Spotify Streams", vid: "ForBiggerBlazes" },
              { id: 6, title: "E-commerce Store", result: "3x Conversion Rate", vid: "ForBiggerEscapes" },
            ].map((client) => (
              <div key={client.id} className="relative w-[280px] md:w-[350px] h-[400px] rounded-2xl overflow-hidden border border-white/5 flex-shrink-0 group cursor-pointer">
                <video 
                  loop 
                  muted 
                  playsInline 
                  preload="none"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='350' height='400'%3E%3Crect fill='%2310131D' width='350' height='400'/%3E%3C/svg%3E"
                  onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                  onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                >
                  <source src={`https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${client.vid}.mp4`} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background-soft via-background-soft/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                  <h4 className="text-white font-bold text-xl mb-1">{client.title}</h4>
                  <p className="text-primary font-mono text-sm font-medium">{client.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
