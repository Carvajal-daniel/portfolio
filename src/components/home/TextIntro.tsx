"use client";

import React from "react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import { Bebas_Neue, Poppins } from "next/font/google";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // animação mais rápida
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } }, // mais rápido
};

const TextIntro = () => {
  return (
    <div className="w-full md:px-[2%] px-4 flex flex-col md:flex-row items-center gap-4">
      <div className="w-full md:w-1/2 lg:w-[50%]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          {/* Título dividido em blocos para animação */}
          <motion.h1
            variants={item}
            className={`${bebasNeue.className} text-8xl md:text-4xl lg:text-5xl text-white mt-12 leading-[1.1]`}
          >
            Full
          </motion.h1>
          <motion.h1
            variants={item}
            className={`${bebasNeue.className} text-8xl md:text-4xl lg:text-5xl text-white leading-[1.1]`}
          >
            Stack
          </motion.h1>
          <motion.h1
            variants={item}
            className={`${bebasNeue.className} text-8xl md:text-4xl lg:text-5xl leading-[1.1] bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent`}
          >
            Developer
          </motion.h1>

          {/* Subtítulo */}
          <motion.h2
            variants={item}
            className={`${poppins.className} text-gray-300 text-xl md:text-lg font-bold lg:text-xl leading-7`}
          >
            Transformando ideias em experiências digitais
          </motion.h2>

          {/* Botão */}
          <motion.div variants={item} className="mt-7 flex flex-col md:flex-row md:items-center gap-4">
            <Link href="#contact" className="w-full md:w-auto">
              <button
                aria-label="Baixar Currículo"
                className="w-full md:w-auto px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center gap-2 justify-center"
              >
                <FiDownload className="w-5 h-5" /> Baixar Currículo
              </button>
            </Link>

            {/* Social Links */}
            <div className="flex justify-center mt-2 md:justify-start">
              <SocialLinks />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TextIntro;
