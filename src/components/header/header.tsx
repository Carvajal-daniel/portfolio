"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaUserAlt, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const menuItems = [
  { id: "hero", href: "#hero", icon: <FaHome size={18} />, label: "Home" },
  { id: "about", href: "#about", icon: <FaUserAlt size={18} />, label: "About" },
  { id: "projects", href: "#projects", icon: <FaFolderOpen size={18} />, label: "Projects" },
  { id: "contact", href: "#contact", icon: <FaEnvelope size={18} />, label: "Contact" },
];

const HeaderPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerOffset = 88;
      const sections = menuItems
        .map(({ href }) => document.querySelector(href))
        .filter((el): el is HTMLElement => el !== null);

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const offsetTop = section.offsetTop - headerOffset;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollY >= offsetTop && scrollY < offsetBottom) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="max-w-full mx-auto z-50 backdrop-blur-md bg-[#141416]/30 flex justify-between items-center py-5 md:px-64 px-4">
        <div className="group">
          <a className="flex gap-2 items-center" href="/">
            <div className="flex items-center h-9 md:w-[40px] md:h-[40px] w-9 gap-1 justify-center group-hover:bg-white rounded-full bg-[#292929] group-hover:text-white transition-colors duration-300">
              <p className="text-2xl group-hover:text-black">&gt;</p>
              <div>
                <div className="w-[8px] h-[3px] mt-2 group-hover:bg-black bg-[#f0f8ff] animate-blink"></div>
              </div>
            </div>
            <h1 className="md:text-3xl text-[#f0f8ff] text-2xl font-bold">DC</h1>
          </a>
        </div>

        <div>
          <a href="#">
            <button className="cursor-pointer border px-3 py-1 md:py-2 md:px-4 hover:bg-[#f0f8ff] hover:text-black transition-colors duration-300 rounded">
              Contato
            </button>
          </a>
        </div>
      </div>

      <div className="hidden md:block">
        <nav className="side-menu">
          {menuItems.map(({ href, icon, label }, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={href}
                  className={`menu-link ${isActive ? "active" : ""}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="icon-container"
                  >
                    {icon}
                  </motion.div>
                  <span className="menu-label">{label}</span>
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default HeaderPage;
