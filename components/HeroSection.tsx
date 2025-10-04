import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Brand Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AIpath
            </span>
          </h1>

          {/* Tagline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Automate. Create. Accelerate.
          </h2>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
              AIpath empowers businesses to thrive in the digital age with cutting-edge AI-powered solutions. 
              From intelligent automation to creative branding, we transform the way you work and grow. 
              Our platform combines smart chatbots, content creation, social media automation, and lead generation 
              to help you scale faster and smarter.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Whether you're a startup looking to make your mark or an enterprise seeking to optimize operations, 
              AIpath delivers the tools and innovation you need to stay ahead of the competition.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-started"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          {/* Visual Elements */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">AI Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">10x</div>
              <div className="text-sm text-gray-600">Faster Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">∞</div>
              <div className="text-sm text-gray-600">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}