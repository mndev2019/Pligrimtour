import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import kashmir from '../../assets/Images/newbanner.jpg'
import kedarnath from '../../assets/Images/kedarnath.webp'
import tungnath from '../../assets/Images/tungnath.jpeg'
import badrinath from '../../assets/Images/badrinath.jpg'
import yamunotri from '../../assets/Images/yamunotri.jpg'
import { useNavigate } from "react-router-dom";

const destinations = [
  { name: "Kashmir", tours: "02 Tour", img: kashmir , link:"/kashmir-detail" },
  { name: "Kedarnath", tours: "04 Tour", img: kedarnath, link: '/kedarnath-detail' },
  { name: "Tungnath", tours: "03 Tour", img: tungnath, link: '/tungnath-detail' },
  { name: "Badrinath", tours: "02 Tour", img: badrinath, link:'/badrinath-detail' },
  { name: "Yamunotri", tours: "05 Tour", img: yamunotri, link:'/yamunotri-detail'},
];

const HolidayPackage = () => {
  const navigate = useNavigate();
  return (
    <section className="lg:py-20 py-10 bg-[#f9ffff]" id="holiday-packages">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center md:mb-16 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Popular <span className="text-[#00bcd4]">Holiday Packages</span>
          </h2>
          <p className="text-gray-500 md:text-lg text-md max-w-2xl mx-auto">
            Explore India’s most spiritual and breathtaking destinations
          </p>
          <div className="mt-4 w-24 h-1 bg-[#00bcd4] mx-auto rounded-full"></div>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-md group cursor-pointer transition-all duration-500 hover:shadow-xl"
              onClick={() => navigate(place.link)}
            >
              {/* Image */}
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Info box */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-5 py-3 rounded-2xl shadow-md w-[85%] flex items-center justify-between">
                <div>
                  <h3 className="text-gray-900 font-semibold text-lg">
                    {place.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{place.tours}</p>
                </div>
                <div className="bg-[#00bcd4] w-8 h-8 flex items-center justify-center rounded-full">
                  <FiArrowUpRight className="text-white text-lg" />
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
