import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import Image from "next/image";
import React from "react";
import promo1 from "../../../public/assets/images/promo-img-1.png";
import promo2 from "../../../public/assets/images/promo-4.png";

const Choose = () => {
  return (
    <div className="py-24 bg-[#191a1f]">
      <div className="container mx-auto px-24">
        <div className="text-center text-white mb-24">
          <SectionHeading heading={"Why Choose Us"}></SectionHeading>
          <h2 className="text-[40px] font-bold text-white">
            Explore Yourself All Over The World
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-4">
            <div className="flex flex-col items-center justify-center border-r border-dashed px-16">
              <div className="relative mb-7">
                <Image src={promo1} alt="promo" width={200} height={200} />

                <div className="bg-[#07A698] border-4 border-[#162726] flex items-center justify-center rounded-full w-20 h-20 absolute left-[50%] -top-10 transform -translate-x-1/2">
                  <Image src={promo2} alt="promo" width={"100%"} height={""} />
                </div>
              </div>

              <div className="text-white text-center">
                <h3 className="text-2xl mb-5 font-semibold">Book Free Consultation</h3>
                <p className="leading-7 text-base">
                  Standards in leadership skills synergize optimal expertise
                  rather than innovative leadership skills.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="flex flex-col items-center justify-center border-r border-dashed px-16">
              <div className="relative mb-7">
                <Image src={promo1} alt="promo" width={200} height={200} />

                <div className="bg-[#07A698] border-4 border-[#162726] flex items-center justify-center rounded-full w-20 h-20 absolute left-[50%] -top-10 transform -translate-x-1/2">
                  <Image src={promo2} alt="promo" width={"100%"} height={""} />
                </div>
              </div>

              <div className="text-white text-center">
                <h3 className="text-2xl mb-5 font-semibold">Book Free Consultation</h3>
                <p className="leading-7 text-base">
                  Standards in leadership skills synergize optimal expertise
                  rather than innovative leadership skills.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-span-4">
            <div className="flex flex-col items-center justify-center px-16">
              <div className="relative mb-7">
                <Image src={promo1} alt="promo" width={200} height={200} />

                <div className="bg-[#07A698] border-4 border-[#162726] flex items-center justify-center rounded-full w-20 h-20 absolute left-[50%] -top-10 transform -translate-x-1/2">
                  <Image src={promo2} alt="promo" width={"100%"} height={""} />
                </div>
              </div>

              <div className="text-white text-center">
                <h3 className="text-2xl mb-5 font-semibold">Book Free Consultation</h3>
                <p className="leading-7 text-base">
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
