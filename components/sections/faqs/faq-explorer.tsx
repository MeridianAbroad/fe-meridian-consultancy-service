"use client";

import { useMemo, useState } from "react";
import { FAQ } from "@/lib/types";
import { AccordionFaq } from "@/components/shared/accordion-faq";
import { cn } from "@/lib/utils";

export function FaqExplorer({ faqs }: { faqs: FAQ[] }) {
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(faqs.map((f) => f.category)))],
    [faqs]
  );

  const filtered = useMemo(
    () => (category === "All" ? faqs : faqs.filter((f) => f.category === category)),
    [faqs, category]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              category === c
                ? "bg-navy-950 text-white"
                : "bg-muted text-ink-700 hover:bg-muted/70"
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-10">
        <AccordionFaq faqs={filtered} />
      </div>
    </div>
  );
}
