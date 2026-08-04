import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Building2,
  ShieldCheck,
  Users,
  Briefcase,
  GraduationCap,
  Wallet,
  Home as HomeIcon,
  Award,
  Stamp,
  CalendarCheck,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";
import { getCountries, getCountryBySlug } from "@/lib/content";
import { getUniversityBySlug } from "@/lib/data/universities";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { UniversityCard } from "@/components/shared/university-card";
import { CtaSection } from "@/components/shared/cta-section";
import { CountryHero } from "@/components/sections/countries/country-hero";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return getCountries().map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return {};

  return {
    title: `Study in ${country.name}`,
    description: country.overview,
  };
}

export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  const universities = country.topUniversitySlugs
    .map((s) => getUniversityBySlug(s))
    .filter((u): u is NonNullable<typeof u> => Boolean(u));

  const quickFacts = [
    { icon: Building2, label: "Partner Universities", value: `${country.stats.universities}+` },
    { icon: ShieldCheck, label: "Visa Success Rate", value: country.stats.avgVisaSuccess },
    { icon: Users, label: "International Students", value: country.stats.internationalStudents },
    { icon: Briefcase, label: "Post-Study Work Rights", value: country.stats.workRights },
  ];

  return (
    <>
      <CountryHero country={country} />

      <section className="relative z-10 -mt-10 pb-4">
        <Container>
          <div className="grid grid-cols-2 gap-6 rounded-3xl bg-card p-8 shadow-lift ring-1 ring-black/5 sm:grid-cols-4">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="text-center">
                <span className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <fact.icon className="size-5" strokeWidth={1.75} />
                </span>
                <p className="mt-3 font-heading text-xl font-bold text-navy-950">{fact.value}</p>
                <p className="mt-0.5 text-xs text-ink-500">{fact.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700">
              Overview
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-navy-950">
              Why Study in {country.name}?
            </h2>
            <p className="mt-5 text-ink-700 leading-relaxed">{country.overview}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {country.intakes.map((intake) => (
                <Badge key={intake} variant="secondary" className="px-3 py-1.5">
                  <CalendarCheck className="size-3.5" /> {intake}
                </Badge>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-muted/50 p-7">
            <h3 className="font-heading text-lg font-semibold text-navy-950">Highlights</h3>
            <ul className="mt-4 space-y-3">
              {country.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {universities.length > 0 && (
        <Section className="bg-muted/40">
          <Container>
            <SectionHeading
              align="left"
              eyebrow="Top Universities"
              title={`Where to Study in ${country.name}`}
              description="A selection of our partner universities in this destination."
              className="mx-0"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {universities.map((university, i) => (
                <UniversityCard key={university.slug} university={university} index={i} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Popular Courses"
            title="In-Demand Programmes"
            className="mx-0"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {country.popularCourses.map((course) => (
              <span
                key={course}
                className="inline-flex items-center gap-2 rounded-full bg-royal-50 px-4 py-2 text-sm font-medium text-royal-700"
              >
                <GraduationCap className="size-4" /> {course}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-card p-7 shadow-softer ring-1 ring-black/5">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-navy-900 text-white">
              <Wallet className="size-5" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-semibold text-navy-950">
              Average Tuition
            </h3>
            <ul className="mt-4 divide-y divide-border">
              {country.tuition.map((t) => (
                <li key={t.level} className="flex items-center justify-between py-3 text-sm">
                  <span className="text-ink-500">{t.level}</span>
                  <span className="font-semibold text-navy-950">{t.range}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-card p-7 shadow-softer ring-1 ring-black/5">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-navy-900 text-white">
              <HomeIcon className="size-5" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-semibold text-navy-950">
              Living Costs
            </h3>
            <ul className="mt-4 divide-y divide-border">
              {country.livingCost.map((c) => (
                <li key={c.category} className="flex items-center justify-between py-3 text-sm">
                  <span className="text-ink-500">{c.category}</span>
                  <span className="font-semibold text-navy-950">{c.range}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Fee Highlights"
            title="What Else to Budget For"
            className="mx-0"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {country.costHighlights.map((c) => (
              <div
                key={c.name}
                className="rounded-3xl bg-card p-6 shadow-softer ring-1 ring-black/5"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Award className="size-5" />
                </span>
                <h3 className="mt-4 font-heading font-semibold text-navy-950">{c.name}</h3>
                <p className="mt-1 text-sm font-semibold text-royal-600">{c.amount}</p>
                <p className="mt-2 text-sm text-ink-500">{c.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Visa Information"
            title="The Visa Pathway, Step by Step"
            className="mx-0"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {country.visa.map((v, i) => (
              <div key={v.title} className="rounded-3xl bg-card p-6 shadow-softer ring-1 ring-black/5">
                <span className="flex size-9 items-center justify-center rounded-full bg-navy-950 font-heading text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 flex items-center gap-2 font-heading font-semibold text-navy-950">
                  <Stamp className="size-4 text-teal-600" /> {v.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Career Outlook"
              title="Career Opportunities"
              className="mx-0"
            />
            <ul className="mt-8 space-y-3">
              {country.careerOpportunities.map((career) => (
                <li key={career} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <Briefcase className="mt-0.5 size-4 shrink-0 text-royal-600" />
                  {career}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Admission Requirements"
              title="What You'll Need to Apply"
              className="mx-0"
            />
            <ul className="mt-8 space-y-3">
              {country.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <ClipboardList className="mt-0.5 size-4 shrink-0 text-royal-600" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <CtaSection
        title={`Ready to Start Your Journey to ${country.name}?`}
        description="Book a free consultation and get a personalised shortlist of universities, a fee breakdown and a realistic visa timeline."
        secondaryHref="/fees"
        secondaryLabel="Check Fees & Loans"
      />
    </>
  );
}
