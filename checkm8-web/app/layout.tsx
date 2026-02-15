import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sf-pro",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Billington - Scan. Split. Settle.",
  description:
    "Billington is an open source bill-splitting app with receipt scanning, group trip tracking, and Venmo integration. No accounts required.",
  keywords: [
    "bill splitting",
    "receipt scanner",
    "OCR",
    "group expenses",
    "trip splitting",
    "Venmo",
    "settle up",
    "offline",
    "privacy",
    "open source",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
