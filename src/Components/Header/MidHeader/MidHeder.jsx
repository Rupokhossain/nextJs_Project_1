import Image from "next/image";
import React from "react";
import { BiCategory } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

const MidHeder = () => {
  return (
    <div className="container mx-auto px-24 py-4">
      <div className="flex items-center justify-between">
        <div>
          <Image
            src="https://html.rrdevs.net/edcare/assets/img/logo/logo-1.png"
            alt="Logo"
            width={150}
            height={50}
          />
        </div>

        <div className="flex bg-[#f2f4f7] items-center rounded-[100px] w-[500px] px-2 py-2">
          <div className="flex items-center gap-2 text-[#162726] border-r border-r-gray-300 pr-5 pl-5">
            <BiCategory />
            <p>Categories</p>
          </div>

          <div className="flex items-center justify-center pl-5 text-[#212529]">
            <form action="">
              <div className="join">
                <div>
                  <label className="">
                    <input
                      type="email"
                      placeholder="Search Here . . ."
                      required
                      className="border-none focus-within:outline-none focus:outline-none shadow-none"
                    />
                  </label>
                  <div className="validator-hint hidden">
                    Enter valid email address
                  </div>

                  <button className="btn btn-md bg-[#07a698] text-center rounded-[100px] pb-2.5 ml-4 text-white px-6 py-2">
                    <IoSearchOutline className="mt-0.5" />
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-12 h-12 border border-[#e0e5eb] flex items-center justify-center rounded-full text-[#6c706f]">
            <GoHeart />
          </div>
          <div className="w-12 h-12 border border-[#e0e5eb] flex items-center justify-center rounded-full text-[#6c706f]">
            <IoCartOutline />
          </div>
          <div>
            <a href="" className="bg-[#07a698] px-10 py-3 text-white font-bold rounded-full inline-flex items-center">Start Free Trial</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidHeder;
