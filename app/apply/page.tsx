import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { getCountryBySlug } from "@/lib/data/countries";
import { getUniversityBySlug } from "@/lib/data/universities";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { ApplicationForm } from "@/components/forms/application-form";

export const metadata: Metadata = {
  title: "Apply Now",
  description:
    "Start your MBBS abroad application with Meridian — no fees, no obligation, just expert guidance from your first submission to your visa.",
};

const WHAT_HAPPENS_NEXT = [
  "A counsellor reviews your profile within one business day",
  "We confirm your shortlist and any documents still needed",
  "You get a clear timeline for application, visa and departure",
];

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string; university?: string }>;
}) {
  const params = await searchParams;
  const country = params.country ? getCountryBySlug(params.country) : undefined;
  const university = params.university ? getUniversityBySlug(params.university) : undefined;

  return (
    <>
      <PageHeader
        eyebrow="Start Today"
        title="Apply Now"
        description="Submit your details and our team will take it from there — no application fees, no obligation."
        breadcrumbs={[{ label: "Apply" }]}
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-950">
              What Happens Next
            </h2>
            <ul className="mt-6 space-y-4">
              {WHAT_HAPPENS_NEXT.map((step) => (
                <li key={step} className="flex items-start gap-3 text-ink-700">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal-600" />
                  {step}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-3xl bg-muted/50 p-6">
              <p className="text-sm text-ink-700">
                Applying for <span className="font-semibold text-navy-950">{university?.name ?? "a university"}</span>
                {country ? (
                  <>
                    {" "}
                    in <span className="font-semibold text-navy-950">{country.flagEmoji} {country.name}</span>
                  </>
                ) : null}
                ? We&apos;ve pre-filled what we know — just fill in the rest.
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-card p-7 shadow-lift ring-1 ring-black/5 sm:p-8">
            <ApplicationForm
              defaultCountry={country?.name ?? ""}
              defaultUniversity={university?.name ?? ""}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
