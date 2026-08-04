import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Meridian Abroad — call, WhatsApp, email or visit our office for a free consultation.",
};

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Call Us",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT.whatsapp,
    href: CONTACT.whatsappHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: CONTACT.emailHref,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: CONTACT.officeHours,
    href: undefined,
  },
];

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    CONTACT.mapEmbedQuery
  )}&output=embed`;

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="We'd Love to Hear From You"
        description="Whether you have a quick question or you're ready to start your application, our team typically replies within one business day."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {CONTACT_CARDS.map((card) => {
                const content = (
                  <>
                    <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                      <card.icon className="size-5" />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-500">
                      {card.label}
                    </p>
                    <p className="mt-1 font-heading font-semibold text-navy-950">{card.value}</p>
                  </>
                );
                return card.href ? (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="rounded-3xl bg-card p-6 shadow-softer ring-1 ring-black/5 transition-shadow hover:shadow-lift"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={card.label}
                    className="rounded-3xl bg-card p-6 shadow-softer ring-1 ring-black/5"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-3xl bg-muted/50 p-6">
              <MapPin className="mt-0.5 size-5 shrink-0 text-royal-600" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                  Office Address
                </p>
                <p className="mt-1 font-medium text-navy-950">{CONTACT.address}</p>
              </div>
            </div>

            <div className="mt-6 aspect-video w-full overflow-hidden rounded-3xl shadow-softer ring-1 ring-black/5">
              <iframe
                title="Meridian office location"
                src={mapSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-card p-7 shadow-lift ring-1 ring-black/5 sm:p-8">
            <h2 className="font-heading text-2xl font-bold text-navy-950">Send Us a Message</h2>
            <p className="mt-2 text-sm text-ink-500">
              Fill out the form and a counsellor will follow up by email or phone.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
