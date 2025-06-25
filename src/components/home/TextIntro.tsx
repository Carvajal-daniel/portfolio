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
      setTimeout(() => setAnimationPhase(1), 100),   // Título principal
      setTimeout(() => setAnimationPhase(2), 400),   // Subtítulo
      setTimeout(() => setAnimationPhase(3), 700),   // Botão
      setTimeout(() => setAnimationPhase(4), 900),   // Social Links
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full md:px-[2%] overflow-hidden px-4 flex flex-col md:flex-row items-center gap-4">
      <div className="w-full md:w-1/2 lg:w-[50%]">
        <div className="mb-8">
          {/* Título Principal com fade + slide (cada palavra com delay interno) */}
          <h1
            className={`${bebasNeue.className} z-50 text-8xl md:text-4xl lg:text-5xl text-white mt-12`}
            aria-label="Full Stack Developer"
          >
            <span
              className={`inline-block transform transition-all duration-600 ease-out ${
                animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              Full
            </span>
            <br />
            <span
              className={`inline-block transform transition-all duration-600 ease-out ${
                animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Stack
            </span>
            <br />
            <span
              className={`inline-block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent transform transition-all duration-600 ease-out ${
                animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Developer
            </span>
          </h1>

          {/* Subtítulo com fade + slide */}
          <h2
            className={`${poppins.className} text-gray-300 text-xl md:text-lg font-bold lg:text-xl leading-7 mt-4 transform transition-all duration-600 ease-out ${
              animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Transformando ideias em experiências digitais
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Botão com scale + fade + slide */}
          <Link href="#contact" className="w-full -mt-3 md:w-auto">
            <button
              aria-label="Baixar Currículo"
              className={`w-full md:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center gap-2 justify-center
              ${
                animationPhase >= 3
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }
              duration-600 ease-out`}
            >
              <FiDownload
                className={`w-5 h-5 transform transition-all duration-400 ${
                  animationPhase >= 3 ? "rotate-0" : "rotate-180"
                }`}
              />
              Baixar Currículo
            </button>
          </Link>

          {/* Social Links com fade + slide lateral */}
          <div
            className={`flex justify-center md:justify-start transform transition-all duration-600 ease-out ${
              animationPhase >= 4 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
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
