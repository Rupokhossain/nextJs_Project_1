import Image from "next/image";

import faqImg from "../../../public/assets/images/faq-img.png";
import faqthum1 from "../../../public/assets/images/faq-thumb-1.png";
import faqthum2 from "../../../public/assets/images/faq-thumb-2.png";
import faqthum3 from "../../../public/assets/images/faq-thumb-3.png";
import faqthum4 from "../../../public/assets/images/faq-thumb-4.png";
import SectionHeading from "@/Components/SectionHeading/SectionHeading";

const Faq = () => {

  return (
    <div className="py-24">
      <div className="container mx-auto px-44">
        <div className="grid grid-cols-12">
          <div className="col-span-5 relative">
            <div className="max-w-[435px] h-[542px]">
              <Image src={faqImg} alt="faq" className="rounded-2xl " />
            </div>
            <div className="bg-white shadow-2xl rounded-lg border border-gray-200 p-7 absolute bottom-24 -left-20">
              <h4 className="text-[#162726] text-2xl font-semibold">
                Total Students
              </h4>
              <div className="flex items-center mt-2.5 -space-x-7">
                <Image
                  src={faqthum1}
                  alt="faq"
                  className="w-14 h-14 flex items-center justify-center border-4 border-white rounded-full"
                />
                <Image
                  src={faqthum2}
                  alt="faq"
                  className="w-14 h-14 flex items-center justify-center border-4 border-white rounded-full"
                />
                <Image
                  src={faqthum3}
                  alt="faq"
                  className="w-14 h-14 flex items-center justify-center border-4 border-white rounded-full"
                />
                <Image
                  src={faqthum4}
                  alt="faq"
                  className="w-14 h-14 flex items-center justify-center border-4 border-white rounded-full"
                />
                <p className="w-14 h-14 bg-[#07a698] flex items-center justify-center border-4 border-white rounded-full text-white font-bold">
                  25+
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-7">
            <div className="mb-7">
              <SectionHeading
                heading={"Most Asked Question"}
                subHeading={"Powerful Dashboard And High Performance Framework"}
              />
            </div>

            <div>
              <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-bold text-[#162726] text-lg ">
                  <span className="text-[#6c706f] mr-2.5 text-lg">01.</span>
                  What courses do you offer?
                </div>
                <div className="collapse-content text-[#162726] text-base leading-7">
                  We offer a wide range of courses in various subjects,
                  including science, technology, engineering, mathematics,
                  humanities, and social sciences. Our courses are designed for
                  different education levels, from primary school to university.
                </div>
              </div>

              <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-bold text-[#162726] text-lg ">
                  <span className="text-[#6c706f] mr-2.5 text-lg">02.</span>
                  How Can Teachers Effectively Manage a Diverse Classroom?
                </div>
                <div className="collapse-content text-[#162726] text-base leading-7">
                  We offer a wide range of courses in various subjects,
                  including science, technology, engineering, mathematics,
                  humanities, and social sciences. Our courses are designed for
                  different education levels, from primary school to university.
                </div>
              </div>

              <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-bold text-[#162726] text-lg ">
                  <span className="text-[#6c706f] mr-2.5 text-lg">03.</span>
                  How Is Special Education Delivered in Inclusive Classrooms?
                </div>
                <div className="collapse-content text-[#162726] text-base leading-7">
                  We offer a wide range of courses in various subjects,
                  including science, technology, engineering, mathematics,
                  humanities, and social sciences. Our courses are designed for
                  different education levels, from primary school to university.
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
