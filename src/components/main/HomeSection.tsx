"use client";

import React, { useEffect } from "react";
import { motion, useAnimation, easeOut, easeInOut } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import BgImg from "@/utils/BgImg";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const HomeSection = () => {
  // Controls para as imagens e BgImg
  const floatControls1 = useAnimation();
  const floatControls2 = useAnimation();
  const bgImgControls = useAnimation();

  useEffect(() => {
    // Animação entrada do BgImg
    bgImgControls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: easeOut },
    });

    // Primeiro anima a entrada das imagens flutuantes
    floatControls1
      .start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: easeOut, delay: 0.5 },
      })
      .then(() => {
        // Animação contínua de flutuação
        floatControls1.start({
          y: [0, -15, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: easeInOut,
          },
        });
      });

    floatControls2
      .start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: easeOut, delay: 0.8 },
      })
      .then(() => {
        floatControls2.start({
          y: [0, -15, 0],
          transition: {
            duration: 4.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: easeInOut,
          },
        });
      });
  }, [floatControls1, floatControls2, bgImgControls]);

  return (
    <div className="md:flex h-full w-full items-center justify-center text-white relative">
      <div className="md:w-1/2 h-full md:-mt-44 -mt-42 flex flex-col justify-center px-6 space-y-6 z-20">
        <motion.div
          className={`${bebasNeue.className} md:text-8xl text-7xl tracking-wide font-bold leading-[1.1]`}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {["Full", "Stack", "Developer"].map((word) => (
            <motion.span key={word} variants={wordVariants} className="block">
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className={`${bebasNeue.className} md:text-2xl text-2xl text-gray-300 tracking-wider`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: easeOut }}
        >
          Transformando ideias em experiências digitais.
        </motion.p>

        <motion.a
          href="#"
          download
          className="inline-block w-44 text-center py-3 rounded-md border border-gray-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 font-semibold cursor-pointer select-none"
          aria-label="Baixar currículo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: easeOut }}
        >
          Baixar Currículo
        </motion.a>
      </div>

      <div className="md:w-1/2 h-full flex items-center justify-center border border-gray-700 text-gray-400 z-20">
        2
      </div>

      <motion.div
        className="absolute top-[14.8rem] md:rotate-0 rotate-180 md:-left-1 -left-[30rem] md:-top-[14.8rem] md:-ml-[22rem] md:w-[44rem] h-full -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={bgImgControls}
        style={{ originY: 0.5 }}
      >
        <BgImg />
      </motion.div>

      <div className="image-group">
        <motion.div
          className=" absolute md:w-40 w-28 ms:top-[16.8rem] top-[13rem] md:left-1/5 left-[14rem]"
          initial={{ opacity: 0, scale: 0.8, y: 0 }}
          animate={floatControls1}
          style={{ originY: 0.5 }}
        >
          <img src="/assets/asset12.png" alt="img-1" />
        </motion.div>

        <motion.div
          className=" absolute md:w-40 w-20 md:top-[28.8rem] top-[32rem] md:left-2/7 left-[18rem]"
          initial={{ opacity: 0, scale: 0.8, y: 0 }}
          animate={floatControls2}
          style={{ originY: 0.5 }}
        >
          <img src="/assets/asset8.png" alt="img-2" />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;
