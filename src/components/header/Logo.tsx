"use client";

import React from "react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const Logo = () => (
  <a className="flex gap-2 items-center group" href="/">
    <div className="flex items-center justify-center md:h-10 h-9 w-10 md:w-11 gap-1 group-hover:bg-[#E0E0E0] rounded-lg transition-all duration-300 border border-gray-700 group-hover:border-none">
      <span
        className={`${bebasNeue.className} mt-1 text-4xl text-white group-hover:text-[#313131] transition-colors duration-300 font-bold`}
      >
        &gt;
      </span>
      <span className="w-[3px] h-[14px] group-hover:bg-[#313131] bg-white blink transition-colors duration-300" />
    </div>
    <h2
      className={`${bebasNeue.className} mt-1 text-[2rem] lg:text-4xl text-[#E0E0E0] font-normal tracking-wider`}
    >
      DC
    </h2>
  </a>
);

export default Logo;
