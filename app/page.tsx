import { Hero } from "@/components/sections/home/hero";
import { StatsBar } from "@/components/sections/home/stats-bar";
import { TrustBadges } from "@/components/sections/home/trust-badges";
import { WhyChooseUs } from "@/components/sections/home/why-choose-us";
import { StudyProcess } from "@/components/sections/home/study-process";
import { CountriesGrid } from "@/components/sections/home/countries-grid";
import { FeaturedUniversities } from "@/components/sections/home/featured-universities";
import { BookingFeeBanner } from "@/components/sections/home/booking-fee-banner";
import { Testimonials } from "@/components/sections/home/testimonials";
import { LatestBlogs } from "@/components/sections/home/latest-blogs";
import { FaqPreview } from "@/components/sections/home/faq-preview";
import { CtaSection } from "@/components/shared/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <TrustBadges />
      <WhyChooseUs />
      <StudyProcess />
      <CountriesGrid />
      <FeaturedUniversities />
      <BookingFeeBanner />
      <Testimonials />
      <LatestBlogs />
      <FaqPreview />
      <CtaSection
        title="Ready to Begin Your MBBS Abroad Journey?"
        description="Book a free, no-obligation counselling call and get a personalised university shortlist within 48 hours."
        secondaryHref="/contact"
        secondaryLabel="Contact Our Team"
      />
    </>
  );
}
