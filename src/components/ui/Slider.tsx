"use client";

import { cn } from "@/lib/utils";

export function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
  accent = "cyan",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (value: number) => void;
  accent?: "cyan" | "violet" | "emerald";
}) {
  const percent = ((value - min) / (max - min)) * 100;

  const accentColor =
    accent === "violet" ? "#a855f7" : accent === "emerald" ? "#34d399" : "#22d3ee";

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label className="text-sm font-medium text-slate-300">{label}</label>
        <span className="font-display text-lg font-semibold text-white">
          {value.toLocaleString("es-ES")}
          <span className="ml-1 text-sm font-normal text-slate-500">{suffix}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={cn("mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10")}
        style={{
          background: `linear-gradient(90deg, ${accentColor} 0%, ${accentColor} ${percent}%, rgba(255,255,255,0.08) ${percent}%, rgba(255,255,255,0.08) 100%)`,
          // Thumb styling via inline style tag below (webkit/moz pseudo-elements can't be set inline)
        }}
        aria-label={label}
      />
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 9999px;
          background: #ffffff;
          box-shadow:
            0 0 0 3px ${accentColor},
            0 4px 12px rgba(0, 0, 0, 0.5);
          cursor: pointer;
          transition: transform 0.15s ease;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border: none;
          border-radius: 9999px;
          background: #ffffff;
          box-shadow:
            0 0 0 3px ${accentColor},
            0 4px 12px rgba(0, 0, 0, 0.5);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
