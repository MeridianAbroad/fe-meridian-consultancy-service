import Image from "next/image";
import { Country } from "@/lib/types";
import { Container } from "@/components/shared/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { LeadActions } from "@/components/shared/lead-actions";

export function CountryHero({ country }: { country: Country }) {
  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden pt-36">
      <Image
        src={country.heroImage}
        alt={`${country.name} skyline`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/30" />
      <Container className="relative pb-14">
        <div className="mb-6">
          <Breadcrumbs
            tone="light"
            items={[{ label: "Countries", href: "/countries" }, { label: country.name }]}
          />
        </div>
        <span className="text-5xl">{country.flagEmoji}</span>
        <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">
          Study in {country.name}
        </h1>
        <p className="mt-3 max-w-xl text-lg text-white/80">{country.tagline}</p>
        <LeadActions applyHref={`/apply?country=${country.slug}`} className="mt-8" />
      </Container>
    </section>
  );
}
