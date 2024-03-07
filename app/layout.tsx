import "./styles/reset.css";
import "./styles/globals.css";

import Head from "next/head";
import Header from "./components/layout/Header";
import { Inter } from "next/font/google";
import Nav from "./components/layout/Nav";

const inter = Inter({ subsets: ["latin"] });

interface Metadata {
  title: string;
  description: string;
  authors: {
    name: string;
    role: string;
  }[];
  version: string;
  keywords: string[];
}

export const metadata: Metadata = {
  title: "Fiesta Flow",
  description: "취향에 따라 축제를 추천받는 서비스",
  authors: [
    {
      name: "정아현",
      role: "Frontend Developer",
    },
    {
      name: "이동희",
      role: "Designer",
    },
    {
      name: "이창근",
      role: "Backend Developer",
    },
    {
      name: "이혜빈",
      role: "Backend Developer",
    },
  ],
  version: "1.0.0",
  keywords: ["festival", "recommendation", "service"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" type="image/png" />
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="#/favicon.ico" />
        <meta property="og:url" content="#" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      <body className={inter.className}>
        <main>
          <Header />
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
