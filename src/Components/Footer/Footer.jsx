import Image from "next/image";
import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";

// Images
import f_post1 from "../../../public/assets/images/footer-post-1.png";
import f_post2 from "../../../public/assets/images/footer-post-2.png";

const Footer = () => {
  return (
    <div className="pt-16 md:pt-24 bg-[#162726]">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        {/* --- 1st row: Newsletter --- */}
        <div className="bg-[#ffffff03] border border-[#ffffff1a] p-8 md:p-12 lg:p-16 rounded-lg flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 md:mb-20">
          
          <h2 className="text-white text-xl md:text-2xl xl:text-3xl font-bold text-center lg:text-left w-full lg:w-1/2">
            Subscribe Our Newsletter For Latest Updates
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-3 w-full lg:w-auto">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-[#ffffff08] text-white w-full md:w-[300px] lg:w-[350px] shadow-none outline-none px-6 py-3 rounded-full pl-8 placeholder-gray-400 border border-transparent focus:border-[#07a698] transition-all"
            />
            <a
              href=""
              className="bg-[#07a698] px-6 py-3 text-white font-bold rounded-full w-full md:w-[170px] text-center hover:bg-[#069085] transition"
            >
              Subscribe Now
            </a>
          </div>
        </div>

        {/* --- 2nd row: Main Widgets --- */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16 md:mb-20">
          
          {/* Column 1: Get in Touch */}
          <div>
            <h3 className="text-lg font-bold uppercase text-white pb-4">
              Get in touch!
            </h3>
            <div className="bg-white h-0.5 w-[60px]"></div>

            <p className="text-[#fffc] text-sm md:text-base my-6 md:my-7 leading-relaxed">
              Fusce varius, dolor tempor interdum tristiquei bibendum.
            </p>

            <div>
              <span className="flex items-center gap-3 text-xl md:text-2xl font-bold mb-3">
                <FiPhone className="text-white shrink-0" />
                <a href="tel:7021231478" className="text-white hover:text-[#07a698] transition">
                  (702) 123-1478
                </a>
              </span>
              <a href="mailto:info@company.com" className="text-base md:text-lg text-white hover:text-[#07a698] transition block">
                info@company.com
              </a>
            </div>

            <div className="text-white text-lg flex items-center gap-5 mt-6">
              <FaFacebookF className="cursor-pointer hover:text-[#07a698] transition" />
              <FaInstagram className="cursor-pointer hover:text-[#07a698] transition" />
              <FaPinterestP className="cursor-pointer hover:text-[#07a698] transition" />
              <FaYoutube className="cursor-pointer hover:text-[#07a698] transition" />
            </div>
          </div>

          {/* Column 2: Company Info */}
          <div>
            <h3 className="text-lg font-bold uppercase text-white pb-4">
              Company Info
            </h3>
            <div className="bg-white h-0.5 w-[60px]"></div>

            <div className="mt-7">
              <ul className="space-y-4">
                {["About Us", "Resource Center", "Careers", "Instructor", "Become A Teacher"].map((item, index) => (
                  <li key={index}>
                    <a href="" className="flex items-center gap-3 text-white text-sm md:text-base font-medium hover:text-[#07a698] transition group">
                      <span className="group-hover:translate-x-1 transition-transform">
                        <FaArrowRight />
                      </span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-lg font-bold uppercase text-white pb-4">
              Useful Links
            </h3>
            <div className="bg-white h-0.5 w-[60px]"></div>

            <div className="mt-7">
              <ul className="space-y-4">
                {["All Courses", "Digital Marketing", "Design & Branding", "Storytelling & Voice Over", "News & Blogs"].map((item, index) => (
                  <li key={index}>
                    <a href="" className="flex items-center gap-3 text-white text-sm md:text-base font-medium hover:text-[#07a698] transition group">
                      <span className="group-hover:translate-x-1 transition-transform">
                        <FaArrowRight />
                      </span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Recent Post */}
          <div>
            <h3 className="text-lg font-bold uppercase text-white pb-4">
              Recent Post
            </h3>
            <div className="bg-white h-0.5 w-[60px]"></div>

            <div className="mt-7">
              <div className="space-y-6">
                
                {/* Post 1 */}
                <div className="flex gap-4 items-start group cursor-pointer">
                  <Image src={f_post1} alt="footer_img" className="w-20 h-20 object-cover rounded shrink-0 group-hover:opacity-80 transition" />
                  <div>
                    <h3 className="text-white text-base font-semibold mb-2 group-hover:text-[#07a698] transition">
                      Where Dreams Find a Home
                    </h3>
                    <div className="flex items-center gap-2 text-[#fffc] text-sm">
                      <IoTimeOutline className="text-[#07a698]" />
                      <span>August 15, 2025</span>
                    </div>
                  </div>
                </div>

                {/* Post 2 */}
                <div className="flex gap-4 items-start group cursor-pointer">
                  <Image src={f_post2} alt="footer_img" className="w-20 h-20 object-cover rounded shrink-0 group-hover:opacity-80 transition" />
                  <div>
                    <h3 className="text-white text-base font-semibold mb-2 group-hover:text-[#07a698] transition">
                      Where Dreams Find a Home
                    </h3>
                    <div className="flex items-center gap-2 text-[#fffc] text-sm">
                      <IoTimeOutline className="text-[#07a698]" />
                      <span>August 15, 2025</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- 3rd row: Copyright --- */}
      <div className="border-t border-t-[#223736] p-6 md:p-7">
        <p className="text-[#fffc] text-sm md:text-base text-center">
          Copyright © 2025 EdCare. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;