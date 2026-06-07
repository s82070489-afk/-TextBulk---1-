import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BrandLogo from "@/components/BrandLogo";
import { APP_NAME, APP_NAME_EN, APP_TAGLINE, APP_DESCRIPTION } from "@/lib/brand";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://textbulk.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${APP_NAME} (${APP_NAME_EN}) | ${APP_TAGLINE}`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    "텍스트벌크",
    "TextBulk",
    "이미지 텍스트 합성",
    "대량 이미지 생성",
    "카드뉴스 제작",
    "썸네일 만들기",
    "무료 이미지 편집",
    "브라우저 이미지 편집",
  ],
  authors: [{ name: APP_NAME }],
  creator: APP_NAME,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: APP_NAME,
    title: `${APP_NAME} (${APP_NAME_EN}) | ${APP_TAGLINE}`,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} (${APP_NAME_EN})`,
    description: APP_TAGLINE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
verification: {
    google: "lD5b2sAQHhfofJmNxHKNlmILymqVwTmXejCtkD-Le5o",
    other: {
      "naver-site-verification": ["44380ec3632858217c930095a304dcdbd2acd0de"],
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col font-sans">
        <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <a href="/" className="transition-opacity hover:opacity-80">
              <BrandLogo size="sm" />
            </a>
            <Navigation />
          </div>
        </header>

        <main className="page-canvas flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
