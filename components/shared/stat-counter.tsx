"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

export function StatCounter({
  value,
  suffix = "",
  label,
  tone = "light",
  className,
}: {
  value: number;
  suffix?: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div
        className={cn(
          "font-heading text-4xl font-bold tracking-tight sm:text-5xl",
          tone === "light" ? "text-white" : "text-navy-950"
        )}
      >
        {animated.toLocaleString()}
        {suffix}
      </div>
      <div
        className={cn(
          "mt-2 text-sm font-medium",
          tone === "light" ? "text-white/70" : "text-ink-500"
        )}
      >
        {label}
      </div>
    </div>
  );
}
