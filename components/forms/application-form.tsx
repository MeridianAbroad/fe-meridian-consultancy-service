"use client";

import { Controller, useWatch } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { useLeadForm } from "@/hooks/useLeadForm";
import { applicationSchema } from "@/lib/validations";
import { countries } from "@/lib/data/countries";
import { universities } from "@/lib/data/universities";
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

const INTAKES = ["October 2026 (Primary)", "November 2026", "March 2027", "Not sure yet"];

export function ApplicationForm({
  defaultCountry = "",
  defaultUniversity = "",
}: {
  defaultCountry?: string;
  defaultUniversity?: string;
}) {
  const { form, onSubmit, isSubmitting } = useLeadForm({
    schema: applicationSchema,
    endpoint: "/api/leads/application",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      destinationCountry: defaultCountry,
      university: defaultUniversity,
      intake: "",
      message: "",
    },
    successMessage: "Application received — a counsellor will contact you within one business day.",
  });

  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = form;

  const selectedCountry = useWatch({ control, name: "destinationCountry" });
  const selectedCountrySlug = countries.find((c) => c.name === selectedCountry)?.slug;
  const availableUniversities = selectedCountrySlug
    ? universities.filter((u) => u.countrySlug === selectedCountrySlug)
    : [];

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="apply-fullName" error={errors.fullName?.message}>
          <Input id="apply-fullName" placeholder="Your full name" {...register("fullName")} />
        </FormField>
        <FormField label="Phone" htmlFor="apply-phone" error={errors.phone?.message}>
          <Input id="apply-phone" placeholder="+1 555 000 0000" {...register("phone")} />
        </FormField>
      </div>
      <FormField label="Email" htmlFor="apply-email" error={errors.email?.message}>
        <Input id="apply-email" type="email" placeholder="you@example.com" {...register("email")} />
      </FormField>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField label="Destination Country" error={errors.destinationCountry?.message}>
          <Controller
            control={control}
            name="destinationCountry"
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(value) => {
                  field.onChange(value);
                  setValue("university", "");
                }}
              >
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
        <FormField label="Preferred Intake" error={errors.intake?.message}>
          <Controller
            control={control}
            name="intake"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an intake" />
                </SelectTrigger>
                <SelectContent>
                  {INTAKES.map((intake) => (
                    <SelectItem key={intake} value={intake}>
                      {intake}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </FormField>
      </div>
      <FormField label="University (optional)" error={errors.university?.message}>
        <Controller
          control={control}
          name="university"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange} disabled={!selectedCountry}>
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={selectedCountry ? "Select a university" : "Select a country first"}
                />
              </SelectTrigger>
              <SelectContent>
                {availableUniversities.map((u) => (
                  <SelectItem key={u.slug} value={u.name}>
                    {u.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </FormField>
      <FormField
        label="Anything else we should know? (optional)"
        htmlFor="apply-message"
        error={errors.message?.message}
      >
        <Textarea
          id="apply-message"
          rows={3}
          placeholder="E.g. NEET score, budget, preferred intake..."
          {...register("message")}
        />
      </FormField>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
        Submit Application
      </Button>
      <p className="text-center text-xs text-ink-500">
        This starts your application with our team — no fees, no obligation.
      </p>
    </form>
  );
}
