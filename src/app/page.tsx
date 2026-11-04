import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ShowreelCard } from "@/components/ui/ShowreelCard";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactCtaBanner } from "@/components/sections/ContactCtaBanner";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080911] text-white overflow-hidden relative">
      {/* 1. Hero Section: "Hey, I'm SURAJ", crown, cyan speech bubble, stickers, waving dev */}
      <HeroSection />

      {/* 2. Flagship Showreel Card: "☆ SHOWREEL", description, 16:9 preview with big play button, rabbit doodle */}
      <section id="showreel">
        <ShowreelCard />
      </section>

      {/* 3. Featured Projects: "FEATURED PROJECTS ~" with 4 responsive cards & arrow links */}
      <ProjectsSection />

      {/* 4. Skills App Tiles: "SKILLS" with squiggle underline & squircle app icons */}
      <SkillsSection />

      {/* 5. Split Section: Neon Lime "FOCUS DISCIPLINE CONSISTENCY" + Dark "ABOUT ME" */}
      <AboutSection />

      {/* 6. What I Can Build (Services & Core Capabilities) */}
      <ServicesSection />

      {/* 7. Engineering Standards & Approach Principles */}
      <ApproachSection />

      {/* 8. 5-Step Process (Discover, Plan, Build, Test, Deploy) */}
      <ProcessSection />

      {/* 9. Education & Verified Certifications: Abhinav College 9.04 CGPA Distinction & freeCodeCamp */}
      <EducationSection />

      {/* 10. Call-To-Action Banner */}
      <ContactCtaBanner />

      {/* 11. Interactive Contact Section */}
      <ContactSection />
    </main>
  );
}
