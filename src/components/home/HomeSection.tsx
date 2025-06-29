"use client";

import { motion } from "framer-motion";
import React from "react";
import TextIntro from "./TextIntro";
import ImageSection from "./ImageSection";
import AnimatedBgImage from "@/utils/AnimatedBgImage";
import FloatingImages from "@/utils/FloatingImages";

const HomeSection = () => {
  return (
    <div className="  md:-mt-30 min-h-screen relative w-full flex flex-col md:flex-row items-center  gap-4 ">
      <div className="w-full mt-8 overflow-hidden px-4 flex flex-col md:flex-row items-center gap-4">
        <TextIntro />
      </div>

      <div className=" home w-full relative -z-50 overflow-hidden md:overflow-visible md:relative md:right-0 md:-top-5 -top-[40rem] md:w-1/2 lg:w-[50%] xl:w-[100%] 2xl:w-[50%] h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        <ImageSection />
      </div>

      <div className="hidden md:block absolute blur-3xl -z-10 top-[-2.5rem] left-[-10rem] rotate-12">
        <AnimatedBgImage />
      </div>

      <div className="hidden md:block">
        <FloatingImages/>
      </div>


      <motion.div
  className="md:hidden block absolute -top-24 left-10"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeOut", delay: 1.1 }}
  viewport={{ once: true, amount: 0.2 }}
>
  <FloatingImages />
</motion.div>

    </div>
  );
};

export default HomeSection;
