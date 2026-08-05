import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Users,
  Percent,
  CalendarDays,
  Landmark,
  BookOpen,
  Building2,
  Home as HomeIcon,
  CheckCircle2,
  Languages,
} from "lucide-react";
import { getUniversities, getUniversityBySlug } from "@/lib/content";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaSection } from "@/components/shared/cta-section";
import { UniversityHero } from "@/components/sections/universities/university-hero";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return getUniversities().map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const university = getUniversityBySlug(slug);
  if (!university) return {};

  return {
    title: university.name,
    description: university.about,
  };
}

export default async function UniversityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const university = getUniversityBySlug(slug);
  if (!university) notFound();

  const quickFacts = [
    { icon: CalendarDays, label: "Founded", value: String(university.founded) },
    { icon: Users, label: "Student Population", value: university.studentPopulation },
    { icon: Landmark, label: "International Students", value: university.internationalStudents },
    { icon: Percent, label: "Admission", value: university.acceptanceRate },
  ];

  return (
    <>
      <UniversityHero university={university} />

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
              About
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-navy-950">
              About {university.name}
            </h2>
            <p className="mt-5 leading-relaxed text-ink-700">{university.about}</p>

            <h3 className="mt-8 flex items-center gap-2 font-heading text-lg font-semibold text-navy-950">
              <Building2 className="size-5 text-royal-600" /> Campus Life
            </h3>
            <p className="mt-2 text-ink-700">{university.campusLife}</p>

            <h3 className="mt-6 flex items-center gap-2 font-heading text-lg font-semibold text-navy-950">
              <HomeIcon className="size-5 text-royal-600" /> Accommodation
            </h3>
            <p className="mt-2 text-ink-700">{university.accommodation}</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-muted/50 p-7">
              <h3 className="font-heading text-lg font-semibold text-navy-950">Eligibility</h3>
              <ul className="mt-4 space-y-3">
                {university.eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {university.englishMedium && (
              <div className="rounded-3xl bg-teal-50 p-7">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-teal-600 text-white">
                  <Languages className="size-5" />
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-navy-950">
                  English-Medium Programme
                </h3>
                <p className="mt-2 text-sm text-ink-700">
                  The entire MBBS curriculum is taught in English from year one —
                  no local language proficiency is required to begin your degree.
                </p>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Programme Details"
            title="MBBS Duration"
            className="mx-0"
          />
          <div className="mt-10 overflow-x-auto rounded-3xl bg-card shadow-softer ring-1 ring-black/5">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wide text-ink-500">
                  <th className="px-6 py-4 font-medium">Course</th>
                  <th className="px-6 py-4 font-medium">Level</th>
                  <th className="px-6 py-4 font-medium">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {university.courses.map((course) => (
                  <tr key={course.name}>
                    <td className="flex items-center gap-2 px-6 py-4 font-medium text-navy-950">
                      <BookOpen className="size-4 shrink-0 text-royal-600" />
                      {course.name}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary">{course.level}</Badge>
                    </td>
                    <td className="px-6 py-4 text-ink-700">{course.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <CtaSection
        title={`Ready to Apply to ${university.name}?`}
        description="Our counsellors will review your profile, perfect your application and guide you all the way to your visa."
      />
    </>
  );
}
