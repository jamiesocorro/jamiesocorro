import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { basePath } from "./base-path";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://jamiesocorro.dev";
// Cache-bust the OG image URL so Facebook/Messenger can't reuse a stale cached
// entry from before this image existed; bump this if the image changes again.
const ogImageUrl = `${siteUrl}/og-image.png?v=2`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jamie Socorro",
  description: "Jamie Socorro Portfolio",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "Jamie Socorro",
    "Frontend Developer",
    "Senior Frontend Developer",
    "Web Developer",
    "Freelance Web Developer",
    "Remote Web Developer",
    "ReactJS Developer",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "React Native Developer",
    "UI Developer",
    "Website Development",
    "Web App Development",
    "Booking System Developer",
    "Reservation System Developer",
    "HR System Developer",
    "Admin Dashboard Developer",
    "Manila Philippines Web Developer",
  ],
  icons: {
    icon: `${basePath}/js-logo.png`,
  },
  openGraph: {
    title: "Jamie Socorro — Senior Frontend Developer",
    description: "Websites, booking systems, and web apps, built from scratch or fixed up.",
    url: siteUrl,
    siteName: "Jamie Socorro",
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Jamie Socorro — Senior Frontend Developer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamie Socorro — Senior Frontend Developer",
    description: "Websites, booking systems, and web apps, built from scratch or fixed up.",
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
