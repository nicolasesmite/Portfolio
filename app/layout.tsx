import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const josefine = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio- Nicolas Esmite",
  description: "Portfolio",
  icons: {
    icon: [
      {
        url: "/public/images/favicon.png",
        href: "/public/images/favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={josefine.className}>
      <body className=" text-gray-100 flex h-screen w-screen bg-gradient-to-tr from-black to-violet-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
