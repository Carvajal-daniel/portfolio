"use client";

import ParticleSystem from "@/utils/ParticleSystem";
import React from "react";
import TextIntro from "./TextIntro";
import ImageSection from "./ImageSection";

const HomeSection = () => {
  return (
    <div className="w-full md:px-[2%] flex flex-col md:flex-row items-center gap-4">
      <div className="w-full mt-8 overflow-hidden px-4 flex flex-col md:flex-row items-center gap-4">
        <TextIntro />
      </div>

      <div className="w-full relative overflow-hidden md:overflow-visible md:relative md:right-0 md:top-0 -top-[34.5rem] md:w-1/2 lg:w-[50%] xl:w-[45%] 2xl:w-[50%] h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        <ImageSection />
      </div>
    </div>
  );
};

export default HomeSection;
