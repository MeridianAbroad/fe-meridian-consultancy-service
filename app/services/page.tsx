import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { ServiceProcess } from "@/components/sections/services/service-process";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Our 12-step, end-to-end MBBS abroad service — university registration, documentation, visa filing, invitation letter, airport pickup, accommodation, insurance and local support in Russia and Georgia.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Offer"
        title="Every Step, Covered"
        description="From your first counselling call to your first semester in Russia or Georgia — 12 concrete services designed to remove friction at every stage."
        breadcrumbs={[{ label: "Services" }]}
      />
      <Section>
        <Container>
          <ServiceProcess />
        </Container>
      </Section>
      <CtaSection
        title="Ready to Get Started?"
        description="Book a free consultation and we'll walk you through exactly which services apply to your journey."
        secondaryHref="/fees"
        secondaryLabel="Check Fees & Loans"
      />
    </>
  );
}
