"use client"; 

import Link from "next/link";
import React, { useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; 

const LastHeader = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="py-4 border-t border-[#e0e5eb] relative">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex items-center justify-center gap-16 ">

          {/* Categories */}
          <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-4 md:pr-8">
            <BiSolidCategory className="text-[#07a698] text-lg" />
            <p className="text-[#162726] font-bold uppercase text-sm md:text-base">Categories</p>
          </div>

          {/* Desktop Menu  */}
          <div className="hidden md:flex space-x-6 lg:space-x-10">
            <Link href="/" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition">
              Home
            </Link>
            <Link href="/course_page" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition">
              Courses
            </Link>
            <Link href="/shops" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition">
              Shop
            </Link>
            <Link href="/about" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition">
              About Us
            </Link>
            <Link href="/contact" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div 
            className="md:hidden text-2xl text-[#162726] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown  */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200 py-4 px-6 flex flex-col gap-4">
            <Link href="/" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/course_page" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition" onClick={() => setMenuOpen(false)}>
              Courses
            </Link>
            <Link href="/shops" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/about" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/contact" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
        </div>
      )}
    </div>
  );
};

export default LastHeader;