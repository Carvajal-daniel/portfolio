import ParticleSystem from "@/utils/ParticleSystem";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const ImageSection = () => {
  return (
    <div>
      <ParticleSystem className="absolute md:-ml-80 ml-44 inset-0 z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute md:relative md:rigth-0 overflow-hidden inset-0 z-10 flex justify-center items-center"
      >
        <Image
          src="/assets/ia.webp"
          alt="Inteligência Artificial"
          width={1200}
          height={1200}
          priority
          quality={95}
          sizes="(max-width: 640px) 24rem, (max-width: 768px) 28rem, 100vw"
          className={`
            imagem
            w-[21.6rem]
             h-[21.6rem]
            lg:w-[33rem] lg:h-[33rem]
            lg:mt-12
            max-w-[24rem]
             sm:max-w-[28rem]
            md:w-[42rem]
             md:h-[42rem]
             md:mr-20
              md:max-w-none
               md:max-h-screen
               xl:w-[40rem]
               xl:h-[40rem]
               2xl:w-[45rem]
               2xl:h-[45rem]
            object-cover
             object-center
            ml-[14rem]
             sm:ml-[24rem] md:ml-0
          `}
          style={{
            imageRendering: "crisp-edges",
          }}
        />
      </motion.div>
    </div>
  );
};

export default ImageSection;
