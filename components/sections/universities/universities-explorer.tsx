"use client";

import { useMemo, useState } from "react";
import { University } from "@/lib/types";
import { countries } from "@/lib/data/countries";
import { parseTuitionLow } from "@/lib/university-filters";
import { SearchBar } from "@/components/shared/search-bar";
import { UniversityCard } from "@/components/shared/university-card";
import { Pagination } from "@/components/shared/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const PAGE_SIZE = 9;

export function UniversitiesExplorer({ universities }: { universities: University[] }) {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("all");
  const [ecfmgOnly, setEcfmgOnly] = useState(false);
  const [sort, setSort] = useState("tuition-low");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const list = universities.filter((u) => {
      const matchesSearch =
        search.trim() === "" ||
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.city.toLowerCase().includes(search.toLowerCase());
      const matchesCountry = country === "all" || u.countrySlug === country;
      const matchesEcfmg = !ecfmgOnly || u.tags.includes("ECFMG Eligible");
      return matchesSearch && matchesCountry && matchesEcfmg;
    });

    return [...list].sort((a, b) =>
      sort === "tuition-high"
        ? parseTuitionLow(b.tuitionRange) - parseTuitionLow(a.tuitionRange)
        : parseTuitionLow(a.tuitionRange) - parseTuitionLow(b.tuitionRange)
    );
  }, [universities, search, country, ecfmgOnly, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function resetPage() {
    setPage(1);
  }

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-3xl bg-card p-6 shadow-softer ring-1 ring-black/5 lg:flex-row lg:items-center lg:flex-wrap">
        <SearchBar
          value={search}
          onChange={(v) => {
            setSearch(v);
            resetPage();
          }}
          placeholder="Search by university or city..."
          className="lg:max-w-xs lg:flex-1"
        />
        <Select
          value={country}
          onValueChange={(v) => {
            setCountry(v ?? "all");
            resetPage();
          }}
        >
          <SelectTrigger className="w-full lg:w-auto">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Countries</SelectItem>
            {countries.map((c) => (
              <SelectItem key={c.slug} value={c.slug}>
                {c.flagEmoji} {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sort} onValueChange={(v) => setSort(v ?? "tuition-low")}>
          <SelectTrigger className="w-full lg:w-auto">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tuition-low">Sort: Tuition (Low to High)</SelectItem>
            <SelectItem value="tuition-high">Sort: Tuition (High to Low)</SelectItem>
          </SelectContent>
        </Select>
        <label className="flex items-center gap-2 whitespace-nowrap px-1 text-sm text-ink-700">
          <Checkbox
            checked={ecfmgOnly}
            onCheckedChange={(v) => {
              setEcfmgOnly(Boolean(v));
              resetPage();
            }}
          />
          ECFMG Eligible only
        </label>
      </div>

      <p className="mt-6 text-sm text-ink-500">{filtered.length} universities found</p>

      {paged.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paged.map((u, i) => (
            <UniversityCard key={u.slug} university={u} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center text-ink-500">
          No universities match your filters. Try widening your search.
        </div>
      )}

      <div className="mt-12">
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </div>
  );
}
