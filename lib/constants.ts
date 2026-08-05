export const BRAND = {
  name: "Meridian Abroad",
  fullName: "Meridian Abroad",
  tagline: "Building Tomorrow's Doctors, One Dream at a Time",
  description:
    "Helping NEET-qualified Indian students secure direct admission to NMC & WHO approved MBBS programmes in Russia and Georgia — no entrance exams, transparent fees, and complete support from registration to FMGE/NEXT.",
  domain: "meridianabroad.in",
  founded: 2026,
} as const;

export const CONTACT = {
  phone: "+91 88919 67124",
  phoneHref: "tel:+918891967124",
  whatsapp: "+91 88919 67124",
  whatsappHref: "https://wa.me/918891967124?text=Hi%2C%20Meridian%20Abroad",
  email: "abroadmeridian@gmail.com",
  emailHref: "mailto:abroadmeridian@gmail.com",
  address: "Kerala, India",
  mapEmbedQuery: "kerala%2C%20India",
  officeHours: "Mon – Sat, 9:00 AM – 6:30 PM",
} as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/meridianabroad/" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
] as const;

export const STATS = [
  { label: "Students Placed", value: 10, suffix: "+" },
  { label: "Partner Universities", value: 21, suffix: "+" },
  { label: "Step Support Process", value: 12, suffix: "" },
] as const;

export const ACCREDITATIONS = [
  "NMC Recognized",
  "WHO Approved",
  "MCI Listed",
  "FAIMER Indexed",
  "MoE Russia",
  "MoE Georgia",
  "ECFMG Eligible",
  "UNESCO Listed",
  "ISO Certified Counseling",
  "100% Direct Admissions",
] as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export const MAIN_NAV: { label: string; href: string; megaMenu?: "universities" }[] = [
  { label: "Countries", href: "/countries" },
  { label: "Universities", href: "/universities", megaMenu: "universities" },
  { label: "MBBS Programme", href: "/courses" },
  { label: "Services", href: "/services" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "About", href: "/about" },
];

export const FOOTER_NAV: { title: string; links: NavLink[] }[] = [
  {
    title: "Destinations",
    links: [
      { label: "MBBS in Russia", href: "/countries/russia" },
      { label: "MBBS in Georgia", href: "/countries/georgia" },
      { label: "All Universities", href: "/universities" },
      { label: "All Destinations", href: "/countries" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "University Registration", href: "/services#university-registration" },
      { label: "Visa Assistance", href: "/services#visa-assistance" },
      { label: "Accommodation Support", href: "/services#accommodation" },
      { label: "Documentation Support", href: "/services#documentation-support" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "MBBS Programme", href: "/courses" },
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faqs" },
      { label: "Success Stories", href: "/success-stories" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];
