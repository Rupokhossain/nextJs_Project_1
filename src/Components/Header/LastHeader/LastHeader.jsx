import Link from "next/link";
import React from "react";
import { BiSolidCategory } from "react-icons/bi";

const LastHeader = () => {
  return (
    <div className="py-6 border-t border-t-[#e0e5eb]">
      <div className="container mx-auto px-24">
        <div className="flex items-center space-x-10">
          <div>
            <div className="flex items-center gap-2  border-r-2 border-r-gray-300 pr-8">
              <BiSolidCategory  className="text-[#07a698] font-bold"/>
              <p className="text-[#162726] text-base font-bold uppercase">Categories</p>
            </div>
          </div>
          <div className="flex space-x-10">
            <Link href="/" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition-all duration-300 cursor-pointer">Home</Link>
            <Link href="/course_page" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition-all duration-300 cursor-pointer">Courses</Link>
            <Link href="/shops" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition-all duration-300 cursor-pointer">Shop</Link>
            <Link href="/about" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition-all duration-300 cursor-pointer">About Us</Link>
            <Link href="/contact" className="text-[#162726] uppercase font-semibold hover:text-[#07a698] transition-all duration-300 cursor-pointer">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastHeader;
