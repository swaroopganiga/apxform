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
  title: "ApxForms",
  description: "Modern Next.js scaffold optimized for  with ApxForms. Built with TypeScript, Tailwind CSS, and shadcn/ui.",
  keywords: ["ApxForms", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "AI development", "React"],
  authors: [{ name: "ApxForms Team" }],
  openGraph: {
    title: "ApxForms",
    description: "",
    url: "https://apxforms.tech",
    siteName: "ApxForms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ApxForms",
    description: "",
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
