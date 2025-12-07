import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import Image from "next/image";
import React from "react";
import promo1 from "../../../public/assets/images/promo-img-1.png";
import promo3 from "../../../public/assets/images/promo-img-2.png";
import promo4 from "../../../public/assets/images/promo-img-3.png";
import promo2 from "../../../public/assets/images/promo-4.png";

const Choose = () => {
  return (
    <div className="py-16 md:py-24 bg-[#191a1f]">
      {/* Container Padding Fix: px-4 (Mobile) -> px-24 (Desktop) */}
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="text-center text-white mb-12 lg:mb-24">
          <SectionHeading heading={"Why Choose Us"}></SectionHeading>
          {/* Text Size Fix: text-3xl (Mobile) -> text-[40px] (Desktop) */}
          <h2 className="text-3xl md:text-[40px] font-bold text-white mt-3">
            Explore Yourself All Over The World
          </h2>
        </div>

        {/* Grid Fix: 1 Column Mobile -> 12 Columns Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Item 1 */}
          <div className="col-span-1 lg:col-span-4">
            {/* px-16 removed on mobile, added back on LG. Border removed on mobile */}
            <div className="flex flex-col items-center justify-center lg:border-r border-dashed border-white/30 px-0 lg:px-10 xl:px-16">
              <div className="relative mb-7">
                <Image src={promo1} alt="promo" width={200} height={200} />

                <div className="bg-[#07A698] border-4 border-[#162726] flex items-center justify-center rounded-full w-20 h-20 absolute left-[50%] -top-10 transform -translate-x-1/2">
                  <Image src={promo2} alt="promo" width={"100%"} height={""} />
                </div>
              </div>

              <div className="text-white text-center">
                <h3 className="text-2xl mb-5 font-semibold">Book Free Consultation</h3>
                <p className="leading-7 text-base text-gray-300">
                  Standards in leadership skills synergize optimal expertise
                  rather than innovative leadership skills.
                </p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="col-span-1 lg:col-span-4">
            {/* px-16 removed on mobile, added back on LG. Border removed on mobile */}
            <div className="flex flex-col items-center justify-center lg:border-r border-dashed border-white/30 px-0 lg:px-10 xl:px-16">
              <div className="relative mb-7">
                <Image src={promo3} alt="promo" width={200} height={200} />

                <div className="bg-[#07A698] border-4 border-[#162726] flex items-center justify-center rounded-full w-20 h-20 absolute left-[50%] -top-10 transform -translate-x-1/2">
                  <Image src={promo2} alt="promo" width={"100%"} height={""} />
                </div>
              </div>

              <div className="text-white text-center">
                <h3 className="text-2xl mb-5 font-semibold">Book Free Consultation</h3>
                <p className="leading-7 text-base text-gray-300">
                  Standards in leadership skills synergize optimal expertise
                  rather than innovative leadership skills.
                </p>
              </div>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="col-span-1 lg:col-span-4">
            <div className="flex flex-col items-center justify-center px-0 lg:px-10 xl:px-16">
              <div className="relative mb-7">
                <Image src={promo4} alt="promo" width={200} height={200} />

                <div className="bg-[#07A698] border-4 border-[#162726] flex items-center justify-center rounded-full w-20 h-20 absolute left-[50%] -top-10 transform -translate-x-1/2">
                  <Image src={promo2} alt="promo" width={"100%"} height={""} />
                </div>
              </div>

              <div className="text-white text-center">
                <h3 className="text-2xl mb-5 font-semibold">Book Free Consultation</h3>
                <p className="leading-7 text-base text-gray-300">
                  Standards in leadership skills synergize optimal expertise
                  rather than innovative leadership skills.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Choose;