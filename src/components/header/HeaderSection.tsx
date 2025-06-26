"use client";

import { motion } from "framer-motion";
import ContactButton from "./ContactButton";
import Logo from "./Logo";

const HeaderSection = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-transparent px-3 py-3"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <ContactButton />
      </div>
    </motion.nav>
  );
};

export default HeaderSection;
