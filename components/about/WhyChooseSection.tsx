import Link from "next/link";

export default function WhyChooseSection() {
  const strengths = [
    {
      icon: "🎯",
      title: "All-in-One AI Platform",
      description: "Automation, social media, content, and branding solutions in a single hub.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: "🚀",
      title: "Innovative AI Solutions",
      description: "Tools designed to increase efficiency, engagement, and conversions.",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: "📈",
      title: "Scalable for Any Business",
      description: "Whether you are a startup or enterprise, AIpath grows with you.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: "💬",
      title: "Dedicated Support",
      description: "Personalized guidance to ensure you succeed with AI-driven strategies.",
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AIpath?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AIpath stands out by combining cutting-edge AI technology, creative solutions, 
            and user-friendly tools — all in one platform.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-200"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${strength.gradient} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {strength.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {strength.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            🔍 See How We Can Help Your Business
          </Link>
        </div>
      </div>
    </section>
  );
}