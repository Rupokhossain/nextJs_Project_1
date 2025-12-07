import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import React from "react";
import Image from "next/image";

// Images
import c1 from "../../../src/assets/images/category-1.png";
import c2 from "../../../src/assets/images/category-2.png";
import c3 from "../../../src/assets/images/category-3.png";
import c4 from "../../../src/assets/images/category-4.png";

const Categorys = () => {
  // Data Array with different names
  const categoryList = [
    { name: "Graphic Design", img: c1 },
    { name: "Web Development", img: c2 },
    { name: "Digital Marketing", img: c3 },
    { name: "Data Science", img: c4 },
    { name: "Personal Development", img: c2 },
    { name: "Health & Fitness", img: c1 },
    { name: "Photography", img: c3 },
    { name: "Music & Audio", img: c4 },
    { name: "Finance & Accounting", img: c1 },
    { name: "IT & Software", img: c2 },
    { name: "Office Productivity", img: c3 },
    { name: "Leadership", img: c4 },
    { name: "Cyber Security", img: c1 },
  ];

  return (
    <div className="py-16 md:py-24 bg-[#f2f4f7]">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        {/* Heading Section */}
        <div className="text-center mb-10 md:mb-14">
          <SectionHeading
            heading={"Our Course Categories"}
            subHeading={"Select The Industry Where You Want To Learn"}
          />
        </div>

        {/* Categories List */}
        {/* flex-wrap: অটোমেটিক নিচে নিচে নামবে ছোট স্ক্রিনে */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categoryList.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group bg-white border border-[#e0e5eb] rounded-full pl-2 pr-6 py-2 inline-flex items-center gap-3 transition-all duration-300 hover:border-[#07a698] hover:shadow-md"
            >
              <span className="bg-[#f2f4f7] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center group-hover:bg-[#07a698] transition duration-300">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  className="w-5 h-5 md:w-auto md:h-auto group-hover:brightness-0 group-hover:invert transition duration-300"
                />
              </span>
              <span className="text-[#162726] font-bold text-sm md:text-base group-hover:text-[#07a698] transition duration-300">
                {item.name}
              </span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Categorys;