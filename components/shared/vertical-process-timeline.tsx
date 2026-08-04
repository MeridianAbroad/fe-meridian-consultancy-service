"use client";

import { motion } from "framer-motion";
import { CheckCircle2, type LucideIcon } from "lucide-react";

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
};

export function VerticalProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div
        aria-hidden
        className="absolute left-7 top-7 bottom-7 hidden w-px bg-border sm:block"
      />
      <ol className="space-y-6">
        {steps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex gap-5 sm:gap-6"
          >
            <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-navy-950 text-white ring-8 ring-background">
              <step.icon className="size-6" strokeWidth={1.75} />
            </span>
            <div className="flex-1 rounded-2xl bg-card p-5 shadow-softer ring-1 ring-black/5 sm:p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-royal-600">
                Step {i + 1}
              </span>
              <h3 className="mt-1 font-heading text-lg font-semibold text-navy-950">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm text-ink-700">{step.description}</p>
              {step.details && (
                <ul className="mt-4 space-y-2 border-t border-border pt-4">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-ink-500">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-teal-600" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
