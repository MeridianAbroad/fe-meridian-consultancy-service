"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Transparent Pricing",
    description:
      "Year-by-year tuition, hostel and insurance costs shared upfront, in writing. No hidden charges after you've committed.",
  },
  {
    icon: Handshake,
    title: "Direct University Partners",
    description:
      "No sub-agents between you and the medical university — every admission is processed directly with our 21 partner institutions.",
  },
  {
    icon: Sparkles,
    title: "Counselling That Respects You",
    description:
      "Honest guidance, even when it means recommending a different university or country than the one you first asked about.",
  },
];

export function WhyChooseUs() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Guidance That Feels Personal, Backed by Real Results"
          description="We built Meridian around one idea: every MBBS-abroad journey deserves honesty, not a sales pitch."
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-3xl bg-card p-7 shadow-softer ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lift"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <reason.icon className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-navy-950">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-ink-700">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
