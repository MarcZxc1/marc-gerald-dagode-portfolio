import { qwykzDownloadEvidence } from "@/lib/project-evidence";

export const profile = {
  name: "Marc Gerald Dagode",
  shortName: "Marc Gerald Dagode",
  handle: "MarcZxc1",
  role: "Full-stack developer",
  location: "Quezon City, Philippines",
  email: "dagodemarcgeraldarante@gmail.com",
  summary:
    "I build web applications and developer tools, from the interface to the database. Currently a full-stack development intern at Microgenesis and a Computer Science student at Quezon City University.",
  github: "https://github.com/MarcZxc1",
  linkedin: "https://www.linkedin.com/in/marc-gerald-dagode-b5a018388",
};

export const featuredProjects = [
  {
    slug: "qwykz",
    name: "Qwykz",
    kicker: "Open-source developer tooling",
    summary:
      "A fast TypeScript and Bun CLI that scaffolds configurable backend APIs, authentication presets, ORM integrations, and full-stack monorepos.",
    highlights: [
      `${qwykzDownloadEvidence.peakDownloads.toLocaleString("en-US")} npm downloads · Jun 20–26, 2026`,
      "Reproducible CLI walkthrough with file, dependency, and manifest previews",
      "Reusable presets for Supabase, Clerk, and traditional auth",
    ],
    stack: ["TypeScript", "Bun", "npm", "GitHub"],
    status: "Shipped",
    year: "2026",
    href: "https://github.com/MarcZxc1/qwykz",
    caseStudyHref: "/projects/qwykz",
  },
  {
    slug: "supply-chain",
    name: "Supply Chain Portal",
    kicker: "Internship · SharePoint replacement",
    summary:
      "Replacing legacy SharePoint lists with a unified Supply Chain Portal for deliveries, dispatch, inventory, and proof of delivery. Built during my full-stack internship at Microgenesis.",
    highlights: [
      "Full-stack development and release coordination across a four-developer team",
      "Role-based access, Microsoft sign-in, and auditable inventory transactions",
      "Automated API and browser checks supporting staging releases",
    ],
    stack: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma"],
    status: "In development",
    year: "2026",
    href: null,
    caseStudyHref: "/projects/supply-chain",
  },
  {
    slug: "nutrimap",
    name: "Nutrimap",
    kicker: "Thesis · Nutrition surveillance",
    summary:
      "A nutrition-surveillance prototype connecting offline field data collection with a web dashboard and geospatial analysis. I lead system architecture and DevOps in an eight-person thesis team.",
    highlights: [
      "Proposed Flutter field app and React dashboard with a shared FastAPI backend",
      "PostgreSQL and PostGIS for nutrition records and spatial analysis",
      "Architecture, shared API contracts, and repeatable deployment planning",
    ],
    stack: ["React", "Flutter", "FastAPI", "PostgreSQL", "PostGIS"],
    status: "In development",
    year: "2026",
    href: null,
    caseStudyHref: "/projects/nutrimap",
  },
  {
    slug: "diffguard",
    name: "DiffGuard",
    kicker: "AI-assisted pull request security",
    summary:
      "A GitHub App that reviews pull-request diffs and returns structured, line-level findings for security and maintainability risks.",
    highlights: [
      "HMAC-SHA256 webhook signature verification",
      "Hybrid deterministic and structured LLM analysis",
      "PostgreSQL/Prisma persistence with Redis-backed processing",
    ],
    stack: ["TypeScript", "Express", "Bun", "PostgreSQL", "Redis", "Docker"],
    status: "Shipped",
    year: "2026",
    href: "https://github.com/MarcZxc1/diffguard",
    caseStudyHref: null,
  },
  {
    slug: "business-virtual-assistant",
    name: "Business Virtual Assistant",
    kicker: "Software Engineering team project",
    summary:
      "A team project for our Software Engineering course where I served as lead developer, owning marketplace integrations and the AI/ML features for inventory risk, forecasting, and restocking.",
    highlights: [
      "Led full-stack delivery across React, Express, PostgreSQL, and FastAPI services",
      "Led AI/ML features for inventory risk scoring, demand forecasts, and budget-aware restocking",
      "Integrated Shopee and Lazada authentication, data synchronization, and real-time order workflows",
    ],
    stack: [
      "TypeScript",
      "React",
      "Express",
      "Python",
      "FastAPI",
      "PostgreSQL",
    ],
    status: "Completed",
    year: "2025",
    href: "https://github.com/MarcZxc1/Business-Virtual-Assistant-",
    caseStudyHref: null,
  },
  {
    slug: "home-repair-platform",
    name: "Home Repair Service Platform",
    kicker: "Marketplace PWA",
    summary:
      "A progressive web app for booking home repair services with transparent pricing, verified providers, payments, and dispute workflows.",
    highlights: [
      "End-to-end service booking",
      "Verified provider workflows",
      "Escrow and dispute-resolution concepts",
    ],
    stack: ["TypeScript", "PWA", "Full stack"],
    status: "Built",
    year: "2025",
    href: "https://github.com/MarcZxc1/Home-Repair-Service-Platform",
    caseStudyHref: null,
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    description:
      "The foundation I use to move between product interfaces, services, and data.",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "Bash (basic)"],
  },
  {
    title: "Frontend",
    description:
      "Accessible, responsive interfaces with a preference for simple systems.",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    description:
      "Secure APIs, application logic, validation, and hands-on endpoint testing.",
    skills: [
      "Bun",
      "Node.js",
      "FastAPI",
      "Bruno",
      "Postman",
      "Express",
      "Django",
      "REST APIs",
    ],
  },
  {
    title: "Data",
    description:
      "Relational data modeling, geospatial workloads, caching, and type-safe access.",
    skills: ["PostgreSQL", "PostGIS", "Supabase", "Prisma", "Redis"],
  },
  {
    title: "Delivery",
    description:
      "Repeatable environments and feedback loops from local development to release.",
    skills: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Linux",
      "Cloudflare Workers",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Quality",
    description:
      "Automated checks at the unit, integration, and browser levels.",
    skills: ["Jest", "Vitest", "Pytest", "Playwright", "Zod"],
  },
  {
    title: "AI & knowledge workflows",
    description:
      "An Obsidian second brain, scoped context for AI tasks, and verification that feeds lessons back into the next session.",
    skills: [
      "Obsidian",
      "Context engineering",
      "AI task orchestration",
      "Episodic & semantic memory",
      "Architecture decision records",
    ],
  },
] as const;

