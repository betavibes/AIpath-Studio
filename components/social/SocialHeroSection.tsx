export default function SocialHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Let AI Take Over Your Social Game
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Automate your posts, boost engagement, and let your brand shine — 24/7.
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          AIpath helps businesses scale their digital presence effortlessly with AI-powered social media automation. 
          Post across Facebook, Instagram, LinkedIn, Twitter(X), Reddit, and YouTube — all from one platform. 
          Save time, maintain consistency, and boost engagement while AI handles the heavy lifting. 
          Your brand stays active 24/7, even when you're not.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            🚀 Automate My Socials
          </a>
          <a
            href="/demo"
            className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 hover:shadow-xl transition-all duration-300"
          >
            💬 Get Free Strategy Call
          </a>
        </div>

        {/* Feature Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-100">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Auto Scheduling</h3>
            <p className="text-gray-600">Schedule posts across all platforms automatically</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-indigo-100">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">AI Engagement Bot</h3>
            <p className="text-gray-600">Auto-reply to comments and DMs naturally</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-purple-100">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Analytics</h3>
            <p className="text-gray-600">Track performance and optimize strategy</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-100">
            <div className="text-4xl mb-3">🔥</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Trend Monitoring</h3>
            <p className="text-gray-600">Stay ahead with real-time trend tracking</p>
          </div>
        </div>
      </div>
    </section>
  );
}