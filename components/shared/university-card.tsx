"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import { University } from "@/lib/types";
import { getCountryBySlug } from "@/lib/data/countries";

export function UniversityCard({
  university,
  index = 0,
}: {
  university: University;
  index?: number;
}) {
  const country = getCountryBySlug(university.countrySlug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-softer ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lift"
    >
      <Link href={`/universities/${university.slug}`} className="flex flex-1 flex-col">
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={university.bannerImage}
            alt={`${university.name} campus`}
            fill
            priority={index < 3}
            quality={95}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/0 to-transparent" />
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-success-500/90 px-3 py-1 text-xs font-semibold text-white">
            <CheckCircle2 className="size-3.5" /> Direct Admission
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 font-heading text-lg font-bold text-white">
              {university.logoInitial}
            </span>
            <div>
              <h3 className="font-heading text-lg font-semibold leading-snug text-navy-950">
                {university.name}
              </h3>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-500">
                <MapPin className="size-3.5" />
                {university.city}
                {country ? ` · ${country.flagEmoji} ${country.name}` : ""}
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-teal-700">
            {university.ranking}
          </p>
          <div className="mt-auto flex items-center justify-end border-t border-border pt-4 text-sm">
            <span className="inline-flex items-center gap-1 font-semibold text-royal-600 transition-all group-hover:gap-2">
              View <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
