import { navItems } from "./NavItems";

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, activeSection, onClose }: MobileMenuProps) => (
  <ul
    id="mobile-menu"
    className={`md:hidden fixed top-0 left-0 h-screen w-5/6 bg-black/90 backdrop-blur-sm z-40
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
          onClick={onClose}
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
);
