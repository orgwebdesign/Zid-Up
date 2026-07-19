import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Noto_Sans_Arabic, Cairo } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-arabic",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "BoostVib Growt — Smart SMM Panel for Followers, Likes & Views",
  description: "BoostVib Growt is a modern SMM panel for creators, agencies and resellers. Order social media followers, likes, views, comments and subscribers with fast delivery and real-time tracking.",
  keywords: [
    "SMM panel",
    "SMM reseller panel",
    "buy followers",
    "buy likes",
    "social media growth",
    "Instagram followers",
    "TikTok views",
    "YouTube subscribers",
    "Facebook followers"
  ],
  icons: {
    icon: "/image/logo boostvib.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="antialiased dark scroll-smooth">
      <body className={`${inter.variable} ${plusJakartaSans.variable} ${notoSansArabic.variable} ${cairo.variable} min-h-screen bg-[var(--background)] text-[var(--text-main)] selection:bg-primary/30 selection:text-white flex flex-col`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
