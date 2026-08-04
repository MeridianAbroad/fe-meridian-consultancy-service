import { Breadcrumbs } from "./breadcrumbs";
import { Container } from "./container";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-royal-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 size-64 rounded-full bg-teal-500/10 blur-3xl"
      />
      <Container className="relative">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} tone="light" />
          </div>
        )}
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-200 ring-1 ring-white/10">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-2xl text-balance font-heading text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-white/70">{description}</p>
        )}
        {children}
      </Container>
    </section>
  );
}
