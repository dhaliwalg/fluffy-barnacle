"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10 mb-16 lg:mb-0">
            <h1
              className={`section-title text-[var(--accent)] dark:text-white transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              Scan. Split.
              <br />
              <span className="text-[var(--primary)]">Settle.</span>
            </h1>

            <p
              className={`text-[var(--text-secondary)] text-xl max-w-xl mt-6 mb-10 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              Snap a photo of your receipt, split items across your group, and
              settle up through Venmo or Zelle — all without creating an
              account.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <a href="#download" className="btn-primary">
                Download Free on iOS
              </a>
              <a href="#how-it-works" className="btn-outline">
                See How It Works
              </a>
            </div>

            <div
              className={`mt-8 transition-all duration-700 delay-250 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <a
                href="https://www.youtube.com/watch?v=T1GHR6JgOX8"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm">
                  <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 flex items-center justify-center transition-colors">
                    <i className="fas fa-play text-[var(--primary)] text-xs"></i>
                  </div>
                  <span>3-minute app walkthrough</span>
                  <i className="fas fa-arrow-right text-xs opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all"></i>
                </div>
              </a>
            </div>

            <div
              className={`mt-12 flex flex-wrap gap-6 max-w-md transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-camera text-[var(--primary)]"></i>
                </div>
                <span className="text-sm font-medium text-[var(--accent)] dark:text-white">
                  Receipt OCR
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-folder-open text-[var(--primary)]"></i>
                </div>
                <span className="text-sm font-medium text-[var(--accent)] dark:text-white">
                  Group Trips
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-shield-alt text-[var(--primary)]"></i>
                </div>
                <span className="text-sm font-medium text-[var(--accent)] dark:text-white">
                  100% Private
                </span>
              </div>
            </div>
          </div>

          <div
            className={`lg:w-1/2 flex justify-center lg:justify-end relative transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative">
              {/* Background gradient circle */}
              <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--primary-light)]/10 blur-3xl"></div>

              {/* Phone mockup */}
              <div className="phone-mockup transform rotate-3 relative z-20">
                <div className="phone-screen">
                  <Image
                    src="/splash.png"
                    alt="Billington App"
                    width={290}
                    height={615}
                    priority
                    className="object-contain h-full w-full dark:hidden"
                  />
                  <Image
                    src="/dark-splash.png"
                    alt="Billington App"
                    width={290}
                    height={615}
                    priority
                    className="object-contain h-full w-full hidden dark:block"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-16 -left-16 z-30">
                <div className="bg-white dark:bg-[var(--accent)] rounded-2xl p-4 shadow-lg flex items-center space-x-3 transform -rotate-6 float">
                  <div className="w-10 h-10 bg-[var(--secondary)] rounded-full flex items-center justify-center">
                    <i className="fas fa-camera text-[var(--primary)]"></i>
                  </div>
                  <div className="text-sm font-medium">Scan Receipts with OCR</div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 z-30">
                <div className="bg-white dark:bg-[var(--accent)] rounded-2xl p-4 shadow-lg flex items-center space-x-3 transform rotate-6 float">
                  <div className="w-10 h-10 bg-[var(--secondary)] rounded-full flex items-center justify-center">
                    <i className="fas fa-money-bill-wave text-[var(--primary)]"></i>
                  </div>
                  <div className="text-sm font-medium">Settle via Venmo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
