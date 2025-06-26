"use client";

import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const icons = [
  {
    href: "https://instagram.com",
    icon: <FaInstagram />,
    label: "Instagram",
    hoverColor: "hover:text-[#E1306C]",
  },
  {
    href: "https://linkedin.com",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    hoverColor: "hover:text-[#0077B5]",
  },
  {
    href: "https://github.com",
    icon: <FaGithub />,
    label: "GitHub",
    hoverColor: "hover:text-gray-300",
  },
  {
    href: "https://wa.me/SEUNUMERO",
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    hoverColor: "hover:text-[#25D366]",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4 text-3xl md:text-4xl md:-mt-2">
      {icons.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          className={`text-white transition-transform duration-300 transform hover:scale-110 active:scale-95 ${item.hoverColor}`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
