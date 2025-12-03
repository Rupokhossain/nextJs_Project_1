import React from "react";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaRegCommentDots 
} from "react-icons/fa";

const ContactSection = () => {
  const themeColor = "#00a090";

  return (
    <div className="py-20 bg-gray-50 font-sans">
      <div className="container mx-auto px-4 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* left side */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Leave A Reply</h3>
            <p className="text-gray-500 mb-8 text-sm">
              Fill-up The Form and Message us of your amazing question
            </p>

            <form className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-[#00a090] text-gray-700"
                  />
                  <FaUser className="absolute right-4 top-4 text-gray-400" />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-[#00a090] text-gray-700"
                  />
                  <FaEnvelope className="absolute right-4 top-4 text-gray-400" />
                </div>
              </div>

              {/* Subject Select */}
              <div className="relative">
                <select className="w-full border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-[#00a090] text-gray-500 appearance-none bg-white cursor-pointer">
                  <option>Select Subject</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </select>
                {/* Custom Arrow for Select */}
                <div className="absolute right-4 top-4 pointer-events-none text-gray-400 text-xs">
                  ▼
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-[#00a090] text-gray-700 resize-none"
                ></textarea>
                <FaRegCommentDots className="absolute right-4 top-4 text-gray-400" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{ backgroundColor: themeColor }}
                className="w-full text-white font-bold py-3.5 cursor-pointer rounded transition hover:opacity-90"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* right side */}
          <div className="lg:col-span-1 bg-white border border-gray-200 rounded-lg p-8 shadow-sm h-fit">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Office Information</h3>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Completely recapitalize 24/7 communities via standards compliant metrics whereas.
            </p>

            <div className="space-y-6">
              
              {/* Phone & Email */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-gray-100 rounded text-[#00a090]">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Phone Number & Email</h4>
                  <p className="text-gray-500 text-sm">(+65) - 48596 - 5789</p>
                  <p className="text-gray-500 text-sm">hello@edcare.com</p>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-gray-100 rounded text-[#00a090]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Our Office Address</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    2690 Hilton Street Victoria Road, <br /> New York, Canada
                  </p>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Work Time */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-gray-100 rounded text-[#00a090]">
                  <FaClock />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Official Work Time</h4>
                  <p className="text-gray-500 text-sm">Monday - Friday: 09:00 - 20:00</p>
                  <p className="text-gray-500 text-sm">Sunday & Saturday: 10:30 - 22:00</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;