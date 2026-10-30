import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://reelfoxmedia.com"),
  title: {
    default: "ReelFox Media | Creative Media & Digital Promotion Agency",
    template: "%s | ReelFox Media",
  },
  description:
    "We Turn Your Ideas Into Digital Impact. ReelFox Media is a creative media and digital promotion agency helping businesses, professionals and brands grow through powerful content, strategic promotion and personal branding.",
  keywords: [
    "ReelFox Media",
    "Creative Media Agency",
    "Digital Promotion",
    "Doctor Marketing",
    "YouTube Promotion",
    "Instagram Reels",
    "YouTube Shorts",
    "Personal Branding",
  ],
  authors: [{ name: "ReelFox Media" }],
  creator: "ReelFox Media",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reelfoxmedia.com",
    title: "ReelFox Media | Create. Promote. Grow.",
    description:
      "We Turn Your Ideas Into Digital Impact. Creative media and digital promotion agency providing local and international promotion solutions.",
    siteName: "ReelFox Media",
    images: [
      {
        url: "/reelfox-logo.jpg",
        width: 1200,
        height: 630,
        alt: "ReelFox Media Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReelFox Media | Create. Promote. Grow.",
    description:
      "We Turn Your Ideas Into Digital Impact. Creative media and digital promotion agency helping businesses and doctors grow.",
    images: ["/reelfox-logo.jpg"],
  },
  icons: {
    icon: "/reelfox-logo.jpg",
    apple: "/reelfox-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-white text-[#111111] font-sans">
        <Navbar />
        <main className="flex-grow pt-20 sm:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
