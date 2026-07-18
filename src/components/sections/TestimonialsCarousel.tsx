"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Karim El Amrani",
    city: "Casablanca",
    rating: 5,
    service: "5000 Followers Instagram",
    message: "J'ai commandé 5000 followers Instagram hier soir, en moins de 30 minutes tout était livré ! Service incroyable et support très réactif. Je recommande à 100%.",
    date: "12 Juin 2026",
  },
  {
    name: "Sara Benali",
    city: "Rabat",
    rating: 5,
    service: "10000 Views TikTok",
    message: "Excellent service ! Les vues TikTok sont arrivées super rapidement. Mon video a explosé grâce à ZID UP. Je vais commander encore plus la semaine prochaine.",
    date: "8 Juin 2026",
  },
  {
    name: "Youssef El Fassi",
    city: "Marrakech",
    rating: 5,
    service: "1000 Subscribers YouTube",
    message: "Je cherchais un panel fiable pour des abonnés YouTube. ZID UP m'a livré 1000 subscribers de haute qualité en 2 jours. Le support est très professionnel.",
    date: "5 Juin 2026",
  },
  {
    name: "Fatima Zahra",
    city: "Fès",
    rating: 5,
    service: "2000 Likes Facebook",
    message: "Très satisfaite du service ! Les likes Facebook sont arrivés rapidement et le support WhatsApp répond en quelques minutes. Je suis devenue cliente régulière.",
    date: "1 Juin 2026",
  },
  {
    name: "Hassan Outaleb",
    city: "Tanger",
    rating: 5,
    service: "1500 Followers TikTok",
    message: "Best SMM panel I've used! The followers are high quality and delivery was instant. I've been using ZID UP for 3 months now and never been disappointed.",
    date: "28 Mai 2026",
  },
  {
    name: "Nadia Berrada",
    city: "Agadir",
    rating: 5,
    service: "5000 Views Instagram",
    message: "Service rapide et efficace. J'ai commandé des vues pour mes reels Instagram et le résultat était immédiat. Mon compte a gagné en visibilité grâce à ZID UP.",
    date: "20 Mai 2026",
  },
];

const platformColors: Record<string, string> = {
  Instagram: "from-pink-500 to-purple-500",
  TikTok: "from-cyan-400 to-blue-500",
  YouTube: "from-red-500 to-red-600",
  Facebook: "from-blue-500 to-blue-700",
};

function getPlatformColor(service: string) {
  for (const [platform, color] of Object.entries(platformColors)) {
    if (service.includes(platform)) return color;
  }
  return "from-primary to-primary-2";
}

function getPlatformName(service: string) {
  for (const platform of Object.keys(platformColors)) {
    if (service.includes(platform)) return platform;
  }
  return "ZID UP";
}

export function TestimonialsCarousel() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement>(null);

  const animateBubbles = useCallback(() => {
    if (!bubblesRef.current) return;
    const children = bubblesRef.current.children;
    gsap.fromTo(
      children,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.4, ease: "power3.out" }
    );
  }, []);

  const next = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    if (bubblesRef.current) {
      gsap.to(bubblesRef.current.children, {
        opacity: 0,
        y: -15,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          setCurrent((prev) => (prev + 1) % testimonials.length);
        },
      });
    } else {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }
  }, [animating]);

  const prev = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    if (bubblesRef.current) {
      gsap.to(bubblesRef.current.children, {
        opacity: 0,
        y: -15,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        },
      });
    } else {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  }, [animating]);

  // Animate bubbles on mount and when current changes
  useEffect(() => {
    const timer = setTimeout(() => {
      animateBubbles();
      setAnimating(false);
    }, 50);
    return () => clearTimeout(timer);
  }, [current, animateBubbles]);

  // Auto-play
  useEffect(() => {
    if (isPaused || animating) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, animating, next]);

  // Entrance animation on scroll
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const triggers: ScrollTrigger[] = [];

    const st1 = gsap.fromTo(
      el.querySelector(".testimonial-card"),
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );
    if (st1.scrollTrigger) triggers.push(st1.scrollTrigger);

    const st2 = gsap.fromTo(
      el.querySelectorAll(".testimonial-title, .testimonial-subtitle"),
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );
    if (st2.scrollTrigger) triggers.push(st2.scrollTrigger);

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-background-soft relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="testimonial-title text-h2 font-heading font-bold text-white mb-4 opacity-0">
            {t("results.title")}
          </h2>
          <p className="testimonial-subtitle text-text-soft text-lg opacity-0">
            {t("results.subtitle")}
          </p>
        </div>

        <div className="testimonial-card opacity-0">
          <div
            className="relative max-w-lg mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-xl">
              <div className="bg-[#075E54] px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  Z
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">ZID UP Support</p>
                  <p className="text-white/70 text-xs">online</p>
                </div>
                <Quote size={20} className="text-white/60" />
              </div>

              <div ref={bubblesRef} className="p-5 bg-[#0B101D] min-h-[380px] flex flex-col justify-end bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdib3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')]">
                <div className="flex justify-start mb-3">
                  <div className="bg-[#202C33] rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[85%] shadow-sm">
                    <p className="text-white text-sm leading-relaxed">
                      Bonjour, je voudrais commander <strong>{testimonials[current].service}</strong> s'il vous plaît.
                    </p>
                    <p className="text-[#8696A0] text-[10px] text-right mt-1">10:30</p>
                  </div>
                </div>

                <div className="flex justify-end mb-3">
                  <div className="bg-[#075E54] rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[85%] shadow-sm">
                    <p className="text-white text-sm leading-relaxed">
                      Bonjour ! Bien sûr, veuillez nous envoyer le lien de votre profil. Le traitement commence immédiatement après confirmation. ✅
                    </p>
                    <p className="text-[#9ED9CC] text-[10px] text-right mt-1">10:31</p>
                  </div>
                </div>

                <div className="flex justify-start mb-2">
                  <div className="bg-[#202C33] rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[85%] shadow-sm">
                    <p className="text-white text-sm leading-relaxed">
                      {testimonials[current].message}
                    </p>
                    <div className="flex items-center gap-0.5 mt-2">
                      {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                        <Star key={i} size={12} className="text-[#FFC107] fill-[#FFC107]" />
                      ))}
                    </div>
                    <p className="text-[#8696A0] text-[10px] text-right mt-1">14:45</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0B101D] border-t border-white/5 px-5 py-3 flex items-center justify-between">
                <div>
                  <p className="text-white font-medium text-sm">{testimonials[current].name}</p>
                  <p className="text-text-muted text-xs">📍 {testimonials[current].city}</p>
                </div>
                <div className="text-right">
                  <div className={cn("text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r", getPlatformColor(testimonials[current].service))}>
                    {getPlatformName(testimonials[current].service)}
                  </div>
                  <p className="text-text-muted text-[10px]">{testimonials[current].date}</p>
                </div>
              </div>
            </div>

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all z-20 shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all z-20 shadow-lg"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (animating || idx === current) return;
                  setAnimating(true);
                  if (bubblesRef.current) {
                    gsap.to(bubblesRef.current.children, {
                      opacity: 0,
                      y: -15,
                      duration: 0.5,
                      ease: "power3.in",
                      onComplete: () => setCurrent(idx),
                    });
                  } else {
                    setCurrent(idx);
                  }
                }}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-500",
                  idx === current
                    ? "bg-primary w-6"
                    : "bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <p className="text-center text-text-muted text-sm mt-4">
            {current + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
}
