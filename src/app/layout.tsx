import type { Metadata } from "next";
import { Space_Grotesk, DM_Mono, DM_Sans, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import FaviconAnimator from "@/components/FaviconAnimator";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maestrio — Bug reported. Already fixed.",
  description:
    "Embed a feedback widget. Watch your agentic AI triage, branch, code, and merge — without a single human in the loop for high-confidence fixes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${dmMono.variable} ${dmSans.variable} ${inter.variable} ${spaceMono.variable} antialiased bg-black text-white`}
      >
        <FaviconAnimator />
        {children}
      </body>
    </html>
  );
}
