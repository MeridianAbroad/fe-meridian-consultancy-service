"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { getUniversitiesByCountry } from "@/lib/content";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { UniversityCard } from "@/components/shared/university-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TABS = [
  { value: "russia", label: "MBBS in Russia" },
  { value: "georgia", label: "MBBS in Georgia" },
] as const;

export function FeaturedUniversities() {
  const [country, setCountry] = useState<"russia" | "georgia">("russia");
  const universities = getUniversitiesByCountry(country).slice(0, 3);

  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="Destinations"
          title="NMC & WHO Approved Universities — Handpicked"
          description="Browse direct-admission MBBS universities across Russia and Georgia. Click Apply Now to secure your seat with our team — no entrance exams, transparent fees, full on-ground support."
        />
        <div className="mt-10 flex justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setCountry(tab.value)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                country === tab.value
                  ? "bg-navy-950 text-white"
                  : "bg-card text-ink-700 ring-1 ring-black/5 hover:bg-muted"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((university, i) => (
            <UniversityCard key={university.slug} university={university} index={i} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button render={<Link href="/universities" />} variant="outline">
            Browse All Universities <ArrowRight className="size-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
