"use client";

import React, { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { FiDownload } from "react-icons/fi";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});



const TextIntro = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setAnimationPhase(1), 200),   // Título principal
      setTimeout(() => setAnimationPhase(2), 500),   // Subtítulo
      setTimeout(() => setAnimationPhase(3), 850),  // Botão
      setTimeout(() => setAnimationPhase(4), 900),  // Social Links
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-screen homeLeft px-4 lg:-mt-4 sm:px-8 py-10">
      <div className="w-full">
        <div className="mb-8">
          <h1
            className={`${bebasNeue.className} z-50 
              text-[5rem] leading-20 
              md:text-[7rem] md:ml-7 md:leading-28 
              xl:text-[9rem] xl:leading-30
              xl:-mt-8
              2xl:text-[9.5rem] 
              2xl:leading-34
              2xl:mt-4
              text-white 
              -mt-1`}
            aria-label="Full Stack Developer"
          >
            <span
              className={`inline-block transform transition-all duration-700 ease-out 
                ${
                  animationPhase >= 1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: "0ms" }}
            >
              Full
            </span>
            <br />
            <span
              className={`inline-block transform transition-all duration-700 ease-out 
                ${
                  animationPhase >= 1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: "150ms" }}
            >
              Stack
            </span>
            <br />
            <span
              className={`inline-block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent 
                transform transition-all duration-700 ease-out 
                ${
                  animationPhase >= 1
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                }`}
              style={{ transitionDelay: "300ms" }}
            >
              Developer
            </span>
          </h1>

          <h2
            className={`${bebasNeue.className} 
              text-white 
              text-[1.9rem] 
              md:text-2xl
              md:ml-7 
              md:-mt-1
              lg:w-full
              lg:-mt-1
              2xl:text-3xl 
              font-bold 
              mt-2 
              leading-8 
              transform transition-all duration-800 ease-out 
              ${
                animationPhase >= 2
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-8 blur-sm"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            Transformando ideias em experiências digitais
          </h2>
        </div>

        <div className="flex flex-col md:flex-col md:w-full lg:flex-row md:items-left md:ml-7 gap-4">
          <Link href="#contact" className="w-full md:w-auto">
            <button
              aria-label="Baixar Currículo"
              className={`w-full mt-2 
                md:w-auto 
                px-6 py-3 
                md:px-8 md:py-3 
                md:text-md
                md:-mt-4
                lg:-mt-4
                lg:py-4
                lg:px-4
                bg-gradient-to-r from-orange-500 to-pink-500 
                text-white font-semibold 
                rounded-lg 
                transition-all shadow-lg hover:shadow-xl 
                transform hover:scale-105 active:scale-95 
                flex items-center gap-2 justify-center 
                ${
                  animationPhase >= 3
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-90"
                }
                duration-700 ease-out`}
              style={{ transitionDelay: "100ms" }}
            >
              <FiDownload
                className={`text-white w-5 h-5 transform transition-all duration-500 ease-out
                  ${
                    animationPhase >= 3 ? "rotate-0 scale-100" : "rotate-180 scale-75"
                  }`}
                style={{ transitionDelay: "400ms" }}
              />
              <span
                className={`transform transition-all duration-500 ease-out
                  ${
                    animationPhase >= 3
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                style={{ transitionDelay: "300ms" }}
              >
                Baixar Currículo
              </span>
            </button>
          </Link>

          <div
            className={`flex mt-2 lg:-mt-2 justify-center md:justify-start 
              transform transition-all duration-600 ease-out 
              ${
                animationPhase >= 4
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-8 scale-95"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextIntro;