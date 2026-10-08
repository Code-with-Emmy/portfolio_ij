import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcus Vance | Senior Data Analyst & BI Specialist",
  description: "Executive data portfolio of Marcus Vance, specializing in SQL, Python, Power BI, and transforming raw enterprise data into highly profitable business intelligence.",
  keywords: ["Data Analyst Portfolio", "Business Intelligence Specialist", "SQL Developer", "Power BI Expert", "Python Data Science", "Marcus Vance Data Analyst"],
  authors: [{ name: "Marcus Vance" }],
  creator: "Marcus Vance",
  openGraph: {
    title: "Marcus Vance | Senior Data Analyst & BI Specialist",
    description: "Executive data portfolio of Marcus Vance, specializing in SQL, Python, Power BI, and transforming raw enterprise data into highly profitable business intelligence.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
