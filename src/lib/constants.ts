
export const TEAM_MEMBERS = [
  {
    id: "01",
    name: "Yomi Philip Akinola",
    role: "C.E.O",
    image: "/images/team-member-1.jpg",
    bio: "With over two decades of experience shaping the Nigerian built environment, Yomi Philip Akinola leads BlackPhilz Construction with a philosophy grounded in integrity, innovation, and sustainable development. His portfolio spans complex commercial high-rises to bespoke private residences, always emphasizing the harmony between structure and the tropical context. A visionary leader, he champions a culture of excellence, ensuring that every project is a legacy of quality engineering and architectural beauty.",
    education: "R.COREN, C.MNSE, C.MNICE, MNISTRUCTE,MSE",
    experience: "22 Years"
  },
  {
    id: "02",
    name: "Daniel Akerele",
    role: "Engineer",
    image: "/images/team-member-2.jpeg",
    bio: "As a lead Engineer, Daniel Akerele brings a rigorous analytical approach to every structural challenge. Specializing in high-performance concrete systems and foundation design for coastal terrains, he ensures that the safety and longevity of our buildings are never compromised. His expertise in advanced structural modeling and material science allows BlackPhilz to execute daring architectural forms with absolute confidence and precision.",
    education: "M.Sc Structural Eng., Imperial College",
    experience: "15 Years"
  },
  {
    id: "03",
    name: "Olaniyi Sofile",
    role: "Engineer",
    image: "/images/team-member-3.png",
    bio: "Olaniyi Sofile acts as the vital link between conceptual design and on-site execution. With a keen eye for operational efficiency and quality control, he manages the complex logistics of construction with seamless proficiency. His hands-on leadership style ensures that timelines are met, budgets are adhered to, and design intent is faithfully translated into reality, from the groundbreaking ceremony to the final handover.",
    education: "B.Sc Civil Eng., UNILAG",
    experience: "12 Years"
  },
  {
    id: "04",
    name: "Akeem Olabisi",
    role: "Engineer",
    image: "/images/team-member-4.png",
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

export const projects = [
  {
    id: "01",
    title: "Micheal Ogun Terrace Project",
    slug: "micheal-ogun-terrace",
    location: "Lagos Mainland",
    year: "2023",
    category: "Residential",
    heroImage: "/images/project-1.png",
    gallery: ["/images/project-1.png", "/images/project-2.jpg", "/images/project-3.jpg"],
    stats: {
      client: "Private Developer",
      size: "4,500 sqm",
      duration: "12 Months",
      role: "Main Contractor"
    },
    description: "A multi-unit terrace development focused on maximizing spatial efficiency within a dense urban footprint.",
    challenge: "The site required extensive retrofitting of existing drainage systems to accommodate the new structural load without compromising neighboring foundations.",
    solution: "We implemented a raft foundation system with integrated drainage channels, ensuring stability and water management were addressed simultaneously."
  },
  {
    id: "02",
    title: "Belarabe Musa, Lekki Project",
    slug: "belarabe-musa-lekki",
    location: "Lekki Phase 1",
    year: "2024",
    category: "Mixed-Use",
    heroImage: "/images/project-2.jpg",
    gallery: ["/images/project-2.jpg", "/images/project-4.jpeg", "/images/project-1.png"],
    stats: {
      client: "Corporate",
      size: "3,200 sqm",
      duration: "18 Months",
      role: "Design & Build"
    },
    description: "A structural shell project designed to accommodate high-end commercial spaces on the ground floor with residential units above.",
    challenge: "High water tables in Lekki posed a significant risk to the basement integrity during the early piling stages.",
    solution: "We utilized high-sulphate resistant cement and a specialized dewatering technique to cast a watertight basement shell."
  },
  {
    id: "03",
    title: "Qc Homes, Magodo Project",
    slug: "qc-homes-magodo",
    location: "Magodo GRA",
    year: "2025",
    category: "Residential",
    heroImage: "/images/project-3.jpg",
    gallery: ["/images/project-3.jpg", "/images/project-1.png", "/images/project-2.jpg"],
    stats: {
      client: "Qc Homes",
      size: "1,800 sqm",
      duration: "10 Months",
      role: "Main Contractor"
    },
    description: "Modern luxury defined. A series of semi-detached duplexes featuring contemporary facade finishes and smart-home integration.",
    challenge: "Balancing the client's desire for expansive glass facades with the need for thermal control in a tropical climate.",
    solution: "We engineered deep overhangs and utilized low-emissivity glass to reduce solar gain while maintaining the aesthetic vision."
  },
  {
    id: "04",
    title: "Alakara Plaza Project",
    slug: "alakara-plaza",
    location: "Alakara",
    year: "2024",
    category: "Commercial",
    heroImage: "/images/project-4.jpeg",
    gallery: ["/images/project-4.jpeg", "/images/project-5.png", "/images/project-2.jpg"],
    stats: {
      client: "Investment Group",
      size: "6,000 sqm",
      duration: "20 Months",
      role: "Structural Consultant"
    },
    description: "A major commercial hub designed to handle high foot traffic, featuring open-plan retail spaces and robust concrete framing.",
    challenge: "Managing logistics and material delivery in a highly congested market area without disrupting daily commerce.",
    solution: "We adopted a night-shift construction schedule for heavy lifting and utilized prefabricated concrete elements to speed up on-site assembly."
  },
  {
    id: "05",
    title: "Akoka Hotel Project",
    slug: "akoka-hotel",
    location: "Akoka, Yaba",
    year: "Under Construction",
    category: "Hospitality",
    heroImage: "/images/project-5.png",
    gallery: ["/images/project-5.png", "/images/project-3.jpg", "/images/project-1.png"],
    stats: {
      client: "Hospitality Brand",
      size: "2,500 sqm",
      duration: "24 Months",
      role: "Design & Build"
    },
    description: "A vertical hospitality solution optimizing land use. Features reinforced shear walls to support the slender high-rise structure.",
    challenge: "Ensuring structural rigidity against wind loads for a building with such a narrow footprint relative to its height.",
    solution: "A central core structural system was designed to house the elevator shafts, providing the necessary lateral stability for the tower."
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Micheal Ogun Terrace",
    category: "Residential Development",
    location: "Lagos Mainland",
    image: "/images/project-1.png",
    colSpan: "md:col-span-8",
    aspect: "aspect-[16/9]"
  },
  {
    id: 2,
    title: "Belarabe Musa Project",
    category: "Mixed-Use Structure",
    location: "Lekki Phase 1",
    image: "/images/project-2.jpg",
    colSpan: "md:col-span-4",
    aspect: "aspect-[4/5]"
  },
  {
    id: 3,
    title: "Qc Homes Magodo",
    category: "Modern Residential",
    location: "Magodo GRA",
    image: "/images/project-3.jpg",
    colSpan: "md:col-span-5",
    aspect: "aspect-[3/4]"
  },
  {
    id: 4,
    title: "Alakara Plaza",
    category: "Commercial Hub",
    location: "Alakara",
    image: "/images/project-4.jpeg",
    colSpan: "md:col-span-7",
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

// export const projects = [
//   {
//     id: "01",
//     title: "The Zenith Heights",
//     slug: "the-zenith-heights", // Used for the URL
//     location: "Victoria Island, Lagos",
//     year: "2023",
//     category: "Commercial",
//     heroImage: "/images/project-1.jpg",
//     gallery: ["/images/project-1.jpg", "/images/project-2.jpg", "/images/project-3.jpg"],
//     stats: {
//       client: "Zenith Capital",
//       size: "12,500 sqm",
//       duration: "18 Months",
//       role: "Main Contractor"
//     },
//     description: "A 22-story mixed-use monolith defined by its double-skin glass facade.",
//     challenge: "The primary challenge was constructing a deep-pile foundation in the high-water-table soil of Victoria Island without disturbing the adjacent historical structures.",
//     solution: "We utilized a top-down construction method with continuous flight auger (CFA) piling, reducing vibration by 80% and delivering the substructure 2 months ahead of schedule."
//   },
//   {
//     id: "02",
//     title: "Sovereign Villa",
//     slug: "sovereign-villa",
//     location: "Banana Island, Ikoyi",
//     year: "2024",
//     category: "Residential",
//     heroImage: "/images/project-3.jpg",
//     gallery: ["/images/project-3.jpg", "/images/project-4.jpg", "/images/project-1.jpg"],
//     stats: {
//       client: "Private",
//       size: "2,200 sqm",
//       duration: "14 Months",
//       role: "Design & Build"
//     },
//     description: "Private resilience. A brutalist concrete shell softening into a lush tropical courtyard.",
//     challenge: "The client required a fully off-grid capability with invisible integration of solar and water recycling systems within the exposed concrete aesthetic.",
//     solution: "We engineered a 'double-slab' roof system that hides the MEP infrastructure while acting as a thermal buffer, reducing cooling loads by 35%."
//   },
//   {
//     id: "03",
//     title: "Lekki Logistics Hub",
//     slug: "lekki-logistics-hub",
//     location: "Lekki Free Zone",
//     year: "2022",
//     category: "Industrial",
//     heroImage: "/images/project-2.jpg",
//     gallery: ["/images/project-2.jpg", "/images/project-4.jpg", "/images/project-1.jpg"],
//     stats: {
//       client: "Private",
//       size: "50,000 sqm",
//       duration: "24 Months",
//       role: "Main Contractor"
//     },
//     description: "Engineering at scale. 50,000 sqm of high-load warehouse space with automated racking systems.",
//     challenge: "The client required a fully off-grid capability with invisible integration of solar and water recycling systems within the exposed concrete aesthetic.",
//     solution: "We engineered a 'double-slab' roof system that hides the MEP infrastructure while acting as a thermal buffer, reducing cooling loads by 35%."
//   },
//   {
//     id: "04",
//     title: "Apex Medical Centre",
//     slug: "apex-medical-centre",
//     location: "Ikeja GRA",
//     year: "2021",
//     category: "Public",
//     heroImage: "/images/project-4.jpg",
//     gallery: ["/images/project-4.jpg", "/images/project-1.jpg", "/images/project-2.jpg"],
//     stats: {
//       client: "Private",
//       size: "2,200 sqm",
//       duration: "14 Months",
//       role: "Design & Build"
//     },
//     description: "Private resilience. A brutalist concrete shell softening into a lush tropical courtyard.",
//     challenge: "The client required a fully off-grid capability with invisible integration of solar and water recycling systems within the exposed concrete aesthetic.",
//     solution: "We engineered a 'double-slab' roof system that hides the MEP infrastructure while acting as a thermal buffer, reducing cooling loads by 35%."
//   },
//   {
//     id: "05",
//     title: "Eko Pearl Extension",
//     slug: "eko-pearl-extension",
//     location: "Eko Atlantic City",
//     year: "Under Construction",
//     category: "Residential",
//     heroImage: "/images/project-1.jpg",
//     gallery: ["/images/project-1.jpg", "/images/project-3.jpg", "/images/project-4.jpg"],
//     stats: {
//       client: "Private",
//       size: "2,200 sqm",
//       duration: "14 Months",
//       role: "Design & Build"
//     },
//     description: "Private resilience. A brutalist concrete shell softening into a lush tropical courtyard.",
//     challenge: "The client required a fully off-grid capability with invisible integration of solar and water recycling systems within the exposed concrete aesthetic.",
//     solution: "We engineered a 'double-slab' roof system that hides the MEP infrastructure while acting as a thermal buffer, reducing cooling loads by 35%."
//   }
//   // ... Add your other projects here following this pattern
// ];

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
    title: "Micheal Ogun Terrace Project",
    slug: "micheal-ogun-terrace",
    date: "OCT 12, 2025",
    category: "Project Update",
    image: "/images/project-1.png",
    excerpt: "Ongoing structural reinforcement and facade development at the Micheal Ogun site."
  },
  {
    id: "02",
    title: "Belarabe Musa, Lekki Project",
    slug: "belarabe-musa-lekki",
    date: "SEP 28, 2025",
    category: "Project Update",
    image: "/images/project-2.jpg",
    excerpt: "Site mobilization and framework construction continuing at the Belarabe Musa location in Lekki."
  },
  {
    id: "03",
    title: "Qc Homes, Magodo Project",
    slug: "qc-homes-magodo",
    date: "AUG 14, 2025",
    category: "Design Reveal",
    image: "/images/project-3.jpg",
    excerpt: "A glimpse into the modern architectural finishings proposed for the new Qc Homes in Magodo."
  },
  {
    id: "04",
    title: "Alakara Plaza Project",
    slug: "alakara-plaza",
    date: "JUL 02, 2025",
    category: "Project Update",
    image: "/images/project-4.jpeg",
    excerpt: "Structural milestones reached with the completion of the upper floor slabs at Alakara Plaza."
  },
  {
    id: "05",
    title: "Akoka Hotel Project",
    slug: "akoka-hotel",
    date: "JUN 10, 2025",
    category: "Project Update",
    image: "/images/project-5.png",
    excerpt: "Aerial view of the Akoka Hotel development as we approach the final stages of the structural shell."
  }
];

export const getNewsBySlug = (slug: string) => news.find(n => n.slug === slug);