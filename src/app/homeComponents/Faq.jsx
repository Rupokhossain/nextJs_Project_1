import Image from "next/image";
import faqImg from "../../../public/assets/images/faq-img.png";
import faqthum1 from "../../../public/assets/images/faq-thumb-1.png";
import faqthum2 from "../../../public/assets/images/faq-thumb-2.png";
import faqthum3 from "../../../public/assets/images/faq-thumb-3.png";
import faqthum4 from "../../../public/assets/images/faq-thumb-4.png";
import SectionHeading from "@/Components/SectionHeading/SectionHeading";

const Faq = () => {
  return (
    <div className="py-16 md:py-24 overflow-x-hidden"> {/* overflow-x-hidden added for safety */}
      <div className="container mx-auto px-4 md:px-12 lg:px-24 xl:px-32">
        
        {/* Grid Layout: Mobile 1 Col, Desktop 12 Cols */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- Left Side (Image & Floating Card) --- */}
          {/* mb-16 added for mobile spacing due to absolute card */}
          <div className="col-span-1 lg:col-span-5 relative mb-16 lg:mb-0">
            <div className="w-full h-auto">
              <Image 
                src={faqImg} 
                alt="faq" 
                className="rounded-2xl w-full h-auto object-cover" 
              />
            </div>
            
            {/* Floating Card Responsive Positioning */}
            {/* 
               Mobile: bottom-[-40px], centered horizontally (left-1/2 -translate-x-1/2)
               Desktop: bottom-24, left-[-50px] or [-80px] based on screen size
            */}
            <div className="bg-white shadow-2xl rounded-lg border border-gray-200 p-5 md:p-7 absolute -bottom-12 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:bottom-24 lg:-left-12 xl:-left-20 w-[280px] md:w-auto">
              <h4 className="text-[#162726] text-xl md:text-2xl font-semibold text-center md:text-left">
                Total Students
              </h4>
              <div className="flex items-center justify-center md:justify-start mt-2.5 -space-x-5 md:-space-x-7">
                <Image
                  src={faqthum1}
                  alt="faq"
                  className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-4 border-white rounded-full"
                />
                <Image
                  src={faqthum2}
                  alt="faq"
                  className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-4 border-white rounded-full"
                />
                <Image
                  src={faqthum3}
                  alt="faq"
                  className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-4 border-white rounded-full"
                />
                <Image
                  src={faqthum4}
                  alt="faq"
                  className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-4 border-white rounded-full"
                />
                <p className="w-10 h-10 md:w-14 md:h-14 bg-[#07a698] flex items-center justify-center border-4 border-white rounded-full text-white font-bold text-xs md:text-base">
                  25+
                </p>
              </div>
            </div>
          </div>

          {/* --- Right Side (Accordion) --- */}
          <div className="col-span-1 lg:col-span-7 lg:pl-10">
            <div className="mb-7 text-center lg:text-left">
              <SectionHeading
                heading={"Most Asked Question"}
                subHeading={"Powerful Dashboard And High Performance Framework"}
              />
            </div>

            <div className="space-y-4">
              {/* Accordion 1 */}
              <div className="collapse collapse-arrow bg-base-100 border border-gray-100 rounded-xl">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-bold text-[#162726] text-base md:text-lg pr-12">
                  <span className="text-[#6c706f] mr-2.5">01.</span>
                  What courses do you offer?
                </div>
                <div className="collapse-content text-[#162726] text-sm md:text-base leading-7">
                  <p>We offer a wide range of courses in various subjects,
                  including science, technology, engineering, mathematics,
                  humanities, and social sciences.</p>
                </div>
              </div>

              {/* Accordion 2 */}
              <div className="collapse collapse-arrow bg-base-100 border border-gray-100 rounded-xl">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-bold text-[#162726] text-base md:text-lg pr-12">
                  <span className="text-[#6c706f] mr-2.5">02.</span>
                  How Can Teachers Manage a Diverse Classroom?
                </div>
                <div className="collapse-content text-[#162726] text-sm md:text-base leading-7">
                  <p>We offer a wide range of courses in various subjects,
                  including science, technology, engineering, mathematics,
                  humanities, and social sciences.</p>
                </div>
              </div>

              {/* Accordion 3 */}
              <div className="collapse collapse-arrow bg-base-100 border border-gray-100 rounded-xl">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-bold text-[#162726] text-base md:text-lg pr-12">
                  <span className="text-[#6c706f] mr-2.5">03.</span>
                  How Is Special Education Delivered?
                </div>
                <div className="collapse-content text-[#162726] text-sm md:text-base leading-7">
                  <p>We offer a wide range of courses in various subjects,
                  including science, technology, engineering, mathematics,
                  humanities, and social sciences.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;