"use client";
import { BsInstagram } from "react-icons/bs";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
  hover: { scale: 1.1 },
};

const iconColors = [
  "hover:text-pink-700",  
  "hover:text-blue-500",  
  "hover:text-gray-300 ", 
];

const SocialIcon = () => {
  const icons = [
    {
      href: "https://instagram.com/seu-usuario",
      label: "Instagram",
      icon: <BsInstagram className="w-6 h-6 md:w-7 md:h-7" />,
    },
    {
      href: "https://linkedin.com/in/seu-usuario",
      label: "LinkedIn",
      icon: <TbBrandLinkedin className="w-8 h-7 md:w-[2.2rem] md:h-[2.2rem]" />,
    },
    {
      href: "https://github.com/seu-usuario",
      label: "GitHub",
      icon: <FaGithub className="w-7 h-7 md:w-8 md:h-8" />,
    },
  ];

  return (
    <div
      className="
        fixed left-4 md:left-24
        top-[25rem] md:top-1/2
        transform md:-translate-y-1/2
        flex flex-col items-center gap-y-6
        z-50
      "
    >
      {icons.map(({ href, label, icon }, i) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white transition-colors duration-300 ease-in-out ${iconColors[i]}`}
          aria-label={label}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          whileHover="hover"
        >
          {icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcon;
