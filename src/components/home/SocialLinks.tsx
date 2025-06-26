"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const iconVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4 text-4xl">
      <Link href="">
        <FaInstagram />
      </Link>

      <Link href="#">
        <FaLinkedin />
      </Link>

      <Link href="#">
        <FaGithub />
      </Link>

      <Link href="#">
        <FaWhatsapp />
      </Link>
    </div>
  );
};

export default SocialLinks;
