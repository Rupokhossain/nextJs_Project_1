import React from "react";
import { GrShareOption } from "react-icons/gr";
import course_detais from "../../../../public/assets/images/course-details-img.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import {
  MdAccessTime,
  MdLanguage,
  MdLibraryBooks,
  MdOutlineHome,
  MdOutlineQuiz,
} from "react-icons/md";
import { GoTag } from "react-icons/go";

const page = async ({ params }) => {
  const { id } = await params;

  // fetch courses
  const res = await fetch(`http://localhost:5000/courses/${id}`, {
    cache: "no-store",
  });
  const course = await res.json();

  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        {/* Main Grid: Mobile 1 column, Desktop 12 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
          
          {/* --- Left Side Content --- */}
          {/* Mobile: col-span-1, Desktop: col-span-9 */}
          <div className="col-span-1 lg:col-span-8 xl:col-span-9 border border-[#e0e5eb] rounded-xl h-fit">
            <div>
              <div className="p-4 md:p-8">
                <Image
                  src={course_detais}
                  alt="course-details"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              <div className="px-4 md:px-8 pb-4 md:pb-8">
                <p className="bg-[#07a6981a] text-[#07a698] px-4 py-1.5 inline-block font-bold rounded-full text-sm md:text-base">
                  {course.priceDisplay}
                </p>
                <h2 className="text-xl md:text-[22px] font-bold text-[#162726] my-4 leading-snug">
                  {course.title}
                </h2>

                {/* Meta Info Section: Responsive Flex */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 md:mt-8 gap-4 md:gap-0">
                  
                  {/* Instructor */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={course.instructor.image}
                      alt={course.title}
                      width={45}
                      height={45}
                      className="rounded-full"
                    />
                    <p className="text-base md:text-lg font-semibold text-[#07a698]">
                      Instructor:{" "}
                      <span className="text-[#162726]">
                        {course.instructor.name}
                      </span>
                    </p>
                  </div>

                  {/* Other Meta Data */}
                  <div className="flex flex-wrap items-center gap-4 md:gap-8">
                    <p className="text-[#162726] text-base md:text-lg font-semibold">
                      {course.category}
                    </p>
                    <p className="text-[#162726] text-base md:text-lg font-semibold">
                      04 April, 2022
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 text-[#07a698]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="font-semibold">{course.instructor.rating}</p>
                  </div>
                </div>
              </div>

              <div className="pb-6 md:pb-8 px-4 md:px-8">
                <h2 className="text-2xl md:text-3xl text-[#162726] font-bold mb-5">
                  Description
                </h2>

                <div className="space-y-6 text-[#6c706f] text-justify md:text-left leading-7">
                  <p>
                    Rapidiously develop parallel e-markets via worldwide
                    paradigms. Quickly synergize cutting-edge scenarios and
                    professional results. Assertively deliver cross-media
                    results before client-centric results. Uniquely initiate
                    intuitive communities through process-centric internal or
                    organic sources. Energistically reinvent distinctive value
                    via parallel services. Phosfluorescently deploy extensive
                    paradigms vis-a-vis cross-unit manufactured products.
                    Uniquely coordinate impactful services whereas team building
                    e-services. Globally grow multimedia based benefits
                    vis-a-vis client-based niches.
                  </p>

                  <p>
                    Professionally expedite synergistic technology without
                    out-of-the-box human capital. Enthusiastically coordinate
                    state of the art leadership after professional manufactured
                    products. Distinctively enhance future-proof e-services
                    whereas functionalized partnerships. Quickly streamline
                    focused paradigms via orthogonal outside the box thinking.
                    Rapidiously administrate 2.0 total linkage for
                    cross-platform channels.
                  </p>
                </div>
              </div>

              <div className="pb-10 px-4 md:px-8">
                <h2 className="text-2xl md:text-3xl text-[#162726] font-bold my-5">
                  What Will You Learn?
                </h2>
                <p className="text-[#6c706f] leading-7 text-justify md:text-left">
                  Quickly synergize cutting-edge scenarios and professional
                  results. Assertively deliver cross-media results before
                  client-centric results. Uniquely initiate intuitive
                  communities through process-centric internal or organic
                  sources. Energistically reinvent distinctive value via
                  parallel services extensive paradigms cross-unit manufactured
                  products.
                </p>
              </div>
            </div>
          </div>

          {/* --- Right Side Sidebar --- */}
          {/* Mobile: col-span-1, Desktop: col-span-3 */}
          <div className="col-span-1 lg:col-span-4 xl:col-span-3">
            
            {/* Price Card */}
            <div className="border border-[#e0e5eb] rounded-2xl p-5 md:p-7 mb-7">
              <h4 className="text-[#162726] font-bold text-3xl flex items-center gap-2.5 mb-6">
                $90.00
                <span className="bg-[#07a698] text-white px-2.5 py-1.5 rounded-full text-xs font-semibold">
                  25% off
                </span>
              </h4>
              <a
                href=""
                className="bg-[#07a698] px-10 py-4 w-full text-center uppercase text-white font-bold rounded-md flex items-center justify-center hover:bg-[#069588] transition"
              >
                Add to Cart
              </a>
              <a
                href=""
                className="bg-transparent border border-[#07a698] mt-2.5 px-10 py-4 w-full text-center uppercase text-[#162726] font-bold rounded-md flex items-center justify-center hover:bg-[#07a698] hover:text-white transition"
              >
                Buy Now
              </a>
            </div>

            {/* Info Card (Sticky on Desktop) */}
            <div className="border border-[#e0e5eb] rounded-2xl p-5 md:p-7 lg:sticky lg:top-6">
              <h4 className="text-2xl font-semibold text-[#162726] mb-6">
                Course Information
              </h4>

              <div>
                {/* List Items */}
                <div className="border-b border-t border-dashed border-b-[#ced4e2] border-t-[#ced4e2] mb-4 py-4 flex items-center gap-2">
                  <span>
                    <MdOutlineHome className="text-[#07a698] size-5" />
                  </span>
                  <p className="text-[#162726] text-base font-medium">
                    Instructor:{" "}
                    <span className="text-[#6c706f]">
                      {course.instructor.name}
                    </span>
                  </p>
                </div>

                <div className="border-b border-dashed border-b-[#ced4e2] mb-4 py-4 flex items-center gap-2">
                  <span>
                    <MdLibraryBooks className="text-[#07a698] size-5" />
                  </span>
                  <p className="text-[#162726] text-base font-medium">
                    Lessons:{" "}
                    <span className="text-[#6c706f]">{course.lessons}</span>
                  </p>
                </div>

                <div className="border-b border-dashed border-b-[#ced4e2] mb-4 py-4 flex items-center gap-2">
                  <span>
                    <MdAccessTime className="text-[#07a698] size-5" />
                  </span>
                  <p className="text-[#162726] text-base font-medium">
                    Duration:{" "}
                    <span className="text-[#6c706f]">15h 30m 36s</span>
                  </p>
                </div>

                <div className="border-b border-dashed border-b-[#ced4e2] mb-4 py-4 flex items-center gap-2">
                  <span>
                    <GoTag className="text-[#07a698] size-5" />
                  </span>
                  <p className="text-[#162726] text-base font-medium">
                    Course level:{" "}
                    <span className="text-[#6c706f]">{course.level}</span>
                  </p>
                </div>

                <div className="border-b border-dashed border-b-[#ced4e2] mb-4 py-4 flex items-center gap-2">
                  <span>
                    <MdLanguage className="text-[#07a698] size-5" />
                  </span>
                  <p className="text-[#162726] text-base font-medium">
                    Language: <span className="text-[#6c706f]">English</span>
                  </p>
                </div>

                <div className="border-b border-dashed border-b-[#ced4e2] mb-4 py-4 flex items-center gap-2">
                  <span>
                    <MdOutlineQuiz className="text-[#07a698] size-5" />
                  </span>
                  <p className="text-[#162726] text-base font-medium">
                    Quizzes: <span className="text-[#6c706f]">04</span>
                  </p>
                </div>

                <div className="mt-7">
                  <a
                    href=""
                    className="bg-[#f2f4f7] px-10 py-4 w-full text-center text-[#07a698] font-bold rounded-md flex items-center justify-center gap-2 hover:bg-[#e6e9ee] transition"
                  >
                    <GrShareOption className="text-lg font-bold" />
                    Share This Course
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;