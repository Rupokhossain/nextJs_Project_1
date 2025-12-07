import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";
import heroImg from "../../../src/assets/images/hero-img-1.png";
import shape1 from "../../../src/assets/images/hero-shape-2.png";

const Hero = () => {
  return (
    <div className="bg-[#eff2f9] py-16 md:py-24 relative overflow-hidden">
      
      <div className="absolute left-4 bottom-4 md:left-16 md:bottom-12 animate-bounce hidden lg:block z-0">
        <Image src={shape1} alt="shape" />
      </div>

      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-0">
          
          {/* --- Left Side --- */}
          <div className="col-span-1 lg:col-span-7 order-2 lg:order-1">
            <div>
              <SectionHeading heading={"Welcome to Online Education"} />

              {/* Text Size Responsive: text-3xl (Mobile) -> text-[50px] (Desktop) */}
              <h2 className="text-3xl md:text-[50px] font-bold text-[#162726] leading-tight md:leading-[1.2] mt-3">
                Start learning from<br className="hidden md:block" /> the world’s{" "}
                <span className="text-[#07a698] font-medium">
                  best institutions
                </span>
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 my-8 md:my-10">
              <div>
                <a
                  href=""
                  className="bg-[#07a698] px-8 md:px-10 py-3 text-white font-bold rounded-full inline-flex items-center hover:bg-[#068a7e] transition"
                >
                  Get Started
                </a>
              </div>

              <div>
                <a
                  href=""
                  className="text-[#162726] flex items-center justify-center gap-2.5 font-medium hover:text-[#07a698] transition"
                >
                  <div className="text-[#07a698] bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                    <FaPlay className="pl-1" />
                  </div>
                  Watch the video
                </a>
              </div>
            </div>

            {/* Enrolment Section */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex -space-x-4">
                <Image
                  src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-1.png"
                  alt="author1"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-2.png"
                  alt="author2"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-3.png"
                  alt="author3"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-4.png"
                  alt="author4"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <h5 className="text-sm md:text-base text-[#162726] font-medium">
                <span className="text-[#07a698] font-bold">10k </span>Enrolment
              </h5>
            </div>

            <div>
              <p className="mt-8 md:mt-10 text-xl md:text-2xl font-bold text-[#162726]">
                Explore <span className="text-[#07a698]">1350+</span> Courses within Subject
              </p>
            </div>
          </div>

          {/* --- Right Side (Image) --- */}
          <div className="col-span-1 lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <Image
              src={heroImg}
              alt="heroImg"
              width={600} 
              height={700}
              className="object-cover rounded-[40px] md:rounded-[70px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;