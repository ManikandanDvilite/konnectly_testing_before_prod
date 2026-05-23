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

export const TermsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-green-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">Terms &amp; Conditions</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Effective Date: May 15, 2026 &nbsp;|&nbsp; Last Updated: May 15, 2026
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Intro Section */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl mb-12">
              <p className="text-lg text-gray-700 leading-relaxed m-0">
                These Terms and Conditions ("Terms") govern your access to and use of <strong>Konnectly</strong>, a
                WhatsApp automation, chatbot, CRM, and communication platform operated by{" "}
                <strong>Dvilite Technology Private Limited</strong>, India.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
                By accessing, registering for, or using Konnectly, you agree to comply with and be legally bound by
                these Terms. If you do not agree with these Terms, you must not use the platform.
              </p>
            </div>

            <div className="space-y-12">

              {/* 1. Definitions */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Definitions</h2>
                <p className="text-gray-700 leading-relaxed mb-4">For the purpose of these Terms:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    { label: '"Konnectly"', text: 'refers to the software platform, services, website, APIs, chatbot systems, and related services operated by Dvilite Technology Private Limited.' },
                    { label: '"Company," "we," "our," or "us"', text: 'refers to Dvilite Technology Private Limited.' },
                    { label: '"User," "customer," or "client"', text: 'refers to any individual, business, or entity using Konnectly.' },
                    { label: '"Services"', text: 'refers to all software, automation, messaging, integrations, and support services provided through Konnectly.' },
                    { label: '"Meta Services"', text: 'refers to Meta Platforms products including WhatsApp Business Platform and Facebook-related services.' },
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      <strong className="text-gray-900">{item.label}</strong> {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Eligibility */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Eligibility</h2>
                <p className="text-gray-700 leading-relaxed mb-4">By using Konnectly, you confirm that:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "You are at least 18 years of age",
                    "You have authority to represent the business or organization using the platform",
                    "Your use of the platform complies with all applicable laws and regulations",
                    "All registration information provided by you is accurate and complete",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  We reserve the right to suspend or terminate access if false or misleading information is provided.
                </p>
              </div>

              {/* 3. Services Provided */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">3. Services Provided</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Konnectly provides services including but not limited to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "WhatsApp automation",
                    "Chatbot systems",
                    "CRM and lead management",
                    "Marketing automation",
                    "Customer engagement tools",
                    "API integrations",
                    "Workflow automation",
                    "Bulk messaging systems",
                    "Business communication tools",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Certain services may require third-party integrations including Meta and WhatsApp Business APIs.
                </p>
              </div>

              {/* 4. User Accounts */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">4. User Accounts</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To access certain features, users may be required to create an account. Users are responsible for:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Maintaining confidentiality of login credentials",
                    "All activities occurring under their account",
                    "Restricting unauthorized access to their account",
                    "Providing accurate account information",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Users must immediately notify us of any unauthorized account activity. We are not responsible for
                  losses resulting from compromised credentials caused by user negligence.
                </p>
              </div>

              {/* 5. WhatsApp and Meta Compliance */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">5. WhatsApp and Meta Compliance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Konnectly integrates with Meta and WhatsApp Business Platform services. By using the platform, users agree:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  {[
                    "To comply with Meta Platform Terms",
                    "To comply with WhatsApp Business Messaging Policies",
                    "Not to send spam, unsolicited, misleading, or illegal communications",
                    "To obtain proper customer consent before sending messages",
                    "Not to misuse WhatsApp Business APIs",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mb-2">Users are solely responsible for:</p>
                <ul className="space-y-2 text-gray-700">
                  {["Message content", "Customer opt-ins", "Consent records", "Compliance with communication laws", "Campaign management practices"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Konnectly reserves the right to suspend accounts violating Meta or WhatsApp policies.
                </p>
              </div>

              {/* 6. Acceptable Use Policy */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Acceptable Use Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Users agree not to use Konnectly for:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Illegal activities",
                    "Fraudulent schemes",
                    "Phishing or impersonation",
                    "Spam messaging",
                    "Harassment or abusive behavior",
                    "Distribution of malware or harmful software",
                    "Unauthorized marketing campaigns",
                    "Violating intellectual property rights",
                    "Collecting data unlawfully",
                    "Circumventing platform security measures",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Any violation may result in immediate suspension or termination.
                </p>
              </div>

              {/* 7. User Content */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">7. User Content</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Users retain ownership of content uploaded or transmitted through Konnectly. However, users grant the
                  Company a limited right to process, store, transmit, and display such content solely for operating and
                  improving the services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">Users represent that:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "They own or have rights to all content submitted",
                    "Content does not violate laws or third-party rights",
                    "Content does not contain malicious code",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  We reserve the right to remove content violating these Terms.
                </p>
              </div>

              {/* 8. Subscription and Payments */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Subscription and Payments</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Certain Konnectly services may require paid subscriptions. By purchasing services, users agree:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "To pay all applicable fees and taxes",
                    "That pricing may change with prior notice",
                    "That subscriptions may renew automatically unless canceled",
                    "That payment processing may be handled by third-party providers",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Failure to make timely payments may result in service suspension. All payments made are non-refundable
                  unless otherwise stated in a written agreement.
                </p>
              </div>

              {/* 9. Payment Gateway Compliance */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Payment Gateway Compliance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Payments may be processed through secure third-party payment gateways. Konnectly does not store
                  complete credit card, debit card, banking credentials, or sensitive financial data.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">Users agree to comply with:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Applicable financial laws",
                    "Payment processor policies",
                    "Anti-fraud regulations",
                    "RBI and payment compliance requirements where applicable",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  We reserve the right to suspend accounts associated with suspicious or fraudulent transactions.
                </p>
              </div>

              {/* 10. Third-Party Services */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Third-Party Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Konnectly may integrate with third-party services including:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  {["Meta Platforms", "WhatsApp Business Platform", "Cloud hosting providers", "Payment gateways", "CRM tools", "Marketing platforms", "Analytics systems"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mb-2">We are not responsible for:</p>
                <ul className="space-y-2 text-gray-700">
                  {["Third-party outages", "API limitations", "Service interruptions", "Data handling by third parties", "Policy changes implemented by third-party providers"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">Users are responsible for complying with third-party terms.</p>
              </div>

              {/* 11. Intellectual Property */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All rights, title, and interest in Konnectly, including software, branding, logos, designs, code,
                  content, and technology, remain the exclusive property of Dvilite Technology Private Limited.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">Users may not:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Copy or reproduce platform components",
                    "Reverse engineer the software",
                    "Resell services without authorization",
                    "Modify proprietary technology",
                    "Use Company branding without permission",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">Unauthorized use may result in legal action.</p>
              </div>

              {/* 12. Data Protection and Privacy */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">12. Data Protection and Privacy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  User information is handled in accordance with our Privacy Policy. By using Konnectly, users consent to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Collection and processing of data necessary for service delivery",
                    "Use of technical logs and analytics",
                    "Storage of data on secure infrastructure",
                    "Transfer of data where necessary for service operation",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Users remain responsible for obtaining customer consent before collecting or processing customer information.
                </p>
              </div>

              {/* 13. Service Availability */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">13. Service Availability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We strive to maintain reliable service availability. However, Konnectly does not guarantee:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  {["Continuous uninterrupted service", "Error-free functionality", "Permanent availability of integrations", "Compatibility with all devices or systems"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mb-2">Services may be interrupted due to:</p>
                <ul className="space-y-2 text-gray-700">
                  {["Maintenance", "Infrastructure failures", "Security incidents", "Third-party outages", "Regulatory requirements", "Force majeure events"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* 14. Account Suspension and Termination */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">14. Account Suspension and Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right to suspend or terminate accounts without prior notice if users:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  {["Violate these Terms", "Breach Meta or WhatsApp policies", "Engage in illegal activities", "Cause security risks", "Abuse platform services", "Fail to make payments"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mb-2">Upon termination:</p>
                <ul className="space-y-2 text-gray-700">
                  {["Access to services may be revoked", "Data may be deleted according to retention policies", "Outstanding dues remain payable"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* 15. Limitation of Liability */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">15. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Dvilite Technology Private Limited shall not be liable for:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Indirect or consequential damages",
                    "Loss of profits or business opportunities",
                    "Data loss",
                    "Third-party service failures",
                    "Messaging delivery failures",
                    "Customer disputes",
                    "Business interruptions",
                    "Unauthorized access caused by user negligence",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  The total liability of the Company shall not exceed the amount paid by the user for services during
                  the preceding three months.
                </p>
              </div>

              {/* 16. Indemnification */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">16. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Users agree to indemnify and hold harmless Dvilite Technology Private Limited, its directors,
                  employees, affiliates, and partners from claims, damages, liabilities, losses, and expenses arising from:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Violation of these Terms",
                    "Misuse of the platform",
                    "Illegal communications",
                    "Violation of third-party rights",
                    "Breach of applicable laws",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* 17. Confidentiality */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">17. Confidentiality</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Both parties agree to maintain confidentiality of proprietary and sensitive business information shared
                  during the course of service usage. Confidential information shall not be disclosed except:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "With prior written consent",
                    "As required by law",
                    "To authorized personnel or service providers under confidentiality obligations",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* 18. Force Majeure */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">18. Force Majeure</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Company shall not be held liable for delays or failures caused by events beyond reasonable control, including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {["Natural disasters", "Government restrictions", "Internet failures", "Power outages", "Cyberattacks", "War or civil disturbances", "Third-party infrastructure failures"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* 19. Governing Law and Jurisdiction */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">19. Governing Law and Jurisdiction</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes
                  arising from these Terms shall be subject to the exclusive jurisdiction of courts located in Bangalore, Karnataka.
                </p>
              </div>

              {/* 20. Changes to Terms */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">20. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Updated versions will be published on the
                  platform with revised effective dates. Continued use of Konnectly after updates constitutes acceptance
                  of the revised Terms.
                </p>
              </div>

              {/* 21. Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">21. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  For legal inquiries, support, or questions regarding these Terms, contact:
                </p>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-800 font-semibold m-0">Dvilite Technology Private Limited</p>
                  <p className="text-gray-700 m-0">Bangalore, Karnataka, India</p>
                  <p className="text-gray-700 m-0">Email: <a href="mailto:support@konnectly.com" className="text-green-600">support@konnectly.com</a></p>
                </div>
              </div>

              {/* 22. Entire Agreement */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">22. Entire Agreement</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms, along with the Privacy Policy and any additional written agreements, constitute the
                  complete agreement between the user and Dvilite Technology Private Limited regarding the use of Konnectly.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
