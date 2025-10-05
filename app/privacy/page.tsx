export const metadata = {
  title: "Privacy Policy - AIpath Studio | AIpath DigiNext Private Limited",
  description:
    "Learn how AIpath Studio collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg">
            Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to AIpath Studio, operated by <strong>AIpath DigiNext Private Limited</strong> ("we," "us," or "our"). 
              We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you visit our website{" "}
              <a href="https://www.aidiginext.com" className="text-blue-600 hover:underline">www.aidiginext.com</a> and use 
              our AI-powered services including CRM, Creative Content, AI Photoshoots, Email Campaigns, and Social Media Automation.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.1 Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Register for an account or request a demo</li>
              <li>Fill out contact forms or subscribe to our services</li>
              <li>Communicate with us via email, phone, or chat</li>
              <li>Use our AI-powered tools and services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              This information may include: name, email address, phone number, company name, job title, billing information, 
              and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited, time spent on pages, and navigation patterns</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.3 Service Usage Data</h3>
            <p className="text-gray-700 leading-relaxed">
              When you use our AI-powered services (CRM, Creative Studio, Social Automation, etc.), we collect data related to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
              <li>Content you create, upload, or generate using our AI tools</li>
              <li>Campaign performance metrics and analytics</li>
              <li>Integration data with third-party platforms</li>
              <li>Customer interactions and chatbot conversations</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our AI-powered services</li>
              <li><strong>Account Management:</strong> To create and manage your account, process payments, and provide customer support</li>
              <li><strong>Communication:</strong> To send you service updates, marketing communications, and respond to your inquiries</li>
              <li><strong>Personalization:</strong> To customize your experience and provide relevant content and recommendations</li>
              <li><strong>Analytics:</strong> To analyze usage patterns, improve our services, and develop new features</li>
              <li><strong>Security:</strong> To detect, prevent, and address technical issues, fraud, and security threats</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., payment processing, email delivery, hosting)</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to 
              protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required or permitted by law. When we no longer need your information, we will 
              securely delete or anonymize it.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
              <li><strong>Objection:</strong> Object to our processing of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time (where processing is based on consent)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:sales@aidiginext.com" className="text-blue-600 hover:underline">sales@aidiginext.com</a>.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our website. For detailed information 
              about our use of cookies, please see our{" "}
              <a href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</a>.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these 
              external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information 
              from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure 
              appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy 
              periodically.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
        </div>
      </div>
    </main>
  );
}