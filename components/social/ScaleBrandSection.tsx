export default function ScaleBrandSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Social Automation that Grows with You
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're a startup finding your voice or an enterprise managing multiple brands, 
            AIpath's automation tools help you maintain a strong digital presence at scale. 
            From one post to thousands, we've got you covered.
          </p>
        </div>

        {/* Animated Flow Diagram */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              🔄 Your Automated Social Media Workflow
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
              {/* Step 1 */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg hover:scale-110 transition-all">
                  ✍️
                </div>
                <h4 className="font-bold text-gray-800 text-sm">Create</h4>
                <p className="text-xs text-gray-600">Write or generate content</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-center text-3xl text-indigo-400">→</div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg hover:scale-110 transition-all">
                  🧠
                </div>
                <h4 className="font-bold text-gray-800 text-sm">AI Optimizes</h4>
                <p className="text-xs text-gray-600">Captions, hashtags, timing</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-center text-3xl text-purple-400">→</div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg hover:scale-110 transition-all">
                  📅
                </div>
                <h4 className="font-bold text-gray-800 text-sm">Schedule</h4>
                <p className="text-xs text-gray-600">Best time for engagement</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-center text-3xl text-pink-400">→</div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg hover:scale-110 transition-all">
                  🚀
                </div>
                <h4 className="font-bold text-gray-800 text-sm">Auto-Publish</h4>
                <p className="text-xs text-gray-600">Posts go live automatically</p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Step 5 */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg hover:scale-110 transition-all">
                  📊
                </div>
                <h4 className="font-bold text-gray-800 text-sm">Analyze</h4>
                <p className="text-xs text-gray-600">Track performance & insights</p>
              </div>

              {/* Step 6 */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg hover:scale-110 transition-all">
                  🔁
                </div>
                <h4 className="font-bold text-gray-800 text-sm">Repeat</h4>
                <p className="text-xs text-gray-600">Continuous optimization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scale Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* For Startups */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">For Startups</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Launch your brand with consistent posting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Build audience without hiring a team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Affordable automation from day one</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Scale as you grow</span>
              </li>
            </ul>
          </div>

          {/* For Growing Businesses */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">For Growing Businesses</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Manage multiple platforms effortlessly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Run campaigns at scale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Advanced analytics & insights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Team collaboration tools</span>
              </li>
            </ul>
          </div>

          {/* For Enterprises */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">For Enterprises</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Multi-brand management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Custom workflows & approvals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Enterprise-grade security</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Dedicated support & training</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">10K+</p>
              <p className="text-gray-600 mt-2">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">5M+</p>
              <p className="text-gray-600 mt-2">Posts Automated</p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">50+</p>
              <p className="text-gray-600 mt-2">Countries</p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">99.9%</p>
              <p className="text-gray-600 mt-2">Uptime</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
          >
            🔥 Start My Automation
          </a>
          <a
            href="/demo"
            className="bg-white text-indigo-600 border-2 border-indigo-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 hover:shadow-xl transition-all duration-300 text-center"
          >
            📈 Request a Free Demo
          </a>
        </div>
      </div>
    </section>
  );
}