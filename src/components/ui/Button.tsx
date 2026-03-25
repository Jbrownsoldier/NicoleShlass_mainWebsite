"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "gradient-cta text-on-secondary font-semibold hover:opacity-90 active:opacity-80 shadow-ambient",
  secondary:
    "glass-card text-on-surface border border-outline-variant/30 hover:border-outline-variant/60 hover:bg-surface-c-high/80",
  ghost:
    "text-on-surface-variant hover:text-on-surface hover:bg-surface-c/60",
  outline:
    "border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2.5 text-label-md rounded-full",
  md: "px-7 py-3.5 text-label-md rounded-full",
  lg: "px-9 py-4.5 text-label-lg rounded-full",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 transition-all duration-200",
          "disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
