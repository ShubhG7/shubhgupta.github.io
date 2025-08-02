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
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
