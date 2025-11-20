import React from "react";

import course_detais from "../../../../public/assets/images/course-details-img.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

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
              <div className=" p-7">
                <Image
                  src={course_detais}
                  alt="course-details"
                  className="w-full rounded-lg"
                />
              </div>

              <div className="p-8">
                <p className="bg-[#07a6981a] text-[#07a698] px-4 py-1.5 inline-block font-bold rounded-full">
                  {course.priceDisplay}
                </p>
                <h2 className="text-[22px] font-bold text-[#162726] my-4">
                  {course.title}
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Image
                      src={course.instructor.image}
                      alt={course.title}
                      width={45}
                      height={45}
                    />

                    <p
                      className="text-lg font-semibold text-[#07a698]
"
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
                <h2 className="text-3xl text-[#162726] font-bold my-7">
                  Description
                </h2>

                <div className="space-y-10">
                  <p>
                    Rapidiously develop parallel e-markets via worldwide
                    paradigms. Quickly synergize cutting-edge scenarios and
                    professional results. Assertively deliver cross-media
                    results before client-centric results. Uniquely initiate
                    intuitive communities through process-centric internal or
                    "organic" sources. Energistically reinvent distinctive value
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
                    focused paradigms via orthogonal "outside the box" thinking.
                    Rapidiously administrate 2.0 total linkage for
                    cross-platform channels.
                  </p>
                </div>
              </div>

              <div className="pb-8 px-8">
                <h2 className="text-3xl text-[#162726] font-bold my-7">
                  What Will You Learn?
                </h2>
                <p>
                  Quickly synergize cutting-edge scenarios and professional
                  results. Assertively deliver cross-media results before
                  client-centric results. Uniquely initiate intuitive
                  communities through process-centric internal or "organic"
                  sources. Energistically reinvent distinctive value via
                  parallel services extensive paradigms cross-unit manufactured
                  products.
                </p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
