export interface PrincipleItem {
  id: string;
  quote: string;
  principle: string;
  category: string;
  bulletPoints: string[];
}

export const approachPrinciples: PrincipleItem[] = [
  {
    id: "clean-code",
    principle: "Write Maintainable Code",
    category: "Architecture & Standards",
    quote:
      "I prioritize clean code, modular components, strict typing, and meaningful structure so codebases stay agile and easy to extend.",
    bulletPoints: [
      "Consistent file structure and atomic component separation",
      "TypeScript type safety preventing runtime bugs",
      "Self-documenting variable and function naming",
      "Low technical debt through disciplined refactoring",
    ],
  },
  {
    id: "responsive-first",
    principle: "Build for Mobile & Desktop",
    category: "User Experience & Ergonomics",
    quote:
      "Every web application must feel natural on smartphones, fluid on tablets, and expansive on ultra-wide screens with zero layout shifts.",
    bulletPoints: [
      "Mobile-first responsive grids with flexible viewports",
      "Touch-friendly tap targets and intuitive mobile navigation",
      "Strict layout shift prevention (zero CLS)",
      "High-contrast, accessible typography across all screen resolutions",
    ],
  },
  {
    id: "real-validation",
    principle: "Validate Real Application Behavior",
    category: "Data Integrity & Resilience",
    quote:
      "Graceful error handling, defensive server-side validation, and real testing matter more than flashy superficial animations.",
    bulletPoints: [
      "Zod schema validation on both frontend forms and backend APIs",
      "Defensive sanitization against script injections and spam",
      "Informative UI error states and feedback for every network interaction",
      "Reliable database transactions and predictable data flow",
    ],
  },
];
