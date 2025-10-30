import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      {/* Top Header Bar */}
      <div className="w-full bg-[#071A2B] text-white text-sm fixed top-0 left-0 z-[60]">
        <div className="flex justify-between items-center lg:py-2 py-3 px-6  mx-auto">
          {/* Left Side */}
          <div className="flex items-center lg:gap-6 gap-2 lg:text-md md:text-sm text-[11px]">
            <span className="flex items-center gap-1">
              Contact us <span className="font-medium">+91 1234567890</span>
            </span>

            {/* <span className="text-[#00bcd4] text-lg">•</span> */}
            {/* <span className="cursor-pointer hover:text-[#00bcd4] transition">
              Travel Itinerary
            </span> */}

            <span className="text-[#00bcd4] text-lg">•</span>
            <span>
              Quote:{" "}
              <a
                href="mailto:info@travel.com"
                className="hover:text-[#00bcd4] transition"
              >
                info@travel.com
              </a>
            </span>
          </div>

          {/* Right Side */}
          <div className="lg:flex hidden items-center gap-4">
            <a href="#" className="hover:text-[#00bcd4] transition">
              Twitter
            </a>
            <span className="text-[#00bcd4] text-lg">•</span>
            <a href="#" className="hover:text-[#00bcd4] transition">
              Facebook
            </a>
            <span className="text-[#00bcd4] text-lg">•</span>
            <a href="#" className="hover:text-[#00bcd4] transition">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Navbar below header */}
      <Navbar />
    </>
  );
};

export default Header;
