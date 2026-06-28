"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.03] active:scale-[0.98]",
          {
            "bg-gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40":
              variant === "primary",
            "bg-surface border border-border hover:bg-surface-2 text-white":
              variant === "secondary",
            "border border-border bg-transparent hover:bg-surface text-white":
              variant === "outline",
            "hover:bg-surface text-text-soft hover:text-white": variant === "ghost",
            "border border-white/15 bg-white/5 text-white backdrop-blur hover:bg-white/10":
              variant === "glass",
            "h-9 px-4 text-sm": size === "sm",
            "h-12 px-7 py-3 text-base": size === "md",
            "h-14 px-10 text-lg": size === "lg",
            "h-12 w-12": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
