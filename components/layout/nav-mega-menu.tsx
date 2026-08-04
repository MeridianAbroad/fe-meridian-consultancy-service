"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { universities } from "@/lib/data/universities";

export function NavMegaMenu({
  label,
  href,
  open,
  onOpenChange,
  onMouseEnter,
  onMouseLeave,
  tone,
}: {
  label: string;
  href: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  tone: "dark" | "light";
}) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <PopoverTrigger
          nativeButton={false}
          render={
            <Link
              href={href}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors",
                tone === "light" ? "text-white/85 hover:text-white" : "text-ink-700 hover:text-navy-950"
              )}
            />
          }
        >
          {label}
          <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
        </PopoverTrigger>
        <PopoverContent
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          align="start"
          sideOffset={18}
          className="w-[min(90vw,640px)] rounded-2xl border-0 p-0 shadow-lift ring-1 ring-black/5"
        >
          <UniversitiesMegaPanel />
        </PopoverContent>
      </div>
    </Popover>
  );
}

function UniversitiesMegaPanel() {
  const featured = universities.slice(0, 8);
  return (
    <div>
      <div className="grid grid-cols-2 gap-1 p-4">
        {featured.map((uni) => (
          <Link
            key={uni.slug}
            href={`/universities/${uni.slug}`}
            className="flex items-start gap-2.5 rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-muted"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-xs font-bold text-white">
              {uni.logoInitial}
            </span>
            <span>
              <span className="block font-medium leading-snug text-navy-950">{uni.name}</span>
              <span className="block text-xs text-ink-500">{uni.city}</span>
            </span>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-b-2xl border-t border-border bg-muted/50 px-5 py-3.5">
        <span className="text-xs text-ink-500">21+ partner universities across Russia & Georgia</span>
        <Link
          href="/universities"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-royal-600 hover:gap-2.5 transition-all"
        >
          Browse all <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
