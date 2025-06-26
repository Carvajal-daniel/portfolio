import ParticleSystem from '@/utils/ParticleSystem'
import Image from "next/image";
import { motion } from "framer-motion";
import React from 'react'

const ImageSection = () => {
  return (
    <div>

      
        <ParticleSystem className="absolute md:ml-0 ml-44 inset-0 z-0" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-10 flex justify-center items-center"
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
              max-w-[24rem] 
              sm:max-w-[28rem] 
              md:max-w-none 
              md:h-full 
              object-cover 
              object-center 
              md:ml-0 
              ml-[18rem] 
              sm:ml-[24rem]
            `}
            style={{
              imageRendering: 'crisp-edges'
            }}
          />
        </motion.div>
    </div>
  )
}

export default ImageSection