"use client";
import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const Course = ({ handleClick, topCategorys, courses, selectedId }) => {
  // Logic remains exactly the same
  const filterData = selectedId
    ? courses.filter((course) => course.id == selectedId)
    : courses;

  return (
    <div className="bg-[#f2f4f7] py-16 md:py-24">
      {/* Responsive Container Padding */}
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        <div className="text-center">
          <SectionHeading
            heading={"Top Class Courses"}
            subHeading={"Explore Featured Courses"}
          ></SectionHeading>
        </div>

        {/* Categories: Added flex-wrap for mobile */}
        <div className="mt-10 md:mt-16 flex flex-wrap gap-3 md:gap-4 items-center justify-center grow">
          {topCategorys.map((topCategorie) => (
            <div
              key={topCategorie.id}
              onClick={() => handleClick(topCategorie.id)}
            >
              {/* Button padding adjusted slightly for mobile */}
              <p className="text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full px-5 py-2 md:px-7 md:py-2.5 cursor-pointer hover:bg-gray-50 transition">
                {topCategorie.name}
              </p>
            </div>
          ))}
        </div>

        {/* Course Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
          {filterData.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-[#e0e5eb] rounded-lg flex flex-col"
            >
              <div className="px-5 pt-5 md:px-7 md:pt-7 rounded-lg">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>

              <div className="p-5 md:p-7 grow">
                <p className="bg-[#07a6981a] text-[#07a698] px-4 py-1.5 inline-block font-bold rounded-full text-sm">
                  {course.priceDisplay}
                </p>
                <h2 className="text-[20px] md:text-[22px] font-bold text-[#162726] my-4 leading-snug">
                  {course.title}
                </h2>

                <div className="flex items-center justify-between text-[#162726] text-sm md:text-base">
                  <p>Lesson {course.lessons}</p>
                  <p>Students {course.students}</p>
                  <p>Views {course.views}</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-y-3 mt-4">
                  <div className="flex gap-3 items-center">
                    <Image
                      src={course.instructor.image}
                      alt={course.title}
                      width={45}
                      height={45}
                      className="rounded-full"
                    />
                    <div className="">
                      <p className="text-base md:text-lg font-semibold text-[#162726]">
                        {course.instructor.name}
                      </p>
                      <p className="text-[#07a698] text-xs font-medium">
                        Instructor
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <div className="flex gap-1 text-[#07a698] text-sm">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-sm font-medium">{course.instructor.rating}</p>
                  </div>
                </div>
              </div>

              <div className="py-5 px-6 flex items-center justify-between border-t border-t-[#e0e5eb]">
                <span className="text-[#162726] font-bold text-xl">$59.00</span>

                <Link href={`/courses/${course.id}`}>
                  <button className="border border-[#E0E5EB] px-5 py-1.5 rounded-full text-sm md:text-base font-semibold cursor-pointer hover:bg-[#07a698] hover:text-white transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;