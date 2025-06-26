import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Daniel",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={` ${poppins.className} overflow-x-hidden antialiased `}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
