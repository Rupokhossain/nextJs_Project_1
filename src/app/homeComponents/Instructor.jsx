import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import Image from "next/image";
import React from "react";
import team1 from "../../../public/assets/images/team-1.png";
import team2 from "../../../public/assets/images/team-2.png";
import team3 from "../../../public/assets/images/team-3.png";
import team4 from "../../../public/assets/images/team-4.png";

const Instructor = () => {
  return (
    <div className="bg-[#e5f4ff] py-24">
      <div className="container mx-auto px-24">
        <div className="text-center mb-10">
          <SectionHeading
            heading={"Our Instructors"}
            subHeading={"Explore Our World's Best Courses"}
          ></SectionHeading>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3 relative overflow-hidden">
            <div>
              <Image src={team1} alt="team" className="rounded-lg w-full" />
            </div>
            <div className="absolute bottom-0 left-0 bg-white py-5 px-7 w-full rounded-bl-lg rounded-br-lg">
              <h3 className="text-2xl font-semibold mb-1.5 text-[#162726]">
                Zaramane Mass Likan
              </h3>
              <p className="text-base text-[#07a698]">Online Teachers</p>
            </div>
          </div>

          <div className="col-span-3 relative overflow-hidden">
            <div>
              <Image src={team2} alt="team" className="rounded-lg w-full" />
            </div>
            <div className="absolute bottom-0 left-0 bg-white py-5 px-7 w-full rounded-bl-lg rounded-br-lg">
              <h3 className="text-2xl font-semibold mb-1.5 text-[#162726]">
                Amelia Grace Lily
              </h3>
              <p className="text-base text-[#07a698]">Online Teachers</p>
            </div>
          </div>

          <div className="col-span-3 relative overflow-hidden">
            <div>
              <Image src={team3} alt="team" className="rounded-lg w-full" />
            </div>
            <div className="absolute bottom-0 left-0 bg-white py-5 px-7 w-full rounded-bl-lg rounded-br-lg">
              <h3 className="text-2xl font-semibold mb-1.5 text-[#162726]">
                Mason Logan Dee
              </h3>
              <p className="text-base text-[#07a698]">Online Teachers</p>
            </div>
          </div>
          <div className="col-span-3 relative overflow-hidden">
            <div>
              <Image src={team4} alt="team" className="rounded-lg w-full" />
            </div>
            <div className="absolute bottom-0 left-0 bg-white py-5 px-7 w-full rounded-bl-lg rounded-br-lg">
              <h3 className="text-2xl font-semibold mb-1.5 text-[#162726]">
                Isabella Charlotte
              </h3>
              <p className="text-base text-[#07a698]">Online Teachers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
