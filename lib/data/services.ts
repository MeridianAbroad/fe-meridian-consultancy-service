import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "university-registration",
    title: "University Registration",
    icon: "GraduationCap",
    shortDescription:
      "Direct registration with NMC & WHO approved universities across Russia and Georgia.",
    details: [
      "Profile review against each university's admission criteria",
      "Direct registration with our partner universities — no sub-agents",
      "Seat confirmation shared in writing before any fee is paid",
      "Support choosing between Russia and Georgia based on budget and preference",
    ],
  },
  {
    slug: "documentation-support",
    title: "Documentation Support",
    icon: "FileText",
    shortDescription:
      "End-to-end paperwork, attestation and translation handled for you.",
    details: [
      "Checklist of required academic and personal documents",
      "Notarisation, apostille and translation coordination",
      "Document review before submission to avoid embassy delays",
      "Digital copies organised and stored for you throughout the process",
    ],
  },
  {
    slug: "admission-processing",
    title: "Admission Processing",
    icon: "ClipboardCheck",
    shortDescription:
      "Fast-tracked admission letters with zero middleman fees.",
    details: [
      "Application submitted directly to the university's admission office",
      "Regular status updates until your offer letter is issued",
      "No hidden middleman or agent commissions added to your fees",
      "Support resolving any admission queries from the university",
    ],
  },
  {
    slug: "visa-assistance",
    title: "Visa Assistance",
    icon: "Stamp",
    shortDescription:
      "Complete student visa filing and embassy guidance from start to finish.",
    details: [
      "Visa application form completion and document checklist",
      "Embassy appointment scheduling and guidance on requirements",
      "Financial and accommodation proof preparation",
      "Real-time tracking until your visa is stamped",
    ],
  },
  {
    slug: "invitation-letter",
    title: "Invitation Letter",
    icon: "Mail",
    shortDescription:
      "Official invitation letter from your host university, arranged for you.",
    details: [
      "Coordination with the university's international office",
      "Timeline tracking so your letter arrives in time for your visa appointment",
      "Verification that all details match your passport and application",
      "Digital and courier delivery options",
    ],
  },
  {
    slug: "airport-pickup",
    title: "Airport Pickup",
    icon: "PlaneLanding",
    shortDescription:
      "Safe, pre-arranged pickup on arrival by our local team.",
    details: [
      "Pickup coordinated with your exact flight details",
      "Verified local coordinators waiting at arrivals",
      "Direct transfer to your hostel or accommodation",
      "First-day orientation briefing during the ride",
    ],
  },
  {
    slug: "accommodation",
    title: "Accommodation",
    icon: "Home",
    shortDescription:
      "Secure hostel allocation with Indian food options, arranged before you land.",
    details: [
      "Hostel or apartment booking confirmed ahead of arrival",
      "Indian mess and international-student floors where available",
      "Support resolving any accommodation issues after arrival",
      "Guidance on hostel rules, deposits and refund terms",
    ],
  },
  {
    slug: "medical-insurance",
    title: "Medical Insurance",
    icon: "ShieldCheck",
    shortDescription:
      "Comprehensive student insurance in place from day one.",
    details: [
      "Mandatory student health insurance arranged before departure",
      "Guidance on what's covered and how to make a claim",
      "Annual renewal reminders throughout your programme",
      "Support liaising with university health centres if needed",
    ],
  },
  {
    slug: "gosuslugi-registration",
    title: "Gosuslugi Registration",
    icon: "FileSignature",
    shortDescription:
      "Local government student registration handled for you (Russia).",
    details: [
      "Migration card and address registration completed on arrival",
      "Gosuslugi portal account setup and guidance",
      "Renewal reminders for ongoing registration requirements",
      "Support if any registration issue arises during your stay",
    ],
  },
  {
    slug: "sim-card",
    title: "SIM Card",
    icon: "Smartphone",
    shortDescription:
      "Local SIM activation on arrival so you're reachable from day one.",
    details: [
      "Local SIM card arranged as part of your arrival package",
      "Data plan guidance suited to student budgets",
      "Help staying connected with family back home",
      "Support if you need to switch providers later",
    ],
  },
  {
    slug: "local-ground-support",
    title: "Local On-Ground Support",
    icon: "Users",
    shortDescription:
      "Dedicated coordinators in every host city, not just a call centre back home.",
    details: [
      "Local coordinator contact for day-to-day questions",
      "In-person support for hostel, university or documentation issues",
      "Regular check-ins during your first semester",
      "Escalation path directly to our head office when needed",
    ],
  },
  {
    slug: "student-guidance",
    title: "Student Guidance",
    icon: "Compass",
    shortDescription:
      "FMGE / NEXT exam mentoring throughout your MBBS journey, not just at the end.",
    details: [
      "Early guidance on India's licensing exam requirements",
      "Study resource recommendations from the first year onward",
      "Connections with seniors who've cleared FMGE/NEXT",
      "Ongoing academic support if you're struggling with any subject",
    ],
  },
];

export function getServices() {
  return services;
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
