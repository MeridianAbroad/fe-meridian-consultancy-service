import { University } from "@/lib/types";
import { universityImage } from "@/lib/images";

const ELIGIBILITY = [
  "Valid NEET qualification and scorecard",
  "Minimum age 17 years by December 31 of the admission year",
  "50% aggregate in Physics, Chemistry & Biology (40% for reserved categories)",
  "Passport valid for at least 18 months",
];

const TAGS = ["NMC Approved", "WHO Listed", "English Medium", "Direct Admission", "Hostel Included"];

export const universities: University[] = [
  // ---------------------------------------------------------------- Russia
  {
    slug: "omsk-state-medical-university",
    name: "Omsk State Medical University",
    countrySlug: "russia",
    city: "Omsk",
    bannerImage: universityImage("omsk-state-medical-university"),
    logoInitial: "O",
    ranking: "NMC & WHO Approved",
    type: "Public",
    founded: 1920,
    studentPopulation: "6,000+",
    internationalStudents: "600+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "Founded in 1920, Omsk State Medical University is one of Russia's most established medical schools, offering an NMC & WHO approved, English-medium MBBS with direct admission for NEET-qualified students and a large teaching hospital network across the city.",
    campusLife:
      "A dedicated international faculty building houses first-year foundation classes, with a well-established Indian Students' Association organising festivals, food nights and peer mentoring throughout the year.",
    accommodation:
      "University-managed hostels guarantee placement for international students, with an Indian mess, separate international floors and 24/7 security on campus.",
    englishMedium: true,
    tuitionRange: "$4,000 – $4,400 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$4,200 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "kemerovo-state-university",
    name: "Kemerovo State University",
    countrySlug: "russia",
    city: "Kemerovo",
    bannerImage: universityImage("kemerovo-state-university"),
    logoInitial: "K",
    ranking: "NMC & WHO Approved",
    type: "Public",
    founded: 1974,
    studentPopulation: "12,000+",
    internationalStudents: "350+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "Kemerovo State University's medical institute runs a dedicated English-medium MBBS track for international students, backed by the university's broader science faculties and modern laboratory facilities in Siberia's industrial heartland.",
    campusLife:
      "A compact, walkable campus with a growing international student body and an active Indian cultural association hosting regular gatherings and festival celebrations.",
    accommodation:
      "University hostels offer guaranteed rooms for international students with Indian mess facilities and dedicated international-student floors.",
    englishMedium: true,
    tuitionRange: "$3,900 – $4,200 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$4,000 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "tambov-state-university",
    name: "Tambov State University",
    countrySlug: "russia",
    city: "Tambov",
    bannerImage: universityImage("tambov-state-university"),
    logoInitial: "T",
    ranking: "NMC & WHO Approved",
    type: "Public",
    founded: 1918,
    studentPopulation: "9,000+",
    internationalStudents: "250+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "Tambov State University's medical institute offers an English-medium MBBS with a strong emphasis on early clinical exposure through its affiliated regional hospitals, in a quiet, affordable city roughly 500km south of Moscow.",
    campusLife:
      "A calmer, lower-cost city than Moscow or St. Petersburg, with a tight-knit international student community and easy access to affordable Indian groceries and mess facilities.",
    accommodation:
      "On-campus hostel accommodation is guaranteed for the full programme duration, with Indian food options and international-student floors.",
    englishMedium: true,
    tuitionRange: "$3,800 – $4,100 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$3,900 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "north-western-state-medical-university",
    name: "North Western State Medical University",
    countrySlug: "russia",
    city: "St. Petersburg",
    bannerImage: universityImage("north-western-state-medical-university"),
    logoInitial: "N",
    ranking: "NMC & WHO Approved · FAIMER Listed",
    type: "Public",
    founded: 1907,
    studentPopulation: "10,000+",
    internationalStudents: "800+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "Based in St. Petersburg, North Western State Medical University traces its roots to 1907 and is one of Russia's most internationally recognised medical schools, with extensive clinical partnerships across the city's major teaching hospitals.",
    campusLife:
      "One of Russia's most cosmopolitan cities, with a large, well-organised Indian student network, cultural events, and easy access to Indian grocery stores and restaurants.",
    accommodation:
      "University hostels are available for international students, with private hostel options nearby offering Indian mess facilities for those who prefer off-campus living.",
    englishMedium: true,
    tuitionRange: "$5,600 – $6,000 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$5,800 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: [...TAGS, "ECFMG Eligible"],
  },
  {
    slug: "bashkir-state-medical-university",
    name: "Bashkir State Medical University",
    countrySlug: "russia",
    city: "Ufa",
    bannerImage: universityImage("bashkir-state-medical-university"),
    logoInitial: "B",
    ranking: "NMC & WHO Approved",
    type: "Public",
    founded: 1932,
    studentPopulation: "7,500+",
    internationalStudents: "700+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "Established in 1932, Bashkir State Medical University is one of the largest medical schools in the Volga region, with a long track record of training international students and a broad network of teaching hospitals in Ufa.",
    campusLife:
      "One of the most established Indian student communities among Russian medical universities, with senior-student mentoring, festival celebrations and dedicated support staff for international students.",
    accommodation:
      "Guaranteed university hostel accommodation with Indian mess facilities and separate floors for international students.",
    englishMedium: true,
    tuitionRange: "$4,400 – $4,700 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$4,500 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "north-ossetian-state-medical-academy",
    name: "North Ossetian State Medical Academy",
    countrySlug: "russia",
    city: "Vladikavkaz",
    bannerImage: universityImage("north-ossetian-state-medical-academy"),
    logoInitial: "N",
    ranking: "NMC & WHO Approved",
    type: "Public",
    founded: 1939,
    studentPopulation: "5,000+",
    internationalStudents: "400+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "Set in the foothills of the Caucasus mountains, North Ossetian State Medical Academy has offered medical education since 1939 and runs a dedicated international faculty for English-medium MBBS students.",
    campusLife:
      "A smaller city with a lower cost of living than Moscow or St. Petersburg, and a close-knit international student body supported by an active students' union.",
    accommodation:
      "On-campus hostels are available with Indian food options and dedicated international-student sections.",
    englishMedium: true,
    tuitionRange: "$4,000 – $4,300 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$4,100 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "yelets-state-university",
    name: "Yelets State University",
    countrySlug: "russia",
    city: "Yelets",
    bannerImage: universityImage("yelets-state-university"),
    logoInitial: "Y",
    ranking: "NMC & WHO Approved",
    type: "Public",
    founded: 1939,
    studentPopulation: "6,500+",
    internationalStudents: "180+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "Yelets State University's medical faculty offers an affordable, English-medium MBBS pathway in a small historic city in western Russia, with a growing cohort of international medical students each intake.",
    campusLife:
      "A quiet, low-cost university town with a small but tight international community and easy day-trip access to larger regional cities.",
    accommodation:
      "University hostel rooms are available for international students, with Indian food options arranged through the student welfare office.",
    englishMedium: true,
    tuitionRange: "$3,700 – $4,000 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$3,800 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "far-eastern-federal-university",
    name: "Far Eastern Federal University",
    countrySlug: "russia",
    city: "Vladivostok",
    bannerImage: universityImage("far-eastern-federal-university"),
    logoInitial: "F",
    ranking: "NMC & WHO Approved",
    type: "Public",
    founded: 1899,
    studentPopulation: "20,000+",
    internationalStudents: "300+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "One of Russia's largest federal universities, Far Eastern Federal University offers an English-medium MBBS on a modern island campus in Vladivostok, with strong research funding and purpose-built medical simulation labs.",
    campusLife:
      "A modern, custom-built campus on Russky Island with dedicated international dormitories, a growing Indian student association, and a distinctly Pacific-coast setting unlike any other Russian MBBS destination.",
    accommodation:
      "On-campus international dormitories are guaranteed, with Indian mess facilities available on request.",
    englishMedium: true,
    tuitionRange: "$5,000 – $5,400 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$5,200 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "perm-state-medical-university",
    name: "Perm State Medical University",
    countrySlug: "russia",
    city: "Perm",
    bannerImage: universityImage("perm-state-medical-university"),
    logoInitial: "P",
    ranking: "NMC & WHO Approved · FAIMER Listed",
    type: "Public",
    founded: 1916,
    studentPopulation: "8,000+",
    internationalStudents: "500+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "Perm State Medical University has trained doctors since 1916 and runs a well-regarded English-medium MBBS programme for international students, with clinical rotations across the city's major regional hospitals.",
    campusLife:
      "A mid-size city on the edge of the Ural mountains with an active international office, an established Indian Students' Association, and a lower cost of living than Russia's capital cities.",
    accommodation:
      "University hostel accommodation is guaranteed, with Indian mess and separate international-student floors.",
    englishMedium: true,
    tuitionRange: "$4,100 – $4,500 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$4,300 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: [...TAGS, "ECFMG Eligible"],
  },
  {
    slug: "mari-state-medical-university",
    name: "Mari State Medical University",
    countrySlug: "russia",
    city: "Yoshkar-Ola",
    bannerImage: universityImage("mari-state-medical-university"),
    logoInitial: "M",
    ranking: "NMC & WHO Approved",
    type: "Public",
    founded: 1972,
    studentPopulation: "4,500+",
    internationalStudents: "150+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "Mari State Medical University offers a focused, small-cohort English-medium MBBS programme in Yoshkar-Ola, a compact, low-cost city known for its distinctive European-style architecture.",
    campusLife:
      "A small city with a lower cost of living than most Russian MBBS destinations, and a close, supportive international student community.",
    accommodation:
      "University hostel rooms are available for international students with Indian food arrangements through the student welfare office.",
    englishMedium: true,
    tuitionRange: "$3,800 – $4,000 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$3,900 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "siberian-state-medical-university",
    name: "Siberian State Medical University",
    countrySlug: "russia",
    city: "Tomsk",
    bannerImage: universityImage("siberian-state-medical-university"),
    logoInitial: "S",
    ranking: "NMC & WHO Approved · FAIMER Listed",
    type: "Public",
    founded: 1878,
    studentPopulation: "6,000+",
    internationalStudents: "550+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "One of Russia's oldest medical schools, Siberian State Medical University has trained doctors since 1878 and is based in Tomsk, a historic university city with a strong academic reputation and modern teaching clinics.",
    campusLife:
      "A well-known Russian university town with a large overall student population, an active Indian student body, and a strong academic culture across the city's several universities.",
    accommodation:
      "University-managed hostels guarantee placement for international students, with Indian mess and dedicated international floors.",
    englishMedium: true,
    tuitionRange: "$4,500 – $4,800 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$4,600 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: [...TAGS, "ECFMG Eligible"],
  },
  {
    slug: "orenburg-state-medical-university",
    name: "Orenburg State Medical University",
    countrySlug: "russia",
    city: "Orenburg",
    bannerImage: universityImage("orenburg-state-medical-university"),
    logoInitial: "O",
    ranking: "NMC & WHO Approved",
    type: "Public",
    founded: 1944,
    studentPopulation: "5,500+",
    internationalStudents: "300+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "Orenburg State Medical University offers an English-medium MBBS programme in a city straddling the border of Europe and Asia, with a dedicated preparatory faculty for incoming international students.",
    campusLife:
      "A quieter regional city with an affordable cost of living and a supportive, growing international student community.",
    accommodation:
      "On-campus hostel accommodation is available for the full programme duration, with Indian mess facilities.",
    englishMedium: true,
    tuitionRange: "$4,100 – $4,400 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$4,200 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },

  // --------------------------------------------------------------- Georgia
  {
    slug: "geomedi-university",
    name: "Geomedi University",
    countrySlug: "georgia",
    city: "Tbilisi",
    bannerImage: universityImage("geomedi-university"),
    logoInitial: "G",
    ranking: "NMC & WHO Approved",
    type: "Private",
    founded: 2003,
    studentPopulation: "2,500+",
    internationalStudents: "600+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "Geomedi University is a dedicated medical university in Tbilisi offering an NMC & WHO approved, English-medium MBBS with modern simulation labs and clinical partnerships across the capital's teaching hospitals.",
    campusLife:
      "A compact, purpose-built medical campus in Tbilisi with a large Indian student cohort, a dedicated international office, and regular cultural events.",
    accommodation:
      "University-affiliated hostels and apartments are available within walking distance of campus, several offering Indian mess facilities.",
    englishMedium: true,
    tuitionRange: "$5,300 – $5,700 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$5,500 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "david-tvildiani-medical-university",
    name: "David Tvildiani Medical University",
    countrySlug: "georgia",
    city: "Tbilisi",
    bannerImage: universityImage("david-tvildiani-medical-university"),
    logoInitial: "D",
    ranking: "NMC & WHO Approved · ECFMG Listed",
    type: "Private",
    founded: 1989,
    studentPopulation: "1,800+",
    internationalStudents: "500+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "David Tvildiani Medical University is one of Georgia's most internationally recognised medical schools, following a US-style MD curriculum taught fully in English with strong outcomes for graduates sitting international licensing exams.",
    campusLife:
      "A tightly-run academic community with small class sizes, an active international student council, and close faculty mentoring throughout the six-year programme.",
    accommodation:
      "Partner student residences near campus offer furnished rooms with Indian food options nearby in Tbilisi's well-established Indian community areas.",
    englishMedium: true,
    tuitionRange: "$6,300 – $6,700 / year",
    popularCourses: ["MBBS / MD — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MD Program (MBBS equivalent)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$6,500 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: [...TAGS, "ECFMG Eligible"],
  },
  {
    slug: "university-of-georgia",
    name: "University of Georgia",
    countrySlug: "georgia",
    city: "Tbilisi",
    bannerImage: universityImage("university-of-georgia"),
    logoInitial: "U",
    ranking: "NMC & WHO Approved",
    type: "Private",
    founded: 2004,
    studentPopulation: "9,000+",
    internationalStudents: "700+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "University of Georgia runs a large, well-resourced English-medium MBBS faculty in Tbilisi, backed by the wider university's business and technology schools and a modern main campus.",
    campusLife:
      "One of Tbilisi's largest private universities, with a vibrant multicultural student body, modern facilities, and an active international students' office.",
    accommodation:
      "On-campus and partner accommodation options are available, with several offering dedicated Indian mess services.",
    englishMedium: true,
    tuitionRange: "$5,800 – $6,200 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$6,000 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "caucasus-international-university",
    name: "Caucasus International University",
    countrySlug: "georgia",
    city: "Tbilisi",
    bannerImage: universityImage("caucasus-international-university"),
    logoInitial: "C",
    ranking: "NMC & WHO Approved",
    type: "Private",
    founded: 1994,
    studentPopulation: "3,500+",
    internationalStudents: "400+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "Caucasus International University (CIU) offers an English-medium MBBS programme with a strong focus on early clinical exposure through partner hospitals across Tbilisi.",
    campusLife:
      "A friendly, mid-size private university with a dedicated international faculty building and an established Indian student community.",
    accommodation:
      "Partner hostels and apartments near campus offer furnished rooms, with Indian food options available in nearby neighbourhoods.",
    englishMedium: true,
    tuitionRange: "$5,600 – $6,000 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$5,800 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "avicenna-batumi-medical-university",
    name: "Avicenna Batumi Medical University",
    countrySlug: "georgia",
    city: "Batumi",
    bannerImage: universityImage("avicenna-batumi-medical-university"),
    logoInitial: "A",
    ranking: "NMC & WHO Approved",
    type: "Private",
    founded: 2011,
    studentPopulation: "1,200+",
    internationalStudents: "250+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "Avicenna Batumi Medical University offers an English-medium MBBS in Batumi, a Black Sea coastal city, combining modern teaching facilities with a notably relaxed, seaside student lifestyle.",
    campusLife:
      "A smaller, close-knit international student cohort in a scenic coastal city with a lower cost of living than Tbilisi.",
    accommodation:
      "University-arranged apartments and hostels are available near campus, several within walking distance of the seafront.",
    englishMedium: true,
    tuitionRange: "$4,800 – $5,200 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$5,000 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "seu-georgian-national-university",
    name: "SEU Georgian National University",
    countrySlug: "georgia",
    city: "Tbilisi",
    bannerImage: universityImage("seu-georgian-national-university"),
    logoInitial: "S",
    ranking: "NMC & WHO Approved",
    type: "Private",
    founded: 1995,
    studentPopulation: "4,000+",
    internationalStudents: "350+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "SEU Georgian National University runs an English-medium MBBS faculty in central Tbilisi with modern anatomy and simulation labs and growing international enrolment each intake.",
    campusLife:
      "A centrally located campus with easy access to Tbilisi's old town, a supportive international office, and an active Indian student association.",
    accommodation:
      "Partner residences near campus offer furnished accommodation, with Indian mess facilities available in the surrounding area.",
    englishMedium: true,
    tuitionRange: "$5,100 – $5,500 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$5,300 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "east-west-university",
    name: "East-West University",
    countrySlug: "georgia",
    city: "Tbilisi",
    bannerImage: universityImage("east-west-university"),
    logoInitial: "E",
    ranking: "NMC & WHO Approved",
    type: "Private",
    founded: 2001,
    studentPopulation: "2,800+",
    internationalStudents: "300+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "East-West University offers an English-medium MBBS with a compact, modern campus in Tbilisi and clinical rotations arranged across several partner city hospitals.",
    campusLife:
      "A smaller student body allows closer faculty attention, with an active international students' committee organising regular events.",
    accommodation:
      "Nearby partner hostels and apartments are available, with Indian food options within a short walk of campus.",
    englishMedium: true,
    tuitionRange: "$4,900 – $5,300 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$5,100 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "ken-walker-international-university",
    name: "Ken Walker International University",
    countrySlug: "georgia",
    city: "Tbilisi",
    bannerImage: universityImage("ken-walker-international-university"),
    logoInitial: "K",
    ranking: "NMC & WHO Approved",
    type: "Private",
    founded: 2018,
    studentPopulation: "900+",
    internationalStudents: "180+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "One of Georgia's newer medical schools, Ken Walker International University offers a modern, English-medium MBBS curriculum built specifically around international student admissions.",
    campusLife:
      "A newer campus with modern facilities, smaller cohorts, and personal attention from faculty during foundation years.",
    accommodation:
      "Partner accommodation is arranged near campus, with Indian food options available in the surrounding neighbourhood.",
    englishMedium: true,
    tuitionRange: "$4,600 – $5,000 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$4,800 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: TAGS,
  },
  {
    slug: "international-black-sea-university",
    name: "International Black Sea University (IBSU)",
    countrySlug: "georgia",
    city: "Tbilisi",
    bannerImage: universityImage("international-black-sea-university"),
    logoInitial: "I",
    ranking: "NMC & WHO Approved · UNESCO Listed",
    type: "Private",
    founded: 1995,
    studentPopulation: "5,500+",
    internationalStudents: "450+ Indian students",
    acceptanceRate: "100% Direct Admission",
    about:
      "International Black Sea University (IBSU) is a UNESCO-listed institution offering an English-medium MBBS with modern facilities and a broad, multicultural student body drawn from over 30 countries.",
    campusLife:
      "A genuinely international campus with students from across the world, an active students' union, and a well-organised Indian student network.",
    accommodation:
      "On-campus and partner accommodation options are available, with Indian mess facilities offered at several affiliated residences.",
    englishMedium: true,
    tuitionRange: "$5,400 – $5,800 / year",
    popularCourses: ["MBBS — General Medicine (6 years, English Medium)"],
    courses: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        level: "Undergraduate",
        duration: "6 years (incl. 1-year internship)",
        tuition: "$5,600 / year",
      },
    ],
    eligibility: ELIGIBILITY,
    tags: [...TAGS, "UNESCO Listed"],
  },
];

export function getUniversities() {
  return universities;
}

export function getUniversityBySlug(slug: string) {
  return universities.find((u) => u.slug === slug);
}

export function getUniversitiesByCountry(countrySlug: string) {
  return universities.filter((u) => u.countrySlug === countrySlug);
}
