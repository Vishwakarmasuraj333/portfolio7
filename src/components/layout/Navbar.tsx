"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { DoodleSmiley, DoodleArrowUpRight } from "../ui/Doodles";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Section Observer
    const sectionIds = siteConfig.navLinks.map((l) => l.href.replace("#", ""));
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
        { rootMargin: "-25% 0px -65% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  // Keyboard Escape & Click Outside for Mobile Menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        mobileMenuOpen
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#0A0514]/90 backdrop-blur-xl border-b border-purple-500/25 shadow-2xl shadow-purple-950/40"
            : "py-4 sm:py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo: SURAj + DoodleSmiley + VISHWAKARMA with Glowing Neon Gradient */}
            <Link
              href="#home"
              className="group flex items-center gap-2 select-none focus:outline-none rounded-xl p-1 transition-transform active:scale-95"
              aria-label="Suraj Vishwakarma - Home"
            >
              <div className="flex flex-col text-left leading-none">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#EC4899] transition-colors">
                    SURAj
                  </span>
                  <DoodleSmiley className="w-5 h-5 sm:w-6 sm:h-6 text-[#EC4899] group-hover:rotate-45 group-hover:scale-125 transition-transform duration-200" />
                </div>
                <span className="font-display font-extrabold text-[10px] sm:text-xs tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-400 mt-0.5">
                  VISHWAKARMA • FULL-STACK
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8 px-5 py-2 rounded-full bg-space-850/60 border border-purple-500/20 backdrop-blur-md shadow-lg"
              aria-label="Main Navigation"
            >
              {siteConfig.navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-xs xl:text-sm font-display font-extrabold tracking-wider uppercase transition-all relative py-1 focus:outline-none rounded ${
                      isActive
                        ? "text-[#EC4899] font-black drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]"
                        : "text-purple-200/80 hover:text-white hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full shadow-[0_0_8px_#EC4899]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Glowing Neon CTA Button */}
            <div className="hidden md:flex items-center gap-3 relative">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-display font-black text-xs xl:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] hover:scale-105 active:scale-95 transition-all"
              >
                <span>LET&apos;S CONNECT</span>
                <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
              </a>

              {/* Hand-drawn arrow pointing to CTA on large screens */}
              <div className="absolute -bottom-7 -right-7 pointer-events-none hidden xl:block opacity-60">
                <DoodleArrowUpRight className="w-9 h-7 text-pink-400" />
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="#contact"
                className="inline-flex sm:hidden items-center justify-center px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-display font-black text-[11px] tracking-wider uppercase shadow-[0_0_12px_rgba(236,72,153,0.5)]"
              >
                CONNECT
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl border border-purple-500/30 bg-space-850/80 text-white backdrop-blur-md shadow-lg focus:outline-none active:scale-95 transition-all"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-pink-400" /> : <Menu className="w-5 h-5 text-purple-300" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 lg:hidden bg-black/75 backdrop-blur-md flex justify-end animate-in fade-in duration-200"
        >
          <div
            ref={mobileMenuRef}
            className="w-4/5 max-w-sm h-full bg-[#0A0514]/95 border-l border-purple-500/30 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-200"
          >
            <div>
              {/* Drawer Top Header with Logo & Close */}
              <div className="flex items-center justify-between pb-5 border-b border-purple-500/20 mb-6">
                <div className="flex flex-col text-left leading-none">
                  <span className="font-display font-black text-2xl text-white tracking-tight">
                    SURAj
                  </span>
                  <span className="font-display font-extrabold text-[10px] text-pink-400 uppercase tracking-widest">
                    VISHWAKARMA
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl border border-purple-500/30 bg-space-800 text-white focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-pink-400" />
                </button>
              </div>

              {/* Navigation Links with Glowing Hover States */}
              <nav className="flex flex-col gap-2.5">
                {siteConfig.navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all font-display font-bold text-sm tracking-wider uppercase ${
                        isActive
                          ? "bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 text-pink-300 border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                          : "bg-space-850/50 text-purple-200/80 border-purple-500/15 hover:bg-purple-950/30 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-70 text-pink-400" />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom CTA in Mobile Drawer */}
            <div className="pt-5 border-t border-purple-500/20 mt-6">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-display font-black text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(236,72,153,0.5)] active:scale-95 transition-all text-center"
              >
                <span>LET&apos;S CONNECT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center font-handwriting text-base font-bold text-pink-400 mt-3">
                Full-Stack Developer 🚀
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
