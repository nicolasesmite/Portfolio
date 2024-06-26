import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const josefine = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio- Nicolas Esmite",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={josefine.className}>
      <body className=" text-gray-100 flex h-full w-full bg-gradient-to-tr from-black to-violet-900">
        <Navbar />

        {children}
        <Analytics />
      </body>
    </html>
  );
}
