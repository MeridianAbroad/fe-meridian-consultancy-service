import type { Metadata } from "next";
import { getUniversities } from "@/lib/content";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { UniversitiesExplorer } from "@/components/sections/universities/universities-explorer";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Universities",
  description:
    "Search 21+ NMC & WHO approved partner universities across Russia and Georgia by tuition, city and direct-admission eligibility.",
};

export default function UniversitiesPage() {
  const universities = getUniversities();

  return (
    <>
      <PageHeader
        eyebrow="21+ Universities"
        title="Find Your University"
        description="Search and filter our partner universities across Russia and Georgia by tuition and eligibility."
        breadcrumbs={[{ label: "Universities" }]}
      />
      <Section>
        <Container>
          <UniversitiesExplorer universities={universities} />
        </Container>
      </Section>
      <CtaSection
        title="Want a Shortlist Built Around You?"
        description="Skip the spreadsheets — book a free consultation and get a personalised university shortlist in 48 hours."
      />
    </>
  );
}
