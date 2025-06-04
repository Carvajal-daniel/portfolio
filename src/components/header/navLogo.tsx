import { motion } from "framer-motion";

const NavLogo = () => {
  return (
    <motion.a
      href="#home"
      className="flex items-center gap-x-2 group"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.span
        className="text-xl flex font-semibold"
        variants={{
          rest: { x: 0 },
          hover: { x: -5, transition: { type: "spring", stiffness: 300 } },
        }}
      >
        {"<"}
        <motion.span
          className="text-red-700"
          variants={{
            rest: { scale: 1, rotate: 0 },
            hover: { scale: 1.3, rotate: 15 },
          }}
        >
          /
        </motion.span>
        <motion.span
          variants={{
            rest: { x: 0 },
            hover: { x: 5, transition: { type: "spring", stiffness: 300 } },
          }}
        >
          {">"}
        </motion.span>
      </motion.span>

      <motion.h2
        className="md:hidden"
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 1 },
        }}
      >
        DC
      </motion.h2>
      <motion.h2
        className="text-lg hidden md:flex"
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 1 },
        }}
      >
        Daniel Carvajal
      </motion.h2>
    </motion.a>
  );
};

export default NavLogo;
