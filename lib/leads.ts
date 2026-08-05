import { Resend } from "resend";
import { CONTACT } from "@/lib/constants";
import { getSupabaseClient } from "@/lib/supabase";
import type {
  ApplicationInput,
  ConsultationInput,
  ContactInput,
  NewsletterInput,
  VisaConsultationInput,
} from "@/lib/validations";

export type LeadType = "contact" | "consultation" | "newsletter" | "visa" | "application";

const LEAD_TYPE_LABELS: Record<LeadType, string> = {
  contact: "Contact form",
  consultation: "Consultation booking",
  newsletter: "Newsletter signup",
  visa: "Visa consultation",
  application: "Application",
};

async function insertLead(table: string, row: Record<string, unknown>) {
  const { error } = await getSupabaseClient().from(table).insert(row);
  if (error) {
    throw new Error(`Failed to save lead to ${table}: ${error.message}`);
  }
}

export function saveContactLead(data: ContactInput) {
  return insertLead("contact_leads", {
    full_name: data.fullName,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    message: data.message,
  });
}

export function saveConsultationLead(data: ConsultationInput) {
  return insertLead("consultation_leads", {
    full_name: data.fullName,
    email: data.email,
    phone: data.phone,
    destination_country: data.destinationCountry,
    study_level: data.studyLevel,
    message: data.message || null,
  });
}

export function saveNewsletterLead(data: NewsletterInput) {
  return insertLead("newsletter_leads", {
    email: data.email,
  });
}

export function saveVisaLead(data: VisaConsultationInput) {
  return insertLead("visa_leads", {
    full_name: data.fullName,
    email: data.email,
    phone: data.phone,
    destination_country: data.destinationCountry,
    current_status: data.currentStatus,
    message: data.message || null,
  });
}

export function saveApplicationLead(data: ApplicationInput) {
  return insertLead("application_leads", {
    full_name: data.fullName,
    email: data.email,
    phone: data.phone,
    destination_country: data.destinationCountry,
    university: data.university || null,
    intake: data.intake,
    message: data.message || null,
  });
}

type NotifiableLead = Record<string, unknown> & {
  fullName?: string;
  email: string;
};

/**
 * Emails the team about a new lead. Best-effort: failures are swallowed by
 * the caller (via .catch) so a notification hiccup never fails the request
 * after the lead is already saved.
 */
export async function notifyLead(type: LeadType, data: NotifiableLead) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const resend = new Resend(apiKey);
  const label = LEAD_TYPE_LABELS[type];

  const rows = Object.entries(data)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(
      ([key, value]) =>
        `<tr><td style="padding:4px 16px 4px 0;color:#667085;font-weight:600;white-space:nowrap">${key}</td><td>${String(value)}</td></tr>`
    )
    .join("");

  await resend.emails.send({
    from: process.env.LEAD_NOTIFICATION_FROM ?? "Meridian Abroad <onboarding@resend.dev>",
    to: process.env.LEAD_NOTIFICATION_TO ?? CONTACT.email,
    subject: `New ${label} — ${data.fullName ?? data.email}`,
    html: `<table cellpadding="0" cellspacing="0">${rows}</table>`,
  });
}
