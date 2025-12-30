
export const TEAM_MEMBERS = [
  {
    id: "01",
    name: "Yomi Philip Akinola",
    role: "C.E.O",
    image: "/images/team-1.jpg",
    bio: "With over two decades of experience shaping the Nigerian built environment, Yomi Philip Akinola leads BlackPhilz Construction with a philosophy grounded in integrity, innovation, and sustainable development. His portfolio spans complex commercial high-rises to bespoke private residences, always emphasizing the harmony between structure and the tropical context. A visionary leader, he champions a culture of excellence, ensuring that every project is a legacy of quality engineering and architectural beauty.",
    education: "R.COREN, C.MNSE, C.MNICE, MNISTRUCTE,MSE",
    experience: "22 Years"
  },
  {
    id: "02",
    name: "Daniel Akerele",
    role: "Engineer",
    image: "/images/team-2.jpg",
    bio: "As a lead Engineer, Daniel Akerele brings a rigorous analytical approach to every structural challenge. Specializing in high-performance concrete systems and foundation design for coastal terrains, he ensures that the safety and longevity of our buildings are never compromised. His expertise in advanced structural modeling and material science allows BlackPhilz to execute daring architectural forms with absolute confidence and precision.",
    education: "M.Sc Structural Eng., Imperial College",
    experience: "15 Years"
  },
  {
    id: "03",
    name: "Olaniyi Sofile",
    role: "Engineer",
    image: "/images/team-3.jpg",
    bio: "Olaniyi Sofile acts as the vital link between conceptual design and on-site execution. With a keen eye for operational efficiency and quality control, he manages the complex logistics of construction with seamless proficiency. His hands-on leadership style ensures that timelines are met, budgets are adhered to, and design intent is faithfully translated into reality, from the groundbreaking ceremony to the final handover.",
    education: "B.Sc Civil Eng., UNILAG",
    experience: "12 Years"
  },
  {
    id: "04",
    name: "Akeem Olabisi",
    role: "Engineer",
    image: "/images/team-4.jpg",
    bio: "Akeem Olabisi combines technical engineering prowess with a deep appreciation for the user experience. Focusing on mechanical, electrical, and plumbing (MEP) integration as well as structural dynamics, he ensures that the buildings function as efficiently as they stand. His dedication to innovative building technologies drives BlackPhilz's commitment to creating spaces that are not only structurally sound but also intelligent and responsive to their inhabitants.",
    education: "PGD Building Services, Sheffield",
    experience: "10 Years"
  }
];

export const SERVICES = [
  {
    id: "01",
    title: "Analytics & Research",
    count: 14,
    type: "image",
    image: "/images/service-3d.jpg",
    desc: "Data-driven decisions guided by deep industry trends. We optimize outcomes before the first brick is laid."
  },
  {
    id: "02",
    title: "Construction & Renovation",
    count: 42,
    type: "image",
    image: "/images/service-arch.jpg",
    desc: "Build with confidence. Whether it's a new project or renovating an existing space, we ensure certainty and care."
  },
  {
    id: "03",
    title: "Engineering & Design",
    count: 28,
    type: "blueprint",
    image: "",
    desc: "Blending creativity with precision. Creating structures that are not only functional but aesthetically inspiring."
  },
  {
    id: "04",
    title: "Program Management",
    count: 19,
    type: "image",
    image: "/images/service-sketch.jpg",
    desc: "Meticulous planning, coordination, and execution. A comprehensive approach to complex logistics."
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "The Eko Atlantic Tower",
    category: "Commercial High-Rise",
    location: "Victoria Island",
    image: "/images/project-1.jpg",
    colSpan: "md:col-span-8", // Wide
    aspect: "aspect-[16/9]"
  },
  {
    id: 2,
    title: "Dangote Refinery Wing",
    category: "Industrial Complex",
    location: "Lekki Free Zone",
    image: "/images/project-2.jpg",
    colSpan: "md:col-span-4", // Narrow
    aspect: "aspect-[4/5]"
  },
  {
    id: 3,
    title: "Banana Island Villa",
    category: "Private Residence",
    location: "Ikoyi",
    image: "/images/project-3.jpg",
    colSpan: "md:col-span-5", // Narrow
    aspect: "aspect-[3/4]"
  },
  {
    id: 4,
    title: "National Theatre Reno",
    category: "Public Infrastructure",
    location: "Iganmu",
    image: "/images/project-4.jpg",
    colSpan: "md:col-span-7", // Wide
    aspect: "aspect-[16/10]"
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "The craftsmanship and durability of their work speak for themselves. They completed the project on time and within budget, exceeding my expectations.",
    highlight: "exceeding my expectations.",
    name: "Abbey Azaka Ekpeti",
    role: "Chairman, G51 Group",
    initials: "G51"
  },
  {
    id: 2,
    quote: "BlackPhilz doesn't just build; they interpret the vision. The structural integrity of the Lekki complex is a testament to their engineering rigor.",
    highlight: "engineering rigor.",
    name: "Tunde Fashola",
    role: "Director, Lagos State Urban Dev",
    initials: "LS"
  },
  {
    id: 3,
    quote: "We needed a partner who understood the humidity and soil challenges of the Delta. BlackPhilz delivered precision where others saw impossibility.",
    highlight: "precision where others saw impossibility.",
    name: "Sarah Oladipo",
    role: "COO, Shell Petroleum Dev",
    initials: "SP"
  }
];

