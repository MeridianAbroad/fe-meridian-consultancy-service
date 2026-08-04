import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)} aria-label={`${BRAND.name} home`}>
      <Image
        src="/brand/meridian-icon.png"
        alt=""
        width={36}
        height={36}
        className="size-9 shrink-0"
        priority
      />
      <span
        className={cn(
          "font-heading text-lg font-bold tracking-tight",
          tone === "dark" ? "text-navy-950" : "text-white"
        )}
      >
        {BRAND.name}
      </span>
    </Link>
  );
}
