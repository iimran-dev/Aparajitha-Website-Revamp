import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aparajitha | India's Digital Compliance Authority Platform",
  description: "Aparajitha is India's most trusted enterprise compliance platform. Powered by Simpliance technology, managing labour, vendor, factory, payroll & audit compliance across 25+ states for 58,000+ establishments.",
  keywords: [
    "labour compliance India",
    "compliance management",
    "factory compliance",
    "vendor compliance",
    "payroll compliance",
    "compliance software",
    "labour law compliance",
    "enterprise compliance platform",
    "Simpliance",
    "Aparajitha",
  ],
  authors: [{ name: "Aparajitha Corporate Services" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aparajitha | India's Digital Compliance Authority Platform",
    description: "Technology-powered authority for continuous enterprise compliance. Trusted by 58,000+ establishments across India.",
    siteName: "Aparajitha Corporate Services",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aparajitha | India's Digital Compliance Authority",
    description: "Enterprise compliance management powered by Simpliance. 25+ years of regulatory expertise.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body className={`${jakarta.className} antialiased bg-background text-foreground font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

