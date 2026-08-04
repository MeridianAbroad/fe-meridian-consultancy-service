"use client";

import { Loader2 } from "lucide-react";
import { useLeadForm } from "@/hooks/useLeadForm";
import { contactSchema } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormField } from "./form-field";

export function ContactForm() {
  const { form, onSubmit, isSubmitting } = useLeadForm({
    schema: contactSchema,
    endpoint: "/api/leads/contact",
    defaultValues: { fullName: "", email: "", phone: "", subject: "", message: "" },
    successMessage: "Message sent — we'll reply within one business day.",
  });

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="contact-fullName" error={errors.fullName?.message}>
          <Input id="contact-fullName" placeholder="Your full name" {...register("fullName")} />
        </FormField>
        <FormField label="Phone" htmlFor="contact-phone" error={errors.phone?.message}>
          <Input id="contact-phone" placeholder="+1 555 000 0000" {...register("phone")} />
        </FormField>
      </div>
      <FormField label="Email" htmlFor="contact-email" error={errors.email?.message}>
        <Input id="contact-email" type="email" placeholder="you@example.com" {...register("email")} />
      </FormField>
      <FormField label="Subject" htmlFor="contact-subject" error={errors.subject?.message}>
        <Input id="contact-subject" placeholder="What can we help with?" {...register("subject")} />
      </FormField>
      <FormField label="Message" htmlFor="contact-message" error={errors.message?.message}>
        <Textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us a bit about your plans..."
          {...register("message")}
        />
      </FormField>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
        Send Message
      </Button>
    </form>
  );
}
