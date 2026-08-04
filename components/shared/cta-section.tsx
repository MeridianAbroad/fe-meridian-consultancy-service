"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ConsultationTrigger } from "@/components/shared/consultation-trigger";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function CtaSection({
  eyebrow = "Start Your Journey",
  title,
  description,
  secondaryHref,
  secondaryLabel,
  className,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-hero-gradient py-20 md:py-24", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-teal-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-royal-500/20 blur-3xl"
      />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-200">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/70">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ConsultationTrigger size="lg" className="w-full sm:w-auto">
              Book Free Consultation
            </ConsultationTrigger>
            {secondaryHref && secondaryLabel && (
              <Button
                render={<Link href={secondaryHref} />}
                size="lg"
                variant="outline"
                className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
              >
                {secondaryLabel}
                <ArrowRight className="size-4" />
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
