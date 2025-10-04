export default function DirectContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Other Ways to Reach Us
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose the method that works best for you
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Email Us */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-green-500">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
            <a
              href="mailto:Sales@aidiginext.com"
              className="text-green-600 hover:text-green-700 font-semibold break-all"
            >
              Sales@aidiginext.com
            </a>
            <p className="text-sm text-gray-500 mt-3">
              We'll respond within 24 hours
            </p>
          </div>

          {/* Call Us */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-teal-500">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
            <div className="space-y-2">
              <a
                href="tel:+919044240776"
                className="block text-teal-600 hover:text-teal-700 font-semibold"
              >
                +91 9044240776
              </a>
              <p className="text-xs text-gray-500">(India)</p>
              <a
                href="tel:+64275259557"
                className="block text-teal-600 hover:text-teal-700 font-semibold mt-2"
              >
                +64 275259557
              </a>
              <p className="text-xs text-gray-500">(New Zealand)</p>
            </div>
          </div>

          {/* Chat with Us */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-blue-500">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Chat with Us</h3>
            <p className="text-gray-700 mb-3">Live Chat Support</p>
            <a
              href="https://wa.me/919044240776"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              WhatsApp Available
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Visit Us */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-purple-500">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
            <p className="text-gray-700 mb-3">
              659, Ganga Vihar<br />
              Lucknow 226101
            </p>
            <a
              href="https://maps.google.com/?q=659+Ganga+Vihar+Lucknow+226101"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
            >
              View on Map
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto text-center">
          <div className="text-4xl mb-4">🕘</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM IST
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Weekend support available via email
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16">
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Find Us on the Map</h3>
            <div className="w-full h-96 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnNDYuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AIpath Office Location"
              ></iframe>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              📍 659, Ganga Vihar, Lucknow 226101, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}