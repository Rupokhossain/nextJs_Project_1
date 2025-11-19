import React from "react";
import aboutImg from "../../../src/assets/images/about-img-1.jpg";
import aboutImg1 from "../../../src/assets/images/about-img-2.jpg";
import icon_1 from "../../../src/assets/images/icon-1.png";
import icon_2 from "../../../src/assets/images/icon-2.png";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import SectionHeading from "@/Components/SectionHeading/SectionHeading";

const About = () => {
  return (
    <div className="py-24 ">
      <div className="container mx-auto px-24">
        <div className="grid grid-cols-12">
          {/* left side */}
          <div className="col-span-6 relative">
            <div className="border-2 relative border-[#dde1e7] max-w-72 rounded-tr-[58px] rounded-bl-[58px] p-1.5">
              <Image
                src={aboutImg}
                alt="about_img"
                className="rounded-tr-[60px] rounded-bl-[60px]"
              />

              <div className="absolute left-36 top-1/2 transform -translate-1/2 ">
                <div className="text-[#07a698] bg-white w-20 h-20 text-2xl rounded-full flex items-center justify-center">
                  <FaPlay />
                </div>
              </div>
            </div>

            <div className="max-w-64 absolute bottom-0 right-24">
              <Image
                src={aboutImg1}
                alt="about_img"
                className="rounded-tl-[60px] rounded-br-[60px]"
              />
            </div>

            <div className="bg-[#07a698] max-w-72 p-7 rounded-tr-[58px] rounded-bl-[58px] flex items-center gap-3 mt-3">
              <div className="w-12 h-12 rounded-full text-[#07a698]  bg-white flex items-center justify-center ">
                <FiPhoneCall />
              </div>
              <div>
                <p className="font-medium text-sm uppercase text-white">
                  Online Support
                </p>
                <a href="#" className="text-2xl font-bold text-white">
                  +258 152 3659
                </a>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="col-span-6">
            <div>
              <SectionHeading
                heading={"Get More About Us"}
                subHeading={
                  "Over 10 Years in Distant learning for Skill Development"
                }
              ></SectionHeading>

              <p className="text-[#6c706f] text-base font-medium leading-7 my-4">
                Compellingly procrastinate equity invested markets with
                efficient process improvements. actualize mission-critical
                partnerships with integrated portals. Authoritatively optimize
                low-risk high-yield metrics and plug-and-play potentialities.
              </p>

              <div className="flex justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="border  border-[#E0E5EB] w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md">
                    <Image src={icon_1} alt="icon" className="p-2" />
                  </div>
                  <div>
                    <h3 className="text-[#07a698] text-2xl font-bold mb-1.5">
                      9.5k+
                    </h3>
                    <p>Total active students taking gifted courses</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="border border-[#E0E5EB] w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md">
                    <Image src={icon_2} alt="icon" className="p-2" />
                  </div>
                  <div>
                    <h3 className="text-[#07a698] text-2xl font-bold mb-1.5">
                      6.7k+
                    </h3>
                    <p>Total active students taking gifted courses</p>
                  </div>
                </div>
              </div>

              <div className="mt-9">
                <a
                  href=""
                  className="bg-[#07a698] px-10 py-3 text-white font-bold rounded-full inline-flex items-center"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
