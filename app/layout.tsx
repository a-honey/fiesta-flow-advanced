import { Inter } from "next/font/google";
import "./styles/reset.css";
import "./styles/globals.css";
import Header from "./components/layout/Header";
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
