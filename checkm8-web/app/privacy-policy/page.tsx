"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const lastUpdated = "January 15, 2025";

  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom max-w-4xl">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--accent)] dark:text-white">
                Privacy Policy
              </h1>
              <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                Our commitment to your privacy isn&apos;t just a
                policy—it&apos;s built into our architecture.
              </p>
              <p className="text-[var(--text-secondary)] text-sm mt-4">
                Last updated: {lastUpdated}
              </p>
            </div>

            {/* Privacy-First Hero */}
            <div
              className={`bg-[var(--primary)] text-white rounded-3xl p-8 md:p-12 mb-12 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                  <i className="fas fa-shield-alt text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Zero Data Collection
                  </h2>
                  <p className="text-white/80">
                    Billington doesn&apos;t collect, store, or transmit any
                    personal data. Period.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">0</div>
                  <div className="text-white/80 text-sm">Data Collected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">0</div>
                  <div className="text-white/80 text-sm">Servers Used</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">0</div>
                  <div className="text-white/80 text-sm">Third Parties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-white/80 text-sm">Local Storage</div>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* App Information */}
              <section
                className={`transition-all duration-700 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-2xl font-bold mb-4 text-[var(--accent)] dark:text-white">
                  About Billington
                </h2>
                <p className="text-[var(--text-secondary)] mb-4">
                  Billington is a bill-splitting application developed by Kruski
                  Ko. The app is designed to help users divide restaurant bills
                  and expenses among friends while maintaining complete privacy.
                </p>
                <p className="text-[var(--text-secondary)]">
                  This privacy policy explains our data practices for the
                  Billington iOS application and this website.
                </p>
              </section>

              {/* Data Collection */}
              <section
                className={`transition-all duration-700 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-2xl font-bold mb-4 text-[var(--accent)] dark:text-white">
                  Data Collection Practices
                </h2>
                <div className="bg-[var(--secondary)] dark:bg-[#202022] rounded-2xl p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-[var(--accent)] dark:text-white">
                    What We DON&apos;T Collect
                  </h3>
                  <ul className="space-y-2 text-[var(--text-secondary)]">
                    <li className="flex items-center">
                      <i className="fas fa-times text-red-500 mr-3 w-4"></i>
                      Personal information (names, emails, phone numbers)
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-times text-red-500 mr-3 w-4"></i>
                      Financial data or payment information
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-times text-red-500 mr-3 w-4"></i>
                      Location data or GPS coordinates
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-times text-red-500 mr-3 w-4"></i>
                      Device identifiers or advertising IDs
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-times text-red-500 mr-3 w-4"></i>
                      Usage analytics or behavioral data
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-times text-red-500 mr-3 w-4"></i>
                      Contact lists or social media connections
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">
                    What We DO Collect
                  </h3>
                  <p className="text-green-700 dark:text-green-300 text-lg font-medium">
                    Absolutely nothing. Billington operates entirely offline.
                  </p>
                </div>
              </section>

              {/* How Data is Handled */}
              <section
                className={`transition-all duration-700 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-2xl font-bold mb-4 text-[var(--accent)] dark:text-white">
                  How Your Data is Handled
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[var(--secondary)] dark:bg-[#202022] rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <i className="fas fa-mobile-alt text-[var(--primary)] text-xl mr-3"></i>
                      <h3 className="font-semibold text-[var(--accent)] dark:text-white">
                        Local Storage Only
                      </h3>
                    </div>
                    <p className="text-[var(--text-secondary)]">
                      All bill data is stored exclusively on your device using
                      SQLite database. No information ever leaves your phone.
                    </p>
                  </div>

                  <div className="bg-[var(--secondary)] dark:bg-[#202022] rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <i className="fas fa-share-alt text-[var(--primary)] text-xl mr-3"></i>
                      <h3 className="font-semibold text-[var(--accent)] dark:text-white">
                        Optional Sharing
                      </h3>
                    </div>
                    <p className="text-[var(--text-secondary)]">
                      When you share bill summaries, only the text you choose to
                      share is sent via your device&apos;s native sharing
                      system.
                    </p>
                  </div>
                </div>
              </section>

              {/* Third-Party Services */}
              <section
                className={`transition-all duration-700 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-2xl font-bold mb-4 text-[var(--accent)] dark:text-white">
                  Third-Party Services
                </h2>
                <div className="bg-[var(--secondary)] dark:bg-[#202022] rounded-2xl p-6">
                  <p className="text-[var(--text-secondary)] mb-4">
                    Billington does not integrate with any third-party services,
                    analytics platforms, or advertising networks. The app
                    operates in complete isolation.
                  </p>
                  <div className="flex items-center text-[var(--primary)]">
                    <i className="fas fa-check-circle mr-2"></i>
                    <span className="font-medium">
                      No third-party SDKs or tracking
                    </span>
                  </div>
                </div>
              </section>

              {/* Device Permissions */}
              <section
                className={`transition-all duration-700 delay-600 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-2xl font-bold mb-4 text-[var(--accent)] dark:text-white">
                  Device Permissions
                </h2>
                <p className="text-[var(--text-secondary)] mb-4">
                  Billington requests minimal device permissions:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-share text-[var(--primary)] mr-3 mt-1"></i>
                    <div>
                      <strong className="text-[var(--accent)] dark:text-white">
                        System Share Sheet
                      </strong>
                      <p className="text-[var(--text-secondary)]">
                        Access to your device&apos;s native sharing
                        functionality to send bill summaries via text, email, or
                        other messaging apps.
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="text-[var(--text-secondary)] mt-4 text-sm">
                  That&apos;s it. No camera, contacts, location, or network
                  permissions are requested or used.
                </p>
              </section>

              {/* Children's Privacy */}
              <section
                className={`transition-all duration-700 delay-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-2xl font-bold mb-4 text-[var(--accent)] dark:text-white">
                  Children&apos;s Privacy (COPPA Compliance)
                </h2>
                <p className="text-[var(--text-secondary)] mb-4">
                  Since Billington collects no personal information whatsoever,
                  it is inherently compliant with the Children&apos;s Online
                  Privacy Protection Act (COPPA). The app can be safely used by
                  children under 13 without parental consent requirements.
                </p>
                <p className="text-[var(--text-secondary)]">
                  We do not knowingly collect any information from children or
                  adults.
                </p>
              </section>

              {/* Your Rights */}
              <section
                className={`transition-all duration-700 delay-800 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-2xl font-bold mb-4 text-[var(--accent)] dark:text-white">
                  Your Privacy Rights
                </h2>
                <p className="text-[var(--text-secondary)] mb-4">
                  Under various privacy laws (GDPR, CCPA, etc.), you typically
                  have rights regarding your personal data. However, since
                  Billington collects no personal data:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-[var(--text-secondary)]">
                      No data to access or port
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-[var(--text-secondary)]">
                      No data to delete
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-[var(--text-secondary)]">
                      No data to correct
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-[var(--text-secondary)]">
                      No processing to opt out of
                    </span>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section
                className={`transition-all duration-700 delay-900 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-2xl font-bold mb-4 text-[var(--accent)] dark:text-white">
                  Data Security
                </h2>
                <p className="text-[var(--text-secondary)] mb-4">
                  Your bill data is secured by your device&apos;s built-in
                  security features, including:
                </p>
                <ul className="space-y-2 text-[var(--text-secondary)] mb-4">
                  <li className="flex items-center">
                    <i className="fas fa-lock text-[var(--primary)] mr-3"></i>
                    iOS app sandboxing and security framework
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-key text-[var(--primary)] mr-3"></i>
                    Device-level encryption when enabled
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-shield-alt text-[var(--primary)] mr-3"></i>
                    No network transmission means no interception risk
                  </li>
                </ul>
                <p className="text-[var(--text-secondary)]">
                  Since no data leaves your device, you maintain complete
                  control over your information.
                </p>
              </section>

              {/* Policy Updates */}
              <section
                className={`transition-all duration-700 delay-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-2xl font-bold mb-4 text-[var(--accent)] dark:text-white">
                  Policy Updates
                </h2>
                <p className="text-[var(--text-secondary)] mb-4">
                  We may update this privacy policy from time to time. Any
                  changes will be posted on this page with an updated &quot;Last
                  updated&quot; date.
                </p>
                <p className="text-[var(--text-secondary)]">
                  Given that our core privacy principles are built into the
                  app&apos;s architecture, any changes are likely to be
                  clarifications rather than changes to our data practices.
                </p>
              </section>

              {/* Contact Information */}
              <section
                className={`transition-all duration-700 delay-1100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-2xl font-bold mb-4 text-[var(--accent)] dark:text-white">
                  Contact Information
                </h2>
                <div className="bg-[var(--secondary)] dark:bg-[#202022] rounded-2xl p-6">
                  <p className="text-[var(--text-secondary)] mb-4">
                    If you have any questions about this privacy policy or
                    Billington&apos;s privacy practices, please contact us:
                  </p>
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-[var(--primary)] mr-3"></i>
                    <a
                      href="mailto:Billingtonapp@duck.com"
                      className="text-[var(--primary)] hover:underline"
                    >
                      Billingtonapp@duck.com
                    </a>
                  </div>
                </div>
              </section>
            </div>

            {/* Back to Home */}
            <div
              className={`text-center mt-16 transition-all duration-700 delay-1200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <Link href="/" className="btn-primary inline-flex items-center">
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
