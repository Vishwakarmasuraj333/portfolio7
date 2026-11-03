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
        royal: {
          400: "#3D6EFA",
          500: "#2457F5",
          600: "#1749E8", // Primary royal blue
          700: "#0E38C4",
          800: "#0A2996",
          900: "#061A66",
        },
        electric: "#2457F5",
        doodleYellow: "#FFD52E",
        doodleRed: "#F43B2F",
        inkBlack: "#151515",
        softPaper: "#FFFDF7",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Fredoka", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        handwriting: ["var(--font-handwriting)", "Caveat", "Comic Sans MS", "cursive"],
      },
      boxShadow: {
        sticker: "3px 3px 0px #151515",
        "sticker-md": "5px 5px 0px #151515",
        "sticker-lg": "7px 7px 0px #151515",
        "sticker-hover": "1px 1px 0px #151515",
        "sticker-yellow": "4px 4px 0px #FFD52E",
        "sticker-blue": "4px 4px 0px #1749E8",
        "sticker-white": "4px 4px 0px #FFFFFF",
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        floatSubtle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseGently: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
        floatSubtle: "floatSubtle 4s ease-in-out infinite",
        pulseGently: "pulseGently 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
