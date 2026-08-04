import { Resend } from "resend";
import { CONTACT } from "@/lib/constants";
import { getSupabaseClient } from "@/lib/supabase";

export type LeadType =
  | "contact"
  | "consultation"
  | "newsletter"
  | "fee_inquiry"
  | "visa"
  | "application";

const LEAD_TYPE_LABELS: Record<LeadType, string> = {
  contact: "Contact form",
  consultation: "Consultation booking",
  newsletter: "Newsletter signup",
  fee_inquiry: "Fee inquiry",
  visa: "Visa consultation",
  application: "Application",
};

type LeadData = Record<string, unknown> & {
  fullName?: string;
  email: string;
  phone?: string;
};

/** Persists a lead to Supabase. Throws if the insert fails. */
export async function saveLead(type: LeadType, data: LeadData) {
  const { error } = await getSupabaseClient().from("leads").insert({
    type,
    full_name: data.fullName ?? null,
    email: data.email,
    phone: data.phone ?? null,
    payload: data,
  });

  if (error) {
    throw new Error(`Failed to save ${type} lead: ${error.message}`);
  }
}

/**
 * Emails the team about a new lead. Best-effort: failures are swallowed by
 * the caller (via .catch) so a notification hiccup never fails the request
 * after the lead is already saved.
 */
export async function notifyLead(type: LeadType, data: LeadData) {
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
