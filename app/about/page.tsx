import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { StatsBar } from "@/components/sections/home/stats-bar";
import { OurStory } from "@/components/sections/about/our-story";
import { MissionValues } from "@/components/sections/about/mission-values";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meridian Abroad has placed 10+ NEET students across 21+ NMC & WHO approved universities in Russia and Georgia since 2026.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Meridian"
        title="Honest Guidance for One of Life's Biggest Decisions"
        description="We've spent over a decade helping NEET-qualified students choose the right MBBS university — for the right reasons, not commission."
        breadcrumbs={[{ label: "About" }]}
      />
      <StatsBar />
      <OurStory />
      <MissionValues />
      <CtaSection
        title="Want to Talk to a Real Counsellor?"
        description="No scripts, no sales pressure — just an honest assessment of your options."
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
