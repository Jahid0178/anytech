"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { headerLinks } from "@/data/data";
import { HeaderLink } from "@/typescript/types";
import Button from "@/components/Button/Button";

import { motion } from "motion/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const prevScrollPos = React.useRef(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos: number = window.scrollY;

      setIsVisible(
        prevScrollPos.current > currentScrollPos || currentScrollPos < 100
      );

      setIsAtTop(currentScrollPos === 0);

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${
        isAtTop
          ? "bg-transparent text-white shadow-none"
          : "bg-white text-blue-500"
      }  w-full py-6 transition-all duration-300 z-20 ${
        isVisible ? "translate-y-0 shadow-xl" : "-translate-y-full"
      }`}
    >
      <div className="container">
        <nav className="flex justify-between items-center gap-4">
          <Logo variant={isAtTop ? "white" : "blue"} />

          <NavLinks />

          <Button
            asLink={true}
            size="lg"
            variant={!isAtTop ? "primary" : "outline"}
            className="hidden lg:inline-flex drop-shadow-sm hover:drop-shadow-lg"
          >
            Contact Us
          </Button>

          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-blue-500 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-blue-500 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-blue-500 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          <MobileNavLinks
            isOpen={isMenuOpen}
            onClose={toggleMenu}
          />
        </nav>
      </div>
    </header>
  );
};

const NavLinks = () => {
  return (
    <ul className="hidden lg:flex items-center gap-4">
      {headerLinks.map((link: HeaderLink) => (
        <li
          key={link.id}
          className="w-full text-lg whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer inline-block"
        >
          <Link href={link.url}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

const MobileNavLinks = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 z-40 text-blue-500"
    >
      <nav className="flex flex-col items-center gap-6">
        {headerLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="text-2xl font-medium"
            onClick={onClose}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <Button
        asLink
        size="lg"
        variant="primary"
      >
        Contact Us
      </Button>
    </motion.div>
  );
};

export default Header;
