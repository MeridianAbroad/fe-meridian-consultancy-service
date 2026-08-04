"use client";

import { getServices } from "@/lib/content";
import { getServiceIcon } from "@/lib/icon-map";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { VerticalProcessTimeline } from "@/components/shared/vertical-process-timeline";

export function StudyProcess() {
  const steps = getServices().map((service) => ({
    title: service.title,
    description: service.shortDescription,
    icon: getServiceIcon(service.icon),
  }));

  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="12-Step Support Ecosystem"
          title="From Your First Call to Graduation Day"
          description="Twelve concrete services we deliver to every student — not just an admission letter."
        />
        <div className="mt-16">
          <VerticalProcessTimeline steps={steps} />
        </div>
      </Container>
    </Section>
  );
}
