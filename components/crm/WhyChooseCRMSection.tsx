export default function WhyChooseCRMSection() {
  const advantages = [
    {
      icon: "🎯",
      title: "All-in-One Automation Suite",
      description: "Everything you need in one platform — chatbots, workflows, email campaigns, and lead collection. No need to juggle multiple tools.",
    },
    {
      icon: "🚀",
      title: "Easy to Use, No Coding Needed",
      description: "Intuitive drag-and-drop interface that anyone can master. Set up powerful automations without technical expertise.",
    },
    {
      icon: "⚡",
      title: "Fast Setup and Integration",
      description: "Get started in minutes, not weeks. Seamlessly connects with your existing CRM, email, and business tools.",
    },
    {
      icon: "📊",
      title: "Real-Time Insights and Reporting",
      description: "Track performance with detailed analytics. Make data-driven decisions to optimize your growth strategy.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose AIpath Solutions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            AIpath isn't just a tool — it's your growth partner. Our AI-driven automations 
            reduce effort, increase conversions, and help you scale faster with precision.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-3xl">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            AIpath vs. Traditional Methods
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Way */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">😓</div>
                <div className="font-bold text-gray-900">Traditional Way</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Hours of manual data entry</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Missed follow-ups and opportunities</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Inconsistent customer experience</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Limited scalability</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>High operational costs</span>
                </li>
              </ul>
            </div>

            {/* AIpath Way */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 shadow-lg text-white">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🚀</div>
                <div className="font-bold">The AIpath Way</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span>Automated workflows save 80% of time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span>Never miss a lead or follow-up</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span>Consistent, personalized engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span>Scale effortlessly as you grow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  <span>Reduce costs while improving results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-sm text-gray-600 font-medium">Active Users</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
            <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-600 font-medium">Uptime SLA</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600 font-medium">Customer Rating</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600 font-medium">Support Available</div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border-l-4 border-blue-600">
          <div className="flex items-start gap-4">
            <div className="text-5xl">💬</div>
            <div>
              <p className="text-lg text-gray-700 italic mb-4">
                "AIpath transformed our business operations. We've automated 90% of our repetitive 
                tasks, tripled our lead generation, and our team can now focus on what really matters — 
                building relationships and closing deals. Best investment we've made this year."
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-600">CEO, TechGrowth Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}