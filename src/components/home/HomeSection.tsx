"use client";

import ParticleSystem from "@/utils/ParticleSystem";
import React from "react";
import TextIntro from "./TextIntro";
import Image from "next/image";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <div className="w-full md:px-[2%] flex flex-col md:flex-row items-center gap-4">
      <TextIntro />

      <div className="w-full md:overflow-visible overflow-hidden absolute md:relative md:right-0 md:top-0 top-[4rem] md:w-1/2 lg:w-[50%] xl:w-[45%] 2xl:w-[50%] h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        <ParticleSystem className="absolute md:ml-0 ml-48 inset-0 z-0" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-10 flex justify-center items-center"
        >
          <Image
            src="/assets/ia.webp"
            alt="Inteligência Artificial"
            width={1000}
            height={1000}
            priority
            quality={100}
            className={`
              max-w-[24rem] 
              sm:max-w-[28rem] 
              md:max-w-none 
              md:h-full 
              object-cover 
              object-center 
              md:ml-0 
              ml-[20rem] 
              sm:ml-[24rem]
            `}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;
