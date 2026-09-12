"use client";

import { useEffect, useRef, useState } from "react";

function parseStat(raw: string) {
  const match = raw.match(/\d[\d.,]*\d|\d/);
  if (!match || match.index === undefined) return null;

  const prefix = raw.slice(0, match.index);
  const suffix = raw.slice(match.index + match[0].length);

  let cleaned = match[0].replace(/([.,])(\d{3})(?!\d)/g, "$2");
  cleaned = cleaned.replace(/[.,](\d{1,2})$/, "");
  const target = parseInt(cleaned, 10);

  if (!Number.isFinite(target) || target <= 0) return null;
  return { prefix, suffix, target };
}

export default function AnimatedStat({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const parsed = useRef(parseStat(value));

  useEffect(() => {
    parsed.current = parseStat(value);
    setDisplay(value);
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    const info = parsed.current;
    if (!el || !info) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1100;
        const start = performance.now();

        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * info!.target);
          setDisplay(`${info!.prefix}${current.toLocaleString()}${info!.suffix}`);
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setDisplay(value);
          }
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
