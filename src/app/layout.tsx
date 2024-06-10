import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingPage from "@/components/LoadingPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joban Dhindsa's Portfolio",
  description:
    "Joban Dhindsa is a full stack developer, please come check out his career achievements, skills, projects, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Joban Dhindsa&apos; Portfolio</title>
      </head>
      <body className={inter.className}>
        <Navbar />
        <Suspense fallback={<LoadingPage />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
