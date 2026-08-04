import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/content";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { BlogExplorer } from "@/components/sections/blog/blog-explorer";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical, no-fluff guides on NEET cutoffs, FMGE/NEXT prep, Russia vs Georgia comparisons and student life abroad.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <PageHeader
        eyebrow="Meridian Blog"
        title="Guides to Help You Plan With Confidence"
        description="Practical advice from our counsellors — no generic listicles, just what actually matters."
        breadcrumbs={[{ label: "Blog" }]}
      />
      <Section>
        <Container>
          <BlogExplorer posts={posts} />
        </Container>
      </Section>
      <CtaSection
        title="Want Personalised Advice Instead?"
        description="Articles are a great start, but nothing beats a real conversation. Book a free consultation today."
        secondaryHref="/faqs"
        secondaryLabel="Read Our FAQs"
      />
    </>
  );
}
