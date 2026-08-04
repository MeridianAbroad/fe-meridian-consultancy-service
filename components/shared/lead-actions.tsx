"use client";

import Link from "next/link";
import { Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationTrigger } from "@/components/shared/consultation-trigger";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function LeadActions({
  applyHref = "/apply",
  className,
  tone = "light",
}: {
  applyHref?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const outlineClass =
    tone === "light"
      ? "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
      : "";

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <ConsultationTrigger size="lg" />
      <Button render={<Link href={applyHref} />} size="lg" variant="outline" className={outlineClass}>
        Apply Now
      </Button>
      <ConsultationTrigger size="lg" variant="outline" className={outlineClass}>
        <Download className="size-4" /> Download Brochure
      </ConsultationTrigger>
      <Button
        render={
          <Link href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" />
        }
        size="lg"
        variant="outline"
        className={outlineClass}
      >
        <MessageCircle className="size-4" /> WhatsApp Us
      </Button>
    </div>
  );
}
