"use client";

import { Loader2, Send } from "lucide-react";
import { useLeadForm } from "@/hooks/useLeadForm";
import { newsletterSchema } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterForm({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { form, onSubmit, isSubmitting } = useLeadForm({
    schema: newsletterSchema,
    endpoint: "/api/leads/newsletter",
    defaultValues: { email: "" },
    successMessage: "You're subscribed — welcome aboard!",
  });

  const light = tone === "dark";

  return (
    <form onSubmit={onSubmit} className="mt-4 flex w-full max-w-sm flex-col gap-2 sm:mt-0 sm:flex-row">
      <div className="flex-1">
        <Input
          type="email"
          placeholder="you@example.com"
          aria-label="Email address"
          className={
            light
              ? "h-11 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:border-white/40"
              : "h-11"
          }
          {...form.register("email")}
        />
        {form.formState.errors.email && (
          <p className="mt-1 text-xs font-medium text-red-400">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting} className="h-11">
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        Subscribe
      </Button>
    </form>
  );
}
