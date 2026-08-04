import { cn } from "@/lib/utils";

export function Section({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("py-20 md:py-28 lg:py-32", className)} {...props} />
  );
}
