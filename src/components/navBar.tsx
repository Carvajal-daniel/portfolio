"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Sobre mim", href: "/pages/sobre-min" },
    { label: "Projetos", href: "/pages/proyects" },
    { label: "Contato", href: "/pages/contact" },
  ];

  return (
    <nav className="p-4 uppercase text-white  md:flex md:items-center md:justify-between relative z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">Logo</span>
          <h2 className="text-lg">Daniel Carvajal</h2>
        </div>

        {/* Botão hamburguer só aparece no mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu */}
      <ul
        className={`
          md:flex md:items-center md:gap-x-6
          md:mt-0 text-center pt-8 md:pt-0 space-y-7 md:space-y-0

          fixed top-0 left-0 h-screen w-4/5 bg-black/20 backdrop-blur-sm md:bg-transparent md:static md:h-auto
          transform transition-transform duration-300 ease-in-out

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          md:relative
          md:w-auto
        `}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)} // fecha menu ao clicar no mobile
                className={`
                  block px-4 py-2 text-white
                  md:transition-colors md:duration-300 md:hover:text-gray-400
                  ${isActive ? "md:text-gray-300" : ""}
                `}
              >
                {item.label}

                {/* Linha vermelha embaixo somente no desktop para o item ativo */}
                <span
  className={`
    absolute left-1/2 -translate-x-1/2 -bottom-1
    h-0.5 bg-red-600
    md:block hidden
    transition-all duration-300
    ${isActive ? "w-[50px]" : "w-0 "}
  `}
/>

              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
