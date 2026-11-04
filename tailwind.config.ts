import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: "#06030A", // Deepest cosmic void
          900: "#0A0514", // Main night space canvas
          850: "#100820", // Surface dark violet
          800: "#160C2C", // Card surface
          750: "#1E103B", // Elevated card
          700: "#27154D", // Border highlight
          600: "#381E6E",
        },
        neonPurple: {
          DEFAULT: "#A855F7",
          glow: "#9333EA",
          dark: "#7E22CE",
          light: "#C084FC",
        },
        neonPink: {
          DEFAULT: "#EC4899",
          glow: "#F43F5E",
          dark: "#BE185D",
          light: "#F472B6",
        },
        neonRed: {
          DEFAULT: "#EF4444",
          glow: "#E11D48",
          dark: "#B91C1C",
          light: "#F87171",
        },
        gold: {
          300: "#F5E8C7",
          400: "#E8D2A1",
          500: "#D6B477",
          600: "#B89354",
        },
        ivory: {
          100: "#FCFAF6",
          200: "#F7F1E8",
          300: "#EFE4D4",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Fredoka", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        handwriting: ["var(--font-handwriting)", "Caveat", "Comic Sans MS", "cursive"],
      },
      boxShadow: {
        "purple-glow": "0 0 25px -4px rgba(168, 85, 247, 0.45)",
        "pink-glow": "0 0 25px -4px rgba(236, 72, 153, 0.45)",
        "red-glow": "0 0 25px -4px rgba(239, 68, 68, 0.45)",
        "cosmic-card": "0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 20px -2px rgba(168, 85, 247, 0.15)",
        "cosmic-card-hover": "0 20px 40px -10px rgba(0, 0, 0, 0.9), 0 0 30px 2px rgba(236, 72, 153, 0.3)",
      },
      backgroundImage: {
        "cosmic-gradient": "linear-gradient(135deg, #EF4444 0%, #EC4899 50%, #A855F7 100%)",
        "purple-pink-gradient": "linear-gradient(135deg, #A855F7 0%, #EC4899 100%)",
        "red-purple-gradient": "linear-gradient(135deg, #EF4444 0%, #9333EA 100%)",
        "night-gradient": "radial-gradient(ellipse at top, #1A0E2E 0%, #0A0514 60%, #06030A 100%)",
      },
      animation: {
        floatSubtle: "floatSubtle 4s ease-in-out infinite",
        pulseGently: "pulseGently 3s ease-in-out infinite",
        spinSlow: "spin 20s linear infinite",
      },
      keyframes: {
        floatSubtle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGently: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.03)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
