import Link from "next/link";

export default function AIPhotoshootsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📸 AI Photoshoots
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Visuals <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">Without Cameras</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Say goodbye to expensive photoshoots, logistics, and long wait times. With AIpath's AI Photoshoot service, 
            you can generate studio-grade product and lifestyle photos in any setting — instantly, affordably, and with 
            hyper-realistic results.
          </p>
        </div>

        {/* Visual Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Photo Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
            <div className="aspect-square bg-gradient-to-br from-pink-200 to-orange-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📦</div>
                <div className="text-gray-700 font-semibold">Product Photography</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div className="text-white">
                <div className="font-bold mb-1">eCommerce Ready</div>
                <div className="text-sm">Perfect for online stores</div>
              </div>
            </div>
          </div>

          {/* Photo Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
            <div className="aspect-square bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👤</div>
                <div className="text-gray-700 font-semibold">Lifestyle Shots</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div className="text-white">
                <div className="font-bold mb-1">Personal Branding</div>
                <div className="text-sm">Professional headshots & more</div>
              </div>
            </div>
          </div>

          {/* Photo Card 3 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
            <div className="aspect-square bg-gradient-to-br from-red-200 to-purple-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <div className="text-gray-700 font-semibold">Ad Creatives</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div className="text-white">
                <div className="font-bold mb-1">Marketing Campaigns</div>
                <div className="text-sm">Eye-catching ad visuals</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-gray-900 mb-2">Any Setting, Any Style</h3>
            <p className="text-sm text-gray-600">Generate photos in any environment — beach, studio, office, or fantasy world.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-bold text-gray-900 mb-2">No Physical Shoots Needed</h3>
            <p className="text-sm text-gray-600">Save thousands on photographers, models, locations, and equipment.</p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🛍️</div>
            <h3 className="font-bold text-gray-900 mb-2">Perfect for eCommerce</h3>
            <p className="text-sm text-gray-600">Create stunning product images that boost conversions and sales.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="font-bold text-gray-900 mb-2">Hyper-Realistic Results</h3>
            <p className="text-sm text-gray-600">High-resolution, professional-grade images that look 100% real.</p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-pink-600 via-orange-600 to-red-600 rounded-2xl p-8 text-white mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10x</div>
              <div className="text-sm opacity-90">Faster Than Traditional</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-sm opacity-90">Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4K</div>
              <div className="text-sm opacity-90">High Resolution</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-sm opacity-90">Unlimited Variations</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all"
          >
            📸 Try an AI Photoshoot today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}