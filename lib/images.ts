/**
 * Central image manifest. Every photo is a verified Unsplash asset referenced by
 * ID so remote URLs are built consistently and can be swapped for real brand
 * photography in one place later.
 */
function unsplash(id: string, width = 1600, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?q=${quality}&w=${width}&auto=format&fit=crop`;
}

export const IMAGES = {
  heroImage: "/hero-img.png",
  heroStudent: unsplash("1531123897727-8f129e1688ce"),
  heroStudentAlt: unsplash("1544005313-94ddf0286df2"),
  libraryStudyGroup: unsplash("1523240795612-9a054b0db644"),
  graduationSkyline: unsplash("1541339907198-e08756dedf3f"),
  graduationCampus: unsplash("1627556704290-2b1f5853ff78"),
  campusBrick: unsplash("1607237138185-eedd9c632b0b"),
  campusBrick2: unsplash("1592280771190-3e2e4d571952"),
  libraryStacks: unsplash("1498243691581-b145c3f54a5a"),
  lectureHallEmpty: unsplash("1580582932707-520aed937b7b"),
  classroomStudents: unsplash("1571260899304-425eee4c7efc"),
  counsellingCasual: unsplash("1543269865-cbf427effbad"),
  teamMeetingTable: unsplash("1521737604893-d14cc237f11d"),
  laptopCollabGroup: unsplash("1522202176988-66273c2fd55f"),
  advisorWithCharts: unsplash("1517245386807-bb43f82c33c4"),
  orientationSeminar: unsplash("1524178232363-1fb2b075b655"),
  applicationLaptopGroup: unsplash("1516321497487-e288fb19713f"),
  modernOffice: unsplash("1560264280-88b68371db39"),
  overheadWorkspace: unsplash("1519389950473-47ba0277781c"),
  teamUnityHands: unsplash("1600880292089-90a7e086ee0c"),
  successHighFive: unsplash("1600880292203-757bb62b4baf"),
  airplaneWing: unsplash("1436491865332-7a61a109cc05"),
  writingNotesCoffee: unsplash("1434030216411-0b793f4b4173"),

  countries: {
    russia: {
      hero: unsplash("1513326738677-b964603b136d"),
      secondary: unsplash("1547448415-e9f5b28e570d"),
    },
    georgia: {
      hero: unsplash("1565008576549-57569a49371d"),
      secondary: unsplash("1565008576549-57569a49371d"),
    },
  },

  medical: {
    stethoscope: unsplash("1584982751601-97dcc096659c"),
    clinicalRotation: unsplash("1551190822-a9333d879b1f"),
    doctorWithPhone: unsplash("1576091160399-112ba8d25d1d"),
    consultationRoom: unsplash("1631217868264-e5b90bb7e133"),
    comfortingHands: unsplash("1584515933487-779824d29309"),
  },

  universityBanners: [
    unsplash("1592280771190-3e2e4d571952"),
    unsplash("1498243691581-b145c3f54a5a"),
    unsplash("1580582932707-520aed937b7b"),
    unsplash("1571260899304-425eee4c7efc"),
    unsplash("1627556704290-2b1f5853ff78"),
    unsplash("1524178232363-1fb2b075b655"),
    unsplash("1523240795612-9a054b0db644"),
    unsplash("1541339907198-e08756dedf3f"),
    unsplash("1520106212299-d99c443e4568"),
    unsplash("1560179707-f14e90ef3623"),
  ],

  portraits: [
    unsplash("1494790108377-be9c29b29330", 400),
    unsplash("1507003211169-0a1dd7228f2d", 400),
    unsplash("1517841905240-472988babdf9", 400),
    unsplash("1500648767791-00dcc994a43e", 400),
    unsplash("1519085360753-af0119f7cbe7", 400),
    unsplash("1531123897727-8f129e1688ce", 400),
    unsplash("1472099645785-5658abf4ff4e", 400),
    unsplash("1544005313-94ddf0286df2", 400),
    unsplash("1560250097-0b93528c311a", 400),
    unsplash("1573497019940-1c28c88b4f3e", 400),
    unsplash("1524504388940-b1c1722653e1", 400),
  ],

  team: [
    unsplash("1573496359142-b8d87734a5a2", 400),
    unsplash("1580489944761-15a19d654956", 400),
    unsplash("1556157382-97eda2d62296", 400),
    unsplash("1615109398623-88346a601842", 400),
    unsplash("1607746882042-944635dfe10e", 400),
    unsplash("1584999734482-0361aecad844", 400),
  ],
} as const;

export function portrait(index: number) {
  return IMAGES.portraits[index % IMAGES.portraits.length];
}

export function teamPhoto(index: number) {
  return IMAGES.team[index % IMAGES.team.length];
}

export function universityBanner(index: number) {
  return IMAGES.universityBanners[index % IMAGES.universityBanners.length];
}

/**
 * Real campus photos supplied for each partner university, stored in
 * public/university-collection with their original filenames.
 */
const UNIVERSITY_IMAGE_FILES: Record<string, string> = {
  "omsk-state-medical-university": "Omsk State Medical University.webp",
  "kemerovo-state-university": "Kemerovo State University.webp",
  "tambov-state-university": "Tambov State University.png",
  "north-western-state-medical-university": "North Western State Medical University.jpg",
  "bashkir-state-medical-university": "Bashkir State Medical University.jpeg",
  "north-ossetian-state-medical-academy": "North Ossetian State Medical Academy.jpg",
  "yelets-state-university": "Yelets State University.jpg",
  "far-eastern-federal-university": "Far Eastern Federal University.jpg",
  "perm-state-medical-university": "Perm State Medical University.webp",
  "mari-state-medical-university": "Mari State Medical University.webp",
  "siberian-state-medical-university": "Siberian State Medical University.webp",
  "orenburg-state-medical-university": "Orenburg State Medical University.jpg",
  "geomedi-university": "Geomedi University.jpg",
  "david-tvildiani-medical-university": "David Tvildiani Medical University.jpg",
  "university-of-georgia": "University of Georgia.jpg",
  "caucasus-international-university": "Caucasus International University (CIU).jpg",
  "avicenna-batumi-medical-university": "Avicenna Batumi Medical University.jpg",
  "seu-georgian-national-university": "SEU Georgian National University.jpeg",
  "east-west-university": "East-West University.jpg",
  "ken-walker-international-university": "Ken Walker International University.webp",
  "international-black-sea-university": "SEU IBSU.jpg",
};

export function universityImage(slug: string) {
  const filename = UNIVERSITY_IMAGE_FILES[slug];
  if (!filename) return universityBanner(0);
  return `/university-collection/${encodeURIComponent(filename)}`;
}
