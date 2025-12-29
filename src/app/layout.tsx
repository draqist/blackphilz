import type { Metadata } from "next";
// import { Inter } from "next/font/google"; // Using system fonts as per global.scss for now or user preference
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SmoothScroller from "@/components/layout/SmoothScroller";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Blackp",
  description: "A dark mode premium experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <SmoothScroller />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}