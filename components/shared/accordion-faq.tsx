"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/types";

export function AccordionFaq({ faqs }: { faqs: FAQ[] }) {
  return (
    <Accordion className="w-full space-y-3">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.question}
          value={`faq-${i}`}
          className="rounded-2xl border border-border bg-card px-5 shadow-softer"
        >
          <AccordionTrigger className="py-5 text-left font-heading text-base font-semibold text-navy-950 hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-ink-700">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
