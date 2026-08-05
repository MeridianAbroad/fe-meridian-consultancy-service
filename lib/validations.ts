import { z } from "zod";

const name = z
  .string()
  .trim()
  .min(2, "Please enter your full name")
  .max(80, "Name is too long");

const email = z.string().trim().min(1, "Email is required").email("Enter a valid email address");

const phone = z
  .string()
  .trim()
  .min(7, "Enter a valid phone number")
  .max(20, "Enter a valid phone number")
  .regex(/^[+\d][\d\s-]*$/, "Enter a valid phone number");

export const consultationSchema = z.object({
  fullName: name,
  email,
  phone,
  destinationCountry: z.string().trim().min(1, "Please select a destination"),
  studyLevel: z.string().trim().min(1, "Please select your NEET status"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});
export type ConsultationInput = z.infer<typeof consultationSchema>;

export const contactSchema = z.object({
  fullName: name,
  email,
  phone,
  subject: z.string().trim().min(2, "Please add a subject"),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000),
});
export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email,
});
export type NewsletterInput = z.infer<typeof newsletterSchema>;

export const visaConsultationSchema = z.object({
  fullName: name,
  email,
  phone,
  destinationCountry: z.string().trim().min(1, "Please select a destination"),
  currentStatus: z.string().trim().min(1, "Please select your current status"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});
export type VisaConsultationInput = z.infer<typeof visaConsultationSchema>;

export const applicationSchema = z.object({
  fullName: name,
  email,
  phone,
  destinationCountry: z.string().trim().min(1, "Please select a destination"),
  university: z.string().trim().max(120).optional().or(z.literal("")),
  intake: z.string().trim().min(1, "Please select an intake"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});
export type ApplicationInput = z.infer<typeof applicationSchema>;
