import { FAQ } from "@/lib/types";

export const faqs: FAQ[] = [
  {
    category: "General",
    question: "What does Meridian actually do, and is it free for students?",
    answer:
      "We help NEET-qualified Indian students secure direct admission to NMC & WHO approved MBBS universities in Russia and Georgia — from university selection through documentation, visa filing and post-arrival support. Our core counselling is free; we're compensated by partner universities for successful enrolments, never by charging you commission on your admission.",
  },
  {
    category: "General",
    question: "Why should I consider MBBS abroad instead of a private college in India?",
    answer:
      "Private MBBS seats in India often cost significantly more in donations and fees than a full 6-year MBBS programme abroad, including tuition, hostel and living costs. Direct admission also removes the additional entrance-exam and counselling-round uncertainty private colleges in India can involve.",
  },
  {
    category: "General",
    question: "Do you only work with a fixed list of universities?",
    answer:
      "We have direct partnerships with 21 NMC & WHO approved universities across Russia and Georgia, hand-picked and verified for recognition status, fee transparency and international-student support. We don't work with unverified or unlisted institutions.",
  },
  {
    category: "Eligibility",
    question: "What are the eligibility requirements for MBBS abroad?",
    answer:
      "A valid NEET qualifying score, minimum age of 17 by December 31 of the admission year, and at least 50% aggregate in Physics, Chemistry and Biology (40% for reserved categories). No separate entrance exam or interview is required for direct admission.",
  },
  {
    category: "Eligibility",
    question: "Is there an age limit for MBBS admission abroad?",
    answer:
      "You must be at least 17 years old by December 31 of your admission year. There's no strict upper age limit at most of our partner universities, though we recommend checking the specific policy for your shortlisted university during counselling.",
  },
  {
    category: "Eligibility",
    question: "Can I apply if I only just cleared the NEET qualifying cutoff?",
    answer:
      "Yes. Direct admission to our partner universities is based on meeting the qualifying criteria, not on your NEET rank or percentile. A large share of our students are exactly in this position.",
  },
  {
    category: "Recognition",
    question: "Are these universities recognized by NMC and WHO?",
    answer:
      "Yes — every university we work with is verified against the National Medical Commission's official list and WHO recognition records before we recommend it, and we share that documentation directly with you during counselling.",
  },
  {
    category: "Recognition",
    question: "Will I need to clear an exam to practice in India after graduating?",
    answer:
      "Yes. All foreign medical graduates, regardless of country, must clear India's licensing screening exam — currently the FMGE, transitioning to the common NEXT exam — before registering to practice in India.",
  },
  {
    category: "Fees & Loans",
    question: "What's the realistic total cost of MBBS abroad, including living expenses?",
    answer:
      "Total 6-year cost typically ranges from around $23,000 in Russia's more affordable universities to $40,000+ at some Georgian institutions, including tuition, hostel and living costs. We provide an itemised, year-wise breakdown for every university before you apply.",
  },
  {
    category: "Fees & Loans",
    question: "Do you help with education loans?",
    answer:
      "Yes — we help you understand collateral and non-collateral loan options suited to MBBS-abroad's six-year duration, and provide the fee documentation most lenders require to process your application.",
  },
  {
    category: "Fees & Loans",
    question: "Is the $250 booking fee refundable?",
    answer:
      "Yes, it's a refundable booking fee that secures your university shortlist and triggers our full admission process. Refund terms are explained clearly before you pay, with nothing hidden in the fine print.",
  },
  {
    category: "Visa",
    question: "How does the visa process work, and how long does it take?",
    answer:
      "Once admission is confirmed, your university issues an invitation letter (1–3 weeks), followed by the student visa application at the relevant consulate (typically 7–15 working days). We manage both steps for you and track them until your visa is stamped.",
  },
  {
    category: "Visa",
    question: "What is Gosuslugi registration, and do I need to worry about it?",
    answer:
      "Gosuslugi is Russia's government services portal used for local address and migration registration after you arrive. We handle this registration for you as part of our on-ground support — you won't need to navigate it alone.",
  },
  {
    category: "Student Life",
    question: "Will I have access to Indian food and community?",
    answer:
      "Yes — every partner university has an established Indian mess or nearby Indian food option, and an active Indian Students' Association organising festivals, mentoring and orientation for new arrivals.",
  },
  {
    category: "Student Life",
    question: "Is it safe for Indian students to study in Russia or Georgia?",
    answer:
      "Our partner university cities have hosted Indian medical students for a decade or more in many cases, with dedicated international offices and established support networks. We also provide airport pickup and local on-ground coordinators in every host city.",
  },
  {
    category: "Student Life",
    question: "What happens after I land? Am I on my own?",
    answer:
      "No — our support continues well past arrival, including airport pickup, hostel check-in, SIM card and local registration, and regular check-ins through your first semester and beyond.",
  },
  {
    category: "General",
    question: "Do you support parents through this process too?",
    answer:
      "Yes — parents are welcome on every counselling call, and our pre-departure orientation includes a dedicated parent Q&A covering safety, cost and how to stay in touch once their child has left.",
  },
];

export function getFaqs() {
  return faqs;
}

export function getFaqCategories() {
  return Array.from(new Set(faqs.map((f) => f.category)));
}
