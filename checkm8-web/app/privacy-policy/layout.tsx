import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Spliq",
  description:
    "Spliq's privacy policy: We collect zero data. Your bill-splitting information stays completely private on your device with no cloud storage or tracking.",
  keywords: [
    "privacy policy",
    "data protection",
    "no data collection",
    "private bill splitting",
    "GDPR compliant",
  ],
  openGraph: {
    title: "Privacy Policy - Spliq",
    description:
      "Zero data collection. Complete privacy. Learn about Spliq's privacy-first approach to bill splitting.",
    type: "website",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
