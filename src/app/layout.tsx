import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
  display: "swap", // ⬅️ Isso melhora a compatibilidade e o carregamento
});




export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Portfólio criado com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} $ bg-[#0D0D0D]  text-white antialiased`}>
      
        {children}
       
      </body>
    </html>
  );
}
