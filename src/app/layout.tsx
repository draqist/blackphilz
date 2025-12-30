import Preloader from "@/components/home/Preloader";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SmoothScroller from "@/components/layout/SmoothScroller";
import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blackphilz.vercel.app"),
  title: {
    default: "Blackphilz | Engineering & Construction",
    template: "%s | Blackphilz",
  },
  description: "A premium engineering and construction firm delivering excellence in Nigeria.",
  keywords: ["Engineering", "Construction", "Architecture", "Nigeria", "Premium", "Design"],
  authors: [{ name: "Blackphilz" }],
  creator: "Blackphilz",
  publisher: "Blackphilz",
  openGraph: {
    title: "Blackphilz | Engineering & Construction",
    description: "A premium engineering and construction firm delivering excellence in Nigeria.",
    url: "https://blackphilz.vercel.app",
    siteName: "Blackphilz",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Ensure there is an OG image at this path or update it
        width: 1200,
        height: 630,
        alt: "Blackphilz - Engineering Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackphilz | Engineering & Construction",
    description: "A premium engineering and construction firm delivering excellence in Nigeria.",
    creator: "@blackphilz",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased bg-background text-foreground font-sans max-w-screen overflow-x-hidden`}>
        <SmoothScroller />
        <Preloader />
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}