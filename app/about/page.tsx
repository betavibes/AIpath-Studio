import { Metadata } from "next";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import WhyChooseSection from "@/components/about/WhyChooseSection";
import OurStorySection from "@/components/about/OurStorySection";
import TeamSection from "@/components/about/TeamSection";
import FinalCTASection from "@/components/about/FinalCTASection";

export const metadata: Metadata = {
  title: "About Us - AIpath | Empowering Businesses with AI",
  description:
    "Learn about AIpath's mission to empower businesses with AI-powered automation, content creation, and digital growth solutions. Discover our story, vision, and the team behind AIpath.",
  keywords:
    "about aipath, ai company, business automation, ai solutions, digital transformation, aipath team, company mission, company vision",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHeroSection />
      <MissionVisionSection />
      <WhyChooseSection />
      <OurStorySection />
      <TeamSection />
      <FinalCTASection />
    </main>
  );
}