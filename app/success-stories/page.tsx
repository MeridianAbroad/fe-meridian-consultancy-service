import type { Metadata } from "next";
import { getTestimonials } from "@/lib/content";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { StatsBar } from "@/components/sections/home/stats-bar";
import { StoryCard } from "@/components/sections/success-stories/story-card";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real students, real universities, real outcomes — read the full journeys of students Meridian has guided abroad.",
};

export default function SuccessStoriesPage() {
  const testimonials = getTestimonials();

  return (
    <>
      <PageHeader
        eyebrow="Success Stories"
        title="Real Journeys, Real Outcomes"
        description="Every admission, invitation letter and visa file behind these stories was built one student at a time — here's what that looked like."
        breadcrumbs={[{ label: "Success Stories" }]}
      />
      <StatsBar />
      <Section>
        <Container className="space-y-8">
          {testimonials.map((t, i) => (
            <StoryCard key={t.slug} testimonial={t} reverse={i % 2 === 1} />
          ))}
        </Container>
      </Section>
      <CtaSection
        title="Your Story Could Be Next"
        description="Book a free consultation and let's start building your own journey abroad."
        secondaryHref="/universities"
        secondaryLabel="Browse Universities"
      />
    </>
  );
}
