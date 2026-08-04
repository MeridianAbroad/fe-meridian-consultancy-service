import type { Metadata } from "next";
import { Clock, GraduationCap, Globe2, ClipboardList } from "lucide-react";
import { getCountries } from "@/lib/content";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { MbbsCurriculum } from "@/components/sections/courses/mbbs-curriculum";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "The MBBS Programme",
  description:
    "A year-by-year look at the 6-year MBBS programme our partner universities in Russia and Georgia offer to NEET-qualified Indian students.",
};

const QUICK_FACTS = [
  { icon: Clock, label: "Duration", value: "6 Years (incl. internship)" },
  { icon: Globe2, label: "Medium of Instruction", value: "English" },
  { icon: GraduationCap, label: "Degree Recognition", value: "NMC & WHO Approved" },
  { icon: ClipboardList, label: "Entrance Exam", value: "None — Direct Admission" },
];

export default function CoursesPage() {
  const requirements = getCountries()[0].requirements;

  return (
    <>
      <PageHeader
        eyebrow="The Programme"
        title="One Degree, One Standard: MBBS"
        description="Every university we work with — across Russia and Georgia — teaches the same core MBBS structure, in English, to the same NMC and WHO benchmarks."
        breadcrumbs={[{ label: "MBBS Programme" }]}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-2 gap-6 rounded-3xl bg-card p-8 shadow-lift ring-1 ring-black/5 sm:grid-cols-4">
            {QUICK_FACTS.map((fact) => (
              <div key={fact.label} className="text-center">
                <span className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <fact.icon className="size-5" strokeWidth={1.75} />
                </span>
                <p className="mt-3 font-heading text-lg font-bold text-navy-950">{fact.value}</p>
                <p className="mt-0.5 text-xs text-ink-500">{fact.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <MbbsCurriculum />

      <Section className="bg-muted/40">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Eligibility"
              title="Who Can Apply"
              className="mx-0"
            />
            <ul className="mt-8 space-y-3">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <ClipboardList className="mt-0.5 size-4 shrink-0 text-royal-600" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-card p-7 shadow-softer ring-1 ring-black/5 sm:p-8">
            <h3 className="font-heading text-xl font-bold text-navy-950">
              After Graduation
            </h3>
            <p className="mt-3 text-sm text-ink-700 leading-relaxed">
              Your MD/MBBS degree is recognised by the National Medical Commission (NMC)
              and the World Health Organization, letting you sit India&apos;s FMGE or NEXT
              screening exam to register and practise back home — or pursue postgraduate
              study through USMLE, PLAB or the destination country&apos;s own residency
              programmes.
            </p>
          </div>
        </Container>
      </Section>

      <CtaSection
        title="Have Questions About the Curriculum?"
        description="Book a free consultation and we'll walk you through the full 6-year structure at each partner university."
        secondaryHref="/universities"
        secondaryLabel="Browse Universities"
      />
    </>
  );
}
