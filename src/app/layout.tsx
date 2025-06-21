import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Daniel Carvajal",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/assets/asset13.svg" />

        {/* ou use .png ou .svg se for outro formato */}
      </head>

      <body
        className={`${poppins.className} ${poppins.variable} scroll-smooth max-w-[1900px] mx-auto text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
