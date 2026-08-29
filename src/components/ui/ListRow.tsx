import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function CheckRow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <li className={cn("flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft", className)}>
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export function CrossRow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <li className={cn("flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft", className)}>
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
        <X className="h-3 w-3" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}
