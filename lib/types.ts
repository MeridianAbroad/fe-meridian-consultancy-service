export type Country = {
  slug: string;
  name: string;
  region: string;
  heroImage: string;
  flagEmoji: string;
  tagline: string;
  overview: string;
  currency: string;
  intakes: string[];
  stats: {
    universities: number;
    avgVisaSuccess: string;
    internationalStudents: string;
    workRights: string;
  };
  highlights: string[];
  topUniversitySlugs: string[];
  popularCourses: string[];
  tuition: { level: string; range: string }[];
  livingCost: { category: string; range: string }[];
  costHighlights: { name: string; amount: string; note: string }[];
  visa: { title: string; description: string }[];
  careerOpportunities: string[];
  requirements: string[];
};

export type University = {
  slug: string;
  name: string;
  countrySlug: string;
  city: string;
  bannerImage: string;
  logoInitial: string;
  ranking: string;
  type: "Public" | "Private";
  founded: number;
  studentPopulation: string;
  internationalStudents: string;
  acceptanceRate: string;
  about: string;
  campusLife: string;
  accommodation: string;
  englishMedium: boolean;
  tuitionRange: string;
  popularCourses: string[];
  courses: {
    name: string;
    level: "Undergraduate" | "Postgraduate" | "Diploma";
    duration: string;
    tuition: string;
  }[];
  eligibility: string[];
  tags: string[];
};

export type Service = {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  details: string[];
};

export type Testimonial = {
  slug: string;
  name: string;
  photo: string;
  countrySlug: string;
  university: string;
  program: string;
  quote: string;
  story: string;
  rating: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  coverImage: string;
};

export type FAQ = {
  question: string;
  answer: string;
  category: string;
};
