"use client";

import { useEffect, useState, useRef } from "react";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureProps) {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef<HTMLDivElement>(null);

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

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={featureRef}
      className={`feature-card hover:scale-105 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="feature-icon">
        <i className={icon}></i>
      </div>
      <h3 className="text-lg font-semibold mb-3 text-[var(--accent)] dark:text-white">
        {title}
      </h3>
      <p className="text-[var(--text-secondary)] dark:text-white/70">
        {description}
      </p>
    </div>
  );
}

export default function Features() {
  const features: (FeatureProps & { id: number })[] = [
    {
      id: 1,
      icon: "fas fa-camera",
      title: "Snap Your Receipt",
      description:
        "Point your camera at any receipt and Billington auto-fills every item using on-device OCR. No manual entry needed.",
      delay: 0,
    },
    {
      id: 2,
      icon: "fas fa-suitcase-rolling",
      title: "Track Group Trips",
      description:
        "Create a tab for your trip, add multiple bills over days, and see running totals per person across all expenses.",
      delay: 1,
    },
    {
      id: 3,
      icon: "fas fa-handshake",
      title: "Settle Up Instantly",
      description:
        "When the trip ends, finalize the tab and see exactly who owes whom. Track paid and unpaid settlements in one place.",
      delay: 2,
    },
    {
      id: 4,
      icon: "fas fa-credit-card",
      title: "Pay via Venmo & Zelle",
      description:
        "Deep links to Venmo, Zelle, Apple Pay, and Cash App so settling debts is one tap away.",
      delay: 3,
    },
    {
      id: 5,
      icon: "fas fa-user-slash",
      title: "No Sign-Up Needed",
      description:
        "Use every feature without creating an account. Friends join group tabs via shared links with anonymous tokens.",
      delay: 4,
    },
    {
      id: 6,
      icon: "fas fa-link",
      title: "Share as Web Links",
      description:
        "Generate a web link for any bill or tab. Friends without the app can view the full breakdown in their browser.",
      delay: 5,
    },
    {
      id: 7,
      icon: "fas fa-shield-alt",
      title: "Private & Offline-First",
      description:
        "All data stored locally on your device. Works without internet. Nothing to hack, nothing to leak.",
      delay: 6,
    },
    {
      id: 8,
      icon: "fas fa-code-branch",
      title: "Fully Open Source",
      description:
        "Every line of code is public on GitHub. Verify our privacy claims yourself.",
      delay: 7,
    },
  ];

  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-[var(--secondary)] dark:from-[#121212] dark:to-black"
    >
      <div className="container-custom">
        <div className="text-center mb-20">
          <p className="text-[var(--primary)] font-medium mb-3">FEATURES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--accent)] dark:text-white">
            Everything you need to split bills fairly
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            From scanning receipts to settling group trips, Billington handles
            the full lifecycle of shared expenses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
