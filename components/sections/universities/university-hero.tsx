import Image from "next/image";
import { MapPin } from "lucide-react";
import { University } from "@/lib/types";
import { getCountryBySlug } from "@/lib/data/countries";
import { Container } from "@/components/shared/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { LeadActions } from "@/components/shared/lead-actions";

export function UniversityHero({ university }: { university: University }) {
  const country = getCountryBySlug(university.countrySlug);

  return (
    <section className="relative flex min-h-[520px] items-end overflow-hidden pt-36">
      <Image
        src={university.bannerImage}
        alt={`${university.name} campus`}
        fill
        priority
        quality={95}
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/30" />
      <Container className="relative pb-14">
        <div className="mb-6">
          <Breadcrumbs
            tone="light"
            items={[
              { label: "Universities", href: "/universities" },
              { label: university.name },
            ]}
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10 font-heading text-xl font-bold text-white ring-1 ring-white/20">
            {university.logoInitial}
          </span>
          <span className="rounded-full bg-teal-500/20 px-3 py-1 text-xs font-semibold text-teal-200">
            {university.ranking}
          </span>
        </div>
        <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">
          {university.name}
        </h1>
        <p className="mt-3 flex items-center gap-1.5 text-lg text-white/80">
          <MapPin className="size-4" />
          {university.city}
          {country ? ` · ${country.flagEmoji} ${country.name}` : ""}
        </p>
        <LeadActions applyHref={`/apply?university=${university.slug}`} className="mt-8" />
      </Container>
    </section>
  );
}
