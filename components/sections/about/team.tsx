"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { teamPhoto } from "@/lib/images";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

const TEAM = [
  {
    name: "Anjali Deshpande",
    role: "Founder & CEO",
    bio: "15 years guiding NEET-qualified students toward medical universities abroad before founding Meridian in 2011.",
    photo: teamPhoto(0),
  },
  {
    name: "Meera Krishnan",
    role: "Senior Admissions Counsellor",
    bio: "Specialises in Russian and Georgian university admissions, document verification and seat confirmation.",
    photo: teamPhoto(1),
  },
  {
    name: "James Whitfield",
    role: "Visa & Immigration Lead",
    bio: "Former visa officer turned advocate, leads our 96%+ Russia & Georgia student visa success rate playbook.",
    photo: teamPhoto(2),
  },
  {
    name: "Sarah Mensah",
    role: "Fees & Loans Advisor",
    bio: "Has helped hundreds of families secure education loans and build transparent, year-wise MBBS fee plans.",
    photo: teamPhoto(4),
  },
  {
    name: "Daniel Osei",
    role: "Head of Student Success",
    bio: "Runs our post-arrival support programme from airport pickup through the internship year.",
    photo: teamPhoto(3),
  },
];

export function Team() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Meet the Team"
          title="Counsellors Who've Actually Done This Work"
          description="A small team of specialists, each focused on the details that make or break an application."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-3xl bg-card shadow-softer ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lift"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-navy-950">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-royal-600">{member.role}</p>
                <p className="mt-3 text-sm text-ink-700">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
