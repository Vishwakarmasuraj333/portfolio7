export interface ProcessStep {
  number: string;
  step: string;
  title: string;
  color: "blue" | "red" | "yellow";
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  description: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    step: "DISCOVER",
    title: "Requirements & Scope",
    color: "blue",
    badgeBg: "bg-[#1749E8]",
    badgeText: "text-white",
    borderColor: "border-[#1749E8]",
    description: "Understand the requirements, users, and problem.",
    details: [
      "Analyze business requirements and target user personas",
      "Define project scope, performance constraints, and deliverables",
      "Map out information architecture and key user journeys",
    ],
  },
  {
    number: "02",
    step: "PLAN",
    title: "Architecture & Contracts",
    color: "red",
    badgeBg: "bg-[#F43B2F]",
    badgeText: "text-white",
    borderColor: "border-[#F43B2F]",
    description: "Design the architecture, database schema, API contracts, and UI structure.",
    details: [
      "Design database entity relationships and indexing strategies",
      "Establish strict RESTful API contracts with typed schemas",
      "Wireframe responsive UI views and component hierarchy",
    ],
  },
  {
    number: "03",
    step: "BUILD",
    title: "Engineering & Logic",
    color: "yellow",
    badgeBg: "bg-[#FFD52E]",
    badgeText: "text-[#151515]",
    borderColor: "border-[#FFD52E]",
    description: "Implement the frontend, backend, integrations, and data models.",
    details: [
      "Code clean, modular React / Next.js component systems",
      "Build resilient Node.js / Express or FastAPI backend routes",
      "Implement data validation, database queries, and 3rd-party services",
    ],
  },
  {
    number: "04",
    step: "TEST",
    title: "Verification & QA",
    color: "blue",
    badgeBg: "bg-[#1749E8]",
    badgeText: "text-white",
    borderColor: "border-[#1749E8]",
    description: "Validate behavior, responsive layouts, accessibility, security, and edge cases.",
    details: [
      "Test responsive layouts across mobile, tablet, and widescreen",
      "Validate input sanitization, security guards, and error states",
      "Check keyboard accessibility, ARIA labels, and contrast",
    ],
  },
  {
    number: "05",
    step: "DEPLOY",
    title: "Production & Monitoring",
    color: "red",
    badgeBg: "bg-[#F43B2F]",
    badgeText: "text-white",
    borderColor: "border-[#F43B2F]",
    description: "Configure environments, deploy the application, verify production behavior, and maintain it.",
    details: [
      "Configure production environment variables and security headers",
      "Deploy to cloud infrastructure (Vercel, Node servers)",
      "Audit live performance, verify APIs, and continuously maintain",
    ],
  },
];
