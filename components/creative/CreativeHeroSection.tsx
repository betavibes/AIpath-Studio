import Link from "next/link";

export default function CreativeHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-32 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Where Creativity Meets Intelligence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            AIpath Creative Studio – Design, Write, and Build Your Brand with the Power of AI.
          </p>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Your brand deserves more than just attention — it deserves connection. At AIpath Creative Studio, 
              we combine creative thinking with artificial intelligence to help you design, write, and visualize 
              your brand's story like never before. From brand strategy and AI-generated visuals to SEO-optimized 
              blogs that build authority, we're here to help you stand out, communicate better, and grow faster.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Let's Create Together
            </Link>
            <Link
              href="#portfolio"
              className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 hover:shadow-lg transition-all duration-300"
            >
              Explore Our Work
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-gray-900 mb-1">Brand Design</h3>
              <p className="text-sm text-gray-600">Visual identity that speaks</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="font-bold text-gray-900 mb-1">Content Writing</h3>
              <p className="text-sm text-gray-600">Words that convert</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-3">📸</div>
              <h3 className="font-bold text-gray-900 mb-1">AI Photoshoots</h3>
              <p className="text-sm text-gray-600">Studio-grade visuals</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="font-bold text-gray-900 mb-1">SEO Blogs</h3>
              <p className="text-sm text-gray-600">Content that ranks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}