"use client";

import { Controller } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { useLeadForm } from "@/hooks/useLeadForm";
import { consultationSchema } from "@/lib/validations";
import { countries } from "@/lib/data/countries";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "./form-field";

const NEET_STATUSES = [
  "NEET Qualified",
  "Awaiting NEET Result",
  "Preparing to Reappear",
  "Not Applicable",
];

export function ConsultationForm({ onSuccess }: { onSuccess?: () => void }) {
  const { form, onSubmit, isSubmitting } = useLeadForm({
    schema: consultationSchema,
    endpoint: "/api/leads/consultation",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      destinationCountry: "",
      studyLevel: "",
      message: "",
    },
    onSuccess,
  });

  const {
    register,
    control,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <FormField label="Full Name" htmlFor="fullName" error={errors.fullName?.message}>
        <Input id="fullName" placeholder="Your full name" {...register("fullName")} />
      </FormField>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField label="Email" htmlFor="email" error={errors.email?.message}>
          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
        </FormField>
        <FormField label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <Input id="phone" placeholder="+1 555 000 0000" {...register("phone")} />
        </FormField>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField label="Destination Country" error={errors.destinationCountry?.message}>
          <Controller
            control={control}
            name="destinationCountry"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c.slug} value={c.name}>
                      {c.flagEmoji} {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </FormField>
        <FormField label="NEET Status" error={errors.studyLevel?.message}>
          <Controller
            control={control}
            name="studyLevel"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your status" />
                </SelectTrigger>
                <SelectContent>
                  {NEET_STATUSES.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </FormField>
      </div>
      <FormField
        label="Anything specific you'd like us to know? (optional)"
        htmlFor="message"
        error={errors.message?.message}
      >
        <Textarea
          id="message"
          rows={3}
          placeholder="E.g. target intake, budget, current qualification..."
          {...register("message")}
        />
      </FormField>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
        Book My Free Consultation
      </Button>
      <p className="text-center text-xs text-ink-500">
        No spam. We&apos;ll only contact you about your study abroad plans.
      </p>
    </form>
  );
}
