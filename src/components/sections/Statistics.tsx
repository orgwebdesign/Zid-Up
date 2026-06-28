"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FadeUpSection } from "@/components/animations/FadeUpSection";
import { useLanguage } from "@/context/LanguageContext";

const statsConfig = [
  { value: 12, suffix: "M+", labelKey: "stats.ordersCompleted" },
  { value: 2800, suffix: "+", labelKey: "stats.servicesAvailable" },
  { value: 0.001, prefix: "$", labelKey: "stats.startingPrice", decimals: 3 },
  { value: 98, suffix: "%", labelKey: "stats.successRate" },
];

export function Statistics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (containerRef.current && !hasAnimated) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        onEnter: () => {
          setHasAnimated(true);
        }
      });
    }
  }, [hasAnimated]);

  return (
    <section className="py-16 md:py-20 border-y border-white/5 bg-background" ref={containerRef}>
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsConfig.map((stat, idx) => (
            <FadeUpSection key={idx} className="text-center">
              <div className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2 tracking-tight flex items-center justify-center">
                {stat.prefix && <span className="text-text-muted mr-1">{stat.prefix}</span>}
                <Counter 
                  value={stat.value} 
                  decimals={stat.decimals || 0} 
                  active={hasAnimated} 
                />
                {stat.suffix && <span className="text-primary ml-1">{stat.suffix}</span>}
              </div>
              <p className="text-sm md:text-base text-text-soft font-medium uppercase tracking-wider">{t(stat.labelKey)}</p>
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, decimals, active }: { value: number, decimals: number, active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (active) {
      let start = 0;
      const duration = 2000; // ms
      const incrementTime = 20; // ms
      const steps = duration / incrementTime;
      const increment = value / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [active, value]);

  return <span>{count.toFixed(decimals)}</span>;
}
