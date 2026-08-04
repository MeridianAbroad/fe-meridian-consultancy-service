"use client";

import { motion } from "framer-motion";
import { Target, Eye, HeartHandshake, Globe2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

const VALUES = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make an NMC & WHO approved MBBS accessible to every NEET-qualified student through honest guidance, not sales quotas.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A future where a tough NEET rank never closes the door on a student's dream of becoming a doctor.",
  },
  {
    icon: HeartHandshake,
    title: "Student-First, Always",
    description:
      "We earn from partner universities on successful enrolments — never a hidden fee charged to a student for their own admission.",
  },
  {
    icon: Globe2,
    title: "Genuine On-Ground Expertise",
    description:
      "Our coordinators live in Russia and Georgia year-round, tracking intake changes and visa policy as they happen, not once a year.",
  },
];

export function MissionValues() {
  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="What Drives Us"
          title="Guidance You Can Actually Trust"
          description="Four principles that shape every counselling call, every shortlist and every visa file we handle."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-3xl bg-card p-7 shadow-softer ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lift"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-navy-900 text-white">
                <value.icon className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-navy-950">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-ink-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
