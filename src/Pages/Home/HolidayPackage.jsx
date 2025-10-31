import React, { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import kashmir from "../../assets/Images/newbanner.jpg";
import kedarnath from "../../assets/Images/kedarnathnew.jfif";
import tungnath from "../../assets/Images/tungnath.jpeg";
import badrinath from "../../assets/Images/badrinathnew.jfif";
import yamunotri from "../../assets/Images/yamunotri.jpg";
import gangotri from "../../assets/Images/gangotri.jpg";
import AOS from "aos";
import "aos/dist/aos.css";


const destinations = [
  { name: "Mussoorie", tours: "02 Tour", img: kashmir, link: "/kashmir-detail" },
  { name: "Kedarnath", tours: "04 Tour", img: kedarnath, link: "/kedarnath-detail" },
  { name: "Tungnath", tours: "03 Tour", img: tungnath, link: "/tungnath-detail" },
  { name: "Badrinath", tours: "02 Tour", img: badrinath, link: "/badrinath-detail" },
  { name: "Yamunotri", tours: "05 Tour", img: yamunotri, link: "/yamunotri-detail" },
  { name: "Gangotri", tours: "03 Tour", img: gangotri, link: "/gangotri-detail" },
];

const HolidayPackage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 900});
  }, []);

  return (
    <section className="lg:py-20 py-12 bg-[#f9ffff]" id="holiday-packages">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Heading */}
        <div className="text-center md:mb-16 mb-10" data-aos="flip-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Popular <span className="text-[#00bcd4]">Pilgrim Packages</span>
          </h2>
          <p className="text-gray-500 md:text-lg max-w-2xl mx-auto">
            Explore India’s most spiritual and breathtaking destinations.
          </p>
          <div className="mt-4 w-24 h-1 bg-[#00bcd4] mx-auto rounded-full"></div>
        </div>

        {/* TWO CARDS EACH ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {destinations.map((place, index) => (
            <div
              key={index}
              onClick={() => navigate(place.link)}
              className="group bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer 
                         transition-all duration-500 p-6 relative overflow-hidden border border-transparent 
                         hover:border-[#00bcd4]/40"
                         data-aos="zoom-in"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00bcd425] to-transparent opacity-0 
                              group-hover:opacity-100 blur-xl transition-all duration-700"></div>

              <div className="relative flex flex-col md:flex-row items-center gap-7">

                {/* Image */}
                <img
                  src={place.img}
                  alt={place.name}
                  className="w-full md:w-70 h-60 rounded-2xl object-cover 
                             transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {place.name}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">{place.tours}</p>

                  <p className="text-gray-600 mt-4 max-w-sm leading-relaxed">
                    Discover the divine beauty and peaceful surroundings of {place.name}.
                  </p>

                  {/* Button */}
                  <div className="mt-5 inline-flex items-center gap-2 text-[#00bcd4] text-lg font-medium 
                                  transition-all duration-300 group-hover:gap-3">
                    Explore Now <FiArrowUpRight className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HolidayPackage;
