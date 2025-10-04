import Link from "next/link";

export default function EmailCampaignsSection() {
  const features = [
    {
      icon: "✨",
      title: "Create Personalized Campaigns in Minutes",
      description: "Use AI to craft compelling email content that resonates with your audience. No copywriting skills needed.",
    },
    {
      icon: "📊",
      title: "Track Open Rates, Clicks, and Conversions Easily",
      description: "Get real-time insights into campaign performance with intuitive dashboards and detailed analytics.",
    },
    {
      icon: "🎯",
      title: "Set Smart Triggers for Auto Follow-Ups",
      description: "Automatically send follow-up emails based on customer behavior, ensuring no lead goes cold.",
    },
    {
      icon: "💝",
      title: "Build Meaningful Customer Relationships",
      description: "Nurture leads with personalized content that builds trust and drives long-term loyalty.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 shadow-xl">
              {/* Email Campaign Mockup */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Email Header */}
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-lg">Your Campaign</div>
                    <div className="bg-white/20 px-3 py-1 rounded-full text-sm">Draft</div>
                  </div>
                  <div className="text-sm opacity-90">To: Your Subscribers</div>
                  <div className="text-sm opacity-90">Subject: Special Offer Just for You! 🎁</div>
                </div>

                {/* Email Body Preview */}
                <div className="p-6 space-y-4">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  
                  <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold mt-6">
                    Get Started Now →
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="h-20 bg-gray-100 rounded"></div>
                    <div className="h-20 bg-gray-100 rounded"></div>
                    <div className="h-20 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Campaign Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-pink-600">45%</div>
                  <div className="text-xs text-gray-600 mt-1">Open Rate</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-purple-600">12%</div>
                  <div className="text-xs text-gray-600 mt-1">Click Rate</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-indigo-600">8%</div>
                  <div className="text-xs text-gray-600 mt-1">Conversion</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📧 Email Campaigns
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Automate Your Marketing Reach
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Email marketing doesn't have to be complicated or time-consuming. AIpath helps 
              you create, schedule, and personalize email campaigns using the power of AI. 
              Whether you're launching a product, nurturing leads, or re-engaging customers, 
              our platform makes it effortless.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              With built-in personalization, smart segmentation, and automated follow-ups, 
              you'll reach the right people at the right time with messages that convert. 
              Track every metric that matters and optimize your campaigns for maximum ROI.
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{feature.title}</div>
                    <div className="text-sm text-gray-600">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              📨 Start your first AI-powered campaign today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Email Marketing Still Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-600 mb-2">$42</div>
              <div className="text-sm text-gray-600">ROI for every $1 spent</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">4B+</div>
              <div className="text-sm text-gray-600">Email users worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">80%</div>
              <div className="text-sm text-gray-600">Prefer email for business communication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}