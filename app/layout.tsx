import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Job Aggregator | Frontend Developer Jobs",
  description:
    "Find the latest frontend developer jobs from LinkedIn, Indeed, and more. Updated daily.",
  keywords: [
    "frontend jobs",
    "react developer jobs",
    "remote web developer",
    "junior frontend positions",
  ],
  openGraph: {
    title: "Job Aggregator — Frontend Developer Jobs",
    description:
      "Daily updated job listings for frontend developers across multiple platforms.",
    url: "https://yourdomain.com",
    siteName: "Job Aggregator",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frontend Job Aggregator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle",
    title: "Job Aggregator — Frontend Developer Jobs",
    description:
      "Find the latest frontend developer jobs from multiple sources, updated daily.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
