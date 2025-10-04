import Link from "next/link";

export default function ContentWritingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Visual - Content Mockup */}
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
              {/* Document Mockup */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white text-xl">
                    ✍️
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Content Document</div>
                    <div className="text-xs text-gray-500">AI-Generated • SEO-Optimized</div>
                  </div>
                </div>

                {/* Content Lines */}
                <div className="space-y-3">
                  <div className="h-4 bg-gradient-to-r from-blue-200 to-indigo-200 rounded w-full"></div>
                  <div className="h-4 bg-gradient-to-r from-blue-200 to-indigo-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gradient-to-r from-blue-200 to-indigo-200 rounded w-full"></div>
                  <div className="h-4 bg-gradient-to-r from-blue-200 to-indigo-200 rounded w-4/5"></div>
                  
                  <div className="py-2"></div>
                  
                  <div className="h-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded w-full"></div>
                  <div className="h-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded w-11/12"></div>
                  <div className="h-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded w-5/6"></div>
                </div>

                {/* Stats Bar */}
                <div className="flex gap-4 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">1,247</div>
                    <div className="text-xs text-gray-500">Words</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">98%</div>
                    <div className="text-xs text-gray-500">SEO Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">5 min</div>
                    <div className="text-xs text-gray-500">Generated</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full shadow-xl text-sm font-bold">
                SEO Ready ✓
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✍️ Content Writing Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Words That <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Inspire & Convert</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Great content doesn't just fill space — it tells stories, builds trust, and drives action. 
              AIpath Creative Studio creates high-quality, on-brand content that's SEO-friendly, reader-focused, 
              and designed to convert visitors into customers.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white text-xl">
                  📝
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Website Content, Blogs & Ad Copy</h3>
                  <p className="text-gray-600">From landing pages to long-form articles, we craft content that engages and converts.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
                  🛍️
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Product Descriptions & Marketing Copy</h3>
                  <p className="text-gray-600">Compelling product narratives that highlight benefits and drive purchasing decisions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl">
                  🔍
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">SEO Keyword Integration</h3>
                  <p className="text-gray-600">Natural keyword placement that ranks well on search engines without sounding robotic.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl">
                  ⚡
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Fast Turnaround with AI + Human Touch</h3>
                  <p className="text-gray-600">AI-powered speed combined with human editing for quality, tone, and brand alignment.</p>
                </div>
              </div>
            </div>

            {/* Mini CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              ✍️ Let's craft your story
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}