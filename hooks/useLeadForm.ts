"use client";

import { useState } from "react";
import { useForm, type DefaultValues, type FieldValues, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { toast } from "sonner";

export function useLeadForm<TSchema extends z.ZodType<FieldValues, FieldValues>>({
  schema,
  endpoint,
  defaultValues,
  successMessage = "Thanks — our team will reach out within one business day.",
  onSuccess,
}: {
  schema: TSchema;
  endpoint: string;
  defaultValues: DefaultValues<z.infer<TSchema>>;
  successMessage?: string;
  onSuccess?: () => void;
}) {
  type T = z.infer<TSchema>;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<T>({
    resolver: zodResolver(schema) as unknown as Resolver<T>,
    defaultValues,
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success(successMessage);
      form.reset(defaultValues);
      onSuccess?.();
    } catch {
      toast.error("Something went wrong. Please try again or reach us directly.");
    } finally {
      setIsSubmitting(false);
    }
  });

  return { form, onSubmit, isSubmitting };
}
