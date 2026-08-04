import { getCountries } from "@/lib/content";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { CountryCard } from "@/components/shared/country-card";

export function CountriesGrid() {
  const countries = getCountries();

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Destinations"
          title="Two Countries, One Direct Path to MBBS"
          description="We focus exclusively on Russia and Georgia — deep expertise in two destinations, instead of a shallow spread across dozens."
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {countries.map((country, i) => (
            <CountryCard key={country.slug} country={country} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
