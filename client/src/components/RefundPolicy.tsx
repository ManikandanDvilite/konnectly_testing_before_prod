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

import React, { useEffect } from "react";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-green-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">Refund Policy</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Effective Date: May 20, 2026 &nbsp;|&nbsp; Last Updated: May 20, 2026
          </p>
        </div>
      </section>

      {/* Refund Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Intro */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl mb-12">
              <p className="text-lg text-gray-700 leading-relaxed m-0">
                This Refund Policy governs payments, cancellations, refunds, and subscription-related matters for{" "}
                <strong>Konnectly</strong>, a WhatsApp automation and chatbot platform operated by{" "}
                <strong>Dvilite Technology Private Limited</strong>, India.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
                By purchasing or using Konnectly services, you agree to this Refund Policy.
              </p>
            </div>

            <div className="space-y-12">

              {/* 1. Overview */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">1. Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Konnectly provides digital software services including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "WhatsApp automation",
                    "Chatbot systems",
                    "CRM tools",
                    "Marketing automation",
                    "API integrations",
                    "Subscription-based SaaS services",
                    "Communication and workflow automation tools",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  As Konnectly primarily delivers digital and cloud-based software services, refunds are subject to the
                  conditions outlined below.
                </p>
              </div>

              {/* 2. Subscription Payments */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">2. Subscription Payments</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Users may purchase:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Monthly subscriptions",
                    "Annual subscriptions",
                    "Custom enterprise plans",
                    "Add-on services",
                    "Setup and onboarding services",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Subscription fees are billed in advance unless otherwise agreed in writing.
                </p>
              </div>

              {/* 3. General Refund Policy */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">3. General Refund Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Unless explicitly stated otherwise:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "All payments made to Konnectly are non-refundable",
                    "Partial usage periods are not eligible for prorated refunds",
                    "Unused subscription periods are not refundable",
                    "Setup, onboarding, consultation, and implementation fees are non-refundable",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Refunds may only be considered under exceptional circumstances at the sole discretion of Dvilite
                  Technology Private Limited.
                </p>
              </div>

              {/* 4. Eligibility for Refunds */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">4. Eligibility for Refunds</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Refund requests may be considered only if:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "A duplicate payment was made",
                    "An unauthorized transaction is verified",
                    "The service was not provisioned due to a technical issue caused solely by Konnectly",
                    "A billing error occurred from our side",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  To request a refund, users must contact us within <strong>7 days</strong> of the transaction date.
                  Refund approvals are subject to internal verification and compliance checks.
                </p>
              </div>

              {/* 5. Non-Refundable Services */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">5. Non-Refundable Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">The following are strictly non-refundable:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "WhatsApp Business API setup charges",
                    "Meta verification assistance charges",
                    "Platform onboarding fees",
                    "Custom development services",
                    "Dedicated support services",
                    "Third-party service charges",
                    "Message usage fees",
                    "Cloud hosting charges",
                    "Consultation fees",
                    "Training services",
                    "Domain or hosting purchases",
                    "Premium integrations",
                    "Enterprise implementation services",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* 6. Cancellation Policy */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">6. Cancellation Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Users may cancel subscriptions at any time.</p>
                <p className="text-gray-700 leading-relaxed mb-2">Upon cancellation:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Future recurring billing will stop",
                    "Current subscription access may continue until the billing cycle ends",
                    "No refunds will be issued for the remaining subscription period",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Users are responsible for canceling subscriptions before the renewal date.
                </p>
              </div>

              {/* 7. Trial Services */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">7. Trial Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">If free trial access is provided:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Trials are limited-time offers",
                    "No refunds apply to trial periods",
                    "Trial features may be restricted",
                    "We reserve the right to modify or terminate trial offers at any time",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* 8. Third-Party Services and Charges */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">8. Third-Party Services and Charges</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Konnectly integrates with third-party providers including:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  {["Meta Platforms", "WhatsApp Business Platform", "Cloud hosting providers", "Payment gateways", "External API services"].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Charges paid to third-party providers may not be refundable. Konnectly is not responsible for
                  refunds related to third-party services. Users may need to contact the respective provider directly
                  for third-party billing disputes.
                </p>
              </div>

              {/* 9. Chargebacks and Payment Disputes */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">9. Chargebacks and Payment Disputes</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Users agree to contact Konnectly support before initiating chargebacks or payment disputes.
                  Fraudulent or abusive chargeback activity may result in:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Immediate account suspension",
                    "Permanent service termination",
                    "Restriction from future services",
                    "Legal recovery actions where applicable",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  We reserve the right to provide transaction records and service usage logs to payment processors
                  during dispute investigations.
                </p>
              </div>

              {/* 10. Refund Processing Timeline */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">10. Refund Processing Timeline</h2>
                <p className="text-gray-700 leading-relaxed mb-4">If a refund is approved:</p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Refunds will be processed through the original payment method where possible",
                    "Processing times may vary depending on payment providers",
                    "Typical processing time is between 5 to 15 business days",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Konnectly is not responsible for delays caused by banks or payment gateways.
                </p>
              </div>

              {/* 11. Taxes */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">11. Taxes</h2>
                <p className="text-gray-700 leading-relaxed">
                  Applicable taxes, GST, transaction fees, and government charges may not be refundable unless required
                  by law. Users are responsible for any taxes associated with their purchases.
                </p>
              </div>

              {/* 12. Service Suspension Due to Policy Violations */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">12. Service Suspension Due to Policy Violations</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  No refunds will be provided if services are suspended or terminated due to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Violation of Terms and Conditions",
                    "Spam or abusive messaging",
                    "Meta or WhatsApp policy violations",
                    "Illegal activities",
                    "Fraudulent usage",
                    "Security abuse",
                  ].map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* 13. Changes to This Refund Policy */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">13. Changes to This Refund Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify this Refund Policy at any time. Updated versions will be published
                  with a revised effective date. Continued use of Konnectly services after changes constitutes
                  acceptance of the updated policy.
                </p>
              </div>

              {/* 14. Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">14. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  For billing support, refund requests, or payment-related concerns, contact:
                </p>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-800 font-semibold m-0">Dvilite Technology Private Limited</p>
                  <p className="text-gray-700 m-0">Bangalore, Karnataka, India</p>
                  <p className="text-gray-700 m-0">
                    Email:{" "}
                    <a href="mailto:support@konnectly.com" className="text-green-600 hover:underline">
                      support@konnectly.com
                    </a>
                  </p>
                </div>
              </div>

              {/* 15. Acceptance of Policy */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">15. Acceptance of Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  By purchasing or using Konnectly services, users acknowledge that they have read, understood, and
                  agreed to this Refund Policy.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
