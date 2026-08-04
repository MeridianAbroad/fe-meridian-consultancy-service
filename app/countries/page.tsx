import type { Metadata } from "next";
import { getCountries } from "@/lib/content";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { CountryCard } from "@/components/shared/country-card";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Study Destinations",
  description:
    "Russia and Georgia — our two MBBS-abroad destinations for NEET-qualified Indian students, with real tuition ranges, visa pathways and fee highlights.",
};

export default function CountriesPage() {
  const countries = getCountries();

  return (
    <>
      <PageHeader
        eyebrow="2 Destinations"
        title="Russia or Georgia — Where Will You Study?"
        description="Both destinations offer NMC & WHO approved, English-medium MBBS with direct admission. Here's how they compare."
        breadcrumbs={[{ label: "Countries" }]}
      />
      <Section>
        <Container>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {countries.map((country, i) => (
              <CountryCard key={country.slug} country={country} index={i} />
            ))}
          </div>
        </Container>
      </Section>
      <CtaSection
        title="Not Sure Which Country Fits You?"
        description="Book a free consultation and get a personalised country shortlist based on your budget, goals and academic profile."
        secondaryHref="/universities"
        secondaryLabel="Browse Universities"
      />
    </>
  );
}
