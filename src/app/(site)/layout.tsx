import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { basePath } from "./base-path";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Jamie Socorro",
  description: "Jamie Socorro Portfolio",
  icons: {
    icon: `${basePath}/js-logo.png`,
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
