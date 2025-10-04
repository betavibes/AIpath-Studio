import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
          Ready to Automate & Grow with{" "}
          <span className="text-yellow-300">AIpath?</span>
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Your business deserves smarter solutions. Let AIpath help you automate, create, 
          and accelerate your digital growth today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/get-started"
            className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 hover:text-blue-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-2"
          >
            <span>🚀 Get Started</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          <Link
            href="/demo"
            className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-2"
          >
            <span>📅 Book a Free Demo</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">10K+</div>
            <div className="text-blue-100 text-sm">Active Users</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">5M+</div>
            <div className="text-blue-100 text-sm">Tasks Automated</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
            <div className="text-blue-100 text-sm">Satisfaction Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
            <div className="text-blue-100 text-sm">Support Available</div>
          </div>
        </div>

        {/* Subtext */}
        <p className="text-blue-200 mt-8 text-sm">
          No credit card required • Free trial available • Cancel anytime
        </p>
      </div>
    </section>
  );
}