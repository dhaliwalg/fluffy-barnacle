import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Billington",
  description:
    "Learn what Billington stores locally, what is shared online, and how receipt scanning and service providers process information.",
  keywords: [
    "privacy policy",
    "data protection",
    "bill splitting privacy",
  ],
  openGraph: {
    title: "Privacy Policy - Billington",
    description:
      "How Billington handles local data, shared bills, receipt scans, and service providers.",
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
