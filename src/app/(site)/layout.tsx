import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { basePath } from "./base-path";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = `https://jamiesocorro.github.io${basePath}`;

export const metadata: Metadata = {
  title: "Jamie Socorro",
  description: "Jamie Socorro Portfolio",
  icons: {
    icon: `${basePath}/js-logo.png`,
  },
  openGraph: {
    title: "Jamie Socorro — Senior Frontend Developer",
    description: "Websites, booking systems, and web apps, built from scratch or fixed up.",
    url: siteUrl,
    siteName: "Jamie Socorro",
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamie Socorro — Senior Frontend Developer",
    description: "Websites, booking systems, and web apps, built from scratch or fixed up.",
    images: [`${siteUrl}/og-image.png`],
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
