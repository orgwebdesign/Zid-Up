import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZID UP — Smart SMM Panel for Followers, Likes & Views",
  description: "ZID UP is a modern SMM panel for creators, agencies and resellers. Order social media followers, likes, views, comments and subscribers with fast delivery and real-time tracking.",
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
    icon: "/image/logo v2.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--text-main)] selection:bg-primary/30 selection:text-white flex flex-col" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
