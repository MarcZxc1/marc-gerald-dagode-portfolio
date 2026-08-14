export const profile = {
  name: "Marc Gerald Dagode",
  shortName: "Marc Dagode",
  handle: "MarcZxc1",
  role: "Full-stack developer",
  location: "Quezon City, Philippines",
  email: "dagodemarcgeraldarante@gmail.com",
  summary:
    "I'm a Computer Science student and full-stack developer interested in finding simpler ways to solve problems. I use AI in my workflow to test ideas and ship sooner, while keeping the code reliable and easy to maintain.",
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
      "1,763 peak weekly npm downloads",
      "423 GitHub clones from 131 unique cloners in 14 days",
      "Reusable presets for Supabase, Clerk, and traditional auth",
    ],
    stack: ["TypeScript", "Bun", "npm", "GitHub"],
    status: "Shipped",
    year: "2026",
    href: "https://github.com/MarcZxc1/qwykz",
    caseStudyHref: "/projects/qwykz",
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
    status: "In progress",
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
    stack: ["TypeScript", "React", "Express", "Python", "FastAPI", "PostgreSQL"],
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
    description: "The foundation I use to move between product interfaces, services, and data.",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "Bash (basic)"],
  },
  {
    title: "Frontend",
    description: "Accessible, responsive interfaces with a preference for simple systems.",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    description: "Secure APIs, application logic, validation, and hands-on endpoint testing.",
    skills: ["Bun", "Node.js", "FastAPI", "Bruno", "Postman", "Express", "Django", "REST APIs"],
  },
  {
    title: "Data",
    description: "Relational data modeling, geospatial workloads, caching, and type-safe access.",
    skills: ["PostgreSQL", "PostGIS", "Supabase", "Prisma", "Redis"],
  },
  {
    title: "Delivery",
    description: "Repeatable environments and feedback loops from local development to release.",
    skills: ["Git", "GitHub Actions", "Docker", "Linux", "Vercel", "Render"],
  },
  {
    title: "Quality",
    description: "Automated checks at the unit, integration, and browser levels.",
    skills: ["Jest", "Vitest", "Pytest", "Playwright", "Zod"],
  },
] as const;

export const resumeTimeline = [
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
