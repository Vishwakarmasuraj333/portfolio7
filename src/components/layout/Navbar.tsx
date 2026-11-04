"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Menu, X, ArrowRight, Sparkles, Download } from "lucide-react";
import { ResumeModal } from "../ui/ResumeModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Showreel", href: "#showreel" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const sectionIds = ["home", "showreel", "projects", "skills", "about", "education", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none ${
          isScrolled
            ? "py-3 bg-[#080911]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "py-4 sm:py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo: "SURAJ." (Cosmic Gradient dot) */}
            <Link
              href="#home"
              className="group flex items-center select-none focus:outline-none"
              aria-label="Suraj Vishwakarma - Home"
            >
              <span className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                SURAJ
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 animate-pulse">.</span>
              </span>
            </Link>

            {/* Desktop Navigation Links matching reference */}
            <nav
              className="hidden md:flex items-center gap-6 lg:gap-8"
              aria-label="Main Navigation"
            >
              {navItems.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-xs lg:text-sm font-display font-bold tracking-wider transition-all relative py-1 ${
                      isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-300 font-black"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Purple Rounded Squircle Button (Exact Reference Match!) */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-11 h-11 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:scale-105 active:scale-95 transition-all duration-200"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Slide-out Mobile / Quick Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end animate-fadeIn select-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            ref={mobileMenuRef}
            className="w-full max-w-xs sm:max-w-sm h-full bg-[#0D0F1D] border-l-2 border-purple-500/30 p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <span className="font-display font-black text-2xl text-white">
                  SURAJ<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">.</span>
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2.5 rounded-xl font-display font-bold text-base text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-purple-900/50 hover:to-pink-900/50 hover:border-purple-500/30 transition-all"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions at Drawer Bottom */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResumeOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 hover:from-red-500 hover:via-pink-500 hover:to-purple-500 text-white font-display font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              >
                View Verified Resume
              </button>

              <a
                href={siteConfig.links.resume}
                download="Suraj_Vishwakarma_Resume.pdf"
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-mono text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-pink-400" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {resumeOpen && <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />}
    </>
  );
}
