import { navItems } from "./NavItems";

interface NavLinksProps {
  isMobile: boolean;
  activeSection: string;
  onClick?: () => void;
}

const NavLinks = ({ isMobile, activeSection, onClick }: NavLinksProps) => (
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

export default NavLinks;