export const metadata = {
  title: "Cookie Policy - AIpath Studio | AIpath DigiNext Private Limited",
  description:
    "Learn about how AIpath Studio uses cookies and similar tracking technologies to enhance your browsing experience.",
};

export default function CookiePolicyPage() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-gray-600 text-lg">
            Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              This Cookie Policy explains how <strong>AIpath DigiNext Private Limited</strong> ("we," "us," or "our") uses 
              cookies and similar tracking technologies on our website{" "}
              <a href="https://www.aidiginext.com" className="text-blue-600 hover:underline">www.aidiginext.com</a> and 
              AIpath Studio services.
            </p>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.1 Essential Cookies</h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Purpose:</strong> These cookies are necessary for the website to function properly. They enable core 
                functionality such as security, network management, and accessibility.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Examples:</strong> Session cookies, authentication cookies, load balancing cookies
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Duration:</strong> Session-based (deleted when you close your browser) or persistent (remain until expiration)
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Can be disabled:</strong> ❌ No - These are required for the website to work
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.2 Performance and Analytics Cookies</h3>
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Purpose:</strong> These cookies collect information about how visitors use our website, such as which 
                pages are visited most often and if users receive error messages. This helps us improve website performance.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Examples:</strong> Google Analytics, page view tracking, bounce rate analysis
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Duration:</strong> Typically 1-2 years
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Can be disabled:</strong> ✅ Yes - Through browser settings or cookie preferences
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.3 Functionality Cookies</h3>
            <div className="bg-pink-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Purpose:</strong> These cookies allow the website to remember choices you make (such as your username, 
                language, or region) and provide enhanced, personalized features.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Examples:</strong> Language preferences, theme settings, remembered login details
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Duration:</strong> Varies (typically 30 days to 1 year)
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Can be disabled:</strong> ✅ Yes - But may affect website functionality
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.4 Targeting and Advertising Cookies</h3>
            <div className="bg-indigo-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Purpose:</strong> These cookies are used to deliver advertisements that are relevant to you and your 
                interests. They also help measure the effectiveness of advertising campaigns.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Examples:</strong> Retargeting cookies, social media advertising pixels, conversion tracking
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Duration:</strong> Typically 30 days to 1 year
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Can be disabled:</strong> ✅ Yes - Through browser settings or cookie preferences
              </p>
            </div>
          </section>

          {/* Specific Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Specific Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gradient-to-r from-blue-100 to-purple-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800 border-b">Cookie Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800 border-b">Purpose</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800 border-b">Type</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800 border-b">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">session_id</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Maintains user session</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Essential</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Session</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">auth_token</td>
                    <td className="px-4 py-3 text-sm text-gray-700">User authentication</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Essential</td>
                    <td className="px-4 py-3 text-sm text-gray-700">7 days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">_ga</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Google Analytics - visitor tracking</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Analytics</td>
                    <td className="px-4 py-3 text-sm text-gray-700">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">_gid</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Google Analytics - session tracking</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Analytics</td>
                    <td className="px-4 py-3 text-sm text-gray-700">24 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">user_preferences</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Stores user settings and preferences</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Functionality</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1 year</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">cookie_consent</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Remembers cookie consent choices</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Essential</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may use third-party services that set cookies on your device. These third parties have their own privacy 
              policies and cookie policies:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">🔹</span>
                <div>
                  <strong className="text-gray-800">Google Analytics:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    We use Google Analytics to analyze website traffic and user behavior. 
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                      Google Privacy Policy
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">🔹</span>
                <div>
                  <strong className="text-gray-800">Social Media Platforms:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Our website includes social media sharing buttons (Twitter, LinkedIn, Facebook, Instagram) that may set cookies.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">🔹</span>
                <div>
                  <strong className="text-gray-800">Payment Processors:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    When you make payments, our payment processors may set cookies for security and fraud prevention.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">🔹</span>
                <div>
                  <strong className="text-gray-800">Email Service Providers:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    We use email tracking to measure campaign effectiveness and engagement.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* How to Control Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How to Control and Delete Cookies</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">5.1 Browser Settings</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Delete cookies after each browsing session</li>
              <li>Accept cookies from specific websites</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">5.2 Browser-Specific Instructions</h3>
            <div className="space-y-2 ml-4">
              <p className="text-gray-700">
                🌐 <strong>Google Chrome:</strong>{" "}
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Cookie settings in Chrome
                </a>
              </p>
              <p className="text-gray-700">
                🦊 <strong>Mozilla Firefox:</strong>{" "}
                <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Cookie settings in Firefox
                </a>
              </p>
              <p className="text-gray-700">
                🧭 <strong>Safari:</strong>{" "}
                <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Cookie settings in Safari
                </a>
              </p>
              <p className="text-gray-700">
                🌊 <strong>Microsoft Edge:</strong>{" "}
                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Cookie settings in Edge
                </a>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">5.3 Opt-Out Tools</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              You can also use these opt-out tools:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Google Analytics Opt-out Browser Add-on
                </a>
              </li>
              <li>
                <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Network Advertising Initiative Opt-Out
                </a>
              </li>
              <li>
                <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Digital Advertising Alliance Opt-Out
                </a>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="text-gray-800 font-semibold mb-1">⚠️ Important Note</p>
              <p className="text-gray-700 text-sm">
                Blocking or deleting cookies may affect your ability to use certain features of our website. Some functionality 
                may not work properly without cookies enabled.
              </p>
            </div>
          </section>

          {/* Do Not Track */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Do Not Track Signals</h2>
            <p className="text-gray-700 leading-relaxed">
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want your online 
              activities tracked. Currently, there is no industry standard for how to respond to DNT signals. We do not currently 
              respond to DNT signals, but we respect your privacy choices and provide cookie control options as described above.
            </p>
          </section>

          {/* Mobile Devices */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Mobile Devices and Apps</h2>
            <p className="text-gray-700 leading-relaxed">
              If you access our services through a mobile device or app, we may collect similar information through mobile 
              identifiers and tracking technologies. You can control tracking through your device settings:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
              <li><strong>iOS:</strong> Settings → Privacy → Tracking → Allow Apps to Request to Track</li>
              <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
            </ul>
          </section>

          {/* Updates to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, 
              or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page and 
              updating the "Last Updated" date.
            </p>
          </section>

          {/* More Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. More Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For more information about how we handle your personal data, please see our{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>. For information about your 
              rights and responsibilities when using our services, please see our{" "}
              <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-800 font-semibold mb-2">AIpath DigiNext Private Limited</p>
              <p className="text-gray-700">📧 Email: <a href="mailto:sales@aidiginext.com" className="text-blue-600 hover:underline">sales@aidiginext.com</a></p>
              <p className="text-gray-700">📧 CC: <a href="mailto:aidiginext@gmail.com" className="text-blue-600 hover:underline">aidiginext@gmail.com</a></p>
              <p className="text-gray-700">📱 Phone (India): <a href="tel:+919044240776" className="text-blue-600 hover:underline">+91 9044240776</a></p>
              <p className="text-gray-700">📱 Phone (New Zealand): <a href="tel:+64275259557" className="text-blue-600 hover:underline">+64 275259557</a></p>
              <p className="text-gray-700">📍 Address: 659, Ganga Vihar, Lucknow 226101, India</p>
              <p className="text-gray-700 mt-2">🌐 Website: <a href="https://www.aidiginext.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aidiginext.com</a></p>
            </div>
          </section>

          {/* Cookie Consent */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-600">
            <p className="text-gray-800 font-semibold mb-2">🍪 Your Cookie Choices</p>
            <p className="text-gray-700 mb-3">
              By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. You can 
              change your cookie preferences at any time through your browser settings.
            </p>
            <p className="text-gray-700 text-sm italic">
              We respect your privacy and are committed to transparency about our use of cookies and tracking technologies.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}