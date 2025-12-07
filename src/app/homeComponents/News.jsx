import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";

const News = () => {
  return (
    <div className="py-16 md:py-24">
      {/* Container Padding Responsive */}
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="text-center mb-10 md:mb-14">
          <SectionHeading
            heading={"News & Blogs"}
            subHeading={"Latest News Updates"}
          />
        </div>

        {/* Grid: 1 Column on Mobile, 2 on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* CARD 1 */}
          <div className="relative w-full h-[400px] md:h-[454px] rounded-2xl overflow-hidden group">
            {/* Image with hover effect (Optional but looks good) */}
            <div
              className="absolute inset-0 bg-[url('https://html.rrdevs.net/edcare/assets/img/blog/post-1.jpg')]
              bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#020F21] via-[#020f2180] to-transparent"></div>

            {/* Text Content */}
            {/* Positioning adjusted for Mobile vs Desktop */}
            <div className="absolute bottom-6 left-6 md:bottom-[50px] md:left-[50px] z-10 pr-6 md:pr-10">
              <span className="text-[#07a698] px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white uppercase font-bold text-xs md:text-sm">
                Learning
              </span>

              {/* Title width responsive */}
              <h3 className="text-xl md:text-2xl font-semibold text-white w-full md:w-2/3 my-4 md:my-5 leading-snug">
                Repurpose mission critical action life items rather total
                linkage suds
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-white text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <IoTimeOutline className="text-lg" />
                  <span>August 15, 2025</span>
                </div>

                <div className="flex items-center gap-2">
                  <CiFolderOn className="text-lg" />
                  <span>Marketing</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative w-full h-[400px] md:h-[454px] rounded-2xl overflow-hidden group">
            <div
              className="absolute inset-0 bg-[url('https://html.rrdevs.net/edcare/assets/img/blog/post-2.png')]
              bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            ></div>

            <div className="absolute inset-0 bg-linear-to-t from-[#020F21] via-[#020f2180] to-transparent"></div>

            <div className="absolute bottom-6 left-6 md:bottom-[50px] md:left-[50px] z-10 pr-6 md:pr-10">
              <span className="text-[#07a698] px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white uppercase font-bold text-xs md:text-sm">
                Learning
              </span>

              <h3 className="text-xl md:text-2xl font-semibold text-white w-full md:w-2/3 my-4 md:my-5 leading-snug">
                Repurpose mission critical action life items rather total
                linkage suds
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-white text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <IoTimeOutline className="text-lg font-semibold" />
                  <span>August 15, 2025</span>
                </div>

                <div className="flex items-center gap-2">
                  <CiFolderOn className="text-lg font-semibold" />
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
