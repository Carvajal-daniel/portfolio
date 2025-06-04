import BgGradient from "@/utils/BgGradient";

import Image from "next/image";
import { motion } from "framer-motion";
import avatar from "../../../public/avatar.png";

const AvatarBlock = () => {
  return (
    <motion.div
      className="relative group md:-mt-24 md:ml-28"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <Image
        src={avatar}
        alt="Foto de perfil do Daniel Carvajal"
        width={600}
        height={600}
        className="max-w-full h-auto rounded-full border-4 md:border-white shadow-lg transition-transform duration-500"
      />

      <div
        aria-hidden="true"
        className="absolute md:w-[28rem] h-[26rem] md:h-80 md:left-[2.5rem] md:mt-16 -mt-1 inset-0 opacity-10 -z-10" 
      >
        <BgGradient />
      </div>
      
      <div className="absolute inset-0 rounded-full border-2 md:border-indigo-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>
    </motion.div>
  );
};

export default AvatarBlock;
