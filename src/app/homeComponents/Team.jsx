import React from "react";
import Image from "next/image";
import SectionHeading from "@/Components/SectionHeading/SectionHeading";

// Images
import content1 from "../../../public/assets/images/content-img-1.png";
import content2 from "../../../public/assets/images/content-img-2.png";
import content3 from "../../../public/assets/images/content-img-3.png";
import content4 from "../../../public/assets/images/content-1.png";
import content5 from "../../../public/assets/images/content-2.png";

const Team = () => {
  return (
    <div className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        {/* Grid: Mobile 1 column, Desktop 2 columns (using grid-cols-12 logic) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* --- Left Side (Image Collage) --- */}
          <div className="col-span-1 lg:col-span-6 relative">
            {/* Wrapper div to maintain aspect ratio and responsiveness */}
            <div className="relative w-full max-w-[550px] mx-auto lg:mx-0 h-[450px] md:h-[550px] lg:h-[608px]">
              
              {/* Border Shape (Background) */}
              <div className="absolute top-1/2 left-[10%] transform -translate-y-1/2 w-[55%] h-[90%] border border-[#07a698] rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[60px] md:rounded-br-[60px] -z-10"></div>

              {/* Left Tall Image */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[48%] h-auto z-10">
                <Image
                  src={content1}
                  alt="content"
                  className="rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[60px] md:rounded-br-[60px] w-full h-auto object-cover shadow-lg"
                />
              </div>

              {/* Top Right Image */}
              <div className="absolute top-[5%] right-0 w-[48%] h-auto z-10">
                <Image
                  src={content2}
                  alt="content"
                  className="rounded-tr-[40px] rounded-bl-[40px] md:rounded-tr-[60px] md:rounded-bl-[60px] w-full h-auto object-cover shadow-lg"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="absolute bottom-[5%] right-0 w-[48%] h-auto z-10">
                <Image
                  src={content3}
                  alt="content"
                  className="rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[60px] md:rounded-br-[60px] w-full h-auto object-cover shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* --- Right Side (Content) --- */}
          <div className="col-span-1 lg:col-span-6 lg:pl-8">
            <div>
              <SectionHeading
                heading={"How We Start Journey"}
                subHeading={"We Care About Your Life For Better Future"}
              />

              <p className="py-5 md:py-7 leading-relaxed text-sm md:text-base font-medium text-[#6c706f] text-justify md:text-left">
                This includes offering personalized feedback, fostering a sense
                of community through discussion forums and group projects, and
                providing continuous support to address challenges and improve.
              </p>

              <div className="space-y-6">
                
                {/* Feature Box 1 */}
                <div className="flex flex-col sm:flex-row gap-5 p-5 md:p-7 rounded-xl border border-[#e0e5eb] items-start sm:items-center bg-white hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#ecf3f8] flex items-center justify-center rounded-full shrink-0">
                    <Image src={content4} alt="content" className="w-8 h-8 md:w-auto md:h-auto" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#162726] mb-2 md:mb-3">
                      Master Certified Trainer
                    </h4>
                    <p className="text-sm md:text-base font-medium leading-relaxed text-[#6c706f]">
                      This includes offering personalized feedback, fostering a
                      sense of community through discussion.
                    </p>
                  </div>
                </div>

                {/* Feature Box 2 */}
                <div className="flex flex-col sm:flex-row gap-5 p-5 md:p-7 rounded-xl border border-[#e0e5eb] items-start sm:items-center bg-white hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#ecf3f8] flex items-center justify-center rounded-full shrink-0">
                    <Image src={content5} alt="content" className="w-8 h-8 md:w-auto md:h-auto" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#162726] mb-2 md:mb-3">
                     Coach Certification Program
                    </h4>
                    <p className="text-sm md:text-base font-medium leading-relaxed text-[#6c706f]">
                      This includes offering personalized feedback, fostering a
                      sense of community through discussion.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Team;