"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Country } from "@/lib/types";

export function CountryCard({ country, index = 0 }: { country: Country; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl bg-card shadow-softer ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lift"
    >
      <Link href={`/countries/${country.slug}`} className="block">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={country.heroImage}
            alt={`${country.name} study destination`}
            fill
            priority={index < 3}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
          <span className="absolute left-4 top-4 text-3xl drop-shadow-md">
            {country.flagEmoji}
          </span>
          <span className="absolute bottom-4 left-4 font-heading text-xl font-semibold text-white">
            {country.name}
          </span>
        </div>
        <div className="p-6">
          <p className="line-clamp-2 min-h-10 text-sm text-ink-700">{country.tagline}</p>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
            <span className="text-ink-500">{country.stats.universities}+ Universities</span>
            <span className="inline-flex items-center gap-1 font-semibold text-royal-600 transition-all group-hover:gap-2">
              Explore <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
