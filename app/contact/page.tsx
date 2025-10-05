import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ScheduleDemoSection from "@/components/contact/ScheduleDemoSection";
import DirectContactSection from "@/components/contact/DirectContactSection";
import QuickLinksSection from "@/components/contact/QuickLinksSection";
import StickyDemoCTA from "@/components/contact/StickyDemoCTA";

export const metadata = {
  title: "Contact Us - AIpath | Let's Connect and Grow Together",
  description:
    "Get in touch with AIpath for AI-powered automation tools, creative services, and social media solutions. Email, call, or chat with our team. Schedule a free demo today!",
  keywords:
    "contact AIpath, AI automation support, schedule demo, AIpath contact, business automation help, creative services inquiry, social media automation contact",
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <ContactHeroSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Schedule Demo Section */}
      <ScheduleDemoSection />

      {/* Direct Contact Options */}
      <DirectContactSection />

      {/* Quick Links & CTA */}
      <QuickLinksSection />

      {/* Sticky Demo CTA Button */}
      <StickyDemoCTA />
    </main>
  );
}