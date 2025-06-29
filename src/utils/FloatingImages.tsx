

import { useEffect } from "react";
import { motion, useAnimation, easeOut, easeInOut } from "framer-motion";

const FloatingImages = () => {
  const floatControls1 = useAnimation();
  const floatControls2 = useAnimation();

  useEffect(() => {
    floatControls1
      .start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: easeOut, delay: 0.5 },
      })
      .then(() => {
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
  }, [floatControls1, floatControls2]);

  return (
    <div className="image-group">
      <motion.div
        className="absolute hidden md:block md:w-30 2xl:w-30 w-34 md:top-[16.8rem] top-[13rem] 2xl:left-[25rem]  lg:left-[29rem]"
        initial={{ opacity: 0, scale: 0.9, y: 0 }}
        animate={floatControls1}
        style={{ originY: 0.5 }}
      >
        <img src="/assets/asset12.png" alt="img-1" />
      </motion.div>

      <motion.div
        className="absolute md:w-34 w-20 md:top-[39.8rem] top-[32rem] lg:left-[40rem] 2xl:left-2/5 "
        initial={{ opacity: 0, scale: 0.8, y: 0 }}
        animate={floatControls2}
        style={{ originY: 0.5 }}
      >
        <img src="/assets/asset8.png" alt="img-2" />
      </motion.div>

     
    </div>
  );
};

export default FloatingImages;
