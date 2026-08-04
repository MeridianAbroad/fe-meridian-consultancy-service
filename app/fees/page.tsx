import type { Metadata } from "next";
import { Wallet, Landmark, CheckCircle2 } from "lucide-react";
import { getCountries } from "@/lib/content";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeeInquiryForm } from "@/components/forms/fee-inquiry-form";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Fees & Loans",
  description:
    "Transparent, year-by-year MBBS abroad fee breakdowns for Russia and Georgia, plus education loan assistance — no hidden charges.",
};

const LOAN_POINTS = [
  "Loan eligibility assessment across partner banks and NBFCs",
  "Documentation support for both collateral and non-collateral loans",
  "Year-wise fee schedule matched to your lender's disbursement structure",
  "Guidance comparing interest rates and repayment terms before you commit",
];

export default function FeesPage() {
  const countries = getCountries();

  return (
    <>
      <PageHeader
        eyebrow="Full Transparency"
        title="Fees & Loans, Explained Upfront"
        description="Every cost — tuition, hostel, insurance and one-time fees — shared in writing before you pay anything."
        breadcrumbs={[{ label: "Fees & Loans" }]}
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Cost Breakdown"
            title="What MBBS Abroad Actually Costs"
            description="Total six-year cost by destination, based on our current partner university range."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {countries.map((country) => (
              <div
                key={country.slug}
                className="rounded-3xl bg-card p-7 shadow-softer ring-1 ring-black/5"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                  {country.flagEmoji} {country.name}
                </p>
                <span className="mt-4 inline-flex size-11 items-center justify-center rounded-2xl bg-navy-900 text-white">
                  <Wallet className="size-5" />
                </span>
                <ul className="mt-5 divide-y divide-border">
                  {country.tuition.map((t) => (
                    <li key={t.level} className="flex items-center justify-between py-3 text-sm">
                      <span className="text-ink-500">{t.level}</span>
                      <span className="font-semibold text-navy-950">{t.range}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 space-y-3 border-t border-border pt-5">
                  {country.costHighlights.map((c) => (
                    <div key={c.name} className="flex items-start justify-between gap-4 text-sm">
                      <div>
                        <p className="font-medium text-navy-950">{c.name}</p>
                        <p className="text-xs text-ink-500">{c.note}</p>
                      </div>
                      <span className="shrink-0 font-semibold text-navy-950">{c.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Education Loans"
              title="Financing Your MBBS Abroad"
              className="mx-0"
            />
            <div className="mt-8 flex items-start gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <Landmark className="size-5" />
              </span>
              <p className="text-ink-700">
                Given the six-year duration of MBBS abroad, most families finance at
                least part of the cost through an education loan. We help you compare
                collateral and non-collateral options before you commit.
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {LOAN_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-card p-7 shadow-lift ring-1 ring-black/5 sm:p-8">
            <h3 className="font-heading text-xl font-bold text-navy-950">
              Get a Full Fee Breakdown
            </h3>
            <p className="mt-2 text-sm text-ink-500">
              Tell us your target destination and we&apos;ll send an itemised, year-wise
              cost sheet — no obligation.
            </p>
            <div className="mt-6">
              <FeeInquiryForm />
            </div>
          </div>
        </Container>
      </Section>

      <CtaSection
        title="Ready to See the Exact Numbers?"
        description="Book a free counselling call and get a personalised cost comparison across our partner universities."
        secondaryHref="/universities"
        secondaryLabel="Browse Universities"
      />
    </>
  );
}
