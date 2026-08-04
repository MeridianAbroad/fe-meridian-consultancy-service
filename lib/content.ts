/**
 * Single content access surface. Every page imports content through this file
 * rather than reaching into lib/data directly, so swapping the local arrays
 * for a real CMS or database later only requires changing this file.
 */
export {
  getCountries,
  getCountryBySlug,
  countries,
} from "@/lib/data/countries";

export {
  getUniversities,
  getUniversityBySlug,
  getUniversitiesByCountry,
  universities,
} from "@/lib/data/universities";

export { getServices, getServiceBySlug, services } from "@/lib/data/services";

export {
  getTestimonials,
  getTestimonialBySlug,
  testimonials,
} from "@/lib/data/testimonials";

export {
  getBlogPosts,
  getBlogPostBySlug,
  getBlogCategories,
  blogPosts,
} from "@/lib/data/blog";

export { getFaqs, getFaqCategories, faqs } from "@/lib/data/faqs";
