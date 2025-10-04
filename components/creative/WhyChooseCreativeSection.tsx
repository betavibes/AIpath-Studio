export default function WhyChooseCreativeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">AIpath Creative Studio</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At AIpath Creative Studio, creativity isn't just about visuals — it's about vision. We bring together 
            AI precision and human imagination to craft brand stories that inspire, engage, and sell.
          </p>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
              🤖
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI + Human Creativity</h3>
            <p className="text-gray-600">
              Blends cutting-edge AI technology with real creative strategy for unmatched results.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
              🎯
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">One-Stop Solution</h3>
            <p className="text-gray-600">
              Branding, content, design, and visuals — everything you need under one roof.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning-Fast Delivery</h3>
            <p className="text-gray-600">
              Affordable, scalable, and incredibly fast — without compromising on quality.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
              ✨
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted by Modern Brands</h3>
            <p className="text-gray-600">
              Helping startups, agencies, and businesses build powerful digital identities.
            </p>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Traditional Creative Agency vs AIpath Creative Studio
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Way */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">😓</div>
                <h4 className="text-xl font-bold text-gray-900">Traditional Agency</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Weeks or months for delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">High costs and retainer fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Limited revisions and iterations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Separate vendors for different services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                  <span className="text-gray-700">Slow communication and feedback loops</span>
                </li>
              </ul>
            </div>

            {/* AIpath Way */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 shadow-xl text-white">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">🚀</div>
                <h4 className="text-xl font-bold">AIpath Creative Studio</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-300 text-xl flex-shrink-0">✓</span>
                  <span>Delivery in days, sometimes hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-300 text-xl flex-shrink-0">✓</span>
                  <span>Affordable, transparent pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-300 text-xl flex-shrink-0">✓</span>
                  <span>Unlimited revisions with AI speed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-300 text-xl flex-shrink-0">✓</span>
                  <span>All creative services in one place</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-300 text-xl flex-shrink-0">✓</span>
                  <span>Real-time collaboration and updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Brands Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-sm opacity-90">Content Pieces</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-sm opacity-90">AI Images Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}