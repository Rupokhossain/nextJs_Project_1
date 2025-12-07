import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import React from "react";

const Content = () => {
  return (
    <div className="pb-16 md:pb-28 pt-16 md:pt-8 bg-[#16292c] relative overflow-hidden">

      <div className="hidden lg:block bg-[url('https://html.rrdevs.net/edcare/assets/img/images/request-img-1.png')] bg-contain bg-no-repeat bg-bottom lg:w-[600px] xl:w-[845px] h-[513px] absolute -lg:left-20 xl:left-[50px] bottom-0 z-0 opacity-90 xl:opacity-100"></div>
      
      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">
          
          {/* Spacer Div */}
          <div className="hidden lg:block lg:col-span-6"></div>

          {/* Content Div */}

          <div className="col-span-1 lg:col-span-6 pt-0 lg:pt-24 lg:pl-12 xl:pl-0">
            <SectionHeading heading={"Subscribe Newsletter"}></SectionHeading>
            
            <h2 className="text-3xl md:text-[40px] font-bold text-white mt-2 leading-tight">
              Find Your Best Course With Us
            </h2>
            
            <p className="text-[#9fa0a0] text-sm md:text-base tracking-wide font-medium my-5 md:my-7 text-justify md:text-left">
              Quality technologies via fully tested methods of empowerment.
              Proactively disseminate web enabled best practices after cross
              functional expertise.
            </p>

            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-7">
              <input
                type="text"
                placeholder="Course Name"
                className="w-full bg-transparent shadow-none outline-none border border-[#3D3E44] rounded-full px-5 py-3 md:px-7 text-white placeholder-white/70 placeholder:text-sm md:placeholder:text-base focus:border-[#07a698] transition-colors"
              />

              <input
                type="text"
                placeholder="Email Address"
                className="w-full bg-transparent shadow-none outline-none border border-[#3D3E44] rounded-full px-5 py-3 md:px-7 text-white placeholder-white/70 placeholder:text-sm md:placeholder:text-base focus:border-[#07a698] transition-colors"
              />
            </div>

            <div>
              <a
                href=""
                className="bg-[#07a698] px-8 md:px-10 py-3 text-white font-bold rounded-full inline-flex items-center justify-center w-full md:w-auto hover:bg-[#068a7e] transition"
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