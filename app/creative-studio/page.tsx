import CreativeHeroSection from "@/components/creative/CreativeHeroSection";
import ProductBrandingSection from "@/components/creative/ProductBrandingSection";
import ContentWritingSection from "@/components/creative/ContentWritingSection";
import AIPhotoshootsSection from "@/components/creative/AIPhotoshootsSection";
import AIBlogsSection from "@/components/creative/AIBlogsSection";
import WhyChooseCreativeSection from "@/components/creative/WhyChooseCreativeSection";
import CreativeCTASection from "@/components/creative/CreativeCTASection";

export const metadata = {
  title: "Creative Studio - AIpath | Design, Write & Build Your Brand with AI",
  description:
    "AIpath Creative Studio combines creativity with AI to deliver brand design, content writing, AI photoshoots, and SEO blogs. Transform your brand story today.",
};

export default function CreativeStudioPage() {
  return (
    <main className="min-h-screen">
      <CreativeHeroSection />
      <ProductBrandingSection />
      <ContentWritingSection />
      <AIPhotoshootsSection />
      <AIBlogsSection />
      <WhyChooseCreativeSection />
      <CreativeCTASection />
    </main>
  );
}