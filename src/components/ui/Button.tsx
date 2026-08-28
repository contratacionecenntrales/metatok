import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-400 via-cyan-400 to-emerald-400 text-obsidian shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_8px_30px_-8px_rgba(34,211,238,0.65)] hover:shadow-[0_0_0_1px_rgba(34,211,238,0.6),0_12px_40px_-6px_rgba(34,211,238,0.85)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "glass-panel text-slate-100 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5",
  ghost:
    "text-slate-300 hover:text-white hover:bg-white/5",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  children,
  type,
}: {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
}) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
