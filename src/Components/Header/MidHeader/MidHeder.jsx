import Image from "next/image";
import React from "react";
import { BiCategory } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

const MidHeader = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 xl:px-24 py-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-5">

        {/* Logo */}
        <div className="flex justify-center w-full md:w-auto shrink-0">
          <Image
            src="https://html.rrdevs.net/edcare/assets/img/logo/logo-1.png"
            alt="Logo"
            width={200}
            height={70}
          />
        </div>

        {/* Search Bar */}
        <div className="flex w-full md:flex-1 lg:flex-none lg:w-[500px] bg-[#f2f4f7] items-center rounded-[100px] px-2 py-2 md:ml-5 lg:ml-0">
          
          {/* Category hide only mobile */}
          <div className="hidden md:flex items-center gap-2 text-[#162726] border-r border-gray-300 pr-5 pl-5">
            <BiCategory />
            <p>Categories</p>
          </div>

          <form className="flex flex-1 items-center justify-between px-3 gap-2">
            <input
              type="text"
              placeholder="Search Here..."
              className="flex-1 bg-transparent text-sm outline-none"
            />
            <button className="bg-[#07a698] rounded-[100px] text-white px-5 py-2.5 text-sm flex items-center gap-1">
              <IoSearchOutline />
              <span className="hidden md:block">Search</span>
            </button>
          </form>
        </div>

        {/* Icons + Button */}

        <div className="hidden xl:flex items-center justify-end gap-5">
          <div className="w-12 h-12 border border-[#e0e5eb] flex items-center justify-center rounded-full text-[#6c706f] cursor-pointer hover:bg-gray-100 transition">
            <GoHeart />
          </div>
          <div className="w-12 h-12 border border-[#e0e5eb] flex items-center justify-center rounded-full text-[#6c706f] cursor-pointer hover:bg-gray-100 transition">
            <IoCartOutline />
          </div>

          <a className="bg-[#07a698] px-10 py-3 text-white font-bold rounded-full cursor-pointer whitespace-nowrap">
            Start Free Trial
          </a>
        </div>

      </div>
    </div>
  );
};

export default MidHeader;