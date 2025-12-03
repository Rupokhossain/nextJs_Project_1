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
    <div className="py-16">
      <div className="container mx-auto px-24">
        <div className="text-center">
          <SectionHeading
            heading={"Top Class Shops"}
            subHeading={"Explore Featured Shops"}
          ></SectionHeading>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-16">
          {shops.map((shop) => (
            <Link key={shop.id} href={`/shops/${shop.id}`}>
              <div
                
                className="bg-white border border-[#E0E5EB] rounded-lg"
              >
                <div className="text-center cursor-pointer border-b border-b-[#E0E5EB] bg-[#f2f4f7] h-[300px] relative">
                  <Image
                    src={shop.image}
                    alt="shop"
                    width={124}
                    height={188}
                    className="absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"
                  />
                  <span className="text-[#07a698] bg-white text-sm px-5 py-1 rounded-full absolute top-5 left-5 border border-[#E0E5EB]">
                    {shop.name}
                  </span>
                </div>

                <div className="p-7">
                  <h2 className="text-[#07a698] text-xl font-bold">
                    {shop.title}
                  </h2>

                  <div className="flex items-center my-2.5 gap-2 ">
                    <div className="flex gap-1 text-yellow-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-[#6c706f]">({shop.reviews} Reviews)</p>
                  </div>

                  <div className="flex items-center gap-2 font-semibold">
                    <p className="text-[#6c706f] line-through">
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
