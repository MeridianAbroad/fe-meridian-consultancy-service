import type { Metadata } from "next";
import { BRAND, CONTACT } from "@/lib/constants";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${BRAND.fullName} collects, uses and protects your personal information.`,
};

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you book a consultation, apply through our platform, or contact us, we collect information such as your name, email address, phone number, academic background and study preferences. We also collect basic usage data (pages visited, device type) to improve our website.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to provide counselling and application support, match you with relevant universities in Russia and Georgia, communicate updates about your application, and improve our services. We never sell your personal information to third parties.",
  },
  {
    title: "Sharing With Partner Institutions",
    body: "With your consent, we share relevant application details with the universities and visa authorities involved in your application. We only share what's necessary to progress your specific application.",
  },
  {
    title: "Data Security",
    body: "We use industry-standard safeguards to protect your data, including encrypted storage and restricted internal access. Only authorised counsellors working on your file can view your information.",
  },
  {
    title: "Your Rights",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You may also opt out of marketing communications while continuing to receive service-related updates about an active application.",
  },
  {
    title: "Cookies",
    body: "Our website uses cookies to remember your preferences and understand how visitors use our site. You can disable cookies in your browser settings, though some features may not function as intended.",
  },
  {
    title: "Contact Us",
    body: `Questions about this policy can be sent to ${CONTACT.email} or by post to ${CONTACT.address}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Last updated: January 2026"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <Section>
        <Container className="max-w-3xl space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-xl font-semibold text-navy-950">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">{section.body}</p>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}
