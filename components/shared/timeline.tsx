"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type TimelineStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      <div className="absolute top-7 right-0 left-0 hidden h-px bg-border lg:block" />
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-navy-900 text-white ring-8 ring-background">
            <step.icon className="size-6" strokeWidth={1.75} />
          </div>
          <span className="mt-4 block font-heading text-xs font-bold uppercase tracking-widest text-royal-600">
            Step {i + 1}
          </span>
          <h3 className="mt-1 font-heading text-lg font-semibold text-navy-950">{step.title}</h3>
          <p className="mt-2 text-sm text-ink-700">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
