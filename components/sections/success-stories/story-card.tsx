"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/lib/types";
import { getCountryBySlug } from "@/lib/data/countries";
import { cn } from "@/lib/utils";

export function StoryCard({
  testimonial,
  reverse = false,
}: {
  testimonial: Testimonial;
  reverse?: boolean;
}) {
  const country = getCountryBySlug(testimonial.countrySlug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-8 rounded-3xl bg-card p-6 shadow-softer ring-1 ring-black/5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
    >
      <div
        className={cn(
          "relative aspect-4/5 w-full overflow-hidden rounded-2xl",
          reverse && "lg:order-2"
        )}
      >
        <Image
          src={testimonial.photo}
          alt={testimonial.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 360px, 90vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-5">
          <p className="font-heading font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-white/70">
            {testimonial.program} · {country ? `${country.flagEmoji} ${country.name}` : ""}
          </p>
        </div>
      </div>
      <div className={cn("flex flex-col justify-center", reverse && "lg:order-1")}>
        <div className="flex gap-0.5">
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
        <Quote className="mt-3 size-8 text-teal-200" strokeWidth={1.5} />
        <p className="mt-2 font-heading text-lg font-medium leading-snug text-navy-950 sm:text-xl">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-royal-600">
          {testimonial.university}
        </p>
        <div className="mt-5 rounded-2xl bg-muted/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
            Their Journey
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">{testimonial.story}</p>
        </div>
      </div>
    </motion.div>
  );
}
