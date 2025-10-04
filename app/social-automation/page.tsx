import SocialHeroSection from "@/components/social/SocialHeroSection";
import SocialAutomationSection from "@/components/social/SocialAutomationSection";
import EngagementBotSection from "@/components/social/EngagementBotSection";
import TrendMonitoringSection from "@/components/social/TrendMonitoringSection";
import ScaleBrandSection from "@/components/social/ScaleBrandSection";
import WhyChooseSocialSection from "@/components/social/WhyChooseSocialSection";

export const metadata = {
  title: "Social Automation - AIpath | Automate Your Social Media 24/7",
  description: "Let AI take over your social game. Automate posts, boost engagement, and scale your brand across Facebook, Instagram, LinkedIn, Twitter(X), Reddit, and YouTube with AIpath's intelligent social automation platform.",
  keywords: "social media automation, AI social posting, automated social media, social media management, AI engagement bot, social media scheduler, cross-platform posting, social media analytics",
};

export default function SocialAutomationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <SocialHeroSection />

      {/* Section A: AI-Powered Social Media Automation */}
      <SocialAutomationSection />

      {/* Section B: Engage & Respond Automatically */}
      <EngagementBotSection />

      {/* Section C: Trend Monitoring & Brand Alerts */}
      <TrendMonitoringSection />

      {/* Section D: Scale Your Brand Effortlessly */}
      <ScaleBrandSection />

      {/* Final Section: Why Choose AIpath Social Automation */}
      <WhyChooseSocialSection />
    </main>
  );
}