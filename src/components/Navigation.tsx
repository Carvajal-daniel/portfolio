"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiUser, FiGrid } from "react-icons/fi";

const navItems = [
  { href: "/", label: "Home", icon: <FiHome size={20} /> },
  { href: "/about", label: "Sobre", icon: <FiUser size={20} /> },
  { href: "/projetos", label: "Projetos", icon: <FiGrid size={20} /> },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Navegação lateral para telas grandes (lg+) */}
      <nav className="hidden md:block lg:flex fixed top-1/2 transform -translate-y-1/2 backdrop-blur-md  rounded-2xl px-3 py-6 flex-col gap-8 z-50 shadow-lg">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center text-sm transition-all duration-300 group ${
                isActive 
                  ? "text-white" 
                  : "text-white/70 hover:text-white hover:scale-110"
              }`}
            >
              <div className={`p-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? "bg-blue-500/20 text-white" 
                  : "group-hover:bg-white/10"
              }`}>
                {item.icon}
              </div>
              <span className="text-[0.65rem] mt-2 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Navegação inferior para tablets e mobile (md até lg) */}
      <nav className=" hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 gap-8 z-50 shadow-lg">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center text-sm transition-all duration-300 group ${
                isActive 
                  ? "text-white" 
                  : "text-white/70 hover:text-white hover:scale-105"
              }`}
            >
              <div className={`transition-all duration-300 ${
                isActive 
                  ? "text-white scale-110" 
                  : "group-hover:scale-110"
              }`}>
                {item.icon}
              </div>
              <span className="text-[0.7rem] mt-1">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navigation;