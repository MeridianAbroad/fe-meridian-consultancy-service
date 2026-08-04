import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { getTestimonials } from "@/lib/content";

export function Testimonials() {
  const testimonials = getTestimonials();

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Success Stories"
          title="Students Who Trusted Us With Their Future"
          description="Real students, real universities, real outcomes — hear directly from those we've guided abroad."
        />
        <Carousel opts={{ align: "start", loop: true }} className="mt-14">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.slug} className="sm:basis-1/2 lg:basis-1/3">
                <TestimonialCard testimonial={t} className="h-full" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-center gap-3">
            <CarouselPrevious className="static translate-x-0 translate-y-0" />
            <CarouselNext className="static translate-x-0 translate-y-0" />
          </div>
        </Carousel>
        <div className="mt-4 flex justify-center">
          <Button render={<Link href="/success-stories" />} variant="link">
            Read More Success Stories <ArrowRight className="size-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
