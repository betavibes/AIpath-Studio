export default function EngagementBotSection() {
  const features = [
    {
      icon: "💬",
      title: "Auto DM Replies",
      description: "Respond to direct messages instantly with personalized, context-aware replies",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "💭",
      title: "Comment Engagement Bot",
      description: "Engage with comments naturally, building relationships while you sleep",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🧠",
      title: "AI Smart Responses",
      description: "Natural language AI that sounds just like your brand voice",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🏷️",
      title: "Lead Tagging & CRM Sync",
      description: "Automatically tag leads and sync conversations to your CRM",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI That Talks Back — Just Like You Would
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            AIpath's intelligent AI Reply Bot handles comments, DMs, and audience interactions naturally, 
            ensuring your brand is responsive 24/7 without manual effort. Never miss a conversation, 
            never lose a lead — AI keeps your audience engaged around the clock.
          </p>
        </div>

        {/* Visual Demo Mockup */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl">
                🤖
              </div>
              <div>
                <h3 className="text-white font-bold">AI Engagement Bot</h3>
                <p className="text-indigo-100 text-sm">Active • Responding in real-time</p>
              </div>
              <div className="ml-auto">
                <span className="bg-green-400 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  LIVE
                </span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4 bg-gray-50 min-h-[300px]">
              {/* User Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  U
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                  <p className="text-gray-800">Hey! Do you offer social media management?</p>
                  <span className="text-xs text-gray-400">2:34 PM</span>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-3 justify-end">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-lg shadow-sm max-w-xs">
                  <p className="text-white">Hi! Yes, we do! 🚀 AIpath automates your entire social media presence — from scheduling posts to engaging with your audience. Want to see how it works?</p>
                  <span className="text-xs text-indigo-200">2:34 PM • AI Reply</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                  🤖
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  U
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                  <p className="text-gray-800">That sounds great! What platforms do you support?</p>
                  <span className="text-xs text-gray-400">2:35 PM</span>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-3 justify-end">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-lg shadow-sm max-w-xs">
                  <p className="text-white">We support all major platforms: Facebook, Instagram, LinkedIn, Twitter(X), Reddit, and YouTube! 🌐 You can manage everything from one dashboard. Let's schedule a free demo?</p>
                  <span className="text-xs text-indigo-200">2:35 PM • AI Reply</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                  🤖
                </div>
              </div>

              {/* Typing Indicator */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  U
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="bg-white border-t border-gray-200 p-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-indigo-600">247</p>
                <p className="text-xs text-gray-600">Messages Today</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">98%</p>
                <p className="text-xs text-gray-600">Response Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-pink-600">&lt;30s</p>
                <p className="text-xs text-gray-600">Avg Response Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className={`text-4xl mb-4 inline-block p-3 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-10`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            💬 Activate Your AI Engagement Bot Now!
          </a>
        </div>
      </div>
    </section>
  );
}