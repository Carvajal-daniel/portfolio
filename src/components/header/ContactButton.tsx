"use client";

import { Bebas_Neue } from "next/font/google";
import React from "react";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const ContactButton = () => (
  <a href="#">
    <button
      className={`
        ${bebasNeue.className}
        cursor-pointer
        border-gray-700 
        text-xl
        tracking-wider
        flex items-center justify-center
        px-4 py-2 md:px-6 md:py-3
         md:text-lg
         lg:text-2xl
        text-white bg-transparent
        border
        hover:bg-[#E0E0E0] hover:text-[#121212]
        transition-colors duration-200
        rounded-md font-normal 
        leading-none pt-[9px]
      `}
    >
      Contato
    </button>
  </a>
);

export default ContactButton;
