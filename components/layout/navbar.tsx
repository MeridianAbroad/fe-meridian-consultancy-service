"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { MAIN_NAV } from "@/lib/constants";
import { CONTACT } from "@/lib/constants";
import { Logo } from "./logo";
import { NavMegaMenu } from "./nav-mega-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { ConsultationTrigger } from "@/components/shared/consultation-trigger";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"universities" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reset transient nav UI state when the route changes. Adjusted during
  // render (React's documented pattern for this) rather than in an effect,
  // so it takes effect immediately without an extra render pass.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;
  const tone: "light" | "dark" = transparent ? "light" : "dark";

  function handleEnter(type: "universities") {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(type);
  }

  function handleLeave() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300",
        transparent
          ? "bg-transparent"
          : "border-b border-border/70 bg-white/85 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-8 px-6 py-3 md:px-8">
        <Logo tone={tone === "light" ? "light" : "dark"} />

        <nav className="hidden items-center gap-7 lg:flex">
          {MAIN_NAV.map((item) =>
            item.megaMenu ? (
              <NavMegaMenu
                key={item.href}
                label={item.label}
                href={item.href}
                open={openMenu === item.megaMenu}
                onOpenChange={(open) => setOpenMenu(open ? item.megaMenu! : null)}
                onMouseEnter={() => handleEnter(item.megaMenu!)}
                onMouseLeave={handleLeave}
                tone={tone}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  tone === "light"
                    ? "text-white/85 hover:text-white"
                    : "text-ink-700 hover:text-navy-950"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center lg:flex">
          <ConsultationTrigger />
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent side="right" className="w-full gap-0 p-0 sm:max-w-sm">
            <SheetHeader className="border-b border-border p-5">
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-5">
              {MAIN_NAV.map((item) => (
                <SheetClose key={item.href} nativeButton={false} render={<Link href={item.href} />}>
                  <span className="block rounded-xl px-3 py-3 text-base font-medium text-navy-950 hover:bg-muted">
                    {item.label}
                  </span>
                </SheetClose>
              ))}
              <div className="my-2 h-px bg-border" />
              {[
                { href: "/visa-assistance", label: "Visa Assistance" },
                { href: "/blog", label: "Blog" },
                { href: "/faqs", label: "FAQs" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <SheetClose key={item.href} nativeButton={false} render={<Link href={item.href} />}>
                  <span className="block rounded-xl px-3 py-3 text-sm font-medium text-ink-700 hover:bg-muted">
                    {item.label}
                  </span>
                </SheetClose>
              ))}
            </div>
            <div className="space-y-3 border-t border-border p-5">
              <Link
                href={CONTACT.phoneHref}
                className="flex items-center justify-center gap-2 text-sm font-medium text-ink-700"
              >
                <Phone className="size-4" /> {CONTACT.phone}
              </Link>
              <ConsultationTrigger className="w-full" size="lg" />
            </div>
          </SheetContent>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className={cn("lg:hidden", tone === "light" ? "text-white hover:bg-white/10 hover:text-white" : "")}
          >
            <Menu className="size-5" />
          </Button>
        </Sheet>
      </div>
    </header>
  );
}
