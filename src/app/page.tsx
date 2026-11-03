import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactCtaBanner } from "@/components/sections/ContactCtaBanner";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Memorable Hero Section with Bold Typography, Doodles & Developer Composition */}
      <HeroSection />

      {/* 2. Introduction / About Me Section in Large Royal-Blue Rounded Panel */}
      <AboutSection />

      {/* 3. Skills and Services: "WHAT I CAN BUILD" with 4 Distinctive Colorful Cards */}
      <ServicesSection />

      {/* 4. Featured Projects: "SELECTED DIGITAL WORK" Gallery & Interactive Modals */}
      <ProjectsSection />

      {/* 5. "HOW I APPROACH DEVELOPMENT" Principles (Honest standards based on reference) */}
      <ApproachSection />

      {/* 6. Development Process: "FROM IDEA TO DEPLOYMENT" (5 connected steps) */}
      <ProcessSection />

      {/* 7. Education & Learning: "ALWAYS BUILDING. ALWAYS LEARNING." (Abhinav College & Simplilearn) */}
      <EducationSection />

      {/* 8. Yellow Call-To-Action Banner with Blue Starburst & Retro Red Phone Sticker */}
      <ContactCtaBanner />

      {/* 9. Interactive Contact Section with Zod Validation & Anti-Spam Protection */}
      <ContactSection />
    </>
  );
}
