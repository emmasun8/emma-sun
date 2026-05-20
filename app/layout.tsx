import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/Nav";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ruomengsun.com"),
  title: {
    default: "Emma Sun",
    template: "%s · Emma Sun",
  },
  description:
    "AI & SaaS marketing, one block from Moscone. Sponsorships, activations, and GTM for AI startups.",
  openGraph: {
    title: "Emma Sun",
    description:
      "AI & SaaS marketing, one block from Moscone. Sponsorships, activations, and GTM for AI startups.",
    url: "https://www.ruomengsun.com",
    siteName: "Emma Sun",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emma Sun",
    description:
      "AI & SaaS marketing, one block from Moscone. Sponsorships, activations, and GTM for AI startups.",
    images: ["/og-default.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full text-ink flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="01e3cc2e-8de2-47a8-846c-a8c26e45b376"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
