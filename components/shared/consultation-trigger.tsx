"use client";

import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { useConsultationDialog } from "@/components/forms/consultation-dialog";

export function ConsultationTrigger({
  children = "Book Free Consultation",
  ...props
}: ComponentProps<typeof Button>) {
  const { open } = useConsultationDialog();
  return (
    <Button onClick={open} {...props}>
      {children}
    </Button>
  );
}
