export default function MissionVisionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Our Mission */}
          <div className="group">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-10 h-full border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                At AIpath, our mission is to <strong className="text-blue-600">empower businesses to work smarter, not harder</strong>. 
                We develop AI-driven solutions that automate repetitive tasks, enhance engagement, and deliver measurable 
                growth — enabling businesses to focus on what really matters: <strong>innovation and scaling</strong>.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="group">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-10 h-full border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  🔮
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision a world where businesses of all sizes can <strong className="text-purple-600">harness the power of AI</strong> to 
                operate efficiently, engage meaningfully with their audience, and grow sustainably. AIpath aims to be the 
                <strong> trusted partner</strong> for companies navigating the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}