import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/lib/content";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { BlogCard } from "@/components/shared/blog-card";
import { Button } from "@/components/ui/button";

export function LatestBlogs() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <Section className="bg-muted/40">
      <Container>
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="From the Blog"
            title="Guides to Help You Plan With Confidence"
            description="Practical, no-fluff advice on NEET, visas, FMGE/NEXT and student life abroad."
            className="mx-0"
          />
          <Button render={<Link href="/blog" />} variant="outline" className="hidden sm:inline-flex">
            Visit the Blog <ArrowRight className="size-4" />
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
        <div className="mt-10 flex justify-center sm:hidden">
          <Button render={<Link href="/blog" />} variant="outline">
            Visit the Blog <ArrowRight className="size-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
