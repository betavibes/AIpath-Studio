export default function WhyChooseSocialSection() {
  const highlights = [
    {
      icon: "⚡",
      title: "Automate Campaigns, Posts & Promotions Seamlessly",
      description: "Set it and forget it. Your social media runs on autopilot while you focus on growing your business.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🧠",
      title: "AI Optimizes Content for Maximum Engagement",
      description: "Smart algorithms analyze what works and optimize every post for likes, shares, and conversions.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: "📊",
      title: "Real-Time Analytics & Actionable Insights",
      description: "Know what's working instantly. Make data-driven decisions to maximize your social ROI.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "📈",
      title: "Scalable Solution for All Business Sizes",
      description: "From solo entrepreneurs to Fortune 500 companies — our platform grows with your needs.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose AIpath Social Automation
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stop wasting hours on manual posting. Let AI handle your social media while you focus on what matters most — 
            growing your business and serving your customers.
          </p>
        </div>

        {/* Bullet Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105"
            >
              <div className={`text-5xl mb-4 inline-block p-4 rounded-2xl bg-gradient-to-r ${item.gradient} bg-opacity-10`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Manual Posting vs AIpath Automation
          </h3>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
                    <th className="py-4 px-6 text-left font-bold">Feature</th>
                    <th className="py-4 px-6 text-center font-bold">Manual Posting</th>
                    <th className="py-4 px-6 text-center font-bold">AIpath Automation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-800">Time Spent Daily</td>
                    <td className="py-4 px-6 text-center text-red-600 font-semibold">2-4 hours</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">5-10 minutes</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-800">Posting Consistency</td>
                    <td className="py-4 px-6 text-center text-red-600 text-2xl">❌</td>
                    <td className="py-4 px-6 text-center text-green-600 text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-800">Optimal Timing</td>
                    <td className="py-4 px-6 text-center text-red-600 text-2xl">❌</td>
                    <td className="py-4 px-6 text-center text-green-600 text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-800">AI-Optimized Captions</td>
                    <td className="py-4 px-6 text-center text-red-600 text-2xl">❌</td>
                    <td className="py-4 px-6 text-center text-green-600 text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-800">Multi-Platform Management</td>
                    <td className="py-4 px-6 text-center text-red-600 font-semibold">Difficult</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">Easy</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-800">Auto-Reply to Comments/DMs</td>
                    <td className="py-4 px-6 text-center text-red-600 text-2xl">❌</td>
                    <td className="py-4 px-6 text-center text-green-600 text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-800">Real-Time Analytics</td>
                    <td className="py-4 px-6 text-center text-red-600 text-2xl">❌</td>
                    <td className="py-4 px-6 text-center text-green-600 text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-800">Trend Monitoring</td>
                    <td className="py-4 px-6 text-center text-red-600 text-2xl">❌</td>
                    <td className="py-4 px-6 text-center text-green-600 text-2xl">✅</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-800">24/7 Brand Presence</td>
                    <td className="py-4 px-6 text-center text-red-600 text-2xl">❌</td>
                    <td className="py-4 px-6 text-center text-green-600 text-2xl">✅</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-800">Monthly Cost</td>
                    <td className="py-4 px-6 text-center text-red-600 font-semibold">$2000+ (VA/Agency)</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">Starting at $99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">Trusted by Businesses Worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-4xl font-bold mb-2">10K+</p>
              <p className="text-indigo-100">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">5M+</p>
              <p className="text-indigo-100">Posts Automated</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-indigo-100">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-indigo-100">Support Available</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-200 mb-12">
          <div className="flex items-start gap-4">
            <div className="text-5xl">💬</div>
            <div>
              <p className="text-lg text-gray-700 italic mb-4">
                "AIpath transformed our social media strategy. We went from posting inconsistently to having a 24/7 
                presence across all platforms. Our engagement is up 340% and we're saving 15+ hours weekly!"
              </p>
              <p className="font-bold text-gray-800">— Sarah Johnson</p>
              <p className="text-sm text-gray-600">Marketing Director, TechStart Inc.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            🚀 Ready to Automate Your Social Success? Let's Get Started!
          </a>
          <p className="text-gray-600 mt-4">No credit card required • Free 14-day trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}