"use client";

import React, { useState } from "react";
import {
  DoodlePurpleRibbon,
  DoodleStar,
} from "../ui/Doodles";
import { Sparkles } from "lucide-react";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<"ALL" | "FRONTEND" | "BACKEND" | "DATABASES" | "TOOLS">("ALL");

  const coreSkills = [
    {
      id: "react",
      name: "React.js",
      category: "FRONTEND",
      color: "#06B6D4",
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#06B6D4" strokeWidth="1.8" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#06B6D4" strokeWidth="1.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#06B6D4" strokeWidth="1.8" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2.2" fill="#06B6D4" />
        </svg>
      ),
    },
    {
      id: "nextjs",
      name: "Next.js 14",
      category: "FRONTEND",
      color: "#FFFFFF",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-black border border-white/20 flex items-center justify-center font-display font-black text-white text-base shadow-sm">
          N
        </div>
      ),
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "FRONTEND",
      color: "#3178C6",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-[#3178C6] flex items-center justify-center font-mono font-black text-white text-sm shadow-sm">
          TS
        </div>
      ),
    },
    {
      id: "nodejs",
      name: "Node.js",
      category: "BACKEND",
      color: "#22C55E",
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#22C55E">
          <path d="M12 2L2 7.8v11.4L12 25l10-5.8V7.8L12 2zm0 2.3l7.9 4.6v9.2L12 22.7l-7.9-4.6V8.9L12 4.3z" />
          <circle cx="12" cy="13.5" r="3" fill="#22C55E" />
        </svg>
      ),
    },
    {
      id: "python",
      name: "Python",
      category: "BACKEND",
      color: "#FFD52E",
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none">
          <path
            d="M11.9 2C8.7 2 6.8 3.4 6.8 5.7V8h5.3v.8H5.2C2.9 8.8 1 10.7 1 13.8c0 3.2 2 4.9 5.2 4.9h1.7v-2.4c0-2.3 2-4.2 4.3-4.2h5.3v-.8h-5.3c-.9 0-1.6-.7-1.6-1.6V5.7c0-.9.7-1.6 1.6-1.6h5.3C18.4 4.1 19 4.8 19 5.7v1.6h1.7c2.3 0 4.2-1.9 4.2-4.2 0-3.1-2-5.1-5.2-5.1H11.9z"
            fill="#38BDF8"
          />
          <path
            d="M12.1 22c3.2 0 5.1-1.4 5.1-3.7v-2.3h-5.3v-.8h6.9c2.3 0 4.2-1.9 4.2-5 0-3.2-2-4.9-5.2-4.9h-1.7v2.4c0 2.3-2 4.2-4.3 4.2H6.5v.8h5.3c.9 0 1.6.7 1.6 1.6v4.6c0 .9-.7 1.6-1.6 1.6H6.5c-.9 0-1.5-.7-1.5-1.6v-1.6H3.3c-2.3 0-4.2 1.9-4.2 4.2 0 3.1 2 5.1 5.2 5.1h7.8z"
            fill="#FFD52E"
          />
        </svg>
      ),
    },
    {
      id: "fastapi",
      name: "FastAPI",
      category: "BACKEND",
      color: "#059669",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-[#059669] flex items-center justify-center text-white shadow-sm">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M12 2L3 14h7v8l9-12h-7z" />
          </svg>
        </div>
      ),
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "DATABASES",
      color: "#38BDF8",
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#38BDF8">
          <path d="M12 3C7 3 3 6.5 3 11c0 3.2 2.1 6 5.2 7.2l-.2 2.8 3.5-1.8c.2 0 .3.1.5.1 5 0 9-3.5 9-8s-4-8-9-8zm0 13c-3.9 0-7-2.7-7-6s3.1-6 7-6 7 2.7 7 6-3.1 6-7 6z" />
        </svg>
      ),
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "FRONTEND",
      color: "#06B6D4",
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#06B6D4">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      ),
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "DATABASES",
      color: "#10B981",
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#10B981">
          <path d="M12 2C11.5 3 7 7.5 7 13.5c0 4.2 2.8 7.5 5 8.5 2.2-1 5-4.3 5-8.5C17 7.5 12.5 3 12 2zm0 18c-1.5-.7-3-3.2-3-6.5 0-4.2 2.4-7.2 3-8 .6.8 3 3.8 3 8 0 3.3-1.5 5.8-3 6.5z" />
        </svg>
      ),
    },
    {
      id: "git",
      name: "Git & GitHub",
      category: "TOOLS",
      color: "#F05032",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-[#F05032] flex items-center justify-center font-display font-black text-white text-base shadow-sm">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
          </svg>
        </div>
      ),
    },
  ];

  const filtered = activeCategory === "ALL" ? coreSkills : coreSkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-14 sm:py-20 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching reference: "SKILLS" with hand-drawn squiggle underline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="flex flex-col items-start">
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
              SKILLS
            </h2>
            {/* Hand-drawn underline squiggle */}
            <svg viewBox="0 0 100 12" className="w-24 sm:w-32 h-3 text-[#CCFF00] -mt-1">
              <path d="M2 8 C25 2, 50 12, 75 4 C85 2, 95 8, 98 6" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {(["ALL", "FRONTEND", "BACKEND", "DATABASES", "TOOLS"] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-[#CCFF00] text-[#0A0514] font-black border-[#CCFF00] shadow-[0_0_12px_rgba(204,255,0,0.5)] -translate-y-0.5"
                    : "bg-[#111322] text-gray-300 border-white/10 hover:border-purple-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Squircle App Icons Grid matching reference image */}
        <div className="relative">
          {/* Looped Purple Ribbon Doodle on Right Edge (matches reference image!) */}
          <div className="absolute -top-8 -right-4 sm:-right-8 hidden md:block pointer-events-none z-20">
            <DoodlePurpleRibbon className="w-16 h-16 text-purple-400 opacity-80" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {filtered.map((skill) => (
              <div
                key={skill.id}
                className="group flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#111322] border-2 border-white/10 hover:border-purple-500/70 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center"
              >
                {/* Icon Squircle Box */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#090A13] border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3 className="font-display font-black text-xs sm:text-sm text-white group-hover:text-[#CCFF00] transition-colors tracking-wide">
                  {skill.name}
                </h3>
                <span className="text-[10px] text-gray-400 font-mono mt-0.5 uppercase tracking-wider">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
