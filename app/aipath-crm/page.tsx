import CRMHeroSection from "@/components/crm/CRMHeroSection";
import AIChatbotsSection from "@/components/crm/AIChatbotsSection";
import BusinessAutomationsSection from "@/components/crm/BusinessAutomationsSection";
import EmailCampaignsSection from "@/components/crm/EmailCampaignsSection";
import LeadsCollectionSection from "@/components/crm/LeadsCollectionSection";
import WhyChooseCRMSection from "@/components/crm/WhyChooseCRMSection";
import CRMCTASection from "@/components/crm/CRMCTASection";

export const metadata = {
  title: "AIpath CRM - Smart Automation Solutions That Drive Growth",
  description: "Automate your operations, engage smarter, and grow faster with AIpath CRM. AI-powered automation for leads, sales, and marketing.",
};

export default function AIpathCRMPage() {
  return (
    <main className="min-h-screen">
      <CRMHeroSection />
      <AIChatbotsSection />
      <BusinessAutomationsSection />
      <EmailCampaignsSection />
      <LeadsCollectionSection />
      <WhyChooseCRMSection />
      <CRMCTASection />
    </main>
  );
}