import Link from "next/link";

export default function AboutHeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Empowering Businesses
          </span>
          <br />
          <span className="text-gray-900">with AI</span>
        </h1>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
          Automate. Create. Accelerate.
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          AIpath is your all-in-one AI-powered platform designed to help businesses automate workflows, 
          create compelling content, and accelerate growth. From intelligent chatbots to social media 
          automation, content creation, and branding solutions, we provide tools that make digital 
          marketing and business operations smarter and simpler.
        </p>

        {/* Pro Tip Box */}
        <div className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl p-6 mb-8 max-w-3xl mx-auto shadow-lg">
          <div className="flex items-start gap-3">
            <span className="text-3xl">💡</span>
            <div className="text-left">
              <p className="text-sm font-semibold text-blue-600 mb-1">PRO TIP</p>
              <p className="text-gray-700 leading-relaxed">
                <strong>AIpath Studio</strong> is proudly powered by{" "}
                <strong className="text-blue-600">AIpath DigiNext Private Limited</strong> — 
                a company committed to innovation and helping businesses succeed in the digital era.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="#our-story"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          📖 Learn More About Our Story
        </Link>
      </div>
    </section>
  );
}