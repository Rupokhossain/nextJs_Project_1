import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";

const News = () => {
  return (
    <div className="py-24 ">
      <div className="container mx-auto px-24">
        <div className="text-center mb-10">
          <SectionHeading
            heading={"News & Blogs"}
            subHeading={"Latest News Updates"}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          
          {/* CARD 1 */}
          <div className="relative w-full h-[454px] rounded-2xl overflow-hidden">

            {/* Image */}
            <div
              className="absolute inset-0 bg-[url('https://html.rrdevs.net/edcare/assets/img/blog/post-1.jpg')]
              bg-cover bg-center"
            ></div>

            {/* Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-[#020F21] to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-[50px] left-[50px] z-10 pr-10">
              <span className="text-[#07a698] px-5 py-2 rounded-full bg-white uppercase font-semibold  ">
                Learning
              </span>

              <h3 className="text-2xl font-semibold text-white w-2/3 my-5">
                Repurpose mission critical action life items rather total
                linkage suds
              </h3>

              <div className="flex gap-4 text-white">
                <div className="flex items-center gap-2">
                  <IoTimeOutline />
                  <span>August 15, 2025</span>
                </div>

                <div className="flex items-center gap-2">
                  <CiFolderOn />
                  <span>Marketing</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative w-full h-[454px] rounded-2xl overflow-hidden">

            <div
              className="absolute inset-0 bg-[url('https://html.rrdevs.net/edcare/assets/img/blog/post-2.png')]
              bg-cover bg-center"
            ></div>

            <div className="absolute inset-0 bg-linear-to-t from-[#020F21] to-transparent"></div>

            <div className="absolute bottom-[50px] left-[50px] z-10 pr-10">
              <span className="text-[#07a698] px-5 py-2 rounded-full bg-white uppercase font-semibold  ">
                Learning
              </span>

              <h3 className="text-2xl font-semibold text-white w-2/3 my-5">
                Repurpose mission critical action life items rather total
                linkage suds
              </h3>

              <div className="flex gap-4 text-white">
                <div className="flex items-center gap-2">
                  <IoTimeOutline className="text-md font-semibold"/>
                  <span>August 15, 2025</span>
                </div>

                <div className="flex items-center gap-2">
                  <CiFolderOn className="text-md font-semibold"/>
                  <span>Marketing</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default News;
