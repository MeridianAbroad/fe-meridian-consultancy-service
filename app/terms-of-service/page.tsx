import type { Metadata } from "next";
import { BRAND, CONTACT } from "@/lib/constants";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms governing your use of ${BRAND.fullName}'s counselling services and website.`,
};

const SECTIONS = [
  {
    title: "Our Services",
    body: `${BRAND.fullName} provides counselling, university and course selection, application assistance, visa guidance and related support services to prospective international students. Our core counselling services are provided free of charge to students, funded through partnerships with universities.`,
  },
  {
    title: "No Guarantee of Admission or Visa Approval",
    body: "While we work diligently to maximise your chances of admission and visa approval, final decisions rest solely with universities and government immigration authorities. We cannot guarantee any specific outcome.",
  },
  {
    title: "Your Responsibilities",
    body: "You agree to provide accurate and complete information throughout your application process. Providing false information may result in the rejection of your application by a university or immigration authority, for which we are not responsible.",
  },
  {
    title: "Fees",
    body: "Core counselling and application support is provided at no cost to students. Certain services (such as expedited document processing through third parties) may carry separate fees, which will always be disclosed and agreed to in advance.",
  },
  {
    title: "Third-Party Services",
    body: "We may refer you to partner banks, forex providers, insurance companies or accommodation providers. These are independent third parties, and any agreement you enter with them is between you and that provider.",
  },
  {
    title: "Limitation of Liability",
    body: `${BRAND.name} is not liable for losses arising from decisions made by universities, embassies, financial institutions or other third parties, or for circumstances beyond our reasonable control.`,
  },
  {
    title: "Changes to These Terms",
    body: "We may update these terms from time to time. Continued use of our services after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    title: "Contact Us",
    body: `Questions about these terms can be sent to ${CONTACT.email}.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        description="Last updated: January 2026"
        breadcrumbs={[{ label: "Terms of Service" }]}
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
