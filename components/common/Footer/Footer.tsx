import React from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#002045] py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <Logo variant="white" />
          <ul className="flex flex-col md:flex-row gap-4 text-cyan-400 font-semibold items-center">
            <li>
              <Link
                href="#"
                className="inline-block px-6 py-4"
              >
                Our Solutions
              </Link>
            </li>
            <li className="border-0 lg:border-l-2 border-gray-500">
              <Link
                href="#"
                className="inline-block px-6 py-4"
              >
                AnyCaaS
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="inline-block px-6 py-4"
              >
                AnyBaaS
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="inline-block px-6 py-4"
              >
                AnyPaaS
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#00152D] py-6 text-blue-500">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-semibold">
            © {new Date().getFullYear()} All Rights Reserved. Any Technology Pte
            Ltd.
          </p>
          <Link
            href="#"
            className="text-xs font-semibold transition-colors duration-300 hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
