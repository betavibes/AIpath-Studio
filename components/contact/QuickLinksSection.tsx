export default function QuickLinksSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-500 via-teal-600 to-blue-600 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90">
            Choose the best way to connect with our team
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {/* Request Demo */}
          <a
            href="/demo"
            className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
          >
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Request a Free Demo</h3>
            <p className="text-gray-600 mb-4">
              See AIpath in action with a personalized demo
            </p>
            <span className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
              Book Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          {/* Chat Now */}
          <a
            href="https://wa.me/919044240776"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
          >
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">Chat With Us Now</h3>
            <p className="text-gray-600 mb-4">
              Get instant answers via WhatsApp or Live Chat
            </p>
            <span className="inline-flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all">
              Start Chat
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          {/* Call Us */}
          <a
            href="tel:+919044240776"
            className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
          >
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-2">Call Us Directly</h3>
            <p className="text-gray-600 mb-4">
              Speak with our team for immediate assistance
            </p>
            <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
              Call Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Social Proof */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-1">10K+</div>
              <div className="text-sm text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">&lt;24h</div>
              <div className="text-sm text-white/80">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-sm text-white/80">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/80">Support Available</div>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="text-center mt-12 text-white/90">
          <p className="text-lg">
            AIpath is proudly powered by{" "}
            <a
              href="https://aidiginext.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:underline"
            >
              AIpath DigiNext Private Limited
            </a>
          </p>
          <p className="text-sm mt-2 text-white/70">
            Learn more at{" "}
            <a
              href="https://aidiginext.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              aidiginext.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}