import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BRAND, CONTACT, FOOTER_NAV, SOCIAL_LINKS } from "@/lib/constants";
import { Logo } from "./logo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Container } from "@/components/shared/container";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {BRAND.description}
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={CONTACT.phoneHref} className="flex items-center gap-2.5 hover:text-white">
                <Phone className="size-4 shrink-0" /> {CONTACT.phone}
              </a>
              <a href={CONTACT.emailHref} className="flex items-center gap-2.5 hover:text-white">
                <Mail className="size-4 shrink-0" /> {CONTACT.email}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>{CONTACT.address}</span>
              </div>
            </div>
            <div className="mt-6 flex gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white transition-colors hover:bg-white/20"
                >
                  {s.label[0]}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_NAV.map((col) => (
              <div key={col.title}>
                <h4 className="font-heading text-sm font-semibold text-white">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-white/60 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 rounded-2xl bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-base font-semibold text-white">
              Get study abroad tips in your inbox
            </p>
            <p className="mt-1 text-sm text-white/60">
              Intake deadlines, visa updates and university guides. No spam.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
