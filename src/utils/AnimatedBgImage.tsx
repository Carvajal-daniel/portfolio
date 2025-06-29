import { motion } from "framer-motion";

type Props = {
  delay?: number;
};

const AnimatedBgImage = ({ delay = .5 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay }}
    >
      <img src="/assets/asset18.svg" alt="bgImg" />
    </motion.div>
  );
};

export default AnimatedBgImage;
