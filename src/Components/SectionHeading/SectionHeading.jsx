import React from "react";
import { FaBolt } from "react-icons/fa6";

const SectionHeading = ({ heading, subHeading, colorHeading }) => {
  return (
    <div>
      <div>
        <h4 className="bg-white border border-gray-200 inline-flex gap-2.5 items-center text-base font-normal text-[#162726] pl-2 pr-4 py-1.5 rounded-full mb-5">
          <span className="bg-[#07a69826] text-[#07a698] text-sm w-7 h-7 rounded-full flex items-center justify-center">
            <FaBolt />
          </span>
          {heading}
        </h4>

        <h2 className="text-[40px] font-bold text-[#162726]">
          {subHeading}
          <span className="text-[#07a698] font-normal">{colorHeading}</span>
        </h2>
      </div>
      
      
    </div>
  );
};

export default SectionHeading;
