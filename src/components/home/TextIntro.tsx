"use client";

import React, { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import { Bebas_Neue, Poppins } from "next/font/google";
import { FiDownload } from "react-icons/fi";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const TextIntro = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setAnimationPhase(1), 100),
      setTimeout(() => setAnimationPhase(2), 400),
      setTimeout(() => setAnimationPhase(3), 700),
      setTimeout(() => setAnimationPhase(5), 950),
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-screen px-4 sm:px-8 py-10">
      <div className="w-full">
        <div className="mb-8">
          <h1
            className={`${bebasNeue.className} z-50 
              text-[5rem] leading-20 
              md:text-8xl md:leading-30 
              2xl:text-9xl 
              text-white 
              -mt-1`}
            aria-label="Full Stack Developer"
          >
            <span
              className={`inline-block transform transition-all duration-600 ease-out 
                ${
                  animationPhase >= 1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
            >
              Full
            </span>
            <br />
            <span
              className={`inline-block transform transition-all duration-600 ease-out 
                ${
                  animationPhase >= 1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "100ms" }}
            >
              Stack
            </span>
            <br />
            <span
              className={`inline-block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent 
                transform transition-all duration-600 ease-out 
                ${
                  animationPhase >= 1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              Developer
            </span>
          </h1>

          <h2
            className={`${bebasNeue.className} 
              text-white 
              text-[1.9rem] 
              md:text-lg 
              lg:text-xl 
              font-bold 
              mt-2 
              leading-8 
              transform transition-all duration-600 ease-out 
              ${
                animationPhase >= 3
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
          >
            Transformando ideias em experiências digitais
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Link href="#contact" className="w-full md:w-auto">
            <button
              aria-label="Baixar Currículo"
              className={`w-full mt-2 
                md:w-auto 
                px-6 py-3 
                md:px-8 md:py-4 
                bg-gradient-to-r from-orange-500 to-pink-500 
                text-white font-semibold 
                rounded-lg 
                transition-all shadow-lg hover:shadow-xl 
                transform hover:scale-105 active:scale-95 
                flex items-center gap-2 justify-center 
                ${
                  animationPhase >= 3
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }
                duration-600 ease-out`}
            >
              <FiDownload
                className={`text-white w-5 h-5 transform transition-all duration-400 
                  ${
                    animationPhase >= 3 ? "rotate-0" : "rotate-180"
                  }`}
              />
              Baixar Currículo
            </button>
          </Link>

          <div
            className={`flex mt-2 justify-center md:justify-start 
              transform transition-all duration-600 ease-out 
              ${
                animationPhase >= 4
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-6"
              }`}
          >
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextIntro;
