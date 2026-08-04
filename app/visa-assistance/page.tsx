import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCountries, getFaqs } from "@/lib/content";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatsBar } from "@/components/sections/home/stats-bar";
import { VisaProcess } from "@/components/sections/visa/visa-process";
import { AccordionFaq } from "@/components/shared/accordion-faq";
import { VisaConsultationForm } from "@/components/forms/visa-consultation-form";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Visa Assistance",
  description:
    "A 96%+ visa success rate for Russia and Georgia, built on meticulous documentation, invitation letter coordination and real-time application tracking.",
};

export default function VisaAssistancePage() {
  const countries = getCountries();
  const visaFaqs = getFaqs().filter((f) => f.category === "Visa");

  return (
    <>
      <PageHeader
        eyebrow="96%+ Visa Success Rate"
        title="Visa Assistance That Removes the Guesswork"
        description="From invitation letters to embassy filing, our visa team has handled hundreds of successful student visa applications for Russia and Georgia."
        breadcrumbs={[{ label: "Visa Assistance" }]}
      />
      <StatsBar />

      <VisaProcess />

      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="By Destination"
            title="Visa Requirements Snapshot"
            description="Each destination has a different visa type, financial requirement and processing time — explore yours."
            className="mx-0"
          />
          <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/countries/${country.slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl bg-card p-5 shadow-softer ring-1 ring-black/5 transition-shadow hover:shadow-lift"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">{country.flagEmoji}</span>
                  <span>
                    <span className="block font-heading font-semibold text-navy-950">
                      {country.name}
                    </span>
                    <span className="block text-xs text-ink-500">
                      {country.stats.avgVisaSuccess} success rate
                    </span>
                  </span>
                </span>
                <ArrowRight className="size-4 text-royal-600 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Talk to a Visa Expert"
              title="Book a Free Visa Consultation"
              description="Tell us about your situation and a visa specialist will map out exactly what you need."
              className="mx-0"
            />
            {visaFaqs.length > 0 && (
              <div className="mt-10">
                <AccordionFaq faqs={visaFaqs} />
              </div>
            )}
          </div>
          <div className="rounded-3xl bg-card p-7 shadow-lift ring-1 ring-black/5 lg:p-8">
            <VisaConsultationForm />
          </div>
        </Container>
      </Section>

      <CtaSection
        title="Had a Visa Refused Before?"
        description="We specialise in rebuilding refused applications. Book a free consultation to find out what went wrong and fix it."
        secondaryHref="/faqs"
        secondaryLabel="Read Visa FAQs"
      />
    </>
  );
}
