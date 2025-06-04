
import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const TitleBlock = () => (
  <div className="relative z-10 md:-mt-[15rem] pt-32 text-center overflow-hidden">
    <motion.h1
      className={`${bebasNeue.className} md:text-9xl text-7xl tracking-wide -mt-[4.5rem] md:mt-0 uppercase font-semibold text-white`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Full Stack
    </motion.h1>

    <motion.h2
      className={`${bebasNeue.className} md:text-8xl tracking-wide text-5xl uppercase text-white`}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      DEVELOPER
    </motion.h2>
  </div>
);


export default TitleBlock;
