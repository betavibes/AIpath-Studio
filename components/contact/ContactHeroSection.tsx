export default function ContactHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 py-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
            Let's Connect and Grow Together
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Have questions or want a demo? We're here to help.
        </p>

        {/* Description */}
        <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
          Whether you're curious about our AI-powered automation tools, creative services, or social media solutions, 
          our team at <span className="font-semibold text-green-600">AIpath</span> is ready to guide you. 
          Reach out today and explore how AIpath can accelerate your business growth.
        </p>

        {/* CTA Button */}
        <a
          href="#contact-form"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          🚀 Schedule a Free Demo
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Quick Contact Info */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📧</span>
            <span>Sales@aidiginext.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📞</span>
            <span>+91 9044240776</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💬</span>
            <span>Live Chat Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}