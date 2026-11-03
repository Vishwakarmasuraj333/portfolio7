export interface ServiceCardItem {
  id: string;
  title: string;
  category: string;
  color: "yellow" | "red" | "blue" | "accent";
  bgClass: string;
  borderClass: string;
  textClass: string;
  iconBgClass: string;
  badge: string;
  description: string;
  skills: string[];
  features: string[];
}

export const servicesData: ServiceCardItem[] = [
  {
    id: "frontend-dev",
    title: "FRONTEND DEVELOPMENT",
    category: "CARD 1",
    color: "yellow",
    bgClass: "bg-[#FFD52E] text-[#151515]",
    borderClass: "border-2 border-[#151515]",
    textClass: "text-[#151515]",
    iconBgClass: "bg-white text-[#151515]",
    badge: "UI / UX & Web",
    description: "Crafting fast, responsive, and accessible user interfaces that feel delightful and effortless on any device.",
    skills: ["HTML5, CSS3, JavaScript", "React.js & Next.js", "Responsive layouts", "Accessibility & reusable components"],
    features: [
      "Semantic HTML5 & modern CSS3 flex/grid systems",
      "Interactive components with React & Next.js App Router",
      "Fluid responsive scaling from 320px mobile to 4K displays",
      "WCAG accessibility standards and clean reusable design systems",
    ],
  },
  {
    id: "backend-dev",
    title: "BACKEND DEVELOPMENT",
    category: "CARD 2",
    color: "red",
    bgClass: "bg-[#F43B2F] text-white",
    borderClass: "border-2 border-[#151515]",
    textClass: "text-white",
    iconBgClass: "bg-white text-[#F43B2F]",
    badge: "APIs & Logic",
    description: "Architecting resilient, performant server logic, secure endpoints, and scalable microservices.",
    skills: ["Node.js & Express.js", "REST API development", "Authentication & authorization", "Input validation & error handling"],
    features: [
      "Robust RESTful API design with clean endpoints and JSON formatting",
      "Authentication flows with JWT tokens and authorization guards",
      "Defensive server-side request sanitization & Zod schemas",
      "Structured error handling, logging, and rate limiting",
    ],
  },
  {
    id: "database-integration",
    title: "DATABASE & INTEGRATION",
    category: "CARD 3",
    color: "blue",
    bgClass: "bg-[#1749E8] text-white",
    borderClass: "border-2 border-[#151515]",
    textClass: "text-white",
    iconBgClass: "bg-white text-[#1749E8]",
    badge: "Data & Pipelines",
    description: "Structuring persistent relational and NoSQL databases with smooth third-party API connectivity.",
    skills: ["MongoDB & MySQL", "CRUD operations", "Database relationships & queries", "Third-party API integration"],
    features: [
      "NoSQL schema design with MongoDB & Mongoose schemas",
      "Relational table design, indexing, and joins with MySQL",
      "Comprehensive Postman API collection testing and documentation",
      "Third-party integrations with payment, telemetry, and social APIs",
    ],
  },
  {
    id: "fullstack-ai",
    title: "FULL-STACK & AI PROJECTS",
    category: "CARD 4",
    color: "accent",
    bgClass: "bg-[#FFD52E] text-[#151515]",
    borderClass: "border-2 border-[#151515]",
    textClass: "text-[#151515]",
    iconBgClass: "bg-white text-[#151515]",
    badge: "End-to-End & ML",
    description: "Delivering complete end-to-end applications from database models to frontends, exploring modern AI/ML.",
    skills: ["End-to-end application development", "Python & FastAPI", "AI/ML experimentation", "Testing, deployment & debugging"],
    features: [
      "Full-stack product lifecycles from architecture to production",
      "High-throughput asynchronous Python microservices with FastAPI",
      "Machine learning workflow integrations (XGBoost, SHAP, AI APIs)",
      "Automated test verification, Vercel deployments, and debugging",
    ],
  },
];
