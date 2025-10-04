import Link from "next/link";

export default function AIBlogsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🧠 AI-Based Blogs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Smarter Content for <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Smarter Growth</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Publishing consistent, high-quality blog content is one of the best ways to grow your business — but it's 
              time-consuming. With AIpath's intelligent blog writing system, you can publish faster, rank higher, and 
              maintain your unique brand voice without the hassle.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
                  💡
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Generate Topics, Outlines & Complete Blogs</h3>
                  <p className="text-gray-600">From ideation to final draft in minutes — AI handles the heavy lifting.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl">
                  🔍
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Automatic SEO Optimization</h3>
                  <p className="text-gray-600">Built-in keyword research, meta descriptions, and search engine best practices.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl">
                  🎨
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Brand Tone & Personality Customization</h3>
                  <p className="text-gray-600">Your voice, your style — AI adapts to match your brand's unique personality.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl">
                  🚀
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Perfect for Startups & Small Businesses</h3>
                  <p className="text-gray-600">Build authority and drive organic traffic without hiring a full content team.</p>
                </div>
              </div>
            </div>

            {/* Mini CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              🧠 Get your first AI-generated blog
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right Visual - Blog Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              {/* Blog Post Mockup */}
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    BLOG POST
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    10 Ways AI is Transforming Modern Business
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>📅 May 15, 2024</span>
                    <span>⏱️ 5 min read</span>
                    <span>👁️ 2.4K views</span>
                  </div>
                </div>

                {/* Content Preview */}
                <div className="space-y-3">
                  <div className="h-3 bg-gradient-to-r from-indigo-200 to-purple-200 rounded w-full"></div>
                  <div className="h-3 bg-gradient-to-r from-indigo-200 to-purple-200 rounded w-11/12"></div>
                  <div className="h-3 bg-gradient-to-r from-indigo-200 to-purple-200 rounded w-full"></div>
                  <div className="h-3 bg-gradient-to-r from-indigo-200 to-purple-200 rounded w-10/12"></div>
                  
                  <div className="py-2"></div>
                  
                  <div className="h-3 bg-gradient-to-r from-purple-200 to-pink-200 rounded w-full"></div>
                  <div className="h-3 bg-gradient-to-r from-purple-200 to-pink-200 rounded w-9/12"></div>
                </div>

                {/* SEO Metrics */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-xs text-gray-500 font-semibold mb-3">SEO PERFORMANCE</div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">95</div>
                      <div className="text-xs text-gray-500">SEO Score</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">12</div>
                      <div className="text-xs text-gray-500">Keywords</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">A+</div>
                      <div className="text-xs text-gray-500">Readability</div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">AI</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">Business</span>
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">Technology</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full shadow-xl text-sm font-bold">
                AI Generated ✨
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <div className="text-3xl font-bold text-indigo-600">5 min</div>
                <div className="text-xs text-gray-600">Average Creation Time</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600">10x</div>
                <div className="text-xs text-gray-600">Faster Than Manual</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}