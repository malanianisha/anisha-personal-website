export type ProjectCategory = "Front-End" | "Full-Stack" | "UI/UX" | "Data" | "Web" | "Hackathon";

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  impact: string;
  role?: string;
  personalNotes: string[];
  categories: ProjectCategory[];
  stack: string[];
  importanceRank: number;
  highlights: string[];
  problem: string;
  solution: string;
  outcome: string;
  architecture: string[];
  tradeoffs?: string[];
  metrics?: ProjectMetric[];
  image?: string;
  imageAlt?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "schedulai",
    name: "SchedulAI",
    summary:
      "Transcript-aware planning assistant that surfaces graduation paths, prerequisites, and schedule conflicts in one flow.",
    impact:
      "Designed a clear planning experience that reduces guesswork and keeps students focused on actionable next steps.",
    role: "Product design + full-stack development",
    personalNotes: [
      "Built as a student tool because I wanted planning to feel calm, not stressful.",
      "Focused on making the data feel clear before adding features.",
    ],
    categories: ["Full-Stack", "Front-End", "UI/UX", "Web"],
    stack: ["React", "TypeScript", "Python", "Flask", "Figma"],
    importanceRank: 1,
    highlights: [
      "Transcript parsing pipeline + requirement mapping",
      "Progress dashboard with visibility into remaining credits",
      "Systemized UI for planning, review, and recommendations",
    ],
    problem:
      "Students lacked a reliable way to translate transcript data into concrete graduation paths and schedules.",
    solution:
      "Built a transcript-aware workflow that structures requirements, highlights conflicts, and recommends next steps.",
    outcome:
      "A consistent planning experience that pairs data insights with a calm, guided UI.",
    architecture: [
      "Transcript ingestion -> requirement normalization -> recommendation engine",
      "Modular front-end components for schedule cards and progress tracking",
      "API-driven data flow with predictable state management",
    ],
    tradeoffs: [
      "Balanced detailed academic rules with readable UI density",
      "Optimized for clarity over exhaustive analytics in the first release",
    ],
    metrics: [
      { label: "Planning workflow", value: "3-step" },
      { label: "Core screens", value: "6" },
    ],
    image: "/schedulai.png",
    imageAlt: "SchedulAI dashboard screenshot",
    github: "https://github.com/malanianisha/schedulai",
    featured: true,
  },
  {
    slug: "voice-security-dashboard",
    name: "Voice Security Dashboard",
    summary:
      "Interactive analytics dashboard visualizing fraud patterns, anomalies, and geographic risk signals.",
    impact:
      "Made complex risk signals scannable through layered visualizations and map-driven exploration.",
    role: "Front-end engineering + data visualization",
    personalNotes: [
      "My first deep dive into map-based data and anomaly signals.",
      "I cared most about making dense data feel scannable.",
    ],
    categories: ["Front-End", "Full-Stack", "Data", "Web"],
    stack: ["React", "TypeScript", "Recharts", "Leaflet"],
    importanceRank: 2,
    highlights: [
      "Multi-view dashboard with anomaly drill-down",
      "Geo-risk map with layered filters",
      "Design system for analytics cards and charts",
    ],
    problem:
      "Analysts needed a faster way to spot suspicious patterns across time and geography.",
    solution:
      "Designed a modular dashboard that blends KPIs, charts, and map insights in a single investigative flow.",
    outcome:
      "A focused exploration experience that reduces time-to-insight for fraud teams.",
    architecture: [
      "Componentized chart blocks with shared layout primitives",
      "Map layer abstraction for geographic signals",
      "Reusable filter state for cross-view sync",
    ],
    tradeoffs: [
      "Prioritized real-time clarity over exhaustive historical overlays",
    ],
    github: "https://github.com/malanianisha/voice-security-dashboard",
    featured: true,
  },
  {
    slug: "iajes-website-revamp",
    name: "IAJES Website Revamp",
    summary:
      "Senior design project focused on UX, branding, and responsive layouts for a global engineering association.",
    impact:
      "Created a cohesive visual system and navigation structure that improves content discovery.",
    role: "UX/UI + implementation",
    personalNotes: [
      "Led the redesign to give the org a clearer voice online.",
      "Spent extra time on navigation so members could find resources fast.",
    ],
    categories: ["Front-End", "UI/UX", "Web"],
    stack: ["UX", "Branding", "Responsive UI"],
    importanceRank: 3,
    highlights: [
      "Information architecture refresh",
      "Responsive navigation + editorial layout patterns",
      "Component system for brand consistency",
    ],
    problem:
      "The existing site lacked cohesion and made it hard for visitors to find member resources.",
    solution:
      "Rebuilt navigation and page templates with a stronger hierarchy and a modern visual system.",
    outcome:
      "A clearer, more engaging web presence that supports ongoing content growth.",
    architecture: [
      "Template-driven layout with modular sections",
      "Reusable typography and spacing scale",
      "Mobile-first responsive grid",
    ],
    image: "/prototype preview.png",
    imageAlt: "IAJES website prototype screenshot",
    github: "https://github.com/malanianisha/iajes-website-revamp",
    featured: true,
  },
  {
    slug: "relif-website",
    name: "RELIF Website",
    summary:
      "Public-facing website for a frugal innovation initiative, built to support global collaboration.",
    impact:
      "Delivered a clean narrative structure for updates, resources, and partner highlights.",
    role: "Design + front-end implementation",
    personalNotes: [
      "Collaborated with the RELIF team to translate mission into layout.",
      "Kept the UI lightweight so updates are easy to publish.",
    ],
    categories: ["Front-End", "Web", "UI/UX"],
    stack: ["Responsive UI", "Content structure"],
    importanceRank: 4,
    highlights: [
      "Brand-forward homepage and landing sections",
      "Reusable content blocks for updates",
      "Accessible typography and spacing system",
    ],
    problem:
      "The initiative needed a public site that communicated mission, updates, and resources clearly.",
    solution:
      "Designed a clean, modular layout with strong hierarchy and quick scanning patterns.",
    outcome:
      "A modern web presence that makes collaboration and content updates easy.",
    architecture: [
      "Section-based layout system with consistent grid",
      "Reusable callout and card components",
      "Optimized typography scale for readability",
    ],
    image: "/relief-website.png",
    imageAlt: "RELIF website screenshot",
    github: "https://github.com/malanianisha/relif-website",
    featured: true,
  },
  {
    slug: "relif-conference-2026",
    name: "RELIF Conference 2026",
    summary:
      "Conference microsite for schedules, event updates, and speaker highlights.",
    impact:
      "Balanced event logistics with a refined, mobile-first attendee experience.",
    role: "Front-end + content structure",
    personalNotes: [
      "Built for mobile-first use during event days.",
      "Optimized for quick scanning of schedules and updates.",
    ],
    categories: ["Front-End", "Web", "UI/UX"],
    stack: ["Web", "Content", "Responsive UI"],
    importanceRank: 5,
    highlights: [
      "Agenda-focused layout for quick scanning",
      "Mobile-first schedule cards",
      "Brand-consistent announcement system",
    ],
    problem:
      "Attendees needed a mobile-friendly way to track sessions and updates.",
    solution:
      "Built a lightweight microsite with clear schedule blocks and live update sections.",
    outcome:
      "An event hub optimized for fast access on any device.",
    architecture: [
      "Componentized schedule cards and detail modals",
      "Responsive layout tuned for on-the-go use",
    ],
    image: "/conference.png",
    imageAlt: "RELIF conference site screenshot",
  },
  {
    slug: "urban-utopia",
    name: "Urban Utopia",
    summary:
      "Hackathon prototype exploring urban plot viability using external data signals.",
    impact:
      "Demonstrated rapid prototyping and data-driven storytelling under tight time constraints.",
    role: "Data + prototyping",
    personalNotes: [
      "Hackathon sprint where I shipped the data pipeline in a weekend.",
      "Loved turning raw APIs into a clear story.",
    ],
    categories: ["Hackathon", "Data", "Web"],
    stack: ["Python", "APIs", "Data analysis"],
    importanceRank: 6,
    highlights: [
      "API-driven data ingestion",
      "Insight-driven presentation flow",
      "Fast prototyping within hackathon scope",
    ],
    problem:
      "Urban planners needed signals to quickly gauge viability of new development sites.",
    solution:
      "Created a lightweight pipeline to pull external data and synthesize viability insights.",
    outcome:
      "A proof-of-concept experience that validates the data signal approach.",
    architecture: [
      "Data ingestion pipeline with API normalization",
      "Simple scoring model for viability",
    ],
  },
];
