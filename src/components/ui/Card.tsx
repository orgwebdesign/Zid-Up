"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glassmorphism?: boolean;
  hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glassmorphism = true, hoverEffect = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden p-6 sm:p-8 transition-all duration-300",
          glassmorphism ? "zid-card" : "bg-surface rounded-[24px] border border-border",
          hoverEffect && "hover:-translate-y-2 hover:scale-[1.02]",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };
