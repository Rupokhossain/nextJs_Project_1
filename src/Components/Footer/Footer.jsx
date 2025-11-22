import Image from "next/image";
import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import f_post1 from "../../../public/assets/images/footer-post-1.png";
import f_post2 from "../../../public/assets/images/footer-post-2.png";

import { FiPhone } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="pt-24 bg-[#162726]">
      <div className="container mx-auto px-24">
        {/* 1st row */}
        <div className="bg-[#ffffff03] border border-[#ffffff1a] p-20 rounded-lg grid grid-cols-2 gap-8 mb-20">
          <h2 className="text-white text-3xl font-bold">
            Subscribe Our Newsletter For Latest Updates
          </h2>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-[#ffffff08] text-white w-[380px] shadow-none outline-none px-7 py-3 rounded-full pl-8 placeholder-gray-200"
            />
            <a
              href=""
              className="bg-[#07a698] px-6 py-3 text-white font-bold rounded-full inline-flex items-center"
            >
              Subscribe Now
            </a>
          </div>
        </div>

        {/* 2nd row */}
        <div className="grid grid-cols-12 gap-12 mb-20">
          <div className="col-span-3">
            <h3 className="text-lg font-bold uppercase text-white pb-4">
              Get in touch!
            </h3>
            <div className="bg-white h-0.5 w-[60px]"></div>

            <p className="text-[#fffc] text-base my-7">
              Fusce varius, dolor tempor interdum tristiquei bibendum.
            </p>

            <div>
              <span className="flex items-center gap-4 text-2xl font-bold">
                <FiPhone className="text-white" />
                <a href="" className="text-white mb-5">
                  (702) 123-1478
                </a>
              </span>
              <a href="" className="text-lg text-white ">
                info@company.com
              </a>
            </div>

            <div className="text-white text-lg flex items-center gap-5 mt-5">
              <FaFacebookF />
              <FaInstagram />
              <FaPinterestP />
              <FaYoutube />
            </div>
          </div>

          <div className="col-span-3">
            <h3 className="text-lg font-bold uppercase text-white pb-4">
              Company Info
            </h3>
            <div className="bg-white h-0.5 w-[60px]"></div>

            <div className="mt-7">
              <ul className="space-y-5">
                <li>
                  <a
                    href=""
                    className="flex items-center gap-3 text-white text-base font-medium"
                  >
                    <span>
                      <FaArrowRight />
                    </span>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex items-center gap-3 text-white text-base font-medium"
                  >
                    <span>
                      <FaArrowRight />
                    </span>
                    Resource Center
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex items-center gap-3 text-white text-base font-medium"
                  >
                    <span>
                      <FaArrowRight />
                    </span>
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex items-center gap-3 text-white text-base font-medium"
                  >
                    <span>
                      <FaArrowRight />
                    </span>
                    Instructor
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex items-center gap-3 text-white text-base font-medium"
                  >
                    <span>
                      <FaArrowRight />
                    </span>
                    Become A Teacher
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-3">
            <h3 className="text-lg font-bold uppercase text-white pb-4">
              Useful Links
            </h3>
            <div className="bg-white h-0.5 w-[60px]"></div>

            <div className="mt-7">
              <ul className="space-y-5">
                <li>
                  <a
                    href=""
                    className="flex items-center gap-3 text-white text-base font-medium"
                  >
                    <span>
                      <FaArrowRight />
                    </span>
                    All Courses
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex items-center gap-3 text-white text-base font-medium"
                  >
                    <span>
                      <FaArrowRight />
                    </span>
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex items-center gap-3 text-white text-base font-medium"
                  >
                    <span>
                      <FaArrowRight />
                    </span>
                    Design & Branding
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex items-center gap-3 text-white text-base font-medium"
                  >
                    <span>
                      <FaArrowRight />
                    </span>
                    Storytelling & Voice Over
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex items-center gap-3 text-white text-base font-medium"
                  >
                    <span>
                      <FaArrowRight />
                    </span>
                    News & Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-3">
            <h3 className="text-lg font-bold uppercase text-white pb-4">
              Recent Post
            </h3>
            <div className="bg-white h-0.5 w-[60px]"></div>

            <div className="mt-7">
              <div className="space-y-6">
                <div className="flex gap-3">
                  <Image src={f_post1} alt="footer_img"></Image>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">
                      Where Dreams Find a Home
                    </h3>
                    <div className="flex items-center gap-2 text-white">
                      <IoTimeOutline className="text-md font-semibold" />
                      <span>August 15, 2025</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image src={f_post2} alt="footer_img"></Image>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">
                      Where Dreams Find a Home
                    </h3>
                    <div className="flex items-center gap-2 text-white">
                      <IoTimeOutline className="text-md font-semibold" />
                      <span>August 15, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd row */}
      <div className="border-t border-t-[#223736] p-7">
        <p className="text-[#fffc] text-base text-center">
          Copyright © 2025 EdCare. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
