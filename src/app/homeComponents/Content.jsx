import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import React from "react";

const Content = () => {
  return (
    <div className="pb-28 pt-8 bg-[#16292c] relative">
      <div className="bg-[url('https://html.rrdevs.net/edcare/assets/img/images/request-img-1.png')] bg-cover bg-no-repeat max-w-[845px] w-full h-[513px] absolute left-[50px]"></div>
      <div className="container mx-auto px-24">
        <div className="grid grid-cols-12">
          <div className="col-span-6"></div>
          <div className="col-span-6 pt-24 ">
            <SectionHeading heading={"Subscribe Newsletter"}></SectionHeading>
            <h2 className="text-[40px] font-bold text-white">
              Find Your Best Course With Us
            </h2>
            <p className="text-[#9fa0a0] text-base tracking-wide font-medium my-5">
              Quality technologies via fully tested methods of empowerment.
              Proactively disseminate web enabled best practices after cross
              functional expertise.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-7">
              <input
                type="text"
                placeholder="Course Name"
                className="bg-transparent shadow-none outline-none border border-[#3D3E44] rounded-full px-7 py-3 text-white placeholder-white placeholder:text-base"
              />

              <input
                type="text"
                placeholder="Email Address"
                className="bg-transparent shadow-none outline-none border border-[#3D3E44] rounded-full px-7 py-3 text-white placeholder-white placeholder:text-base"
              />
            </div>
            <div>
              <a
                href=""
                className="bg-[#07a698] px-10 py-3 text-white font-bold rounded-full inline-flex items-center"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
