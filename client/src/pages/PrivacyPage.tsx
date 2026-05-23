/**
 * ============================================================
 * © 2025 Diploy — a brand of Bisht Technologies Private Limited
 * Original Author: BTPL Engineering Team
 * Website: https://diploy.in
 * Contact: cs@diploy.in
 *
 * Distributed under the Envato / CodeCanyon License Agreement.
 * Licensed to the purchaser for use as defined by the
 * Envato Market (CodeCanyon) Regular or Extended License.
 *
 * You are NOT permitted to redistribute, resell, sublicense,
 * or share this source code, in whole or in part.
 * Respect the author's rights and Envato licensing terms.
 * ============================================================
 */

import { useEffect } from "react";

export const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-green-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Effective Date: May 15, 2026 &nbsp;|&nbsp; Last Updated: May 15, 2026
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Intro Section */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl mb-12">
              <p className="text-lg text-gray-700 leading-relaxed m-0">
                Welcome to <strong>Konnectly</strong>, a WhatsApp automation and chatbot platform operated by{" "}
                <strong>Dvilite Technology Private Limited</strong>. Your privacy and data security are important to us.
                This Privacy Policy explains how we collect, use, store, process, and protect information when you use
                Konnectly and related services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
                This Privacy Policy is designed to comply with applicable Indian laws, Meta Platform policies,
                WhatsApp Business Platform requirements, and standard payment gateway compliance requirements.
              </p>
            </div>

            <div className="space-y-12">

              {/* 1. About Konnectly */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">1. About Konnectly</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Konnectly is a cloud-based WhatsApp automation, chatbot, CRM, marketing automation, and customer
                  engagement platform that helps businesses communicate with customers through WhatsApp and related
                  digital communication channels.
                </p>
                <p className="text-gray-700 leading-relaxed">The platform is developed and operated by:</p>
                <div className="bg-gray-50 p-4 rounded-xl mt-3">
                  <p className="text-gray-800 font-semibold m-0">Dvilite Technology Private Limited</p>
                  <p className="text-gray-700 m-0">Bangalore, Karnataka, India</p>
                  <p className="text-gray-700 m-0">Email: <a href="mailto:support@konnectly.com" className="text-green-600">support@konnectly.com</a></p>
                </div>
              </div>

              {/* 2. Information We Collect */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We may collect the following categories of information:</p>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">2.1 Business Account Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">When you register or use Konnectly, we may collect:</p>
                <ul className="space-y-1 text-gray-700 mb-6">
                  {["Business name", "Contact person name", "Email address", "Phone number", "Billing information", "GST details (if applicable)", "Business website", "WhatsApp Business account information", "Meta Business account information"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">2.2 Customer Communication Data</h3>
                <p className="text-gray-700 leading-relaxed mb-2">When businesses use Konnectly, we may process:</p>
                <ul className="space-y-1 text-gray-700 mb-6">
                  {["WhatsApp messages", "Chatbot conversations", "Media files shared through WhatsApp", "Customer phone numbers", "Contact details shared voluntarily by end users", "CRM-related customer information"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">2.3 Technical Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">We may automatically collect:</p>
                <ul className="space-y-1 text-gray-700 mb-6">
                  {["IP address", "Browser type", "Device information", "Operating system", "Login activity", "Usage analytics", "Cookies and session data", "API logs and performance metrics"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">2.4 Payment Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Payments may be processed through third-party payment gateways. We do not store full debit card,
                  credit card, banking credentials, or sensitive financial information on our servers. Payment providers
                  may collect:
                </p>
                <ul className="space-y-1 text-gray-700">
                  {["Billing address", "Transaction details", "Payment identifiers", "UPI information", "Partial card details"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Such information is governed by the privacy policies of the respective payment gateway providers.
                </p>
              </div>

              {/* 3. How We Use Information */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">3. How We Use Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We use collected information for the following purposes:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Providing and operating Konnectly services",
                    "Delivering WhatsApp automation and chatbot functionality",
                    "Managing user accounts",
                    "Customer support and troubleshooting",
                    "Improving platform performance and security",
                    "Sending service notifications and transactional communications",
                    "Compliance with legal obligations",
                    "Fraud prevention and abuse detection",
                    "Billing and payment processing",
                    "Analytics and service optimization",
                    "Enabling Meta and WhatsApp integrations",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4 font-medium">
                  We do not sell personal data to third parties.
                </p>
              </div>

              {/* 4. WhatsApp and Meta Platform Compliance */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">4. WhatsApp and Meta Platform Compliance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Konnectly integrates with Meta and the WhatsApp Business Platform. By using Konnectly, users acknowledge and agree that:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  {[
                    "WhatsApp messaging is subject to Meta and WhatsApp policies",
                    "Businesses using Konnectly are responsible for obtaining user consent before sending messages",
                    "Businesses must comply with applicable anti-spam laws and WhatsApp messaging rules",
                    "Konnectly does not permit unauthorized bulk messaging, spam, phishing, fraud, or illegal activity",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mb-2">Users must comply with:</p>
                <ul className="space-y-2 text-gray-700">
                  {["Meta Platform Terms", "WhatsApp Business Messaging Policies", "Applicable data protection regulations"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Konnectly reserves the right to suspend or terminate accounts that violate these policies.
                </p>
              </div>

              {/* 5. Legal Basis for Processing */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Legal Basis for Processing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We process information based on:</p>
                <ul className="space-y-2 text-gray-700">
                  {["User consent", "Contractual necessity", "Legitimate business interests", "Legal obligations", "Security and fraud prevention requirements"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* 6. Cookies and Tracking Technologies */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Konnectly may use cookies and similar technologies to:</p>
                <ul className="space-y-2 text-gray-700">
                  {["Maintain secure login sessions", "Improve user experience", "Analyze platform usage", "Monitor service performance", "Store user preferences"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Users may disable cookies through browser settings; however, certain platform features may not function properly.
                </p>
              </div>

              {/* 7. Data Sharing and Third Parties */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Data Sharing and Third Parties</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share information with trusted third-party service providers only when necessary for:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  {["Cloud hosting", "Payment processing", "Analytics", "Technical infrastructure", "WhatsApp Business API services", "Meta platform integrations", "Customer support systems"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mb-2">We may also disclose information:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "To comply with legal obligations",
                    "To respond to lawful government requests",
                    "To protect our rights, users, and platform security",
                    "During mergers, acquisitions, or business restructuring",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3 font-medium">We do not rent or sell personal information.</p>
              </div>

              {/* 8. Data Retention */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We retain information only for as long as necessary to:</p>
                <ul className="space-y-2 text-gray-700">
                  {["Provide services", "Comply with legal obligations", "Resolve disputes", "Enforce agreements", "Maintain security and audit records"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Businesses using Konnectly are responsible for managing and deleting customer data in accordance with applicable laws.
                </p>
              </div>

              {/* 9. Data Security */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement reasonable technical, administrative, and organizational safeguards to protect information, including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {["Secure server infrastructure", "Access control systems", "Authentication protections", "Encryption where applicable", "Firewall and monitoring systems", "Regular security reviews"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  However, no internet-based platform can guarantee absolute security.
                </p>
              </div>

              {/* 10. User Responsibilities */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">10. User Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Businesses using Konnectly agree:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "To obtain valid consent from customers before communication",
                    "Not to use the platform for spam or unlawful activity",
                    "To maintain confidentiality of account credentials",
                    "To comply with all applicable laws and regulations",
                    "To provide accurate information during registration",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Users are solely responsible for the content they send through the platform.
                </p>
              </div>

              {/* 11. International Data Transfers */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">11. International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed">
                  Depending on infrastructure and integration requirements, information may be processed or stored on servers
                  located outside India. By using Konnectly, users consent to such transfers where necessary for service operation.
                </p>
              </div>

              {/* 12. Children's Privacy */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">12. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Konnectly services are not intended for individuals under the age of 18. We do not knowingly collect
                  personal information from children. If we become aware that information from a minor has been collected
                  without proper authorization, we will take reasonable steps to remove such information.
                </p>
              </div>

              {/* 13. User Rights */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">13. User Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Subject to applicable laws, users may have the right to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Access their information",
                    "Correct inaccurate data",
                    "Request deletion of data",
                    "Withdraw consent",
                    "Request account closure",
                    "Object to certain processing activities",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Requests may be submitted to:{" "}
                  <a href="mailto:support@konnectly.com" className="text-green-600 font-medium">support@konnectly.com</a>
                  . We may require identity verification before processing requests.
                </p>
              </div>

              {/* 14. Third-Party Services */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">14. Third-Party Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Konnectly may contain integrations or links to third-party services including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {["Meta", "WhatsApp", "Payment gateways", "CRM systems", "Cloud infrastructure providers", "Analytics platforms"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  We are not responsible for the privacy practices of third-party services. Users should review the privacy
                  policies of those providers separately.
                </p>
              </div>

              {/* 15. Payment Gateway Compliance */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">15. Payment Gateway Compliance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">For payment-related services:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Transactions are processed through secure third-party payment providers",
                    "Konnectly does not store complete payment card details",
                    "Sensitive financial information is handled by PCI-DSS compliant payment processors where applicable",
                    "Fraud prevention and transaction monitoring measures may be implemented",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Users agree to comply with payment gateway terms and applicable financial regulations.
                </p>
              </div>

              {/* 16. Prohibited Activities */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">16. Prohibited Activities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Users may not use Konnectly for:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Spam messaging",
                    "Illegal marketing activities",
                    "Fraudulent schemes",
                    "Phishing attempts",
                    "Unauthorized data collection",
                    "Malware distribution",
                    "Harassment or abusive communication",
                    "Violations of Meta or WhatsApp policies",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Violation of these terms may result in account suspension or permanent termination.
                </p>
              </div>

              {/* 17. Service Availability */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">17. Service Availability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we strive for uninterrupted services, Konnectly does not guarantee:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {["Continuous availability", "Error-free operation", "Uninterrupted integrations with Meta or WhatsApp"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Downtime may occur due to maintenance, infrastructure issues, third-party outages, or circumstances beyond our control.
                </p>
              </div>

              {/* 18. Limitation of Liability */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">18. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Dvilite Technology Private Limited shall not be liable for:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Indirect or consequential damages",
                    "Loss of profits or business opportunities",
                    "Data loss caused by third-party services",
                    "Service interruptions caused by Meta, WhatsApp, hosting providers, or external systems",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Users utilize the platform at their own discretion and risk.
                </p>
              </div>

              {/* 19. Changes to This Privacy Policy */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">19. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy periodically. Updated versions will be posted on this page with a
                  revised effective date. Continued use of Konnectly after updates constitutes acceptance of the revised policy.
                </p>
              </div>

              {/* 20. Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">20. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  For questions, privacy concerns, legal notices, or support requests, contact:
                </p>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-800 font-semibold m-0">Dvilite Technology Private Limited</p>
                  <p className="text-gray-700 m-0">Bangalore, Karnataka, India</p>
                  <p className="text-gray-700 m-0">Email: <a href="mailto:support@konnectly.com" className="text-green-600">support@konnectly.com</a></p>
                </div>
              </div>

              {/* 21. Consent */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">21. Consent</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using Konnectly, users acknowledge that they have read, understood, and agreed to this Privacy Policy.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
