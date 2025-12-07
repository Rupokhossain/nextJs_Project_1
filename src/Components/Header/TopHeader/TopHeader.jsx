import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";

const TopHeader = () => {
  return (
    <div className="bg-[#1f2c30] text-white py-3">
      <div className="container mx-auto px-5 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">

          {/* LEFT SIDE — ONLY VISIBLE ON MEDIUM+ DEVICE */}
          <div className="hidden md:flex space-x-5 text-sm md:text-base">
            <div className="flex items-center gap-2.5 border-r-2 border-gray-500 pr-5">
              <MdLocalPhone /> <p>256 214 203 215</p>
            </div>
            <div className="flex items-center gap-2.5 border-r-2 border-gray-500 pr-5">
              <IoLocationOutline /> <p>258 Helano Street, New York</p>
            </div>
            <div className="flex items-center gap-2.5">
              <IoTimeOutline /> <p>Mon - Sat: 8:00 - 15:00</p>
            </div>
          </div>

          {/* RIGHT SIDE — ALWAYS SHOWN (MOBILE + DESKTOP BOTH) */}
          <div className="flex items-center gap-3 md:gap-5 text-sm md:text-base">
            <div className="flex items-center gap-2.5 md:border-r-2 border-gray-500 md:pr-5">
              <MdAccountCircle /> <p>Login/Register</p>
            </div>

            <div className="flex items-center gap-2.5">
              <p>Follow Us</p>
              <div className="flex gap-2.5 text-lg">
                <FaFacebookF />
                <IoLogoInstagram />
                <FaYoutube />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopHeader;
