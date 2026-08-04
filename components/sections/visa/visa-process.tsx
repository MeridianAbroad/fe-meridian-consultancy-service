"use client";

import { FileSearch, Mail, FileEdit, Stamp } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Timeline } from "@/components/shared/timeline";

const STEPS = [
  {
    icon: FileSearch,
    title: "Document Audit",
    description:
      "We review your academic, financial and personal documents against your destination university's exact requirements.",
  },
  {
    icon: Mail,
    title: "Invitation Letter",
    description:
      "Once admission is confirmed, we coordinate with your university to secure the official invitation letter your visa depends on.",
  },
  {
    icon: FileEdit,
    title: "Application Filing",
    description:
      "Your student visa application is completed and reviewed line by line before submission — no rushed paperwork.",
  },
  {
    icon: Stamp,
    title: "Approval & Travel Prep",
    description:
      "We track your application until it's stamped, then help you prepare for departure and arrival registration.",
  },
];

export function VisaProcess() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="How We Get You Visa-Ready"
          description="A repeatable, four-stage process built from hundreds of successful Russia and Georgia student visa cases."
        />
        <div className="mt-16">
          <Timeline steps={STEPS} />
        </div>
      </Container>
    </Section>
  );
}
