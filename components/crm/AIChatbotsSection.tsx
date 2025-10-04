import Link from "next/link";

export default function AIChatbotsSection() {
  const features = [
    {
      icon: "🌍",
      title: "Available 24/7",
      description: "Instant responses to customer queries, any time of day or night",
    },
    {
      icon: "🗣️",
      title: "Multilingual Support",
      description: "Customizable personalities that speak your customers' language",
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      description: "Works with websites, WhatsApp, Facebook, and your CRM",
    },
    {
      icon: "🎯",
      title: "Lead Conversion",
      description: "Converts casual visitors into qualified leads automatically",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🤖 AI Chatbots
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Your 24/7 Digital Assistant
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Imagine having a tireless team member who never sleeps, never takes a break, 
              and always knows exactly what to say. That's what AIpath's AI Chatbots bring 
              to your business. They engage customers instantly, answer FAQs with precision, 
              capture valuable leads, and improve satisfaction — all automatically.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Whether it's handling customer support, qualifying leads, or booking appointments, 
              our chatbots work around the clock to ensure no opportunity is missed. They learn 
              from every interaction, getting smarter and more helpful over time.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-2xl flex-shrink-0">{feature.icon}</div>
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              💬 Let's build your chatbot today!
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-xl">
              {/* Chat Interface Mockup */}
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    AI
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">AIpath Assistant</div>
                    <div className="text-xs text-green-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      Online
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                      <p className="text-sm text-gray-800">Hi! How can I help you today? 👋</p>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                      <p className="text-sm">I need help with pricing</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                      <p className="text-sm text-gray-800">I'd be happy to help! Let me show you our plans... 📊</p>
                    </div>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                  <span>AI is typing...</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-xs text-gray-600 mt-1">Satisfaction</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-indigo-600">24/7</div>
                  <div className="text-xs text-gray-600 mt-1">Available</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-purple-600">3x</div>
                  <div className="text-xs text-gray-600 mt-1">More Leads</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}