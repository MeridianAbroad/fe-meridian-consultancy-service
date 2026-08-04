import { ACCREDITATIONS } from "@/lib/constants";
import { Container } from "@/components/shared/container";
import { LogoMarquee } from "@/components/shared/logo-marquee";

export function TrustBadges() {
  return (
    <section className="border-y border-border bg-card py-10">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink-500">
          NMC & WHO Approved Universities — Verified Recognition
        </p>
        <div className="mt-6">
          <LogoMarquee items={[...ACCREDITATIONS]} />
        </div>
      </Container>
    </section>
  );
}
