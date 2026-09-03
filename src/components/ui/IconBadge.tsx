import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export type BadgeColor = "violet" | "blue" | "green" | "pink" | "amber" | "teal" | "ink";

const COLOR_STYLES: Record<BadgeColor, string> = {
  violet: "bg-brand-100 text-brand-600",
  blue: "bg-blue-100 text-blue-600",
  green: "bg-emerald-100 text-emerald-600",
  pink: "bg-pink-100 text-pink-600",
  amber: "bg-amber-100 text-amber-600",
  teal: "bg-teal-100 text-teal-600",
  ink: "bg-ink text-white",
};

const SIZE_STYLES = {
  sm: "h-9 w-9 rounded-xl [&>svg]:h-4 [&>svg]:w-4",
  md: "h-12 w-12 rounded-2xl [&>svg]:h-5.5 [&>svg]:w-5.5",
  lg: "h-16 w-16 rounded-2xl [&>svg]:h-7 [&>svg]:w-7",
};

export function IconBadge({
  icon: Icon,
  color = "violet",
  size = "md",
  className,
}: {
  icon: LucideIcon;
  color?: BadgeColor;
  size?: keyof typeof SIZE_STYLES;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        COLOR_STYLES[color],
        SIZE_STYLES[size],
        className,
      )}
    >
      <Icon strokeWidth={2.25} />
    </span>
  );
}
