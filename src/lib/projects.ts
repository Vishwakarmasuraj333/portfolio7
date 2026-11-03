import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "intellitwin-ai",
    title: "IntelliTwin AI",
    subtitle: "Cybersecurity Anomaly Detection & ML Platform",
    category: "AI / ML / Cybersecurity",
    tagline: "Proactive cybersecurity anomaly-detection platform with explainable ML predictions.",
    description:
      "A cybersecurity anomaly-detection project exploring machine-learning-based traffic analysis, explainability, and prediction workflows.",
    longDescription:
      "IntelliTwin AI investigates telemetry-driven cybersecurity anomaly detection. Engineered with an asynchronous Python FastAPI service and a Next.js web interface, it analyzes real-time network traffic patterns using XGBoost classification and SHAP (SHapley Additive exPlanations) for transparent model interpretability.",
    technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "XGBoost", "SHAP", "Tailwind CSS"],
    features: {
      implemented: [
        "FastAPI REST endpoints for asynchronous network packet telemetry ingestion",
        "XGBoost classification model trained on cybersecurity anomaly signatures",
        "SHAP value calculations revealing top contributing threat features per prediction",
        "Structured PostgreSQL storage for auditable historical incident logs",
        "Interactive Next.js dashboard with responsive incident timelines and threat levels",
      ],
      planned: [
        "Automated continuous model retraining pipeline with incoming labeled telemetry",
        "WebSocket streaming connection for millisecond-latency security alerts",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333/IntelliTwin-AI",
    liveDemo: undefined,
    architectureHighlights: [
      "Microservice split: Next.js frontend with decoupled FastAPI ML inference worker",
      "Model explainability layer translating SHAP tensors into human-readable security insights",
      "Robust relational database schema ensuring auditability across all detected incidents",
    ],
    role: "Full-Stack & ML Integration Developer",
    status: "Active",
    pastelTheme: "yellow",
    stats: {
      metric: "99.2%",
      label: "Model Accuracy",
    },
  },
  {
    id: "pulsesocial",
    title: "PulseSocial",
    subtitle: "Social Media Workflow & Multi-Channel Publishing Hub",
    category: "Social Media Management",
    tagline: "Centralized social media content publishing, queue scheduling, and platform connectivity.",
    description:
      "A social-media management application focused on content workflows, publishing integrations, analytics, and platform connectivity.",
    longDescription:
      "PulseSocial eliminates fragmented social workflows by bringing drafting, scheduling, publishing queue management, and high-level audience analytics into a unified web workspace. Engineered using Next.js and React with a robust REST API client.",
    technologies: ["Next.js", "React", "REST APIs", "Tailwind CSS", "TypeScript", "Node.js"],
    features: {
      implemented: [
        "Unified post composition editor supporting text, media attachments, and platform tags",
        "Visual queue calendar allowing drag-and-drop scheduling across publishing windows",
        "Multi-account workspace switcher supporting cross-channel team management",
        "Real-time post status tracking: Draft, Queued, Publishing, Published, and Failed",
        "Responsive, mobile-optimized dashboard for on-the-go publishing approvals",
      ],
      planned: [
        "AI caption generator and hashtag recommendation engine",
        "Direct OAuth2 connection integrations for LinkedIn, X (Twitter), and Instagram",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333",
    liveDemo: undefined,
    architectureHighlights: [
      "Modular connector abstraction for extensible platform publishing providers",
      "Optimistic UI updates delivering instantaneous scheduling feedback without blocking",
      "Strict client-side and server-side media validation ensuring compliant upload dimensions",
    ],
    role: "Full-Stack Developer",
    status: "Active",
    pastelTheme: "pink",
    stats: {
      metric: "Multi-Channel",
      label: "Unified Publishing",
    },
  },
  {
    id: "nexora-social",
    title: "Nexora Social",
    subtitle: "Full-Stack Social Workflow & Content Platform",
    category: "Full-Stack Web Application",
    tagline: "Social media management product concept emphasizing a polished dashboard and extensible architecture.",
    description:
      "A social-media management product concept emphasizing a polished dashboard, content management, and extensible application architecture.",
    longDescription:
      "Nexora Social is a full-stack social media management application crafted with Next.js, React, Node.js, and TypeScript. It features an intuitive multi-column dashboard, role-aware posting permissions, content draft iterations, and performant REST API backends.",
    technologies: ["Next.js", "React", "Node.js", "Express.js", "Tailwind CSS", "TypeScript", "REST APIs"],
    features: {
      implemented: [
        "Polished administrative dashboard with dark and light visual aesthetics",
        "Cross-channel content composition with instant responsive previews",
        "Secure RESTful API backend handling post scheduling and draft persistence",
        "Role-based permission checks for team collaborators and reviewers",
        "Mobile-first responsive layout tested across smartphone and tablet viewports",
      ],
      planned: [
        "Scheduled post automation worker using Redis and BullMQ queues",
        "Aggregated engagement metrics and click-through analytics visualizations",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333/-Nexora-Social",
    liveDemo: undefined,
    architectureHighlights: [
      "Decoupled backend API architecture structured for high extensibility and maintainability",
      "Type-safe data contracts shared across client forms and server endpoints",
      "Optimized Next.js bundle sizing with dynamic imports for heavy modal components",
    ],
    role: "Full-Stack Developer",
    status: "Completed",
    pastelTheme: "blue",
    stats: {
      metric: "100%",
      label: "TypeScript Strict Mode",
    },
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    subtitle: "Responsive Hand-Crafted Developer Showcase",
    category: "Web Development",
    tagline: "Responsive personal portfolio showcasing development skills, selected work, learning, and contact.",
    description:
      "A responsive personal portfolio showcasing development skills, selected work, learning, and contact information.",
    longDescription:
      "A production-grade, highly responsive developer portfolio inspired by bold hand-crafted editorial design. Featuring custom SVG doodles, oversized typography, sticker-like project tiles, validated contact submissions with anti-spam protection, and complete accessibility.",
    technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zod"],
    features: {
      implemented: [
        "Playful hand-crafted design with custom sticker cards and doodle annotations",
        "100% mobile, tablet, and desktop responsive layouts with zero horizontal scroll",
        "Server-side validated contact form with honeypot anti-spam and file persistence",
        "Interactive project modals, architecture details, and verified GitHub links",
        "Comprehensive keyboard navigation, ARIA labels, and WCAG accessibility compliance",
      ],
      planned: [
        "Interactive terminal playground for testing API endpoints live in browser",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333/portfolio6",
    liveDemo: "https://suraj-portfolio5.vercel.app",
    architectureHighlights: [
      "Next.js App Router static optimization for ultra-fast First Contentful Paint",
      "Custom doodle SVG library with lightweight CSS micro-animations",
      "Zod schema validation shared between client-side React Hook Form and API route",
    ],
    role: "Full-Stack Developer & Designer",
    status: "Completed",
    pastelTheme: "pink",
    stats: {
      metric: "100%",
      label: "Responsive & Accessible",
    },
  },
  {
    id: "se-ranking",
    title: "SE Ranking Research Studio",
    subtitle: "Keyword Intelligence & SERP Analytics Hub",
    category: "Developer Tools",
    tagline: "Real-time search engine rank monitoring, keyword metrics, and competitor insights.",
    description:
      "An SEO research and analytics studio that tracks SERP positions, analyzes keyword difficulty, and generates actionable competitive reports.",
    longDescription:
      "Engineered for SEO analysts and frontend developers, SE Ranking Research Studio automates position tracking, keyword gap calculations, and SERP visibility trends using clean data visualizations and modular components.",
    technologies: ["React", "Next.js", "Tailwind CSS", "REST APIs", "Node.js", "TypeScript"],
    features: {
      implemented: [
        "Real-time SERP position tracking across desktop and mobile crawler user agents",
        "Competitor keyword gap analysis dashboard with instant search filtering",
        "Modular card components presenting volume, difficulty, and ranking movement",
        "Defensive error handling for live API rate-limits and network dropouts",
      ],
    },
    repository: "https://github.com/MamtaYdvTech1/SE-Ranking",
    liveDemo: undefined,
    architectureHighlights: [
      "Client-side caching layer preventing redundant API calls and optimizing quota",
      "Modular card component architecture ready for rapid layout refactoring",
    ],
    role: "Frontend Engineer",
    status: "Completed",
    pastelTheme: "green",
    stats: {
      metric: "Live API",
      label: "Real-time SERP Data",
    },
  },
];
