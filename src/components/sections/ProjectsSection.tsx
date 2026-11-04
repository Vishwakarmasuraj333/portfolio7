"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { Project } from "@/types";
import { siteConfig } from "@/lib/site-config";
import {
  DoodlePurpleSquiggle,
  DoodleGreenSquiggle,
  DoodleStar,
} from "../ui/Doodles";
import { ArrowUpRight, ArrowRight, Github, ExternalLink, ShieldCheck, Sparkles, X } from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Selected 4 Featured Projects matching reference layout
  const featured = [
    {
      id: "intellitwin-ai",
      title: "INTELLITWIN AI",
      category: "Cybersecurity & ML Platform",
      tagline: "Proactive cybersecurity anomaly-detection platform with explainable ML predictions.",
      metric: "99.2% Accuracy",
      tech: ["Python", "FastAPI", "Next.js", "XGBoost", "PostgreSQL"],
      image: "/images/projects/intellitwin.jpg",
      bgGradient: "from-purple-900/60 to-pink-900/40",
      accent: "#CCFF00",
      github: "https://github.com/Vishwakarmasuraj333/IntelliTwin-AI",
    },
    {
      id: "nexora-social",
      title: "NEXORA SOCIAL",
      category: "Full-Stack Workflow Platform",
      tagline: "Social media management product concept with strict TypeScript backend & dashboard.",
      metric: "100% Strict TypeScript",
      tech: ["Next.js", "Node.js", "Express.js", "TypeScript", "Tailwind"],
      image: "/images/projects/nexora.jpg",
      bgGradient: "from-blue-900/60 to-purple-900/40",
      accent: "#38BDF8",
      github: "https://github.com/Vishwakarmasuraj333/-Nexora-Social",
    },
    {
      id: "pulsesocial",
      title: "PULSESOCIAL",
      category: "Multi-Channel Publishing Hub",
      tagline: "Centralized social media content publishing, queue scheduling, and platform connectivity.",
      metric: "Queue Scheduler",
      tech: ["Next.js", "React", "REST APIs", "Node.js", "TypeScript"],
      image: "/images/projects/seranking.jpg",
      bgGradient: "from-indigo-900/60 to-cyan-900/40",
      accent: "#FF90E8",
      github: "https://github.com/Vishwakarmasuraj333",
    },
    {
      id: "personal-portfolio",
      title: "PORTFOLIO 3D",
      category: "Interactive Web Showcase",
      tagline: "Responsive personal portfolio showcasing development skills, selected work, and 3D scenes.",
      metric: "Three.js & Canvas",
      tech: ["Next.js 14", "Three.js", "Tailwind CSS", "TypeScript", "Zod"],
      image: "/images/portfolio-launch.jpg",
      bgGradient: "from-pink-900/60 to-purple-900/40",
      accent: "#FFD52E",
      github: "https://github.com/Vishwakarmasuraj333/portfolio7",
    },
  ];

  return (
    <section id="projects" className="py-14 sm:py-20 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching reference image: "FEATURED PROJECTS ~" on left, "View All Projects ➔" on right */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12 gap-4">
          <div className="flex items-center gap-3">
            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
              FEATURED PROJECTS
            </h2>
            {/* Purple Wavy Squiggle ~ */}
            <DoodlePurpleSquiggle className="w-10 h-5 sm:w-14 sm:h-7 text-purple-400" />
          </div>

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-display font-black text-xs sm:text-sm text-pink-300 hover:text-white uppercase tracking-wider transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-pink-400 group-hover:text-white" />
          </a>
        </div>

        {/* 4 Cards Responsive Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {featured.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                const fullProj = projects.find((p) => p.id === item.id) || null;
                setSelectedProject(fullProj);
              }}
              className="group flex flex-col rounded-2xl sm:rounded-3xl bg-[#111322] border-2 border-white/10 hover:border-purple-500/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(168,85,247,0.25)] overflow-hidden cursor-pointer"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0514]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111322] via-transparent to-transparent opacity-80" />

                {/* Metric Badge Pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/75 border border-white/20 text-[10px] font-mono font-bold text-white backdrop-blur-md">
                    {item.metric}
                  </span>
                </div>
              </div>

              {/* Card Footer / Information Row */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-display font-black text-base sm:text-lg text-white group-hover:text-pink-400 transition-colors tracking-wide">
                      {item.title}
                    </h3>

                    {/* Top-Right Arrow Link ↗ */}
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white text-gray-300 transition-all group-hover:rotate-45 shadow-sm"
                      aria-label={`Open ${item.title} on GitHub`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs text-gray-400 font-medium">
                    {item.category}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-white/10">
                  {item.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-purple-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Playful Green Lightning Squiggle Doodle on Bottom Left (matches reference!) */}
        <div className="relative mt-6 -mb-4 hidden sm:block">
          <DoodleGreenSquiggle className="w-8 h-12 text-[#CCFF00] opacity-80" />
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-[#0D0F1D] border-2 border-purple-500/50 p-6 sm:p-8 shadow-[0_0_50px_rgba(168,85,247,0.4)] text-left text-white max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-xs font-mono font-bold text-pink-300 mb-3">
              {selectedProject.category}
            </span>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-gray-300 mb-5 leading-relaxed font-normal">
              {selectedProject.tagline}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 space-y-2">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#CCFF00]">
                Key Engineering Highlights
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-200">
                {(selectedProject.architectureHighlights || selectedProject.features?.implemented || []).map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <a
                href={selectedProject.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#CCFF00] text-[#0A0514] font-display font-black text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.4)]"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-display font-bold text-xs uppercase tracking-wider transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
