"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function FadeUpSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 50 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
