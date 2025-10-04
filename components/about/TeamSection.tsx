export default function TeamSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Minds Behind{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AIpath
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of AI enthusiasts, marketers, designers, and engineers, 
            dedicated to making complex technology accessible and impactful for businesses worldwide.
          </p>
        </div>

        {/* Team Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member Cards */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-200">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              🧠
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
              AI Experts
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Building intelligent solutions that drive real results
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-200">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              🎨
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
              Creative Designers
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Crafting beautiful experiences that users love
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-indigo-200">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              💻
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
              Engineers
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Building robust, scalable platforms that perform
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-pink-200">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              📊
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
              Marketers
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Understanding business needs and delivering value
            </p>
          </div>
        </div>

        {/* Team Values */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-blue-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-3">💡</div>
              <h4 className="font-bold text-gray-900 mb-2">Innovation First</h4>
              <p className="text-gray-600 text-sm">
                Constantly pushing boundaries to deliver cutting-edge solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🤝</div>
              <h4 className="font-bold text-gray-900 mb-2">Client Success</h4>
              <p className="text-gray-600 text-sm">
                Your growth is our success — we're committed to your results
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">⚡</div>
              <h4 className="font-bold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">
                Quality and performance in everything we build and deliver
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}