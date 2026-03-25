import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "secondary" | "sold" | "new";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default:   "bg-primary/15 text-primary border-primary/20",
  secondary: "bg-secondary/15 text-secondary border-secondary/20",
  sold:      "bg-tertiary/15 text-tertiary border-tertiary/20",
  new:       "bg-on-surface-variant/10 text-on-surface-variant border-outline-variant/30",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full border text-label-sm font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
