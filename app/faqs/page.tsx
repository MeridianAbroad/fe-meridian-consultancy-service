import type { Metadata } from "next";
import { getFaqs } from "@/lib/content";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FaqExplorer } from "@/components/sections/faqs/faq-explorer";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to the questions students and parents ask most about NEET eligibility, costs, visas, degree recognition and FMGE/NEXT.",
};

export default function FaqsPage() {
  const faqs = getFaqs();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHeader
        eyebrow="Got Questions?"
        title="Frequently Asked Questions"
        description="Everything students and parents ask us most, organised by topic."
        breadcrumbs={[{ label: "FAQs" }]}
      />
      <Section>
        <Container className="max-w-3xl">
          <FaqExplorer faqs={faqs} />
        </Container>
      </Section>
      <CtaSection
        title="Still Have Questions?"
        description="Our counsellors are happy to talk through your specific situation — book a free call."
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
