import { Country } from "@/lib/types";
import { IMAGES } from "@/lib/images";

export const countries: Country[] = [
  {
    slug: "russia",
    name: "Russia",
    region: "Europe/Asia",
    heroImage: IMAGES.countries.russia.hero,
    flagEmoji: "🇷🇺",
    tagline: "NMC & WHO approved MBBS at a fraction of private-college costs back home.",
    overview:
      "Russia has trained international medical students for over 60 years, and today runs dozens of NMC and WHO recognised, English-medium MBBS programmes built specifically for foreign admissions. With direct admission, no entrance exam, and an established Indian student community in every partner city, it remains the single most popular MBBS-abroad destination for NEET-qualified students.",
    currency: "Russian Ruble (RUB)",
    intakes: ["October (Primary)", "November", "March", "April"],
    stats: {
      universities: 12,
      avgVisaSuccess: "96%",
      internationalStudents: "15,000+ Indian students",
      workRights: "NMC Screening Test (FMGE/NEXT) pathway to practice in India",
    },
    highlights: [
      "NMC & WHO approved medical universities with English-medium MBBS",
      "Direct admission — no entrance exam or capitation fee",
      "6-year MBBS duration including clinical internship",
      "Established Indian student communities with Indian mess & hostels",
    ],
    topUniversitySlugs: [
      "bashkir-state-medical-university",
      "omsk-state-medical-university",
      "perm-state-medical-university",
    ],
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    tuition: [
      { level: "MBBS (Total Programme)", range: "$24,000 – $36,000 total (6 years)" },
      { level: "MBBS (Per Year Average)", range: "$4,000 – $6,000 / year" },
    ],
    livingCost: [
      { category: "Hostel Accommodation", range: "$80 – $150 / month" },
      { category: "Food (incl. Indian mess)", range: "$100 – $150 / month" },
      { category: "Local Transport", range: "$15 – $25 / month" },
      { category: "Personal & Miscellaneous", range: "$50 – $80 / month" },
    ],
    costHighlights: [
      { name: "One-Time Admission & Registration", amount: "$500 – $800", note: "University registration and documentation processing" },
      { name: "Hostel Deposit (Refundable)", amount: "$100 – $200", note: "Refunded at course completion, subject to no damages" },
      { name: "Medical Insurance (Annual)", amount: "$150 – $250 / year", note: "Mandatory student health coverage" },
    ],
    visa: [
      { title: "Invitation Letter", description: "Your university issues an official invitation letter once admission is confirmed — the first document needed for your student visa." },
      { title: "Student Visa", description: "Apply at the Russian consulate with your invitation letter, passport and admission offer; processing typically takes 7–15 working days." },
      { title: "Migration Card & Gosuslugi Registration", description: "On arrival, complete migration card formalities and register your address via Gosuslugi, the local government portal, within the required window." },
    ],
    careerOpportunities: [
      "Sit the NMC Screening Test (FMGE) to practice in India",
      "Transition to NEXT (National Exit Test) as it phases in for Indian licensing",
      "Apply for postgraduate residency (Ordinatura) within Russia",
      "Globally recognised MD supports further PG study via USMLE or PLAB",
    ],
    requirements: [
      "Valid NEET qualification and scorecard",
      "Minimum age 17 years by December 31 of the admission year",
      "50% aggregate in Physics, Chemistry & Biology (40% for reserved categories)",
      "Passport valid for at least 18 months",
    ],
  },
  {
    slug: "georgia",
    name: "Georgia",
    region: "Europe/Asia",
    heroImage: IMAGES.countries.georgia.hero,
    flagEmoji: "🇬🇪",
    tagline: "A compact, EU-adjacent path to an NMC & WHO recognised MBBS degree.",
    overview:
      "Georgia has become one of the fastest-growing MBBS-abroad destinations for Indian students, with modern teaching hospitals, NMC and WHO approved English-medium programmes, and a safe, compact country that's easy to navigate. Direct admission and transparent fee structures make it an increasingly popular alternative to Russia for NEET-qualified students.",
    currency: "Georgian Lari (GEL)",
    intakes: ["October (Primary)", "November", "March", "April"],
    stats: {
      universities: 9,
      avgVisaSuccess: "95%",
      internationalStudents: "5,000+ Indian students",
      workRights: "NMC Screening Test (FMGE/NEXT) pathway to practice in India",
    },
    highlights: [
      "NMC & WHO approved English-medium MBBS programmes",
      "Direct admission — no entrance exam required",
      "Modern clinical training hospitals attached to universities",
      "Compact country size with easy access across Europe",
    ],
    topUniversitySlugs: [
      "geomedi-university",
      "david-tvildiani-medical-university",
      "university-of-georgia",
    ],
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    tuition: [
      { level: "MBBS (Total Programme)", range: "$27,000 – $42,000 total (6 years)" },
      { level: "MBBS (Per Year Average)", range: "$4,500 – $7,000 / year" },
    ],
    livingCost: [
      { category: "Hostel / Apartment", range: "$120 – $200 / month" },
      { category: "Food (incl. Indian mess)", range: "$120 – $180 / month" },
      { category: "Local Transport", range: "$15 – $30 / month" },
      { category: "Personal & Miscellaneous", range: "$60 – $100 / month" },
    ],
    costHighlights: [
      { name: "One-Time Admission & Registration", amount: "$500 – $900", note: "University registration and documentation processing" },
      { name: "Hostel Deposit (Refundable)", amount: "$150 – $250", note: "Refunded at course completion, subject to no damages" },
      { name: "Medical Insurance (Annual)", amount: "$180 – $280 / year", note: "Mandatory student health coverage" },
    ],
    visa: [
      { title: "Invitation Letter", description: "Your university issues an official invitation letter once admission is confirmed — the first document needed for your visa application." },
      { title: "Student Visa / Residence Permit", description: "Apply at the Georgian consulate (or on arrival, depending on nationality rules) with your invitation letter and admission offer." },
      { title: "Local Address Registration", description: "Register your residential address with the relevant local authority shortly after arrival, as required for international students." },
    ],
    careerOpportunities: [
      "Sit the NMC Screening Test (FMGE) to practice in India",
      "Transition to NEXT (National Exit Test) as it phases in for Indian licensing",
      "Pursue clinical residency opportunities within Georgia",
      "Globally recognised MD supports further PG study via USMLE or PLAB",
    ],
    requirements: [
      "Valid NEET qualification and scorecard",
      "Minimum age 17 years by December 31 of the admission year",
      "50% aggregate in Physics, Chemistry & Biology (40% for reserved categories)",
      "Passport valid for at least 18 months",
    ],
  },
];

export function getCountries() {
  return countries;
}

export function getCountryBySlug(slug: string) {
  return countries.find((country) => country.slug === slug);
}
