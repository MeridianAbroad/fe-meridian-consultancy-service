import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, Calendar } from "lucide-react";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/content";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/shared/blog-card";
import { CtaSection } from "@/components/shared/cta-section";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getBlogPosts()
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Section className="pb-0 pt-32 sm:pt-40">
        <Container className="max-w-3xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
          <Badge className="mt-6">{post.category}</Badge>
          <h1 className="mt-4 text-balance font-heading text-3xl font-bold text-navy-950 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-ink-500">
            <span className="font-medium text-navy-900">{post.author}</span>
            <span className="hidden sm:inline">·</span>
            <span>{post.authorRole}</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {post.readTime}
            </span>
          </div>
        </Container>
      </Section>

      <Section className="pb-0 pt-10">
        <Container className="max-w-3xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-lift">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 768px, 100vw"
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <div className="space-y-5 text-ink-700">
            {post.content.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-4 rounded-3xl bg-muted/50 p-6">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-navy-900 font-heading text-lg font-bold text-white">
              {post.author.charAt(0)}
            </span>
            <div>
              <p className="font-heading font-semibold text-navy-950">{post.author}</p>
              <p className="text-sm text-ink-500">{post.authorRole} at Meridian</p>
            </div>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section className="bg-muted/40">
          <Container>
            <h2 className="font-heading text-2xl font-bold text-navy-950">
              More on {post.category}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CtaSection
        title="Ready to Put This Into Action?"
        description="Book a free consultation and get advice tailored to your exact situation."
        secondaryHref="/blog"
        secondaryLabel="Back to Blog"
      />
    </>
  );
}
