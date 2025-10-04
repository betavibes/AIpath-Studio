import Link from "next/link";

export default function ProductBrandingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎨 Product Branding
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build a Brand That <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Speaks</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Your brand is more than a logo — it's the feeling people get when they interact with your business. 
              At AIpath Creative Studio, we help you craft a visual identity and brand voice that resonates with 
              your audience and stands out in the market.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl">
                  🎯
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Complete Visual Identity</h3>
                  <p className="text-gray-600">Logo design, color palette, typography, and visual branding strategy that tells your story.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl">
                  🤖
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">AI-Powered Design Suggestions</h3>
                  <p className="text-gray-600">Get instant mockups, variations, and design options powered by cutting-edge AI technology.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl">
                  🌐
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Digital-First Brand Identity</h3>
                  <p className="text-gray-600">Optimized for web, social media, print, and every touchpoint where your brand appears.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
                  ✨
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Consistent Tone & Style</h3>
                  <p className="text-gray-600">Maintain brand consistency across all platforms with our comprehensive brand guidelines.</p>
                </div>
              </div>
            </div>

            {/* Mini CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              🎨 Let's design your next big brand
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
              {/* Brand Elements Mockup */}
              <div className="space-y-6">
                {/* Logo Mockup */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl"></div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 font-semibold">PRIMARY LOGO</div>
                </div>

                {/* Color Palette */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-xs text-gray-500 font-semibold mb-3">COLOR PALETTE</div>
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg"></div>
                    <div className="w-12 h-12 bg-pink-600 rounded-lg"></div>
                    <div className="w-12 h-12 bg-orange-500 rounded-lg"></div>
                    <div className="w-12 h-12 bg-gray-900 rounded-lg"></div>
                  </div>
                </div>

                {/* Typography */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-xs text-gray-500 font-semibold mb-3">TYPOGRAPHY</div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">Heading Style</div>
                  <div className="text-base text-gray-600">Body text style for content</div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-xl font-bold">
                AI-Powered ✨
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}