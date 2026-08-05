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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Builds a branded HTML email body from an ordered list of labeled fields. */
function renderLeadEmail(title: string, fields: Array<[string, string | undefined | null]>) {
  const rows = fields
    .filter(([, value]) => value !== undefined && value !== null && value.trim() !== "")
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 20px;border-bottom:1px solid #e5e7eb;color:#667085;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:600;white-space:nowrap;vertical-align:top">${label}</td>
          <td style="padding:12px 20px;border-bottom:1px solid #e5e7eb;color:#0f1729;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5">${escapeHtml(value as string)}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="max-width:560px;margin:0 auto">
      <div style="background:#0a1226;padding:24px 28px;border-radius:12px 12px 0 0">
        <p style="margin:0;color:#7adcd0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase">Meridian Abroad</p>
        <h1 style="margin:6px 0 0;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:20px">${title}</h1>
      </div>
      <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;overflow:hidden">
        ${rows}
      </table>
    </div>`;
}

/**
 * Sends the formatted email. Best-effort: failures are swallowed by the
 * caller (via .catch) so a notification hiccup never fails the request
 * after the lead is already saved.
 */
async function sendLeadEmail(subject: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: process.env.LEAD_NOTIFICATION_FROM ?? "Meridian Abroad <onboarding@resend.dev>",
    to: process.env.LEAD_NOTIFICATION_TO ?? CONTACT.email,
    subject,
    html,
  });
}

export function notifyContactLead(data: ContactInput) {
  const html = renderLeadEmail("New Contact Form Submission", [
    ["Full Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Subject", data.subject],
    ["Message", data.message],
  ]);
  return sendLeadEmail(`New contact form — ${data.fullName}`, html);
}

export function notifyConsultationLead(data: ConsultationInput) {
  const html = renderLeadEmail("New Consultation Booking", [
    ["Full Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Destination Country", data.destinationCountry],
    ["NEET Status", data.studyLevel],
    ["Message", data.message],
  ]);
  return sendLeadEmail(`New consultation booking — ${data.fullName}`, html);
}

export function notifyNewsletterLead(data: NewsletterInput) {
  const html = renderLeadEmail("New Newsletter Signup", [["Email", data.email]]);
  return sendLeadEmail(`New newsletter signup — ${data.email}`, html);
}

export function notifyVisaLead(data: VisaConsultationInput) {
  const html = renderLeadEmail("New Visa Consultation Request", [
    ["Full Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Destination Country", data.destinationCountry],
    ["Current Status", data.currentStatus],
    ["Message", data.message],
  ]);
  return sendLeadEmail(`New visa consultation — ${data.fullName}`, html);
}

export function notifyApplicationLead(data: ApplicationInput) {
  const html = renderLeadEmail("New Application Submitted", [
    ["Full Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Destination Country", data.destinationCountry],
    ["University", data.university],
    ["Preferred Intake", data.intake],
    ["Message", data.message],
  ]);
  return sendLeadEmail(`New application — ${data.fullName}`, html);
}
