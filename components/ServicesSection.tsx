export default function ServicesSection() {
  const services = [
    {
      title: "AI Chatbots",
      description: "Smart bots to engage, support, and convert your customers 24/7.",
      icon: "💬",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Automations",
      description: "Streamline repetitive tasks and save time with intelligent workflows.",
      icon: "⚡",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Product Branding",
      description: "Build strong brand identity with design, strategy, and AI-powered visuals.",
      icon: "🎨",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Content Writing Services",
      description: "High-quality blogs, ad copy, and content tailored to your voice.",
      icon: "✍️",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Social Media Automation",
      description: "Schedule, post, and manage campaigns across platforms effortlessly.",
      icon: "📱",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "AI Photoshoots",
      description: "Create stunning, cost-effective product and lifestyle photos with AI.",
      icon: "📸",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "AI-Based Blogs",
      description: "SEO-friendly, AI-generated blogs that boost your search rankings.",
      icon: "📝",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Email Campaigns",
      description: "Targeted, automated campaigns to reach and convert the right audience.",
      icon: "📧",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Leads Collection from Google Maps",
      description: "Gather verified business leads directly from Google Maps for smarter outreach.",
      icon: "📍",
      gradient: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our AI-Powered Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to transform your business and accelerate growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect - Learn More */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className={`text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text font-semibold inline-flex items-center`}>
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}