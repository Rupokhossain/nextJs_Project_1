import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const page = async () => {
  // fetch shops
  const res = await fetch("http://localhost:5000/shops", {
    cache: "no-store",
  });
  const shops = await res.json();

  return (
    <div className="py-16 md:py-24">
      {/* Container Responsive Padding */}
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        <div className="text-center">
          <SectionHeading
            heading={"Top Class Shops"}
            subHeading={"Explore Featured Shops"}
          ></SectionHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 md:mt-16">
          {shops.map((shop) => (
            <Link key={shop.id} href={`/shops/${shop.id}`} className="block h-full">
              <div className="bg-white border border-[#E0E5EB] rounded-lg group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                
                {/* Image Section */}
                <div className="text-center cursor-pointer border-b border-b-[#E0E5EB] bg-[#f2f4f7] h-[260px] md:h-[300px] relative overflow-hidden rounded-t-lg">
                  <Image
                    src={shop.image}
                    alt="shop"
                    width={124}
                    height={188}
                    className="absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="text-[#07a698] bg-white text-xs md:text-sm px-4 py-1 md:px-5 md:py-1 rounded-full absolute top-4 left-4 border border-[#E0E5EB] font-medium shadow-sm">
                    {shop.name}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-5 md:p-7 grow">
                  <h2 className="text-[#162726] group-hover:text-[#07a698] text-lg md:text-xl font-bold transition-colors">
                    {shop.title}
                  </h2>

                  <div className="flex items-center my-2.5 gap-2">
                    <div className="flex gap-1 text-yellow-500 text-sm">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-[#6c706f] text-sm md:text-base">({shop.reviews} Reviews)</p>
                  </div>

                  <div className="flex items-center gap-2 font-semibold text-lg">
                    <p className="text-[#9ea0a0] line-through text-base">
                      ${shop.oldPrice}
                    </p>
                    <p className="text-[#07a698]">${shop.newPrice}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;