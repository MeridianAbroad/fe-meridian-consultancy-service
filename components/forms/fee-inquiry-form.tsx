"use client";

import { Controller } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { useLeadForm } from "@/hooks/useLeadForm";
import { feeInquirySchema } from "@/lib/validations";
import { countries } from "@/lib/data/countries";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "./form-field";

export function FeeInquiryForm() {
  const { form, onSubmit, isSubmitting } = useLeadForm({
    schema: feeInquirySchema,
    endpoint: "/api/leads/fee-inquiry",
    defaultValues: { fullName: "", email: "", phone: "", destinationCountry: "" },
    successMessage: "Thanks — our finance team will send a full fee breakdown within one business day.",
  });

  const {
    register,
    control,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <FormField label="Full Name" htmlFor="fee-fullName" error={errors.fullName?.message}>
        <Input id="fee-fullName" placeholder="Your full name" {...register("fullName")} />
      </FormField>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField label="Email" htmlFor="fee-email" error={errors.email?.message}>
          <Input id="fee-email" type="email" placeholder="you@example.com" {...register("email")} />
        </FormField>
        <FormField label="Phone" htmlFor="fee-phone" error={errors.phone?.message}>
          <Input id="fee-phone" placeholder="+1 555 000 0000" {...register("phone")} />
        </FormField>
      </div>
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
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
        Get My Fee Breakdown
      </Button>
    </form>
  );
}
