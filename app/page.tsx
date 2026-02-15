"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-foreground selection:text-background">
      <HeroSection />
      <WorksSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
