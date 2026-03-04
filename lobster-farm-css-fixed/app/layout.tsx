import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "龙虾养殖网 - OpenClaw AI助手学习社区",
  description: "培养你的AI助手，收获智能果实。龙虾养殖网是一个专注于OpenClaw AI助手学习、交流和技能分享的社区。",
  keywords: ["OpenClaw", "AI助手", "龙虾养殖", "学习社区", "技能分享", "教程"],
  authors: [{ name: "龙虾养殖网团队" }],
  openGraph: {
    title: "龙虾养殖网 - OpenClaw AI助手学习社区",
    description: "培养你的AI助手，收获智能果实",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
