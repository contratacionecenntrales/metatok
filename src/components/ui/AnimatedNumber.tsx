"use client";

import { useEffect, useRef } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";

export function AnimatedNumber({
  value,
  formatter,
  className,
}: {
  value: number;
  formatter: (n: number) => string;
  className?: string;
}) {
  const motionValue = useMotionValue(value);
  const rounded = useTransform(motionValue, (latest) => formatter(latest));
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [value, motionValue]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (spanRef.current) spanRef.current.textContent = latest;
    });
  }, [rounded]);

  return (
    <span ref={spanRef} className={className}>
      {formatter(value)}
    </span>
  );
}
