"use client";

import { useMemo, useState } from "react";
import { BlogPost } from "@/lib/types";
import { SearchBar } from "@/components/shared/search-bar";
import { BlogCard } from "@/components/shared/blog-card";
import { cn } from "@/lib/utils";

export function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesSearch =
        search.trim() === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || p.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [posts, search, category]);

  return (
    <div>
      <div className="flex flex-col gap-6">
        <SearchBar value={search} onChange={setSearch} placeholder="Search articles..." className="max-w-md" />
        <div className="flex flex-wrap gap-2">
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
      </div>

      <p className="mt-6 text-sm text-ink-500">{filtered.length} articles found</p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center text-ink-500">
          No articles match your search. Try a different keyword.
        </div>
      )}
    </div>
  );
}
