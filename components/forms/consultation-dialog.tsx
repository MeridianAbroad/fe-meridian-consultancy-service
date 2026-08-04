"use client";

import { createContext, useContext, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ConsultationForm } from "./consultation-form";

const ConsultationDialogContext = createContext<{ open: () => void } | null>(null);

export function ConsultationDialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(() => ({ open: () => setIsOpen(true) }), []);

  return (
    <ConsultationDialogContext.Provider value={value}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl font-semibold text-navy-950">
              Book your free consultation
            </DialogTitle>
            <DialogDescription>
              Tell us about your plans and a counsellor will reach out within one
              business day — no cost, no obligation.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2">
            <ConsultationForm onSuccess={() => setIsOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </ConsultationDialogContext.Provider>
  );
}

export function useConsultationDialog() {
  const ctx = useContext(ConsultationDialogContext);
  if (!ctx) {
    throw new Error(
      "useConsultationDialog must be used within a ConsultationDialogProvider"
    );
  }
  return ctx;
}
