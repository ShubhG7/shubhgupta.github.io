import type { Metadata } from "next";
import { Geist, Geist_Mono, Josefin_Sans, League_Spartan } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-josefin",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Shubh Gupta Portfolio",
  description: "Portfolio of Shubh Gupta - Developer, Designer, and Creator.",
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon-128x128.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${josefin.variable} ${leagueSpartan.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
