import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Fill, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggelMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-4 left-0 right-0 z-100 m-2 ">
      <div className="text-neutral-100 bg-slate-900/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border-1 border-neutral-800">
        {/* logo */}
        <img src={logo} alt="logo" width={120} />

        {/* links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6 ">
          <a href="#works" className="hover:text-neutral-500">
            how it works
          </a>
          <a href="#pricing" className="hover:text-neutral-500">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-neutral-500">
            Testimonials
          </a>
        </div>

        {/* buttons (hidden on mobile) */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="hover:text-neutral-200">
            Login
          </a>
          <a
            href="#"
            className="border border-neutral-800 text-neutral-200 py-1 px-4 rounded-lg hover:bg-slate-900  transition "
          >
            Get a Demo
          </a>
          <a
            href="#"
            className="bg-gradient-to-tl from-yellow-400 via-green-400 to-green-600 text-slate-900 font-semibold py-1 px-4 rounded-lg border border-black hover:bg-black hover:border transition "
          >
            Start Free Trial
          </a>
        </div>

        {/* hamburger menu for mobile */}
        <div className="md:hidden ">
          <button
            onClick={toggelMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/70 backdrop-blur-lg border-1 border-neutral-800 p-4 rounded-xl mt-2 text-neutral-400">
          <div className="flex flex-col space-y-4">
            <a href="#works" className="hover:text-neutral-200">
              How it works
            </a>
            <a href="#pricing" className="hover:text-neutral-200">
              Pricing
            </a>
            <a href="#testimonials" className="hover:text-neutral-200">
              Testimonials
            </a>
            <div className="flex w-full flex-col space-y-4 mt-4 items-center">
              <a href="#" className="hover:text-neutral-200">
                Login
              </a>
              <a
                href="#"
                className="border border-neutral-500 text-white py-1 px-4 rounded-lg hover:bg-green-800  transition w-full"
              >
                Get a Demo
              </a>
              <a
                href="#"
                className="bg-gradient-to-tl from-yellow-400 via-green-400 to-green-600 text-slate-900 py-1 px-4 rounded-lg transition font-semibold w-full"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