export const workingMethods = [
  {
    title: "A second brain in Obsidian",
    description:
      "I connect daily logs, architecture decisions, bug postmortems, and project notes in an Obsidian vault. It gives me a place to recover the reasoning behind a change and carry lessons into the next project.",
  },
  {
    title: "Episodic & semantic memory",
    description:
      "I use dated work logs and session histories as episodic memory: what happened, what I tried, and what changed. I turn reusable lessons into semantic memory: concepts, patterns, and technical references linked back to their sources.",
  },
  {
    title: "Context engineering & AI orchestration",
    description:
      "Before using AI, I gather the relevant code, schemas, requirements, and decisions. I break work into scoped tasks with clear file ownership, use project guides and codebase indexes to supply context, then iterate through implementation and verification.",
  },
  {
    title: "Verification & feedback loops",
    description:
      "I check generated code against the repository, review the diff, and run the relevant type, build, and test checks. I keep dated evidence separate from plans, then update decision records and postmortems so the next session starts with better context.",
  },
] as const;

export const resumeTimeline = [
  {
    period: "Sep 2026 — Present",
    title: "Full-stack Development Intern",
    organization:
      "Microgenesis Business Systems · Digital Innovation Solutions",
    description:
      "Building a Supply Chain Portal to replace legacy SharePoint lists. Contributing across React, Express, and PostgreSQL, with responsibility for authentication, automated checks, and release coordination.",
    type: "Experience",
  },
  {
    period: "2026 — Present",
    title: "Tech Lead, System Architect & DevOps Lead",
    organization: "Nutrimap · University thesis",
    description:
      "Coordinating architecture, API contracts, and deployment planning for an eight-person team building a nutrition-surveillance prototype.",
    type: "Thesis",
  },
  {
    period: "2024 — Present",
    title: "Board of Programmers Member",
    organization: "Junior Philippine Computer Society · QCU Chapter",
    description:
      "Plans programming-focused events and hands-on learning activities that help students build practical software-development skills.",
    type: "Leadership",
  },
  {
    period: "2023 — 2027",
    title: "Bachelor of Science in Computer Science",
    organization: "Quezon City University",
    description:
      "Developing a practical foundation across software engineering, data structures, systems, and collaborative product delivery.",
    type: "Education",
  },
  {
    period: "Nov 2024",
    title: "TON Hackers League Hackathon",
    organization: "Manila Bootcamp · Meridian Innovation Center",
    description:
      "Completed a three-day bootcamp and presented a working solution with The Bug team.",
    type: "Activity",
  },
] as const;

export const scholarshipActivities = [
  {
    period: "2023 — Present",
    title: "QC Scholarship Program",
    role: "Tertiary Scholar · QCYDO",
    detail: "Scholarship for Tertiary Students",
    href: "https://quezoncity.gov.ph/departments/quezon-city-youth-development-office/",
  },
  {
    period: "2023 — Present",
    title: "QC Youth Vanguards Program",
    role: "Youth Vanguard · QCYDO",
    detail: "Civic engagement, peacebuilding & volunteerism",
    href: "https://quezoncity.gov.ph/departments/quezon-city-youth-development-office/",
  },
] as const;
