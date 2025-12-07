import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const page = async () => {
  // fetch courses
  const res = await fetch("http://localhost:5000/courses", {
    cache: "no-store",
  });
  const courses = await res.json();

  return (
    <div className="bg-[#f2f4f7] py-16 md:py-24">
      {/* Container Responsive Padding */}
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        <div className="text-center">
          <SectionHeading
            heading={"Top Class Courses"}
            subHeading={"Explore Featured Courses"}
          ></SectionHeading>
        </div>

        {/* Grid System: 1 Col Mobile -> 2 Col Tablet -> 3 Col Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-[#e0e5eb] rounded-lg flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="px-5 pt-5 md:px-7 md:pt-7 rounded-lg">
                <div className="relative w-full h-[200px] md:h-60 overflow-hidden rounded-md">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill // fill ব্যবহার করলে ইমেজ কন্টেইনার জুড়ে থাকে
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-7 grow">
                <p className="bg-[#07a6981a] text-[#07a698] px-4 py-1.5 inline-block font-bold rounded-full text-xs md:text-sm">
                  {course.priceDisplay}
                </p>
                <h2 className="text-xl md:text-[22px] font-bold text-[#162726] my-4 leading-snug">
                  {course.title}
                </h2>

                <div className="flex items-center justify-between text-[#162726] text-sm md:text-base font-medium">
                  <p>Lesson {course.lessons}</p>
                  <p>Students {course.students}</p>
                  <p>Views {course.views}</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-y-3 mt-5">
                  <div className="flex gap-3 items-center">
                    <Image
                      src={course.instructor.image}
                      alt={course.title}
                      width={45}
                      height={45}
                      className="rounded-full object-cover"
                    />
                    <div>
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
                    <p className="text-sm font-semibold">{course.instructor.rating}</p>
                  </div>
                </div>
              </div>

              {/* Footer / Button Section */}
              <div className="py-5 px-6 flex items-center justify-between border-t border-t-[#e0e5eb] mt-auto">
                <span className="text-[#162726] font-bold text-lg md:text-xl">$59.00</span>

                <Link href={`/courses/${course.id}`}>
                  <button className="border border-[#E0E5EB] px-5 py-2 rounded-full text-sm md:text-base font-semibold cursor-pointer hover:bg-[#07a698] hover:text-white transition-colors duration-300">
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

export default page;