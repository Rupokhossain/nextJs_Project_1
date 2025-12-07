import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import Image from "next/image";
import React from "react";
import team1 from "../../../public/assets/images/team-1.png";
import team2 from "../../../public/assets/images/team-2.png";
import team3 from "../../../public/assets/images/team-3.png";
import team4 from "../../../public/assets/images/team-4.png";

const Instructor = () => {
  return (
    <div className="bg-[#e5f4ff] py-16 md:py-24">
      {/* Container Padding Fix */}
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        <div className="text-center mb-10 md:mb-14">
          <SectionHeading
            heading={"Our Instructors"}
            subHeading={"Explore Our World's Best Courses"}
          ></SectionHeading>
        </div>

        {/* 
           Grid System Update:
           - Mobile: grid-cols-1 (1 item per row)
           - Tablet: md:grid-cols-2 (2 items per row)
           - Desktop: lg:grid-cols-4 (4 items per row)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Instructor 1 */}
          <div className="relative overflow-hidden rounded-lg group">
            <div className="w-full">
              <Image src={team1} alt="team" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 bg-white py-4 px-5 md:py-5 md:px-7 w-full rounded-bl-lg rounded-br-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold mb-1 text-[#162726]">
                Zaramane Mass Likan
              </h3>
              <p className="text-sm md:text-base text-[#07a698] font-medium">Online Teachers</p>
            </div>
          </div>

          {/* Instructor 2 */}
          <div className="relative overflow-hidden rounded-lg group">
            <div className="w-full">
              <Image src={team2} alt="team" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 bg-white py-4 px-5 md:py-5 md:px-7 w-full rounded-bl-lg rounded-br-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold mb-1 text-[#162726]">
                Amelia Grace Lily
              </h3>
              <p className="text-sm md:text-base text-[#07a698] font-medium">Online Teachers</p>
            </div>
          </div>

          {/* Instructor 3 */}
          <div className="relative overflow-hidden rounded-lg group">
            <div className="w-full">
              <Image src={team3} alt="team" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 bg-white py-4 px-5 md:py-5 md:px-7 w-full rounded-bl-lg rounded-br-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold mb-1 text-[#162726]">
                Mason Logan Dee
              </h3>
              <p className="text-sm md:text-base text-[#07a698] font-medium">Online Teachers</p>
            </div>
          </div>

          {/* Instructor 4 */}
          <div className="relative overflow-hidden rounded-lg group">
            <div className="w-full">
              <Image src={team4} alt="team" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 bg-white py-4 px-5 md:py-5 md:px-7 w-full rounded-bl-lg rounded-br-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold mb-1 text-[#162726]">
                Isabella Charlotte
              </h3>
              <p className="text-sm md:text-base text-[#07a698] font-medium">Online Teachers</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Instructor;