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
      <nav className="  hidden md:block lg:flex fixed top-[65%] transform -translate-y-1/2  rounded-2xl px-3 py-6 flex-col gap-8 z-50 animate-slide-in-left">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center text-sm transition-all duration-300 group animate-fade-in-up ${
                isActive 
                  ? "text-white" 
                  : "text-white/70 hover:text-white hover:scale-110"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`p-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? "bg-gradient-to-b from-[#b96301] to-[#e52e71] text-white" 
                  : "group-hover:bg-white/10"
              }`}>
                {item.icon}
              </div>
              <span className="text-[0.75rem] mt-2 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Navegação inferior para tablets e mobile (md até lg) */}
      <nav className="hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 gap-8 z-50 shadow-lg animate-slide-in-up">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center text-sm transition-all duration-300 group animate-fade-in ${
                isActive 
                  ? "text-white" 
                  : "text-white/70 hover:text-white hover:scale-105"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
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

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%) translateY(-50%);
            opacity: 0;
          }
          to {
            transform: translateX(0) translateY(-50%);
            opacity: 1;
          }
        }

        @keyframes slide-in-up {
          from {
            transform: translateX(-50%) translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default Navigation;