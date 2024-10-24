"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useRef } from "react";

const Navbar = () => {
  const navbar = useRef();

  const NavToggler = () => {
    navbar.current.classList.toggle("translate-x-[100%]");
  };

  return (
    <nav>
      <div className="wrapper py-5 flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="shopping-app-logo"
            className="w-[120px] lg:w-[150px]"
          />
        </Link>
        <div className="flex items-center gap-5">
          <div
            className="fixed left-0 top-0 bg-secondary w-full h-full flex items-center justify-center flex-col gap-5 text-white font-[500] translate-x-[100%] transition-all duration-500 z-50 md:static md:translate-x-0 md:flex-row md:w-auto md:bg-transparent md:text-black"
            ref={navbar}
          >
            <Link
              href="#"
              className="md:hover:text-secondary transition-all duration-300 hover:text-black"
            >
              CATALOGUE
            </Link>
            <Link
              href="#"
              className="md:hover:text-secondary transition-all duration-300 hover:text-black"
            >
              FASHION
            </Link>
            <Link
              href="#"
              className="md:hover:text-secondary transition-all duration-300 hover:text-black"
            >
              FAVOURITE
            </Link>
            <Link
              href="#"
              className="md:hover:text-secondary transition-all duration-300 hover:text-black"
            >
              LIFESTYLE
            </Link>
            <span
              className="cursor-pointer absolute top-7 right-4 text-lg md:hidden"
              onClick={NavToggler}
            >
              <FaXmark />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="bg-black text-white rounded px-5 py-2 text-sm"
            >
              SIGN UP
            </Link>
            <span
              className="cursor-pointer text-lg md:hidden"
              onClick={NavToggler}
            >
              <FaBars />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
