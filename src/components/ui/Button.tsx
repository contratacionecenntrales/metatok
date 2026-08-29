import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
type ButtonSize = "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-brand hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-[#e4e0f7] bg-white text-ink hover:border-brand-300 hover:text-brand-700 hover:-translate-y-0.5",
  ghost: "text-ink-soft hover:text-brand-600 hover:bg-brand-50",
  dark: "bg-ink text-white hover:bg-black hover:-translate-y-0.5",
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
