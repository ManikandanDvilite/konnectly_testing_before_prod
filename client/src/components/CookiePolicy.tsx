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

import React from "react";
import { useEffect } from "react";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-green-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            How Konnectly uses cookies and similar technologies on our platform
          </p>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Intro */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl mb-12">
              <p className="text-lg text-gray-700 leading-relaxed m-0">
                We use cookies and similar technologies to improve your experience on <strong>Konnectly</strong>,
                analyze platform usage, maintain security, and support essential website functionality.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
                By continuing to use our website or services, you consent to the use of cookies in accordance with our
                Cookie Policy and Privacy Policy.
              </p>
            </div>

            <div className="space-y-12">

              {/* What Are Cookies */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">What Are Cookies?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Cookies are small text files stored on your device when you visit a website. They help websites
                  function properly, remember preferences, and improve user experience.
                </p>
              </div>

              {/* Types of Cookies */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Types of Cookies We Use</h2>
                <div className="space-y-8">

                  {/* Essential Cookies */}
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Essential Cookies</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      These cookies are necessary for the operation of our platform, including:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      {["User authentication", "Secure login sessions", "Security and fraud prevention", "Platform functionality"].map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                    <p className="text-gray-600 text-sm mt-3 italic">
                      Without these cookies, certain services may not function properly.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Analytics Cookies</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      These cookies help us understand how users interact with our platform by collecting information such as:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      {["Page visits", "User activity", "Session duration", "Feature usage", "Performance metrics"].map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                    <p className="text-gray-600 text-sm mt-3 italic">
                      This information helps us improve our services.
                    </p>
                  </div>

                  {/* Functional Cookies */}
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Functional Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies remember user preferences and settings to enhance the browsing experience.
                    </p>
                  </div>

                  {/* Third-Party Cookies */}
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Third-Party Cookies</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Some cookies may be placed by third-party services integrated with Konnectly, including:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      {["Meta Platforms", "WhatsApp integrations", "Analytics providers", "Payment gateway providers"].map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                    <p className="text-gray-600 text-sm mt-3 italic">
                      These third parties may collect information according to their own privacy policies.
                    </p>
                  </div>

                </div>
              </div>

              {/* Managing Cookies */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Managing Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Users can manage or disable cookies through browser settings. However, disabling certain cookies may
                  affect website functionality and user experience.
                </p>
              </div>

              {/* Consent */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Consent</h2>
                <p className="text-gray-700 leading-relaxed">
                  By using Konnectly, you agree to our use of cookies and similar technologies as described in this notice.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  For questions regarding our cookie practices, contact:
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

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
