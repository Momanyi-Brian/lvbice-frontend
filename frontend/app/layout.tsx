import type { Metadata } from "next";
import { Poppins, Albert_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  title: "Lake Victoria Basin International Conference | LVBICE 2026 | Kenya",
  description:
    "LVBICE initiative brings together governments, researchers, development partners, and the private sector to drive climate-resilient solutions.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "LVBICE 2026 | Harnessing Innovation & Emerging Technologies for Sustainable Development",
    description:
      "Join researchers, innovators, policymakers, and development partners at the Lake Victoria Basin International Conference & Exhibition 2026 to explore breakthrough solutions for sustainability and climate resilience.",
    url: "https://www.lvbice.com",
    siteName: "LVBICE 2026",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Lake Victoria Basin International Conference & Exhibition 2026",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LVBICE 2026 Conference & Exhibition",
    description:
      "Harnessing Innovation and Emerging Technologies for Sustainable Development in the Lake Victoria Basin.",
    images: ["/images/og-banner.png"],
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
        className={`${poppins.variable} ${albertSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
