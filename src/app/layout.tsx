import type { Metadata } from "next";
import { Space_Grotesk, DM_Mono, DM_Sans, Inter, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FaviconAnimator from "@/components/FaviconAnimator";
import PostHogProvider from "@/components/PostHogProvider";

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
  metadataBase: new URL("https://maestrio.ai"),
  title: "Maestrio — Agentic AI That Fixes Bugs Automatically",
  description:
    "Maestrio embeds a lightweight feedback widget in your SaaS product. Our agentic AI triages reports, opens a PR, runs tests, and merges — in under 15 minutes. Zero dev effort for high-confidence fixes.",
  openGraph: {
    title: "Maestrio — Agentic AI That Fixes Bugs Automatically",
    description:
      "Embed a feedback widget. Our agentic AI triages, branches, codes, and merges — in under 15 minutes. Zero dev effort for high-confidence fixes.",
    type: "website",
    url: "https://maestrio.ai",
    siteName: "Maestrio",
    images: [
      {
        url: "/Opengraph.png",
        width: 1200,
        height: 630,
        alt: "Maestrio — Agentic AI That Fixes Bugs Automatically",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maestrio — Agentic AI That Fixes Bugs Automatically",
    description:
      "Embed a feedback widget. Our agentic AI triages, branches, codes, and merges — in under 15 minutes.",
    images: ["/Opengraph.png"],
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
        className={`${spaceGrotesk.variable} ${dmMono.variable} ${dmSans.variable} ${inter.variable} ${spaceMono.variable} antialiased bg-black text-white`}
      >
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DCHWQB4K7L" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DCHWQB4K7L');
        `}</Script>
        <PostHogProvider>
          <FaviconAnimator />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
