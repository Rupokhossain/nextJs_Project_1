import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";
import heroImg from "../../../src/assets/images/hero-img-1.png" 
import shape1 from "../../../src/assets/images/hero-shape-2.png" 


const Hero = () => {
  return (
    <div className="bg-[#eff2f9] py-24">
      <div className="container mx-auto px-24">
        <div className="absolute left-16 bottom-12 animate-bounce">
            <Image src={shape1} alt="shape"/>
        </div>
        <div className="grid grid-cols-12 items-center">
          {/* left side */}
          <div className="col-span-7">
            <div>
              <SectionHeading
                heading={"Welcome to Online Education"}
              ></SectionHeading>

              <h2 className="text-[50px] font-bold text-[#162726] leading-16">
                Start learning from<br></br> the world’s{" "}
                <span className="text-[#07a698] font-medium">
                  {" "}
                  best institutions
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-8 my-10">
              <div>
                <a
                  href=""
                  className="bg-[#07a698] px-10 py-3 text-white font-bold rounded-full inline-flex items-center"
                >
                  Get Started
                </a>
              </div>

              <div>
                <a
                  href=""
                  className="text-[#162726] flex items-center justify-center gap-2.5 font-medium"
                >
                  <div className="text-[#07a698] bg-white w-12 h-12 rounded-full flex items-center justify-center">
                    <FaPlay />
                  </div>
                  Watch the video
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <Image
                  src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-1.png"
                  alt="png1"
                  width={40}
                  height={40}
                />
                <Image
                  src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-2.png"
                  alt="png1"
                  width={40}
                  height={40}
                />
                <Image
                  src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-3.png"
                  alt="png1"
                  width={40}
                  height={40}
                />
                <Image
                  src="https://html.rrdevs.net/edcare/assets/img/images/hero-author-4.png"
                  alt="png1"
                  width={40}
                  height={40}
                />
              </div>
              <h5 className="text-base text-[#162726] font-medium"><span className="text-[#07a698]">10k </span>Enrolment</h5>
            </div>
            <div>
                <p className="mt-10 text-2xl font-bold text-[#162726]">Explore <span className="text-[#07a698]">1350+</span> Courses within Subject</p>
            </div>
          </div>

          {/* right side  */}
          <div className="col-span-5">
            <Image
             src={heroImg}
             alt="heroImg"
             width={"100%"}
             height={"100%"}
             className="object-cover overflow-hidden rounded-[70px]
             "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
