"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { Project } from "@/types";
import { siteConfig } from "@/lib/site-config";
import {
  DoodleStar,
  DoodlePaperAirplane,
  DoodleLightning,
} from "../ui/Doodles";
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

  const getCardTileStyle = (index: number) => {
    switch (index % 4) {
      case 0:
        return {
          bg: "bg-[#FFD52E] text-[#151515]",
          border: "border-2 border-[#151515]",
          badgeBg: "bg-[#151515] text-[#FFD52E]",
          accent: "#151515",
          titleColor: "text-[#151515]",
        };
      case 1:
        return {
          bg: "bg-[#FFF0F4] text-[#151515]",
          border: "border-2 border-[#151515]",
          badgeBg: "bg-[#F43B2F] text-white",
          accent: "#F43B2F",
          titleColor: "text-[#151515]",
        };
      case 2:
        return {
          bg: "bg-[#1749E8] text-white",
          border: "border-2 border-[#151515]",
          badgeBg: "bg-white text-[#1749E8]",
          accent: "#FFFFFF",
          titleColor: "text-white",
        };
      case 3:
      default:
        return {
          bg: "bg-[#F43B2F] text-white",
          border: "border-2 border-[#151515]",
          badgeBg: "bg-[#151515] text-white",
          accent: "#FFD52E",
          titleColor: "text-white",
        };
    }
  };

  return (
    <section id="projects" className="py-14 sm:py-20 md:py-24 bg-[#FFFDF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with "SELECTED DIGITAL WORK" & View GitHub */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-handwriting font-bold text-lg sm:text-xl text-[#F43B2F] tracking-wider uppercase">
                Featured Engineering
              </span>
              <DoodleStar className="w-5 h-5 text-[#151515]" />
            </div>
            <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#151515] tracking-tight uppercase">
              SELECTED DIGITAL WORK
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            {/* Filter pills with tactile hover */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 rounded-full font-display font-black text-xs uppercase tracking-wider transition-all duration-200 border-2 ${
                    activeFilter === cat
                      ? "bg-[#151515] text-white border-[#151515] shadow-sticker-hover -translate-y-0.5"
                      : "bg-white text-[#151515] border-[#151515] hover:bg-slate-100 hover:-translate-y-0.5"
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
              className="group inline-flex items-center gap-1.5 font-display font-black text-xs sm:text-sm text-[#1749E8] uppercase tracking-wider hover:underline py-1"
            >
              <span>VIEW GITHUB</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, idx) => {
            const style = getCardTileStyle(idx);

            return (
              <div
                key={project.id}
                className="group flex flex-col justify-between"
              >
                {/* Colorful Sticker Project Tile with Springy Hover */}
                <div
                  className={`relative rounded-3xl ${style.bg} ${style.border} shadow-sticker-md p-6 h-64 sm:h-72 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-[0.6deg] group-hover:shadow-sticker-lg overflow-hidden cursor-pointer`}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between z-10">
                    <span
                      className={`font-mono text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${style.badgeBg}`}
                    >
                      {project.category}
                    </span>
                    {project.status && (
                      <span className="font-display font-bold text-[10px] uppercase opacity-85">
                        ● {project.status}
                      </span>
                    )}
                  </div>

                  {/* Middle Big Playful Typography Graphic */}
                  <div className="my-auto z-10">
                    <h3
                      className={`font-display font-black text-2xl sm:text-3xl leading-tight uppercase tracking-tight group-hover:scale-[1.02] transition-transform origin-left ${style.titleColor}`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold opacity-90 mt-1.5 line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Bottom Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-black/10 z-10">
                    {project.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-black/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Decorative background doodle per card */}
                  {idx === 2 && (
                    <div className="absolute -bottom-2 -right-2 opacity-30 pointer-events-none group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
                      <DoodlePaperAirplane className="w-24 h-24 text-white" />
                    </div>
                  )}
                  {idx === 0 && (
                    <div className="absolute -top-4 -right-4 opacity-25 pointer-events-none group-hover:rotate-45 transition-transform duration-300">
                      <DoodleStar className="w-20 h-20 text-[#151515]" />
                    </div>
                  )}
                </div>

                {/* Information Underneath the Card */}
                <div className="pt-3 px-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-black text-sm uppercase text-[#151515]">
                        {project.title}
                      </h4>
                      <p className="text-xs font-medium text-[#64748B]">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2">
                      {project.repository && (
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg border border-[#151515] bg-white text-[#151515] hover:bg-[#151515] hover:text-white hover:-translate-y-0.5 hover:shadow-sticker-hover active:translate-x-0.5 transition-all"
                          title="Source Code"
                          aria-label={`Source code for ${project.title}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg border border-[#151515] bg-[#FFD52E] text-[#151515] hover:bg-[#151515] hover:text-[#FFD52E] hover:-translate-y-0.5 hover:shadow-sticker-hover active:translate-x-0.5 transition-all"
                          title="Live Demo"
                          aria-label={`Live demo for ${project.title}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-display font-black text-[#1749E8] underline hover:text-[#0E38C4] py-1"
                      >
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] bg-[#FFFDF7] text-[#151515] rounded-3xl border-4 border-[#151515] shadow-sticker-lg p-5 sm:p-8 overflow-y-auto animate-in zoom-in-95 duration-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b-2 border-[#151515] mb-5">
              <div>
                <span className="font-mono text-xs font-bold text-[#1749E8] uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#151515] uppercase tracking-wide mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] font-medium">
                  {selectedProject.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-1.5 sm:p-2 rounded-xl border-2 border-[#151515] bg-white text-[#151515] shadow-sticker hover:bg-slate-100"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-[#334155] font-medium leading-relaxed mb-6">
              {selectedProject.longDescription}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#151515] mb-2.5">
                Verified Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {selectedProject.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-white border border-[#151515] shadow-sticker-hover text-[#151515]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Implementation Highlights */}
            {selectedProject.features?.implemented && (
              <div className="mb-6">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#151515] mb-2.5">
                  Core Implementation &amp; Capabilities:
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.implemented.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture Highlights */}
            {selectedProject.architectureHighlights && (
              <div className="mb-6 bg-[#EEF2FF] border-2 border-[#1749E8] rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2 text-[#1749E8] font-display font-bold text-xs uppercase">
                  <Cpu className="w-4 h-4" />
                  <span>Architecture Overview</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#1E3A8A] font-medium">
                  {selectedProject.architectureHighlights.map((arch, aIdx) => (
                    <li key={aIdx}>• {arch}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer Actions */}
            <div className="pt-5 border-t-2 border-[#151515] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                {selectedProject.repository && (
                  <a
                    href={selectedProject.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#151515] text-white font-display font-bold text-xs uppercase tracking-wider hover:bg-black hover:shadow-sticker-hover hover:-translate-y-0.5 active:translate-x-0.5 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>SOURCE CODE</span>
                  </a>
                )}
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1749E8] text-white font-display font-bold text-xs uppercase tracking-wider hover:bg-[#0E38C4] hover:shadow-sticker-hover hover:-translate-y-0.5 active:translate-x-0.5 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LIVE DEMO</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full bg-[#FFD52E] text-[#151515] border-2 border-[#151515] shadow-sticker font-display font-black text-xs uppercase tracking-wider hover:shadow-sticker-hover active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
