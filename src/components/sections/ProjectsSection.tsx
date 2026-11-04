"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { Project } from "@/types";
import { siteConfig } from "@/lib/site-config";
import {
  ExternalLink,
  Github,
  X,
  Layers,
  CheckCircle2,
  Cpu,
  ArrowRight,
  ShieldAlert,
  Share2,
  Globe,
  Sparkles,
} from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const categories = ["ALL", "AI & ML", "FULL-STACK", "WEB"];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "AI & ML") return p.category.includes("AI") || p.category.includes("ML");
    if (activeFilter === "FULL-STACK") return p.category.includes("Full-Stack") || p.category.includes("Social");
    if (activeFilter === "WEB") return p.category.includes("Web") || p.category.includes("Frontend");
    return true;
  });

  const getGlowConfig = (idx: number) => {
    switch (idx % 3) {
      case 0:
        return {
          glowBorder: "hover:border-pink-500/60 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]",
          badge: "bg-pink-950/70 text-pink-300 border-pink-500/40",
          accentText: "text-pink-400",
        };
      case 1:
        return {
          glowBorder: "hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]",
          badge: "bg-purple-950/70 text-purple-300 border-purple-500/40",
          accentText: "text-purple-400",
        };
      case 2:
      default:
        return {
          glowBorder: "hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]",
          badge: "bg-red-950/70 text-red-300 border-red-500/40",
          accentText: "text-red-400",
        };
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-pink-300 font-bold">
                ENGINEERED PORTFOLIO
              </span>
            </div>
            <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              SELECTED{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-400">
                DIGITAL WORK
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            {/* Filter pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-full font-display font-black text-xs uppercase tracking-wider transition-all duration-200 border ${
                    activeFilter === cat
                      ? "bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.5)] -translate-y-0.5"
                      : "bg-space-850/80 text-purple-200/80 border-purple-500/30 hover:text-white hover:border-pink-500/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-display font-black text-xs sm:text-sm text-pink-400 uppercase tracking-wider hover:text-pink-300 py-1 transition-colors"
            >
              <span>VIEW GITHUB</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, idx) => {
            const glow = getGlowConfig(idx);

            return (
              <div
                key={project.id}
                className="group flex flex-col justify-between"
              >
                {/* 3D Cosmic Glass Tile */}
                <div
                  className={`relative rounded-3xl bg-space-850/80 border border-purple-500/25 p-6 h-72 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-[1.02] ${glow.glowBorder} overflow-hidden cursor-pointer backdrop-blur-xl shadow-lg`}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Ambient corner light */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between z-10">
                    <span
                      className={`font-mono text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${glow.badge}`}
                    >
                      {project.category}
                    </span>
                    {project.status && (
                      <span className="font-display font-bold text-[10px] uppercase text-purple-300/80 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Center: Title & Tagline */}
                  <div className="my-auto z-10">
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white leading-tight uppercase mb-2 group-hover:text-pink-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-200/80 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Bottom: Tech tags & Action */}
                  <div className="z-10 pt-3 border-t border-purple-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] font-bold text-purple-300/90 bg-space-900/90 px-2 py-0.5 rounded-md border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="font-display font-black text-xs text-pink-400 uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      EXPLORE <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Subtitle / Role Bar */}
                <div className="mt-2.5 px-2 flex items-center justify-between text-xs text-purple-300/70">
                  <span className="font-mono text-[11px] font-medium truncate max-w-[190px]">
                    {project.role}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal with Cosmic Dark Glass */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-space-900 border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(236,72,153,0.3)] text-white max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl border border-purple-500/30 bg-space-800 text-purple-300 hover:text-white hover:border-pink-500 focus:outline-none transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-black uppercase text-pink-400 bg-pink-950/60 px-3 py-1 rounded-full border border-pink-500/30">
                {selectedProject.category}
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed mb-6 font-normal">
              {selectedProject.longDescription}
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-pink-400 mb-2.5">
                TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-space-800 border border-purple-500/30 text-xs font-mono font-bold text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-purple-400 mb-2.5">
                IMPLEMENTED ARCHITECTURE &amp; HIGHLIGHTS
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-purple-200/85">
                {selectedProject.features.implemented.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-purple-500/20">
              {selectedProject.liveDemo && (
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-display font-black text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:scale-105 active:scale-95 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>VIEW LIVE DEMO</span>
                </a>
              )}

              {selectedProject.repository && (
                <a
                  href={selectedProject.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-space-800 text-white border border-purple-500/30 font-display font-black text-xs uppercase tracking-wider hover:border-pink-500 hover:text-pink-300 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW SOURCE REPOSITORY</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
