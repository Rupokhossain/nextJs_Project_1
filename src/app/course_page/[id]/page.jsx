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
  console.log(id);

  // fetch courses
  const res = await fetch(`http://localhost:5000/courses/${id}`, {
    cache: "no-store",
  });
  const course = await res.json();
  console.log(course);

  // fetch top categories
  // const res2 = await fetch("http://localhost:5000/topCategories",  { cache: "no-store" });
  // const topCategory = await res2.json();

  return (
    <div className="py-24">
      <div className="container mx-auto px-24">
        <div className="grid grid-cols-12 gap-6">
          {/* left side */}
          <div className="col-span-9 border border-[#e0e5eb] rounded-xl">
            <div>
              <div className="p-8">
                <Image
                  src={course_detais}
                  alt="course-details"
                  className="w-full rounded-lg"
                />
              </div>

              <div className="px-8 pb-8">
                <p className="bg-[#07a6981a] text-[#07a698] px-4 py-1.5 inline-block font-bold rounded-full">
                  {course.priceDisplay}
                </p>
                <h2 className="text-[22px] font-bold text-[#162726] my-4">
                  {course.title}
                </h2>
                <div className="flex justify-between items-center mt-8">
                  <div className="flex items-center gap-3">
                    <Image
                      src={course.instructor.image}
                      alt={course.title}
                      width={45}
                      height={45}
                    />

                    <p
                      className="text-lg font-semibold text-[#07a698]"
                    >
                      Instructor:{" "}
                      <span className="text-[#162726]">
                        {course.instructor.name}
                      </span>
                    </p>
                  </div>
                  <p className="text-[#162726] text-lg font-semibold">
                    {course.category}
                  </p>
                  <p className="text-[#162726] text-lg font-semibold">
                    04 April, 2022
                  </p>
                  <div className="flex items-center mt-2 gap-2  ">
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

              <div className="pb-8 px-8">
                <h2 className="text-3xl text-[#162726] font-bold mb-5">
                  Description
                </h2>

                <div className="space-y-6">
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

              <div className="pb-10 px-8">
                <h2 className="text-3xl text-[#162726] font-bold my-5">
                  What Will You Learn?
                </h2>
                <p>
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
          {/* right side */}
          <div className="col-span-3">
            <div className="border border-[#e0e5eb] rounded-2xl p-7 mb-7">
              <h4 className="text-[#162726] font-bold text-3xl flex items-center gap-2.5 mb-6">
                $90.00
                <span
                  className="bg-[#07a698] text-white px-2.5 py-1.5 rounded-full
                 text-xs font-semibold"
                >
                  25% off
                </span>
              </h4>
              <a
                href=""
                className="bg-[#07a698] px-10 py-4 w-full text-center uppercase text-white font-bold rounded-md flex items-center justify-center"
              >
                Add to Cart
              </a>
              <a
                href=""
                className="bg-transparent border border-[#07a698] mt-2.5 px-10 py-4 w-full text-center uppercase text-[#162726] font-bold rounded-md flex items-center justify-center"
              >
                Buy Now
              </a>
            </div>

            <div className="border border-[#e0e5eb] rounded-2xl p-7 sticky top-6">
              <h4 className="text-2xl font-semibold text-[#162726] mb-6">
                Course Information
              </h4>

              <div>
                <div className="border-b border-t border-dashed border-b-[#ced4e2] border-t-[#ced4e2]   mb-4 py-4 flex items-center gap-2">
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

                <div className="border-b  border-dashed border-b-[#ced4e2]   mb-4 py-4 flex items-center gap-2">
                  <span>
                    <MdLibraryBooks className="text-[#07a698] size-5" />
                  </span>
                  <p className="text-[#162726] text-base font-medium">
                    Lessons:{" "}
                    <span className="text-[#6c706f]">{course.lessons}</span>
                  </p>
                </div>

                <div className="border-b border-dashed border-b-[#ced4e2]   mb-4 py-4 flex items-center gap-2">
                  <span>
                    <MdAccessTime className="text-[#07a698] size-5" />
                  </span>
                  <p className="text-[#162726] text-base font-medium">
                    Duration:{" "}
                    <span className="text-[#6c706f]">15h 30m 36s</span>
                  </p>
                </div>

                <div className="border-b border-dashed border-b-[#ced4e2]   mb-4 py-4 flex items-center gap-2">
                  <span>
                    <GoTag className="text-[#07a698] size-5" />
                  </span>
                  <p className="text-[#162726] text-base font-medium">
                    Course level:{" "}
                    <span className="text-[#6c706f]">{course.level}</span>
                  </p>
                </div>

                <div className="border-b border-dashed border-b-[#ced4e2]   mb-4 py-4 flex items-center gap-2">
                  <span>
                    <MdLanguage className="text-[#07a698] size-5" />
                  </span>
                  <p className="text-[#162726] text-base font-medium">
                    Language: <span className="text-[#6c706f]">English</span>
                  </p>
                </div>

                <div className="border-b border-dashed border-b-[#ced4e2]   mb-4 py-4 flex items-center gap-2">
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
                    className="bg-[#f2f4f7] px-10 py-4 w-full text-center text-[#07a698] font-bold rounded-md flex items-center justify-center gap-2"
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
