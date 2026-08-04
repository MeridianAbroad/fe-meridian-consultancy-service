"use client";

import { Controller } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { useLeadForm } from "@/hooks/useLeadForm";
import { visaConsultationSchema } from "@/lib/validations";
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

const STATUS_OPTIONS = [
  "Not yet applied",
  "Have a university offer",
  "Currently preparing documents",
  "Previously refused a visa",
];

export function VisaConsultationForm({ onSuccess }: { onSuccess?: () => void }) {
  const { form, onSubmit, isSubmitting } = useLeadForm({
    schema: visaConsultationSchema,
    endpoint: "/api/leads/visa",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      destinationCountry: "",
      currentStatus: "",
      message: "",
    },
    successMessage: "Thanks — our visa team will reach out within one business day.",
    onSuccess,
  });

  const {
    register,
    control,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <FormField label="Full Name" htmlFor="visa-fullName" error={errors.fullName?.message}>
        <Input id="visa-fullName" placeholder="Your full name" {...register("fullName")} />
      </FormField>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField label="Email" htmlFor="visa-email" error={errors.email?.message}>
          <Input id="visa-email" type="email" placeholder="you@example.com" {...register("email")} />
        </FormField>
        <FormField label="Phone" htmlFor="visa-phone" error={errors.phone?.message}>
          <Input id="visa-phone" placeholder="+1 555 000 0000" {...register("phone")} />
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
        <FormField label="Current Status" error={errors.currentStatus?.message}>
          <Controller
            control={control}
            name="currentStatus"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your status" />
                </SelectTrigger>
                <SelectContent>
                  {STATUS_OPTIONS.map((status) => (
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
        label="Anything specific about your visa situation? (optional)"
        htmlFor="visa-message"
        error={errors.message?.message}
      >
        <Textarea
          id="visa-message"
          rows={3}
          placeholder="E.g. previous refusal reason, financial documents you have ready..."
          {...register("message")}
        />
      </FormField>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
        Book My Visa Consultation
      </Button>
    </form>
  );
}