export const PARTNERS = ["Shell", "Dangote", "Lagos State", "Total", "Julius Berger", "First Bank"];

export const MANIFESTO_PHRASES = [
  "We don't just pour concrete.",
  "We forge permanence.",
  "In an era of disposable architecture,",
  "we dwell in durability.",
  "Every beam is a promise kept.",
  "Every line is a legacy secured."
];

export const projects = [
  {
    id: "01",
    title: "The Zenith Heights",
    slug: "the-zenith-heights", // Used for the URL
    location: "Victoria Island, Lagos",
    year: "2023",
    category: "Commercial",
    heroImage: "/images/project-1.jpg",
    gallery: ["/images/project-1.jpg", "/images/project-2.jpg", "/images/project-3.jpg"],
    stats: {
      client: "Zenith Capital",
      size: "12,500 sqm",
      duration: "18 Months",
      role: "Main Contractor"
    },
    description: "A 22-story mixed-use monolith defined by its double-skin glass facade.",
    challenge: "The primary challenge was constructing a deep-pile foundation in the high-water-table soil of Victoria Island without disturbing the adjacent historical structures.",
    solution: "We utilized a top-down construction method with continuous flight auger (CFA) piling, reducing vibration by 80% and delivering the substructure 2 months ahead of schedule."
  },
  {
    id: "02",
    title: "Sovereign Villa",
    slug: "sovereign-villa",
    location: "Banana Island, Ikoyi",
    year: "2024",
    category: "Residential",
    heroImage: "/images/project-3.jpg",
    gallery: ["/images/project-3.jpg", "/images/project-4.jpg", "/images/project-1.jpg"],
    stats: {
      client: "Private",
      size: "2,200 sqm",
      duration: "14 Months",
      role: "Design & Build"
    },
    description: "Private resilience. A brutalist concrete shell softening into a lush tropical courtyard.",
    challenge: "The client required a fully off-grid capability with invisible integration of solar and water recycling systems within the exposed concrete aesthetic.",
    solution: "We engineered a 'double-slab' roof system that hides the MEP infrastructure while acting as a thermal buffer, reducing cooling loads by 35%."
  },
  {
    id: "03",
    title: "Lekki Logistics Hub",
    slug: "lekki-logistics-hub",
    location: "Lekki Free Zone",
    year: "2022",
    category: "Industrial",
    heroImage: "/images/project-2.jpg",
    gallery: ["/images/project-2.jpg", "/images/project-4.jpg", "/images/project-1.jpg"],
    stats: {
      client: "Private",
      size: "50,000 sqm",
      duration: "24 Months",
      role: "Main Contractor"
    },
    description: "Engineering at scale. 50,000 sqm of high-load warehouse space with automated racking systems.",
    challenge: "The client required a fully off-grid capability with invisible integration of solar and water recycling systems within the exposed concrete aesthetic.",
    solution: "We engineered a 'double-slab' roof system that hides the MEP infrastructure while acting as a thermal buffer, reducing cooling loads by 35%."
  },
  {
    id: "04",
    title: "Apex Medical Centre",
    slug: "apex-medical-centre",
    location: "Ikeja GRA",
    year: "2021",
    category: "Public",
    heroImage: "/images/project-4.jpg",
    gallery: ["/images/project-4.jpg", "/images/project-1.jpg", "/images/project-2.jpg"],
    stats: {
      client: "Private",
      size: "2,200 sqm",
      duration: "14 Months",
      role: "Design & Build"
    },
    description: "Private resilience. A brutalist concrete shell softening into a lush tropical courtyard.",
    challenge: "The client required a fully off-grid capability with invisible integration of solar and water recycling systems within the exposed concrete aesthetic.",
    solution: "We engineered a 'double-slab' roof system that hides the MEP infrastructure while acting as a thermal buffer, reducing cooling loads by 35%."
  },
  {
    id: "05",
    title: "Eko Pearl Extension",
    slug: "eko-pearl-extension",
    location: "Eko Atlantic City",
    year: "Under Construction",
    category: "Residential",
    heroImage: "/images/project-1.jpg",
    gallery: ["/images/project-1.jpg", "/images/project-3.jpg", "/images/project-4.jpg"],
    stats: {
      client: "Private",
      size: "2,200 sqm",
      duration: "14 Months",
      role: "Design & Build"
    },
    description: "Private resilience. A brutalist concrete shell softening into a lush tropical courtyard.",
    challenge: "The client required a fully off-grid capability with invisible integration of solar and water recycling systems within the exposed concrete aesthetic.",
    solution: "We engineered a 'double-slab' roof system that hides the MEP infrastructure while acting as a thermal buffer, reducing cooling loads by 35%."
  }
  // ... Add your other projects here following this pattern
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const getAllContent = () => {
  return {
    projects,
    team: TEAM_MEMBERS,
    news
  };
};

// src/lib/data.ts

// ... existing projects and team exports ...

export const news = [
  {
    id: "01",
    title: "Breaking Ground: The Eko Atlantic Tower",
    slug: "breaking-ground-eko-atlantic",
    date: "OCT 12, 2025",
    category: "Project Update",
    image: "/images/project-1.jpg", // Use a construction site photo
    excerpt: "Mobilization begins for our most ambitious coastal project yet. The 22-story piling phase is scheduled for Q4."
  },
  {
    id: "02",
    title: "BlackPhilz Partners with Lafarge Africa",
    slug: "partnership-lafarge",
    date: "SEP 28, 2025",
    category: "Press",
    image: "/images/project-2.jpg", // Use a photo of people shaking hands or concrete
    excerpt: "A strategic alliance to ensure a sustainable supply chain of low-carbon concrete for all Lagos operations."
  },
  {
    id: "03",
    title: "The Future of Tropical Modernism",
    slug: "tropical-modernism-insight",
    date: "AUG 14, 2025",
    category: "Insight",
    image: "/images/project-3.jpg", // Use an architectural detail shot
    excerpt: "Principal Architect Adewale Okoro discusses passive cooling techniques in his latest interview with Architectural Digest."
  },
  {
    id: "04",
    title: "Safety Milestone: 1 Million Hours",
    slug: "safety-milestone-2025",
    date: "JUL 02, 2025",
    category: "Company",
    image: "/images/project-4.jpg", // Use a safety gear / hard hat shot
    excerpt: "We are proud to announce zero LTI (Lost Time Injuries) across all 14 active sites for the past 12 months."
  },
  {
    id: "05",
    title: "Restoring the National Theatre",
    slug: "restoring-national-theatre",
    date: "JUN 10, 2025",
    category: "Project Update",
    image: "/images/project-1.jpg",
    excerpt: "A look inside the delicate structural reinforcement work required to preserve this historic brutalist masterpiece."
  }
];

export const getNewsBySlug = (slug: string) => news.find(n => n.slug === slug);