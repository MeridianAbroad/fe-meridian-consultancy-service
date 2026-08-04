import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: { label: string; href?: string }[];
  tone?: "dark" | "light";
}) {
  const light = tone === "light";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm",
        light ? "text-white/50" : "text-ink-500"
      )}
    >
      <Link
        href="/"
        className={cn("flex items-center", light ? "hover:text-white" : "hover:text-navy-900")}
        aria-label="Home"
      >
        <Home className="size-3.5" />
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <ChevronRight className={cn("size-3.5", light ? "text-white/30" : "text-ink-300")} />
          {item.href ? (
            <Link href={item.href} className={light ? "hover:text-white" : "hover:text-navy-900"}>
              {item.label}
            </Link>
          ) : (
            <span className={cn("font-medium", light ? "text-white" : "text-navy-900")}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
