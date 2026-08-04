"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { BRAND } from "@/lib/constants";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { ConsultationTrigger } from "@/components/shared/consultation-trigger";

const TRUST_CHECKS = ["Official University Partners", "FMGE/NExT Guidance", "On-ground support"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-24 pt-40 sm:pb-32 sm:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-32 size-96 rounded-full bg-royal-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-teal-500/10 blur-3xl"
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-200 ring-1 ring-white/10">
            <ShieldCheck className="size-3.5" />
            NMC & WHO Approved Universities
          </span>
          <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Building Tomorrow&apos;s Doctors, <span className="text-teal-300">One Dream at a Time</span>
Zero middleman fees          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            {BRAND.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button render={<Link href="/universities" />} size="lg">
              Explore Universities
              <ArrowRight className="size-4" />
            </Button>
            <ConsultationTrigger
              size="lg"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Book Counselling
            </ConsultationTrigger>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            {TRUST_CHECKS.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-300" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-lift ring-1 ring-white/10">
            <Image
              src={IMAGES.heroImage}
              alt="Medical university campus building"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>
          <div className="absolute -left-4 bottom-8 hidden rounded-2xl bg-white/95 p-4 shadow-lift backdrop-blur-md sm:block">
            <p className="font-heading text-2xl font-bold text-navy-950">96%</p>
            <p className="text-xs text-ink-500">Visa Success Rate</p>
          </div>
          <div className="absolute -right-4 top-10 hidden rounded-2xl bg-white/95 p-4 shadow-lift backdrop-blur-md sm:block">
            <p className="font-heading text-2xl font-bold text-navy-950">21+</p>
            <p className="text-xs text-ink-500">Partner Universities</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
