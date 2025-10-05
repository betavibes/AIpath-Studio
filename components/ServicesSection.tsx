'use client';

import { useState } from 'react';
import ServiceModal from './ServiceModal';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: "AI Chatbots",
      description: "Smart bots to engage, support, and convert your customers 24/7.",
      icon: "💬",
      gradient: "from-blue-500 to-cyan-500",
      imageUrl: "/images/services/ai-chatbot.svg",
      detailedDescription: `Transform customer interactions with intelligent AI chatbots that understand context, learn from conversations, and provide personalized responses. Our chatbots integrate seamlessly with your existing systems and can handle multiple conversations simultaneously, ensuring no customer is left waiting.

Built on advanced natural language processing (NLP) technology, our chatbots can understand intent, sentiment, and context to deliver human-like conversations that drive engagement and conversions.`,
      features: [
        "24/7 automated customer support with instant responses",
        "Multi-language support for global reach",
        "Seamless integration with CRM, email, and messaging platforms",
        "Advanced NLP for context-aware conversations",
        "Lead qualification and appointment scheduling",
        "Analytics dashboard with conversation insights",
        "Custom training on your business data",
        "Escalation to human agents when needed"
      ],
      benefits: [
        "Reduce support costs by up to 70%",
        "Increase customer satisfaction scores",
        "Handle unlimited conversations simultaneously",
        "Capture leads even outside business hours"
      ]
    },
    {
      title: "Automations",
      description: "Streamline repetitive tasks and save time with intelligent workflows.",
      icon: "⚡",
      gradient: "from-purple-500 to-pink-500",
      imageUrl: "/images/services/automation.svg",
      detailedDescription: `Eliminate manual, repetitive tasks and free your team to focus on strategic work. Our intelligent automation solutions use AI to handle everything from data entry to complex multi-step workflows, reducing errors and increasing efficiency.

Connect your favorite tools and create powerful automation workflows that run on autopilot, saving hours of manual work every day.`,
      features: [
        "Visual workflow builder with drag-and-drop interface",
        "Pre-built templates for common business processes",
        "Integration with 1000+ apps and services",
        "Conditional logic and smart decision-making",
        "Scheduled and trigger-based automation",
        "Error handling and notification systems",
        "Real-time monitoring and logging",
        "API access for custom integrations"
      ],
      benefits: [
        "Save 20+ hours per week on repetitive tasks",
        "Reduce human errors by 95%",
        "Improve team productivity and morale",
        "Scale operations without hiring"
      ]
    },
    {
      title: "Product Branding",
      description: "Build strong brand identity with design, strategy, and AI-powered visuals.",
      icon: "🎨",
      gradient: "from-orange-500 to-red-500",
      imageUrl: "/images/services/branding.svg",
      detailedDescription: `Create a memorable brand identity that resonates with your target audience. Our AI-powered branding services combine strategic thinking with cutting-edge design tools to deliver logos, color palettes, typography, and brand guidelines that make your business stand out.

From startups to established enterprises, we help you craft a cohesive brand story that connects emotionally with customers and drives loyalty.`,
      features: [
        "AI-generated logo concepts and variations",
        "Complete brand identity package (colors, fonts, guidelines)",
        "Market research and competitor analysis",
        "Brand positioning and messaging strategy",
        "Social media visual templates",
        "Business card and stationery design",
        "Brand style guide documentation",
        "Unlimited revisions until perfect"
      ],
      benefits: [
        "Stand out in crowded markets",
        "Build trust and credibility instantly",
        "Consistent brand experience across channels",
        "Professional design at fraction of agency cost"
      ]
    },
    {
      title: "Content Writing Services",
      description: "High-quality blogs, ad copy, and content tailored to your voice.",
      icon: "✍️",
      gradient: "from-green-500 to-teal-500",
      imageUrl: "/images/services/content-writing.svg",
      detailedDescription: `Engage your audience with compelling, SEO-optimized content that drives traffic and conversions. Our AI-powered content writing services deliver blog posts, website copy, product descriptions, and marketing materials that match your brand voice perfectly.

Every piece is researched, fact-checked, and optimized for both search engines and human readers, ensuring maximum impact and engagement.`,
      features: [
        "SEO-optimized blog posts and articles",
        "Website copy and landing page content",
        "Product descriptions and category pages",
        "Email newsletters and campaigns",
        "Social media captions and posts",
        "Ad copy for Google, Facebook, and LinkedIn",
        "Press releases and company announcements",
        "Plagiarism-free, original content guaranteed"
      ],
      benefits: [
        "Boost organic traffic by 300%+",
        "Improve conversion rates with persuasive copy",
        "Save time on content creation",
        "Maintain consistent brand voice"
      ]
    },
    {
      title: "Social Media Automation",
      description: "Schedule, post, and manage campaigns across platforms effortlessly.",
      icon: "📱",
      gradient: "from-indigo-500 to-purple-500",
      imageUrl: "/images/services/social-media.svg",
      detailedDescription: `Maintain a consistent social media presence without the daily hassle. Our automation platform lets you plan, schedule, and publish content across all major social networks from one central dashboard.

AI-powered features suggest optimal posting times, generate engaging captions, and even create content variations for different platforms automatically.`,
      features: [
        "Multi-platform scheduling (Facebook, Instagram, Twitter, LinkedIn, TikTok)",
        "AI-powered caption generation and hashtag suggestions",
        "Content calendar with visual planning",
        "Bulk upload and scheduling",
        "Auto-posting with optimal timing",
        "Engagement tracking and analytics",
        "Team collaboration and approval workflows",
        "Social listening and competitor monitoring"
      ],
      benefits: [
        "Save 15+ hours per week on social media",
        "Increase engagement by 200%+",
        "Never miss important posting times",
        "Grow followers organically"
      ]
    },
    {
      title: "AI Photoshoots",
      description: "Create stunning, cost-effective product and lifestyle photos with AI.",
      icon: "📸",
      gradient: "from-pink-500 to-rose-500",
      imageUrl: "/images/services/ai-photoshoot.svg",
      detailedDescription: `Generate professional-quality product photos and lifestyle images without expensive photoshoots. Our AI technology creates photorealistic images in any setting, lighting, or style you need.

Perfect for e-commerce, marketing campaigns, and social media, our AI photoshoots deliver studio-quality results at a fraction of traditional photography costs.`,
      features: [
        "Product photography with custom backgrounds",
        "Lifestyle and contextual scene generation",
        "Model and mannequin replacement",
        "Multiple angles and variations",
        "Seasonal and themed variations",
        "High-resolution output (up to 8K)",
        "Batch processing for product catalogs",
        "Style transfer and artistic effects"
      ],
      benefits: [
        "Reduce photography costs by 90%",
        "Create unlimited variations instantly",
        "Test different styles before production",
        "Update product images in minutes"
      ]
    },
    {
      title: "AI-Based Blogs",
      description: "SEO-friendly, AI-generated blogs that boost your search rankings.",
      icon: "📝",
      gradient: "from-yellow-500 to-orange-500",
      imageUrl: "/images/services/ai-blogs.svg",
      detailedDescription: `Dominate search results with AI-generated blog content that's optimized for both readers and search engines. Our system researches topics, analyzes top-ranking content, and creates comprehensive articles that provide real value.

Each blog post is structured for maximum SEO impact with proper headings, meta descriptions, internal linking, and keyword optimization.`,
      features: [
        "Keyword research and topic ideation",
        "SEO-optimized article structure",
        "Competitor content analysis",
        "Automatic internal and external linking",
        "Meta descriptions and title tags",
        "Featured snippet optimization",
        "Content refresh and updating",
        "Performance tracking and recommendations"
      ],
      benefits: [
        "Rank on first page of Google faster",
        "Publish 10x more content consistently",
        "Drive qualified organic traffic",
        "Establish thought leadership"
      ]
    },
    {
      title: "Email Campaigns",
      description: "Targeted, automated campaigns to reach and convert the right audience.",
      icon: "📧",
      gradient: "from-blue-500 to-indigo-500",
      imageUrl: "/images/services/email-campaigns.svg",
      detailedDescription: `Build and nurture customer relationships with personalized email campaigns that drive conversions. Our platform combines AI-powered segmentation, dynamic content, and automation to deliver the right message to the right person at the right time.

From welcome sequences to re-engagement campaigns, we help you maximize email ROI with data-driven strategies.`,
      features: [
        "Drag-and-drop email builder with templates",
        "AI-powered subject line optimization",
        "Advanced segmentation and personalization",
        "A/B testing for continuous improvement",
        "Automated drip campaigns and sequences",
        "Behavioral triggers and dynamic content",
        "Deliverability optimization",
        "Detailed analytics and reporting"
      ],
      benefits: [
        "Increase open rates by 40%+",
        "Boost click-through rates by 3x",
        "Automate customer journey nurturing",
        "Maximize ROI from email marketing"
      ]
    },
    {
      title: "Leads Collection from Google Maps",
      description: "Gather verified business leads directly from Google Maps for smarter outreach.",
      icon: "📍",
      gradient: "from-red-500 to-pink-500",
      imageUrl: "/images/services/lead-generation.svg",
      detailedDescription: `Build targeted prospect lists with verified business information extracted from Google Maps. Our tool helps you find potential customers based on location, industry, ratings, and other criteria, giving you accurate contact details for outreach.

Perfect for B2B sales teams, agencies, and local businesses looking to expand their customer base with precision targeting.`,
      features: [
        "Location-based business search",
        "Industry and category filtering",
        "Contact information extraction (phone, email, website)",
        "Business ratings and review analysis",
        "Bulk export to CSV/Excel",
        "CRM integration for seamless import",
        "Data verification and enrichment",
        "Compliance with data privacy regulations"
      ],
      benefits: [
        "Build targeted prospect lists in minutes",
        "Access verified contact information",
        "Reduce lead research time by 80%",
        "Improve outreach conversion rates"
      ]
    },
  ];

  return (
    <>
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our AI-Powered Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to transform your business and accelerate growth with cutting-edge AI technology
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(index)}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <div className="flex items-center justify-between">
                  <span className={`text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text font-semibold inline-flex items-center group-hover:gap-2 transition-all duration-300`}>
                    Learn more
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService !== null && (
        <ServiceModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          service={services[selectedService]}
        />
      )}
    </>
  );
}