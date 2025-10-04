export default function TrendMonitoringSection() {
  const features = [
    {
      icon: "📈",
      title: "Trend Tracking",
      description: "Monitor trending topics and hashtags in real-time across all platforms",
      color: "blue"
    },
    {
      icon: "🔔",
      title: "Brand Mention Alerts",
      description: "Get instant notifications when your brand is mentioned anywhere",
      color: "indigo"
    },
    {
      icon: "😊",
      title: "Sentiment Analysis",
      description: "Understand how people feel about your brand with AI-powered sentiment tracking",
      color: "purple"
    },
    {
      icon: "🏷️",
      title: "Hashtag & Topic Discovery",
      description: "Discover trending hashtags and topics relevant to your industry",
      color: "pink"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Stay Ahead of the Curve
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            AIpath monitors social trends, brand mentions, and audience sentiment — helping your brand 
            join conversations early and stay relevant. Never miss an opportunity to engage with your 
            audience or capitalize on trending topics.
          </p>
        </div>

        {/* Visual Dashboard Mockup */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6">
              <h3 className="text-white text-2xl font-bold mb-2">🔥 Trending Now</h3>
              <p className="text-indigo-100">Real-time insights for your brand</p>
            </div>

            {/* Dashboard Content */}
            <div className="p-6">
              {/* Trending Topics */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📊</span> Top Trending Topics
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-blue-600">#AIMarketing</span>
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">🔥 Hot</span>
                    </div>
                    <p className="text-sm text-gray-600">127K mentions • ↑ 340%</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-indigo-600">#SocialAutomation</span>
                      <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded-full">📈 Rising</span>
                    </div>
                    <p className="text-sm text-gray-600">89K mentions • ↑ 215%</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-purple-600">#DigitalMarketing</span>
                      <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">⭐ Steady</span>
                    </div>
                    <p className="text-sm text-gray-600">234K mentions • ↑ 12%</p>
                  </div>
                </div>
              </div>

              {/* Brand Mentions */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔔</span> Recent Brand Mentions
                </h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200 flex items-start gap-3">
                    <span className="text-2xl">😊</span>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">"Just started using @AIpath for social automation and it's a game changer! 🚀"</p>
                      <p className="text-sm text-gray-500 mt-1">Twitter • 5 minutes ago • Positive sentiment</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 flex items-start gap-3">
                    <span className="text-2xl">💬</span>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">"Has anyone tried AIpath for managing multiple social accounts?"</p>
                      <p className="text-sm text-gray-500 mt-1">Reddit • 12 minutes ago • Neutral sentiment</p>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 flex items-start gap-3">
                    <span className="text-2xl">⭐</span>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">"AIpath's AI engagement bot is incredible. Saves me 10+ hours weekly!"</p>
                      <p className="text-sm text-gray-500 mt-1">LinkedIn • 28 minutes ago • Positive sentiment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sentiment Analysis */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">😊</span> Sentiment Overview
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                    <p className="text-3xl font-bold text-green-600">87%</p>
                    <p className="text-sm text-gray-600 mt-1">😊 Positive</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-3xl font-bold text-gray-600">11%</p>
                    <p className="text-sm text-gray-600 mt-1">😐 Neutral</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200">
                    <p className="text-3xl font-bold text-red-600">2%</p>
                    <p className="text-sm text-gray-600 mt-1">😞 Negative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-${feature.color}-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-${feature.color}-100`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-bold text-${feature.color}-600 mb-2`}>{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            📈 Keep Your Brand Relevant with AIpath
          </a>
        </div>
      </div>
    </section>
  );
}