import { Boot } from "@/components/Boot";
import { Ticker } from "@/components/Ticker";
import { Nav } from "@/components/Nav";
import { SkillStrip } from "@/components/SkillStrip";
import { SparkleCursor } from "@/components/SparkleCursor";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Boot />
      <Ticker />
      <Nav />
      <HeroSection />
      <StatsSection />
      <WorkSection />
      <SkillStrip />
      <AboutSection />
      <ContactSection />
      <Footer />
      <SparkleCursor />
    </>
  );
}
