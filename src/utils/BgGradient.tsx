
import { motion } from "framer-motion";

const BgGradient = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden blur-3xl"
  >
    <motion.div
      style={{
        clipPath: "circle(50% at 50% 50%)",
      }}
      className="relative left-1/2 -translate-x-1/2 aspect-square w-[40rem] opacity-100 animated-gradient-bg sm:w-[72rem]"
      animate={{
        scale: [1, 1.05, 1],    
        rotate: [0, 5, 0],      
        x: [0, 20, 0],          
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  </div>
);

export default BgGradient;
