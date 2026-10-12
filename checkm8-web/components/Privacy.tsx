"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function Privacy() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const guarantees = [
    { text: "No Account Required", icon: "fa-user-slash" },
    { text: "Shared Bills Stored Online", icon: "fa-cloud" },
    { text: "Local App History", icon: "fa-mobile-screen" },
    { text: "Receipt Scans Use Anthropic", icon: "fa-camera" },
  ];

  return (
    <section
      id="privacy"
      ref={sectionRef}
      className="py-24 md:py-32 overflow-hidden bg-[var(--primary)] text-white relative"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full dot-pattern"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/80 font-medium mb-3">OUR COMMITMENT</p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Privacy, With the Details,
            <br />
            Made Clear
          </h2>
          <p
            className={`text-white/80 max-w-2xl mx-auto text-lg mb-12 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Billington needs no account. Your app history and preferences stay
            on your device, while bills and tabs you choose to share are stored
            online. Optional receipt scanning sends the image to our service
            and Anthropic for extraction.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-6 mb-10 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 rounded-full px-5 py-3"
              >
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <i className={`fas ${guarantee.icon} text-white text-sm`}></i>
                </div>
                <span className="font-medium text-sm">{guarantee.text}</span>
              </div>
            ))}
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <Link
              href="/privacy-policy"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium"
            >
              Read our Privacy Policy
              <i className="fas fa-arrow-right text-sm"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
