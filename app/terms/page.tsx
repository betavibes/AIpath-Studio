export const metadata = {
  title: "Terms of Service - AIpath Studio | AIpath DigiNext Private Limited",
  description:
    "Read the Terms of Service for AIpath Studio. Understand your rights and responsibilities when using our AI-powered services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-600 text-lg">
            Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to AIpath Studio. These Terms of Service ("Terms") constitute a legally binding agreement between you 
              ("User," "you," or "your") and <strong>AIpath DigiNext Private Limited</strong> ("AIpath," "we," "us," or "our") 
              governing your access to and use of our website{" "}
              <a href="https://www.aidiginext.com" className="text-blue-600 hover:underline">www.aidiginext.com</a> and our 
              AI-powered services including CRM, Creative Content, AI Photoshoots, Email Campaigns, Social Media Automation, 
              and AI Chatbots (collectively, the "Services").
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, 
              you must not access or use our Services.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
            <p className="text-gray-700 leading-relaxed">
              You must be at least 18 years old and have the legal capacity to enter into binding contracts to use our Services. 
              By using our Services, you represent and warrant that you meet these eligibility requirements.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              If you are using our Services on behalf of a business or organization, you represent that you have the authority 
              to bind that entity to these Terms.
            </p>
          </section>

          {/* Account Registration */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration and Security</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">3.1 Account Creation</h3>
            <p className="text-gray-700 leading-relaxed">
              To access certain features of our Services, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">3.2 Account Responsibility</h3>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for all activities that occur under your account. We are not liable for any loss or damage 
              arising from your failure to maintain account security.
            </p>
          </section>

          {/* Services Description */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              AIpath Studio provides AI-powered business solutions including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>AIpath CRM:</strong> Customer relationship management with AI-driven insights and automation</li>
              <li><strong>Creative Studio:</strong> AI-powered content creation, image generation, and design tools</li>
              <li><strong>Social Media Automation:</strong> Automated posting, scheduling, and engagement management</li>
              <li><strong>Email Campaigns:</strong> AI-optimized email marketing and campaign management</li>
              <li><strong>AI Chatbots:</strong> Intelligent customer support and engagement bots</li>
              <li><strong>AI Photoshoots:</strong> AI-generated product photography and visual content</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time with or without notice.
            </p>
          </section>

          {/* Subscription and Payment */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Subscription and Payment Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">5.1 Pricing</h3>
            <p className="text-gray-700 leading-relaxed">
              Our Services are offered on a subscription basis with various pricing tiers. All fees are stated in the applicable 
              currency and are exclusive of applicable taxes unless otherwise stated.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">5.2 Billing</h3>
            <p className="text-gray-700 leading-relaxed">
              By subscribing to our Services, you authorize us to charge your payment method on a recurring basis according to 
              your selected billing cycle (monthly, annually, etc.). Payments are non-refundable except as required by law or 
              as expressly stated in these Terms.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">5.3 Price Changes</h3>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to change our pricing at any time. We will provide you with reasonable notice of any price 
              changes. Your continued use of the Services after the price change constitutes your agreement to pay the modified amount.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">5.4 Cancellation</h3>
            <p className="text-gray-700 leading-relaxed">
              You may cancel your subscription at any time. Cancellations will take effect at the end of your current billing period. 
              You will retain access to the Services until the end of the paid period.
            </p>
          </section>

          {/* User Conduct */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Acceptable Use Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You agree not to use our Services to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Transmit harmful, offensive, or illegal content</li>
              <li>Engage in fraudulent, deceptive, or misleading activities</li>
              <li>Interfere with or disrupt the Services or servers</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems (bots, scrapers) without our permission</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
              <li>Resell or redistribute our Services without authorization</li>
              <li>Generate spam, phishing content, or malicious materials</li>
              <li>Infringe on intellectual property rights of others</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">7.1 Our Rights</h3>
            <p className="text-gray-700 leading-relaxed">
              All content, features, and functionality of the Services, including but not limited to text, graphics, logos, 
              software, and AI models, are owned by AIpath DigiNext Private Limited and are protected by copyright, trademark, 
              and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">7.2 Your Content</h3>
            <p className="text-gray-700 leading-relaxed">
              You retain ownership of any content you upload, create, or generate using our Services ("User Content"). By using 
              our Services, you grant us a worldwide, non-exclusive, royalty-free license to use, store, process, and display 
              your User Content solely for the purpose of providing and improving our Services.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">7.3 AI-Generated Content</h3>
            <p className="text-gray-700 leading-relaxed">
              Content generated by our AI tools based on your inputs is provided to you for your use. However, you acknowledge 
              that AI-generated content may not be unique and similar content may be generated for other users. You are responsible 
              for ensuring that your use of AI-generated content complies with applicable laws and does not infringe third-party rights.
            </p>
          </section>

          {/* Data and Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data and Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your use of our Services is also governed by our{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>, which describes how we collect, 
              use, and protect your personal information. By using our Services, you consent to our data practices as described 
              in the Privacy Policy.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Integrations</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Services may integrate with third-party platforms and services (e.g., social media platforms, email providers). 
              Your use of these third-party services is subject to their respective terms and conditions. We are not responsible 
              for the availability, accuracy, or content of third-party services.
            </p>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimers and Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
              INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
              <li>Warranties that the Services will be uninterrupted, error-free, or secure</li>
              <li>Warranties regarding the accuracy, reliability, or completeness of AI-generated content</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              We do not guarantee that our AI tools will meet your specific requirements or produce specific results. You use 
              the Services at your own risk.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AIPATH DIGINEXT PRIVATE LIMITED SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING 
              OUT OF OR RELATED TO YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT 
              EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless AIpath DigiNext Private Limited, its officers, directors, 
              employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorney 
              fees) arising out of or related to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your User Content</li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate your access to the Services at any time, with or without cause, 
              with or without notice, for any reason including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of fees</li>
              <li>Abuse of the Services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Upon termination, your right to use the Services will immediately cease. Provisions of these Terms that by their 
              nature should survive termination shall survive, including intellectual property rights, disclaimers, and limitations 
              of liability.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Dispute Resolution and Governing Law</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">14.1 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its 
              conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">14.2 Jurisdiction</h3>
            <p className="text-gray-700 leading-relaxed">
              Any disputes arising out of or related to these Terms or the Services shall be subject to the exclusive jurisdiction 
              of the courts located in Lucknow, Uttar Pradesh, India.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">14.3 Informal Resolution</h3>
            <p className="text-gray-700 leading-relaxed">
              Before filing any formal dispute, you agree to contact us at{" "}
              <a href="mailto:sales@aidiginext.com" className="text-blue-600 hover:underline">sales@aidiginext.com</a> to 
              attempt to resolve the dispute informally.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the 
              updated Terms on our website and updating the "Last Updated" date. Your continued use of the Services after 
              changes become effective constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* General Provisions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. General Provisions</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">16.1 Entire Agreement</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and 
              AIpath DigiNext Private Limited regarding the Services.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">16.2 Severability</h3>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain 
              in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">16.3 Waiver</h3>
            <p className="text-gray-700 leading-relaxed">
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">16.4 Assignment</h3>
            <p className="text-gray-700 leading-relaxed">
              You may not assign or transfer these Terms or your rights under these Terms without our prior written consent. 
              We may assign these Terms without restriction.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have any questions about these Terms of Service, please contact us:
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

          {/* Acknowledgment */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-600">
            <p className="text-gray-800 font-semibold mb-2">Acknowledgment</p>
            <p className="text-gray-700">
              BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}