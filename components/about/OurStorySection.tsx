export default function OurStorySection() {
  return (
    <section id="our-story" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </div>

        {/* Story Content */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border-2 border-blue-100 shadow-xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg flex-shrink-0">
              📖
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                AIpath started with a simple goal — to <strong className="text-blue-600">simplify business growth using AI</strong>. 
                Backed by <strong className="text-purple-600">AIpath DigiNext Private Limited</strong>, we combine technology, 
                creativity, and strategy to help businesses automate processes, engage audiences, and achieve measurable results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey reflects our commitment to <strong>innovation, quality, and client success</strong>. 
                Every tool we build, every feature we launch, and every solution we deliver is designed with one purpose: 
                to help businesses thrive in the digital age.
              </p>
            </div>
          </div>

          {/* Timeline/Milestones */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-200">
              <div className="text-4xl mb-2">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2">Founded</h4>
              <p className="text-gray-600 text-sm">With a vision to democratize AI for businesses</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-indigo-200">
              <div className="text-4xl mb-2">🚀</div>
              <h4 className="font-bold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">Launched cutting-edge AI automation tools</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-200">
              <div className="text-4xl mb-2">🌟</div>
              <h4 className="font-bold text-gray-900 mb-2">Growth</h4>
              <p className="text-gray-600 text-sm">Empowering businesses worldwide to scale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}