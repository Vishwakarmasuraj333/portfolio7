"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "../ui/Logo";
import { DoodleArrowUpRight } from "../ui/Doodles";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
            ? "py-3 bg-[#FFFDF7]/95 backdrop-blur-md border-b-2 border-[#151515] shadow-sm"
            : "py-4 sm:py-5 bg-[#FFFDF7]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark with Smiley */}
            <Logo />

            {/* Center Navigation Links (matching reference uppercase nav) */}
            <nav
              className="hidden lg:flex items-center gap-7 xl:gap-8"
              aria-label="Main Navigation"
            >
              {siteConfig.navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-xs xl:text-sm font-bold tracking-widest uppercase transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1749E8] rounded ${
                      isActive
                        ? "text-[#1749E8] font-black"
                        : "text-[#151515] hover:text-[#1749E8]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1749E8] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: "LET'S BUILD SOMETHING" Yellow CTA Pill */}
            <div className="hidden md:flex items-center gap-2 relative">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#FFD52E] text-[#151515] border-2 border-[#151515] shadow-sticker font-display font-black text-xs xl:text-sm tracking-wider uppercase hover:shadow-sticker-hover hover:translate-x-0.5 hover:translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1749E8]"
              >
                LET&apos;S BUILD SOMETHING
              </a>

              {/* Hand-drawn arrow pointing to CTA button on large screens */}
              <div className="absolute -bottom-8 -right-8 pointer-events-none hidden xl:block">
                <DoodleArrowUpRight className="w-10 h-8 text-[#151515]" />
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="#contact"
                className="hidden sm:inline-flex md:hidden items-center justify-center px-4 py-2 rounded-full bg-[#FFD52E] text-[#151515] border-2 border-[#151515] shadow-sticker font-display font-extrabold text-xs tracking-wider uppercase"
              >
                LET&apos;S TALK
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl border-2 border-[#151515] bg-white text-[#151515] shadow-sticker focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1749E8] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
          className="fixed inset-0 z-50 lg:hidden bg-black/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
        >
          <div
            ref={mobileMenuRef}
            className="w-4/5 max-w-sm h-full bg-[#FFFDF7] border-l-4 border-[#151515] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-200"
          >
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-6 border-b-2 border-[#151515] mb-6">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl border-2 border-[#151515] bg-white text-[#151515] shadow-sticker focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-3">
                {siteConfig.navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all font-display font-bold text-base tracking-wider uppercase ${
                        isActive
                          ? "bg-[#1749E8] text-white border-[#151515] shadow-sticker"
                          : "bg-white text-[#151515] border-[#151515] hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-70" />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom CTA in Mobile Drawer */}
            <div className="pt-6 border-t-2 border-[#151515] mt-6">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#FFD52E] text-[#151515] border-2 border-[#151515] shadow-sticker font-display font-black text-sm tracking-wider uppercase hover:shadow-sticker-hover active:translate-x-0.5 active:translate-y-0.5 transition-all text-center"
              >
                <span>LET&apos;S BUILD SOMETHING</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center font-handwriting text-base font-bold text-[#151515] mt-3">
                Based in Bhayandar, Mumbai 🚀
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
