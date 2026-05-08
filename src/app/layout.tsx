import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crocosites | Premium Web Agency",
  description: "Specializing in High-End Design, UI/UX, Webflow, and Front-End Development.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

import { TranslationProvider } from "@/lib/TranslationContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <TranslationProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </TranslationProvider>
      </body>
    </html>
  );
}
