import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const Course = async () => {
  const res = await fetch("http://localhost:5000/courses");
  const courses = await res.json();

  console.log(courses);
  return (
    <div className="bg-[#f2f4f7] py-24">
      <div className="container mx-auto px-24">
        <div className="text-center">
          <SectionHeading
            heading={"Top Class Courses"}
            subHeading={"Explore Featured Courses"}
          ></SectionHeading>
        </div>

        <div className="mt-16">
          <div className="flex gap-4 items-center justify-center grow">
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full px-7 py-2.5"
            >
              All Categories
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full px-7 py-2.5"
            >
              Business
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full px-7 py-2.5"
            >
              Development
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full px-7 py-2.5"
            >
              Marketing
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full px-7 py-2.5"
            >
              Finance
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full px-7 py-2.5"
            >
              Gaming
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full px-7 py-2.5"
            >
              Design
            </a>
            <a
              href=""
              className=" text-[#162726] font-bold bg-white inline-flex items-center border border-[#e0e5eb] gap-4 rounded-full px-7 py-2.5"
            >
              Data Science
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-[#e0e5eb] rounded-lg"
            >
              <div className="px-7 pt-7 rounded-lg">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={250}
                />
              </div>

                <div className="p-7">
                  <p className="bg-[#07a6981a] text-[#07a698] px-4 py-1.5 inline-block font-bold rounded-full">
                    {course.priceDisplay}
                  </p>
                  <h2 className="text-[22px] font-bold text-[#162726] my-4">
                    {course.title}
                  </h2>

                  <div className="flex items-center justify-between text-[#162726]">
                    <p>Lesson {course.lessons}</p>
                    <p>Students {course.students}</p>
                    <p>Views {course.views}</p>
                  </div>

                  <div className="flex items-center justify-between ">
                    <div className="flex gap-3 items-center mt-4">
                      <Image
                        src={course.instructor.image}
                        alt={course.title}
                        width={45}
                        height={45}
                      />
                      <div className="">
                        <p className="text-lg font-semibold text-[#162726]">
                          {course.instructor.name}
                        </p>
                        <p className="text-[#07a698] text-xs font-medium">
                          Instructor
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center mt-2 gap-2  ">
                      <div className="flex gap-1 text-[#07a698]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p>{course.instructor.rating}</p>
                    </div>
                  </div>
                </div>

                <div className="py-5 px-6 flex items-center justify-between border-t border-t-[#e0e5eb]">
                    <span className="text-[#162726] font-bold text-xl">$59.00</span>
                    <a href="" className="border border-[#E0E5EB] px-5 py-1.5 rounded-full text-base font-semibold">View Details</a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
