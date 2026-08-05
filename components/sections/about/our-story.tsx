"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function OurStory() {
  return (
    <Section>
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src={IMAGES.medical.clinicalRotation}
              alt="Counsellors reviewing a student's MBBS application together"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 90vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden max-w-[220px] rounded-2xl bg-navy-950 p-5 text-white shadow-lift sm:block">
            <p className="font-heading text-2xl font-bold">{BRAND.founded}</p>
            <p className="mt-1 text-xs text-white/60">
              The year we sent our first NEET student to Russia
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700">
            Our Story
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold text-navy-950 sm:text-4xl">
            Built by Counsellors Who Were Tired of Seat-Selling Agents
          </h2>
          <div className="mt-6 space-y-4 text-ink-700">
            <p>
              {BRAND.name} started in {BRAND.founded} with a simple frustration: too many
              NEET-qualified students were being pushed toward whichever university paid
              the largest commission — not the one that actually fit their budget, city
              preference or long-term FMGE/NEXT goals.
            </p>
            <p>
              We built {BRAND.fullName} around the opposite model: direct partnerships
              with NMC and WHO approved universities in Russia and Georgia, transparent
              fee structures shared in writing before a rupee changes hands, and local
              coordinators who stay reachable long after the visa is stamped.
            </p>
            <p>
              Today, that same philosophy has guided over 10 students to 21+ partner
              universities across Russia and Georgia — and parents tell us it&apos;s the
              first time the process ever felt like it was actually about their child,
              not a sales target.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
