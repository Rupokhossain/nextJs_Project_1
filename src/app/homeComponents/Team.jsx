import React from "react";
import content1 from "../../../public/assets/images/content-img-1.png";
import content2 from "../../../public/assets/images/content-img-2.png";
import content3 from "../../../public/assets/images/content-img-3.png";
import content4 from "../../../public/assets/images/content-1.png";
import content5 from "../../../public/assets/images/content-2.png";
import Image from "next/image";
import SectionHeading from "@/Components/SectionHeading/SectionHeading";

const Team = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <div className="relative max-w-[634px] w-full h-[608px]">
              <div className="max-w-[302px] h-[480px] absolute top-1/2 left-0 tranform -translate-y-1/2 ">
                <Image
                  src={content1}
                  alt="content"
                  className="rounded-tl-[60px] rounded-br-[60px] overflow-hidden z-1"
                />
              </div>

              <div className="max-w-[302px] h-[294px] absolute top-0 right-0 ">
                <Image
                  src={content2}
                  alt="content"
                  className="rounded-tr-[60px] rounded-bl-[60px] overflow-hidden z-1"
                />
              </div>

              <div className="max-w-[302px] h-[294px] absolute bottom-0 right-0">
                <Image
                  src={content3}
                  alt="content"
                  className="rounded-tl-[60px] rounded-br-[60px] overflow-hidden z-1"
                />
              </div>
              <div className="max-w-[347px] w-full h-[552px] border border-[#07a698] rounded-tl-[60px] rounded-br-[60px] absolute transform -translate-y-1/2 top-1/2 left-[15%] -z-10"></div>
            </div>
          </div>

          <div className="col-span-5">
            <div>
              <SectionHeading
                heading={"How We Start Journey"}
                subHeading={"We Care About Your Life For Better Future"}
              ></SectionHeading>

              <p className="py-7 leading-relaxed text-base font-medium">
                This includes offering personalized feedback, fostering a sense
                of community through discussion forums and group projects, and
                providing continuous support to address challenges and improve.
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-[85px_1fr] gap-3 p-7 rounded-xl border border-[#e0e5eb]">
                  <div className="w-20 h-20 bg-[#ecf3f8] flex items-center justify-center rounded-full">
                    <Image src={content4} alt="content" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#162726] mb-3">
                      Master Certified Trainer
                    </h4>
                    <p className="text-base font-medium leading-relaxed">
                      This includes offering personalized feedback, fostering a
                      sense of community through discussion.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[85px_1fr] gap-3 p-7 rounded-xl border border-[#e0e5eb]">
                  <div className="w-20 h-20 bg-[#ecf3f8] flex items-center justify-center rounded-full">
                    <Image src={content5} alt="content" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#162726] mb-3">
                     Coach Certification Program
                    </h4>
                    <p className="text-base font-medium leading-relaxed">
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
