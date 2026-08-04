import Link from "next/link";
import { ArrowRight, BadgeDollarSign } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export function BookingFeeBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-teal-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-royal-500/20 blur-3xl"
      />
      <Container className="relative text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-200">
          Low-Barrier Start
        </span>
        <h2 className="mx-auto mt-5 max-w-2xl text-balance font-heading text-3xl font-bold text-white sm:text-4xl">
          Start Your Admission Process and Book Your Seat for Just $250
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          A refundable booking fee secures your university shortlist and triggers our
          full 12-step admission process — no hidden charges after.
        </p>
        <Button render={<Link href="/apply" />} size="lg" className="mt-8">
          <BadgeDollarSign className="size-4" />
          Book Your Seat
          <ArrowRight className="size-4" />
        </Button>
      </Container>
    </section>
  );
}
