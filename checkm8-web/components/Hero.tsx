"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  // Animation values
  const [accounts, setAccounts] = useState(47293);
  const [cloudStorage, setCloudStorage] = useState(156.7);
  const [privacy, setPrivacy] = useState(12);

  useEffect(() => {
    setIsVisible(true);

    // Smooth countdown animation using requestAnimationFrame
    const startTime = Date.now();
    const duration = 4000; // 4 seconds total

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Eased progress for smooth animation
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      // Animate accounts from 47293 to 0
      const newAccounts = Math.floor(47293 * (1 - easeProgress));
      setAccounts(Math.max(0, newAccounts));

      // Animate cloud storage from 156.7 to 0
      const newCloudStorage = 156.7 * (1 - easeProgress);
      setCloudStorage(Math.max(0, newCloudStorage));

      // Animate privacy from 12 to 100
      const newPrivacy = 12 + 88 * easeProgress;
      setPrivacy(Math.min(100, newPrivacy));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    // Start animation after 1 second delay
    const timer = setTimeout(() => {
      animate();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Format numbers nicely
  const formatAccounts = (num: number) => {
    if (num === 0) return "0";
    return num.toLocaleString();
  };

  const formatStorage = (num: number) => {
    if (num === 0) return "0";
    return num.toFixed(1);
  };

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
              Split the Bill,
              <br />
              <span className="text-[var(--primary)]">Keep the Secrets</span>
            </h1>

            <p
              className={`text-[var(--text-secondary)] text-xl max-w-xl mt-6 mb-10 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              Billington splits bills without the bullsh*t. No accounts, no
              cloud data store, just fair shares for everyone.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <a href="#download" className="btn-primary">
                Get Billington
              </a>
              <a href="#features" className="btn-outline">
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
              className={`mt-12 grid grid-cols-3 gap-6 max-w-md transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="text-center">
                <div
                  className={`text-2xl font-bold transition-all duration-500 ${
                    accounts === 0 ? "text-[var(--primary)]" : "text-red-500"
                  }`}
                >
                  {formatAccounts(accounts)}
                </div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">
                  Accounts
                  <br />
                  Required
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl font-bold transition-all duration-500 ${
                    cloudStorage === 0
                      ? "text-[var(--primary)]"
                      : "text-red-500"
                  }`}
                >
                  {formatStorage(cloudStorage)}
                  {cloudStorage > 0 && <span className="text-sm">GB</span>}
                </div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">
                  Cloud
                  <br />
                  Storage
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl font-bold transition-all duration-500 ${
                    privacy === 100
                      ? "text-[var(--primary)]"
                      : "text-orange-500"
                  }`}
                >
                  {Math.round(privacy)}%
                </div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">
                  Privacy
                  <br />
                  Focused
                </div>
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
                    <i className="fas fa-user-shield text-[var(--primary)]"></i>
                  </div>
                  <div className="text-sm font-medium">Private & Secure</div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 z-30">
                <div className="bg-white dark:bg-[var(--accent)] rounded-2xl p-4 shadow-lg flex items-center space-x-3 transform rotate-6 float">
                  <div className="w-10 h-10 bg-[var(--secondary)] rounded-full flex items-center justify-center">
                    <i className="fas fa-share-alt text-[var(--primary)]"></i>
                  </div>
                  <div className="text-sm font-medium">Easy Sharing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
