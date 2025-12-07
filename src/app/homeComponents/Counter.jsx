import React from "react";

const Counter = () => {
  return (
    <div className="bg-[#07a698] py-16 md:py-24">
      {/* Responsive Container Padding: px-4 (Mobile) -> px-24 (Desktop) */}
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        {/* Grid System: 1 col (Mobile) -> 2 cols (Tablet) -> 4 cols (Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center">
          
          {/* Item 1 */}
          <div className="text-center lg:border-r lg:border-[#21bcaf] flex flex-col justify-center">
            <h3 className="text-4xl md:text-[40px] text-white font-bold mb-2">3,192+</h3>
            <p className="text-sm md:text-base uppercase font-bold text-white tracking-wide">
              Successfully Trained
            </p>
          </div>
          
          {/* Item 2 */}
          <div className="text-center lg:border-r lg:border-[#21bcaf] flex flex-col justify-center">
            <h3 className="text-4xl md:text-[40px] text-white font-bold mb-2">15,485+</h3>
            <p className="text-sm md:text-base uppercase font-bold text-white tracking-wide">
              Classes Completed
            </p>
          </div>

          {/* Item 3 */}
          <div className="text-center lg:border-r lg:border-[#21bcaf] flex flex-col justify-center">
            <h3 className="text-4xl md:text-[40px] text-white font-bold mb-2">97.55%</h3>
            <p className="text-sm md:text-base uppercase font-bold text-white tracking-wide">
              Satisfaction Rate
            </p>
          </div>

          {/* Item 4 */}
          <div className="text-center flex flex-col justify-center">
            <h3 className="text-4xl md:text-[40px] text-white font-bold mb-2">97.55%</h3>
            <p className="text-sm md:text-base uppercase font-bold text-white tracking-wide">
              Satisfaction Rate
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Counter;