import Link from "next/link";

export default function LeadsCollectionSection() {
  const benefits = [
    {
      icon: "📍",
      title: "Extract Leads by Location or Industry",
      description: "Target specific cities, regions, or business categories to find your ideal customers",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: "✅",
      title: "Verified Business Details",
      description: "Get accurate business names, contact numbers, addresses, websites, and more",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "📤",
      title: "Export Directly to CRM or Email List",
      description: "Seamlessly integrate collected leads into your existing tools and workflows",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🎯",
      title: "Perfect for Agencies, Marketers, and Sales Teams",
      description: "Build targeted prospect lists in minutes instead of hours of manual research",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📍 Targeted Leads Collection
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            From Google Maps to Your CRM
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Stop spending hours manually searching for leads. AIpath automates lead collection 
            from Google Maps and transforms it into verified, usable business data. Get accurate 
            contact lists in minutes, not days.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-3xl mb-6`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <div className="font-semibold text-gray-900 mb-2">Choose Location</div>
              <div className="text-sm text-gray-600">Select your target city, region, or area</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <div className="font-semibold text-gray-900 mb-2">Set Criteria</div>
              <div className="text-sm text-gray-600">Define industry, business type, or keywords</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <div className="font-semibold text-gray-900 mb-2">AI Extracts Data</div>
              <div className="text-sm text-gray-600">Our AI collects and verifies business info</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <div className="font-semibold text-gray-900 mb-2">Export & Use</div>
              <div className="text-sm text-gray-600">Download or sync to your CRM instantly</div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-4">🏢</div>
            <div className="font-bold text-gray-900 mb-2">B2B Sales Teams</div>
            <div className="text-sm text-gray-600">Find and reach out to potential business clients in your target market</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-4">📱</div>
            <div className="font-bold text-gray-900 mb-2">Marketing Agencies</div>
            <div className="text-sm text-gray-600">Build prospect lists for client campaigns and outreach programs</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl mb-4">🚀</div>
            <div className="font-bold text-gray-900 mb-2">Startups & Entrepreneurs</div>
            <div className="text-sm text-gray-600">Quickly identify and connect with potential partners or customers</div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2">
                10x
              </div>
              <div className="text-gray-600 font-medium">Faster Than Manual</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-gray-600 font-medium">Data Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                1000+
              </div>
              <div className="text-gray-600 font-medium">Leads Per Hour</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">Verified Contacts</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            🎯 Get your first batch of leads today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-gray-600 mt-4">No credit card required • Start with 100 free leads</p>
        </div>
      </div>
    </section>
  );
}