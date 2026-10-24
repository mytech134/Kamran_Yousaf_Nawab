import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // <-- Yahan Navbar import kiya

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kamran Yousaf Nawab | Premium Sportswear",
  description: "Trusted manufacturer of sportswear and custom apparel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* <-- Yahan Navbar add kiya */}
        <main>{children}</main>
      </body>
    </html>
  );
}