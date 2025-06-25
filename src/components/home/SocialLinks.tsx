"use client";

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const iconVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4 text-4xl">
      <a>
        <FaInstagram />
      </a>

      <a>
        <FaLinkedin />
      </a>

      <a>
        <FaGithub />
      </a>

      <a>
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialLinks;
