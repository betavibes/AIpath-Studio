import Link from "next/link";

export default function BusinessAutomationsSection() {
  const automations = [
    {
      icon: "⚡",
      title: "Smart Triggers & Workflows",
      description: "Set up intelligent automation rules that execute tasks based on customer actions, time, or data changes",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "✅",
      title: "Reduce Manual Errors",
      description: "Eliminate human mistakes with consistent, accurate automated processes that run perfectly every time",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "📈",
      title: "Improve Team Productivity",
      description: "Free your team from repetitive tasks so they can focus on high-value activities that drive growth",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: "🔗",
      title: "Seamless Integrations",
      description: "Connect with your CRM, email platforms, social media tools, and hundreds of other apps effortlessly",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⚙️ Business Automations
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Save Time, Scale Faster
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Stop wasting hours on repetitive tasks. AIpath automates your business processes — 
            from task management and follow-ups to customer notifications and data entry. 
            Focus on what matters: growing your business.
          </p>
        </div>

        {/* Automations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {automations.map((automation, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${automation.color} flex items-center justify-center text-3xl mb-6`}>
                {automation.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {automation.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {automation.description}
              </p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What Can You Automate?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-4xl mb-3">📋</div>
              <div className="font-semibold text-gray-900 mb-2">Task Management</div>
              <div className="text-sm text-gray-600">Auto-assign, track, and complete tasks without manual intervention</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-4xl mb-3">🔔</div>
              <div className="font-semibold text-gray-900 mb-2">Smart Notifications</div>
              <div className="text-sm text-gray-600">Send timely alerts to customers and team members automatically</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
              <div className="text-4xl mb-3">🔄</div>
              <div className="font-semibold text-gray-900 mb-2">Follow-Up Sequences</div>
              <div className="text-sm text-gray-600">Never miss a follow-up with automated reminder sequences</div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              80%
            </div>
            <div className="text-gray-600 font-medium">Time Saved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div className="text-gray-600 font-medium">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              3x
            </div>
            <div className="text-gray-600 font-medium">Productivity Boost</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-gray-600 font-medium">Integrations</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            ⚡ Streamline your workflow with AIpath Automations
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}