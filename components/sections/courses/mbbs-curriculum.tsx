"use client";

import { BookOpen, FlaskConical, Stethoscope, HeartPulse, GraduationCap, Award } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { VerticalProcessTimeline } from "@/components/shared/vertical-process-timeline";

const CURRICULUM = [
  {
    icon: BookOpen,
    title: "Year 1 — Foundation Sciences",
    description:
      "Anatomy, Physiology and Biochemistry — building the foundation every clinical subject relies on later.",
  },
  {
    icon: FlaskConical,
    title: "Year 2 — Para-Clinical Sciences",
    description:
      "Pharmacology, Pathology, Microbiology and Forensic Medicine, alongside your first patient-facing clinical postings.",
  },
  {
    icon: Stethoscope,
    title: "Year 3 — Clinical Foundations",
    description:
      "Medicine, Surgery, Community Medicine and Obstetrics & Gynaecology begin, with structured hospital ward rotations.",
  },
  {
    icon: HeartPulse,
    title: "Year 4 — Advanced Clinical Rotations",
    description:
      "Deeper rotations across Medicine, Surgery and allied specialities, with increasing hands-on responsibility under supervision.",
  },
  {
    icon: Stethoscope,
    title: "Year 5 — Specialised Clinical Training",
    description:
      "Paediatrics, Orthopaedics, ENT, Ophthalmology, Psychiatry and other specialities, alongside exam-oriented case discussions.",
  },
  {
    icon: GraduationCap,
    title: "Year 6 — Compulsory Rotating Internship",
    description:
      "A full year of supervised, hands-on practice across all major departments at your university's teaching hospital.",
  },
  {
    icon: Award,
    title: "FMGE / NEXT & Licensing",
    description:
      "Prepare for and sit India's licensing screening exam before registering with the Indian Medical Register to practise.",
  },
];

export function MbbsCurriculum() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Year by Year"
          title="What the 6-Year MBBS Programme Actually Covers"
          description="The same core structure across every partner university, taught fully in English."
        />
        <div className="mt-16">
          <VerticalProcessTimeline steps={CURRICULUM} />
        </div>
      </Container>
    </Section>
  );
}
