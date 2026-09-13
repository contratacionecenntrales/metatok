import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="glass inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neon">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mx-auto max-w-3xl ${center ? "text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`glass rounded-2xl p-6 ${className}`}>{children}</div>;
}
