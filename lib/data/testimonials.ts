import { Testimonial } from "@/lib/types";
import { portrait } from "@/lib/images";

export const testimonials: Testimonial[] = [
  {
    slug: "unknown-user",
    name: "unknown User",
    photo: portrait(0),
    countrySlug: "russia",
    university: "Bashkir State Medical University",
    program: "MBBS",
    quote:
      "My NEET score didn't get me a government seat in India, but Meridian never made me feel like MBBS abroad was a consolation prize. They walked me through the entire NMC-approved university list until I found the right fit.",
    story:
      "Unknown scored well above the NEET qualifying cutoff but missed government seat allotment by a narrow margin. Private colleges in India quoted fees she couldn't justify. Meridian's counsellor mapped out Bashkir State Medical University's total 6-year cost against India's private options, and she left within the same admission cycle with a confirmed seat and no entrance exam required.",
    rating: 5,
  }
];

export function getTestimonials() {
  return testimonials;
}

export function getTestimonialBySlug(slug: string) {
  return testimonials.find((t) => t.slug === slug);
}
