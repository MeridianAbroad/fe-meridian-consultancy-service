import { Testimonial } from "@/lib/types";
import { portrait } from "@/lib/images";

export const testimonials: Testimonial[] = [
  {
    slug: "ananya-sharma",
    name: "Ananya Sharma",
    photo: portrait(0),
    countrySlug: "russia",
    university: "Bashkir State Medical University",
    program: "MBBS",
    quote:
      "My NEET score didn't get me a government seat in India, but Meridian never made me feel like MBBS abroad was a consolation prize. They walked me through the entire NMC-approved university list until I found the right fit.",
    story:
      "Ananya scored well above the NEET qualifying cutoff but missed government seat allotment by a narrow margin. Private colleges in India quoted fees she couldn't justify. Meridian's counsellor mapped out Bashkir State Medical University's total 6-year cost against India's private options, and she left within the same admission cycle with a confirmed seat and no entrance exam required.",
    rating: 5,
  },
  {
    slug: "rohan-mehta",
    name: "Rohan Mehta",
    photo: portrait(1),
    countrySlug: "russia",
    university: "Omsk State Medical University",
    program: "MBBS",
    quote:
      "My parents' biggest worry was food and safety, not academics. Meridian's pre-departure session covered hostel life, the Indian mess, and even connected us with a senior student before I flew out.",
    story:
      "Rohan's parents were hesitant about Siberia's winters and unfamiliar surroundings. A live video call with a third-year Indian student already at Omsk, arranged by Meridian's on-ground coordinator, addressed nearly every question his parents had before he ever landed.",
    rating: 5,
  },
  {
    slug: "priya-nair",
    name: "Priya Nair",
    photo: portrait(2),
    countrySlug: "russia",
    university: "Perm State Medical University",
    program: "MBBS",
    quote:
      "The visa process felt impossible until Meridian's team walked me through every document line by line. My invitation letter and visa were both sorted in under three weeks.",
    story:
      "Priya had heard visa horror stories from friends who used other agents. Meridian's documentation team prepared her file end-to-end and tracked it until her passport came back stamped, with zero back-and-forth or missing paperwork.",
    rating: 5,
  },
  {
    slug: "arjun-reddy",
    name: "Arjun Reddy",
    photo: portrait(3),
    countrySlug: "russia",
    university: "Siberian State Medical University",
    program: "MBBS",
    quote:
      "I was choosing between three Russian universities and one in Georgia, completely overwhelmed. Meridian laid out the real tuition, hostel and living costs side by side — it made the decision obvious.",
    story:
      "Arjun's family needed full cost clarity before committing. A detailed six-year cost comparison across his shortlisted universities led him to Tomsk's Siberian State Medical University, and he's now in his third year with FMGE preparation already built into his study routine.",
    rating: 5,
  },
  {
    slug: "sneha-iyer",
    name: "Sneha Iyer",
    photo: portrait(5),
    countrySlug: "georgia",
    university: "Geomedi University",
    program: "MBBS",
    quote:
      "Everyone told me Georgia was 'the new option' but nobody could explain why. Meridian showed me the actual NMC and WHO approval status, not just marketing claims.",
    story:
      "Sneha wanted proof, not promises, before choosing a country she knew little about. Meridian shared Geomedi University's official recognition documents directly and connected her with two current Indian students for an unfiltered second opinion before she made her final decision.",
    rating: 5,
  },
  {
    slug: "vikram-singh",
    name: "Vikram Singh",
    photo: portrait(4),
    countrySlug: "georgia",
    university: "David Tvildiani Medical University",
    program: "MD Program (MBBS equivalent)",
    quote:
      "I didn't know a US-style MD curriculum in English even existed outside India. Meridian matched my profile to a university I'd never have found searching on my own.",
    story:
      "Vikram assumed his options were limited to a handful of well-known Russian universities. Meridian identified David Tvildiani Medical University's ECFMG-aligned curriculum as a strong match for his goal of eventually sitting international licensing exams alongside FMGE.",
    rating: 5,
  },
  {
    slug: "kavya-menon",
    name: "Kavya Menon",
    photo: portrait(7),
    countrySlug: "georgia",
    university: "University of Georgia",
    program: "MBBS",
    quote:
      "Our first counselling call, they told me the honest odds and the real total cost instead of just saying yes to everything. That honesty is why I trusted them with my visa too.",
    story:
      "Kavya had been quoted vague, shifting numbers by another consultant. Meridian's counsellor broke down every fee — tuition, hostel deposit, insurance — in writing before she paid anything, and the final cost matched exactly what was promised.",
    rating: 5,
  },
  {
    slug: "aditya-kulkarni",
    name: "Aditya Kulkarni",
    photo: portrait(6),
    countrySlug: "russia",
    university: "North Western State Medical University",
    program: "MBBS",
    quote:
      "St. Petersburg felt intimidating to research alone. Meridian's local coordinator met me at the airport and helped me register locally within my first week.",
    story:
      "Aditya's biggest fear was navigating a new country's bureaucracy alone. Meridian's on-ground team handled his airport pickup, hostel check-in and local registration paperwork, letting him focus on settling into classes instead of admin.",
    rating: 4,
  },
  {
    slug: "riya-desai",
    name: "Riya Desai",
    photo: portrait(9),
    countrySlug: "georgia",
    university: "Caucasus International University",
    program: "MBBS",
    quote:
      "My parents joined the pre-departure orientation call too, and hearing directly from Meridian's team — not just me — was what finally put them at ease.",
    story:
      "Riya's parents needed reassurance more than she did. Meridian's orientation session included a dedicated parent Q&A covering safety, communication and emergency support, and her mother still messages the coordinator directly with occasional questions.",
    rating: 5,
  },
];

export function getTestimonials() {
  return testimonials;
}

export function getTestimonialBySlug(slug: string) {
  return testimonials.find((t) => t.slug === slug);
}
