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
  title: "ApxForm",
  description: "Modern Next.js scaffold optimized for  with ApxForm. Built with TypeScript, Tailwind CSS, and shadcn/ui.",
  keywords: ["ApxForm", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "AI development", "React"],
  authors: [{ name: "ApxForm Team" }],
  openGraph: {
    title: "ApxForm",
    description: "",
    url: "https://apxform.tech",
    siteName: "ApxForm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ApxForm",
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
