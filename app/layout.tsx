import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "A modern portfolio website showcasing my projects, skills, and experience as a full-stack developer.",
  keywords: ["portfolio", "web developer", "full stack", "react", "next.js"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Full Stack Developer",
    description: "A modern portfolio website showcasing my projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
