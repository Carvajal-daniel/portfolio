"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Início", href: "#home" },
  { label: "Sobre mim", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

const NavLinks = ({
  isMobile,
  activeSection,
  onClick,
}: {
  isMobile: boolean;
  activeSection: string;
  onClick?: () => void;
}) => (
  <>
    {navItems.map(({ label, href }) => (
      <li key={href} className="relative group">
        <a
          href={href}
          onClick={onClick}
          aria-current={activeSection === href ? "page" : undefined}
          className={`block px-4 py-2 text-white hover:text-gray-400 transition-colors duration-300 ${
            activeSection === href ? "text-gray-400" : ""
          }`}
          tabIndex={isMobile ? 0 : undefined}
        >
          {label}
          {!isMobile && (
            <span
              className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 bg-red-600 transition-all duration-300 ${
                activeSection === href ? "w-[50px]" : "w-0"
              }`}
            />
          )}
        </a>
      </li>
    ))}
  </>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  // IntersectionObserver para controlar seção ativa
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navItems.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Fecha menu mobile ao clicar fora ou pressionar ESC
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        !document.getElementById("mobile-menu")?.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest('button[aria-label="Toggle menu"]')
      ) {
        setIsOpen(false);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  // Fecha menu mobile se redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav
      role="navigation"
      className="p-4 uppercase text-white fixed top-0 w-full bg-[#0d0d0d] bg-opacity-80 backdrop-blur-md z-50 shadow"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-x-2">
          <span className="text-xl flex font-semibold">
            {"<"}
            <span className="text-red-700">/</span>
            {">"}
          </span>
          <h2 className="md:hidden">DC</h2>
          <h2 className="text-lg hidden md:flex">Daniel Carvajal</h2>
        </a>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={26} />}
          </button>
        </div>

        <ul className="hidden md:flex md:items-center md:gap-x-6">
          <NavLinks isMobile={false} activeSection={activeSection} />
        </ul>
      </div>

      {/* Mobile menu */}
      {/* Mobile menu */}
<ul
  id="mobile-menu"
  className={`md:hidden fixed top-0 left-0 h-screen w-5/6 bg-black/60 backdrop-blur-sm z-40
    transform transition-transform duration-300 ease-in-out
    flex flex-col justify-center items-center
    space-y-12 text-lg font-medium
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
>
  {navItems.map(({ label, href }, index) => (
    <li
      key={href}
      className="relative group"
      style={{
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateX(0)" : "translateX(-20px)",
        transitionProperty: "opacity, transform",
        transitionDuration: "300ms",
        transitionTimingFunction: "ease-in-out",
        transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
      }}
    >
      <a
        href={href}
        onClick={() => setIsOpen(false)}
        aria-current={activeSection === href ? "page" : undefined}
        className={`block px-4 py-2 text-white hover:text-gray-400 transition-colors duration-300 ${
          activeSection === href ? "text-gray-400" : ""
        }`}
        tabIndex={isOpen ? 0 : -1}
      >
        {label}
      </a>
    </li>
  ))}
</ul>

    </nav>
  );
};

export default NavBar;
