"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { BlogPost } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-3xl bg-card shadow-softer ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lift"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority={index < 3}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <Badge className="absolute left-4 top-4 bg-white/90 text-navy-900 hover:bg-white/90">
            {post.category}
          </Badge>
        </div>
        <div className="p-6">
          <h3 className="line-clamp-2 font-heading text-lg font-semibold leading-snug text-navy-950">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-ink-700">{post.excerpt}</p>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-royal-600 transition-all group-hover:gap-2">
              Read <ArrowUpRight className="size-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
