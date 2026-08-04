import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFaqs } from "@/lib/content";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { AccordionFaq } from "@/components/shared/accordion-faq";
import { Button } from "@/components/ui/button";

export function FaqPreview() {
  const faqs = getFaqs().slice(0, 6);

  return (
    <Section>
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Frequently Asked"
          title="Questions Students & Parents Ask Us Most"
          description="Can't find your answer here? Our full FAQ page covers eligibility, visas, costs and degree recognition."
        />
        <div className="mt-12">
          <AccordionFaq faqs={faqs} />
        </div>
        <div className="mt-8 flex justify-center">
          <Button render={<Link href="/faqs" />} variant="outline">
            View All FAQs <ArrowRight className="size-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
