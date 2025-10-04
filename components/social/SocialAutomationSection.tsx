export default function SocialAutomationSection() {
  const features = [
    {
      title: "Automated Post Scheduling",
      feature: "Schedule posts automatically across all platforms.",
      advantage: "No manual posting or calendar juggling.",
      benefit: "Consistently active social presence with zero effort.",
      icon: "📅",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Campaign Automation",
      feature: "Run promotional campaigns automatically on multiple channels.",
      advantage: "Posts go out at optimal times for engagement.",
      benefit: "Boost sales and reach without lifting a finger.",
      icon: "🎯",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Cross-Platform Posting",
      feature: "Publish once, post everywhere — Facebook, Instagram, LinkedIn, Twitter(X), Reddit, YouTube.",
      advantage: "Unified brand presence across platforms.",
      benefit: "Save hours weekly and maintain consistency.",
      icon: "🌐",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Optimized Content",
      feature: "AI generates captions, hashtags, and post suggestions.",
      advantage: "Optimized posts for engagement & discovery.",
      benefit: "More likes, shares, clicks, and followers with less effort.",
      icon: "🧠",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Analytics & Insights",
      feature: "Track post performance and audience behavior in real-time.",
      advantage: "Identify what works and refine strategy.",
      benefit: "Maximize ROI on every campaign and post.",
      icon: "📊",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Smart Posting. Smarter Growth. 24/7.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Automate your digital marketing, campaigns, promotions, and post scheduling across all social platforms using AI. 
            Our intelligent system optimizes timing, captions, and hashtags for maximum reach — so you can focus on growing 
            your business while AI handles your social presence.
          </p>
        </div>

        {/* FAB Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105"
            >
              {/* Icon */}
              <div className={`text-5xl mb-4 inline-block p-4 rounded-2xl bg-gradient-to-r ${item.gradient} bg-opacity-10`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>

              {/* Feature */}
              <div className="mb-3">
                <span className="font-semibold text-blue-600">Feature:</span>
                <p className="text-gray-700 mt-1">{item.feature}</p>
              </div>

              {/* Advantage */}
              <div className="mb-3">
                <span className="font-semibold text-indigo-600">Advantage:</span>
                <p className="text-gray-700 mt-1">{item.advantage}</p>
              </div>

              {/* Benefit */}
              <div>
                <span className="font-semibold text-purple-600">Benefit:</span>
                <p className="text-gray-700 mt-1">{item.benefit}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Widget */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white shadow-2xl mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            🎬 See Your First Automated Post in Action
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Watch how AIpath creates, optimizes, and schedules your social media posts automatically
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Watch Live Demo
          </button>
        </div>

        {/* Platform Icons */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl mb-2">📘</div>
            <p className="text-sm text-gray-600 font-medium">Facebook</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">📸</div>
            <p className="text-sm text-gray-600 font-medium">Instagram</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">💼</div>
            <p className="text-sm text-gray-600 font-medium">LinkedIn</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🐦</div>
            <p className="text-sm text-gray-600 font-medium">Twitter(X)</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🤖</div>
            <p className="text-sm text-gray-600 font-medium">Reddit</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🎥</div>
            <p className="text-sm text-gray-600 font-medium">YouTube</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            💬 Let's Automate Your Socials Today!
          </a>
        </div>
      </div>
    </section>
  );
}