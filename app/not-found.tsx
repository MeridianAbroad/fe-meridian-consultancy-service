import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-hero-gradient py-32">
      <Container className="text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-white/10 text-teal-300">
          <Compass className="size-8" />
        </span>
        <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-widest text-teal-200">
          404 Error
        </p>
        <h1 className="mt-3 text-balance font-heading text-3xl font-bold text-white sm:text-4xl">
          Looks Like You&apos;ve Wandered Off Course
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          The page you&apos;re looking for doesn&apos;t exist — but your study abroad
          journey doesn&apos;t have to hit a dead end.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button render={<Link href="/" />} size="lg">
            Back to Home
          </Button>
          <Button
            render={<Link href="/countries" />}
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            Explore Countries <ArrowRight className="size-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
