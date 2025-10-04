import Link from "next/link";

export default function CRMHeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Smart Automation Solutions{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              That Drive Growth
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mb-8">
            Automate your operations, engage smarter, and grow faster with AIpath.
          </h2>

          {/* Intro Message */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              AIpath helps businesses automate conversations, campaigns, and lead collection — 
              so you can focus on scaling, not manual tasks. From AI chatbots to smart workflows 
              and targeted marketing, AIpath empowers your business to work smarter every day. 
              <span className="font-semibold text-gray-900"> No code. No hassle. Just results.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/demo"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Book a Free Demo
            </Link>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-indigo-600 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Talk to an Expert
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">🤖</div>
              <div className="text-sm font-semibold text-gray-900">AI Chatbots</div>
              <div className="text-xs text-gray-600 mt-1">24/7 Engagement</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-sm font-semibold text-gray-900">Smart Workflows</div>
              <div className="text-xs text-gray-600 mt-1">Zero Manual Work</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">📧</div>
              <div className="text-sm font-semibold text-gray-900">Email Campaigns</div>
              <div className="text-xs text-gray-600 mt-1">Targeted Marketing</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">📍</div>
              <div className="text-sm font-semibold text-gray-900">Lead Collection</div>
              <div className="text-xs text-gray-600 mt-1">From Google Maps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}