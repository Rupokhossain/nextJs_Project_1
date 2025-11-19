import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";

const TopHeader = () => {
  return (
    <div className="bg-[#1f2c30] text-white py-4">
      <div className="container mx-auto px-24">
        <div className="flex items-center justify-between">
          <div className="flex space-x-5 text-base h-full">
            <div className="flex items-center gap-2.5 border-r-2 border-r-gray-500  pr-5">
              <MdLocalPhone />
              <p>256 214 203 215</p>
            </div>
            <div className="flex items-center gap-2.5 border-r-2 border-r-gray-500  pr-5">
              <IoLocationOutline />
              <p>258 Helano Street, New York</p>
            </div>
            <div className="flex items-center gap-2.5">
              <IoTimeOutline />
              <p>Mon - Sat: 8:00 - 15:00</p>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex gap-2.5 items-center border-r-2 border-r-gray-500 pr-5">
              <MdAccountCircle />
              <p>Login/Register</p>
            </div>
            <div className="flex gap-2.5 items-center">
              <p>Follow Us</p>
              <div className="flex items-center gap-2.5">
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
