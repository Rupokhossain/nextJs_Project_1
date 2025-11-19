import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import React from "react";
import c1 from "../../../src/assets/images/category-1.png";
import c2 from "../../../src/assets/images/category-2.png";
import c3 from "../../../src/assets/images/category-3.png";
import c4 from "../../../src/assets/images/category-4.png";
import Image from "next/image";

const Categorys = () => {
  return (
    <div className="py-24 bg-[#f2f4f7]">
      <div className="container mx-auto px-24">
        <div className="text-center mb-10">
          <SectionHeading
            heading={"Our Course Categories"}
            subHeading={"Select The Industry Where You Want To Learn"}
          ></SectionHeading>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 items-center justify-center">
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full pl-2 pr-7 py-2"
            >
              <span className="bg-[#f2f4f7] w-12 h-12 rounded-full flex items-center justify-center">
                <Image src={c1} alt="categorys" />
              </span>
              Business Management
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full pl-2 pr-7 py-2"
            >
              <span className="bg-[#f2f4f7] w-12 h-12 rounded-full flex items-center justify-center">
                <Image src={c1} alt="categorys" />
              </span>
              Business Management
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full pl-2 pr-7 py-2"
            >
              <span className="bg-[#f2f4f7] w-12 h-12 rounded-full flex items-center justify-center">
                <Image src={c1} alt="categorys" />
              </span>
              Business Management
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full pl-2 pr-7 py-2"
            >
              <span className="bg-[#f2f4f7] w-12 h-12 rounded-full flex items-center justify-center">
                <Image src={c1} alt="categorys" />
              </span>
              Business Management
            </a>
          </div>

          <div className="flex gap-4 items-center justify-center">
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full pl-2 pr-7 py-2"
            >
              <span className="bg-[#f2f4f7] w-12 h-12 rounded-full flex items-center justify-center">
                <Image src={c1} alt="categorys" />
              </span>
              Marketing
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full pl-2 pr-7 py-2"
            >
              <span className="bg-[#f2f4f7] w-12 h-12 rounded-full flex items-center justify-center">
                <Image src={c1} alt="categorys" />
              </span>
              Business Management
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full pl-2 pr-7 py-2"
            >
              <span className="bg-[#f2f4f7] w-12 h-12 rounded-full flex items-center justify-center">
                <Image src={c1} alt="categorys" />
              </span>
              Business Management
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full pl-2 pr-7 py-2"
            >
              <span className="bg-[#f2f4f7] w-12 h-12 rounded-full flex items-center justify-center">
                <Image src={c1} alt="categorys" />
              </span>
              Business Management
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full pl-2 pr-7 py-2"
            >
              <span className="bg-[#f2f4f7] w-12 h-12 rounded-full flex items-center justify-center">
                <Image src={c1} alt="categorys" />
              </span>
              Business Management
            </a>
          </div>

          <div className="flex gap-4 items-center justify-center">
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full pl-2 pr-7 py-2"
            >
              <span className="bg-[#f2f4f7] w-12 h-12 rounded-full flex items-center justify-center">
                <Image src={c1} alt="categorys" />
              </span>
              Business Management
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full pl-2 pr-7 py-2"
            >
              <span className="bg-[#f2f4f7] w-12 h-12 rounded-full flex items-center justify-center">
                <Image src={c1} alt="categorys" />
              </span>
              Business Management
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full pl-2 pr-7 py-2"
            >
              <span className="bg-[#f2f4f7] w-12 h-12 rounded-full flex items-center justify-center">
                <Image src={c1} alt="categorys" />
              </span>
              Business Management
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full pl-2 pr-7 py-2"
            >
              <span className="bg-[#f2f4f7] w-12 h-12 rounded-full flex items-center justify-center">
                <Image src={c1} alt="categorys" />
              </span>
              Business Management
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorys;
