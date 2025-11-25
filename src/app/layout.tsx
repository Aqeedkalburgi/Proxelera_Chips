import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proxelera - Semiconductor Design Services",
  description: "Leading semiconductor design services company specializing in digital design, verification, analog/mixed-signal design, and system-level integration.",
  keywords: ["Proxelera", "semiconductor", "chip design", "verification", "RTL design", "analog design", "SoC integration", "ASIC design"],
  authors: [{ name: "Proxelera Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Proxelera - Semiconductor Design Services",
    description: "Expert semiconductor design and verification services for cutting-edge chip development",
    url: "https://proxelera.com",
    siteName: "Proxelera",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proxelera - Semiconductor Design Services",
    description: "Expert semiconductor design and verification services for cutting-edge chip development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
