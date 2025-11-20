import React from "react";

const Counter = () => {
  return (
    <div className="bg-[#07a698] py-24 ">
      <div className="container mx-auto px-24">
        <div className="grid grid-cols-12 min-h-[150px]">
          <div className="col-span-3 text-center border-r border-r-[#21bcaf] flex flex-col justify-center">
            <h3 className="text-[40px] text-white font-bold mb-1.5">3,192+</h3>
            <p className="text-base uppercase font-bold text-white">Successflly Trained</p>
          </div>
          
          <div className="col-span-3 text-center border-r border-r-[#21bcaf] flex flex-col justify-center">
            <h3 className="text-[40px] text-white font-bold mb-1.5">15,485+</h3>
            <p className="text-base uppercase font-bold text-white">Classes Completed</p>
          </div>

          <div className="col-span-3 text-center border-r border-r-[#21bcaf] flex flex-col justify-center">
            <h3 className="text-[40px] text-white font-bold mb-1.5">97.55%</h3>
            <p className="text-base uppercase font-bold text-white">Satisfaction Rate</p>
          </div>

          <div className="col-span-3 text-center flex flex-col justify-center">
            <h3 className="text-[40px] text-white font-bold mb-1.5">97.55%</h3>
            <p className="text-base uppercase font-bold text-white">Satisfaction Rate</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Counter;
