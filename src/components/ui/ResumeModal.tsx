"use client";

import React, { useEffect } from "react";
import {
  X,
  Download,
  CheckCircle2,
  GraduationCap,
  Award,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  FolderGit2,
  Printer,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { certifications } from "@/lib/skills";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FFFDF7] border-4 border-[#151515] rounded-3xl p-6 sm:p-8 shadow-sticker-lg text-[#151515] max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close resume preview"
          className="absolute top-5 right-5 p-2 rounded-xl border-2 border-[#151515] bg-white text-[#151515] shadow-sticker hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b-2 border-[#151515] pr-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#1749E8] text-[#1749E8] text-xs font-bold mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Verified Developer Profile
            </div>
            <h2 id="resume-modal-title" className="text-2xl sm:text-3xl font-display font-black text-[#151515] uppercase tracking-wide">
              Suraj Vishwakarma
            </h2>
            <p className="text-sm font-bold text-[#1749E8] mt-0.5">
              Full-Stack Developer • Abhinav College, Bhayandar
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/resume.pdf"
              download="Suraj_Vishwakarma_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1749E8] text-white font-display font-bold text-xs uppercase tracking-wider shadow-sticker hover:bg-[#0E38C4] transition-all"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white text-[#151515] border border-[#151515] font-display font-bold text-xs uppercase tracking-wider shadow-sticker-hover transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> View PDF
            </a>
            <button
              onClick={handlePrint}
              type="button"
              className="p-2 rounded-xl border border-[#151515] bg-white hover:bg-slate-100 text-[#151515]"
              aria-label="Print resume"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6 text-sm">
          {/* Contact summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4 rounded-2xl bg-white border-2 border-[#151515] text-xs text-[#334155]">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#1749E8] shrink-0" />
              <a href={siteConfig.links.email} className="truncate hover:text-[#1749E8] font-bold text-[#151515]">
                {siteConfig.links.rawEmail}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-[#1749E8] shrink-0" />
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#1749E8] hover:underline font-bold"
              >
                GitHub: {siteConfig.links.githubUsername}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-[#1749E8] shrink-0" />
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[#1749E8] hover:underline font-bold"
              >
                LinkedIn: {siteConfig.links.linkedinSlug}
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="p-4 rounded-2xl bg-[#EEF2FF] border-2 border-[#1749E8]">
            <h3 className="font-display font-black text-xs uppercase tracking-wider text-[#1749E8] mb-1.5">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-[#1E3A8A] leading-relaxed font-medium">
              {siteConfig.description}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-display font-black text-base text-[#151515] uppercase tracking-wide mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#1749E8]" /> Academic Education
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl border-2 border-[#151515] bg-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#151515]">
                      M.Sc. Information Technology (Master of Science)
                    </h4>
                    <p className="text-[#64748B]">Abhinav College, Bhayandar</p>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#1749E8] bg-[#EEF2FF] px-2 py-0.5 rounded">
                    Currently Pursuing (2025 — Present)
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl border-2 border-[#151515] bg-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#151515]">
                      B.Sc. Information Technology (Bachelor of Science)
                    </h4>
                    <p className="text-[#64748B]">Abhinav College, Bhayandar</p>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#10B981] bg-[#ECFDF5] px-2 py-0.5 rounded">
                    Graduated in 2025
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-display font-black text-base text-[#151515] uppercase tracking-wide mb-3 flex items-center gap-2">
              Technical Stack &amp; Skills
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-[#151515] min-w-24">Frontend:</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#FFD52E] text-[#151515] font-bold border border-[#151515]">HTML5</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#FFD52E] text-[#151515] font-bold border border-[#151515]">CSS3</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#FFD52E] text-[#151515] font-bold border border-[#151515]">JavaScript (ES6+)</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#FFD52E] text-[#151515] font-bold border border-[#151515]">React.js</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#FFD52E] text-[#151515] font-bold border border-[#151515]">Next.js</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#FFD52E] text-[#151515] font-bold border border-[#151515]">Tailwind CSS</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-[#151515] min-w-24">Backend &amp; DB:</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#1749E8] text-white font-bold border border-[#151515]">Node.js</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#1749E8] text-white font-bold border border-[#151515]">Express.js</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#1749E8] text-white font-bold border border-[#151515]">REST APIs</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#1749E8] text-white font-bold border border-[#151515]">MongoDB</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#1749E8] text-white font-bold border border-[#151515]">MySQL</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-[#151515] min-w-24">Tools &amp; AI:</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#F43B2F] text-white font-bold border border-[#151515]">Git &amp; GitHub</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#F43B2F] text-white font-bold border border-[#151515]">Postman</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#F43B2F] text-white font-bold border border-[#151515]">Python</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#F43B2F] text-white font-bold border border-[#151515]">FastAPI</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#F43B2F] text-white font-bold border border-[#151515]">AI/ML</span>
              </div>
            </div>
          </div>

          {/* Featured Verified Projects */}
          <div>
            <h3 className="font-display font-black text-base text-[#151515] uppercase tracking-wide mb-3 flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-[#1749E8]" /> Featured Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl border-2 border-[#151515] bg-white">
                <h4 className="font-display font-bold text-[#151515] text-sm">IntelliTwin AI</h4>
                <p className="text-[#64748B] mt-1">
                  Cybersecurity anomaly-detection ML platform analyzing traffic patterns with XGBoost &amp; SHAP.
                </p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-mono font-bold">FastAPI</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-mono font-bold">Python</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-mono font-bold">Next.js</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl border-2 border-[#151515] bg-white">
                <h4 className="font-display font-bold text-[#151515] text-sm">Nexora Social</h4>
                <p className="text-[#64748B] mt-1">
                  Full-stack social workflow management application featuring draft queueing and responsive dashboard.
                </p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-mono font-bold">Next.js</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-mono font-bold">Node.js</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-mono font-bold">REST APIs</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl border-2 border-[#151515] bg-white">
                <h4 className="font-display font-bold text-[#151515] text-sm">PulseSocial</h4>
                <p className="text-[#64748B] mt-1">
                  Social media management hub focused on publishing integrations and cross-platform scheduling.
                </p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-mono font-bold">React</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-mono font-bold">Next.js</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-mono font-bold">REST APIs</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl border-2 border-[#151515] bg-white">
                <h4 className="font-display font-bold text-[#151515] text-sm">Personal Developer Portfolio</h4>
                <p className="text-[#64748B] mt-1">
                  Modern responsive developer portfolio with playful hand-drawn doodles and strict accessibility.
                </p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-mono font-bold">Next.js 14</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-mono font-bold">Tailwind</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-mono font-bold">TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t-2 border-[#151515] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#FFD52E] text-[#151515] border-2 border-[#151515] shadow-sticker font-display font-black text-xs uppercase tracking-wider hover:shadow-sticker-hover active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            CLOSE PREVIEW
          </button>
        </div>
      </div>
    </div>
  );
}
