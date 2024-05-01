import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sameer | Frontend Dev",
  description: "This is my personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="">
      <body className={inter.className}>
        <div className="h-[96px]">
          <Navbar />
        </div>
        <div className="h-[calc(100vh - 192px)]">{children}</div>
        <div className="h-[96px]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
