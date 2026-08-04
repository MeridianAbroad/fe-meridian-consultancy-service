"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/lib/types";
import { getCountryBySlug } from "@/lib/data/countries";
import { cn } from "@/lib/utils";

export function TestimonialCard({
  testimonial,
  index = 0,
  className,
}: {
  testimonial: Testimonial;
  index?: number;
  className?: string;
}) {
  const country = getCountryBySlug(testimonial.countrySlug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex h-full flex-col rounded-3xl bg-card p-7 shadow-softer ring-1 ring-black/5",
        className
      )}
    >
      <Quote className="size-8 text-teal-200" strokeWidth={1.5} />
      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "size-4",
              i < testimonial.rating
                ? "fill-teal-500 text-teal-500"
                : "fill-ink-300/40 text-ink-300/40"
            )}
          />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full">
          <Image src={testimonial.photo} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-heading text-sm font-semibold text-navy-950">{testimonial.name}</p>
          <p className="text-xs text-ink-500">
            {testimonial.program} {country ? `· ${country.flagEmoji} ${country.name}` : ""}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
