import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

import tungnath from '../../assets/Images/tungnath.jpeg';
import badrinath from '../../assets/Images/badrinath.jpg';
import kedarnath from '../../assets/Images/kedarnath.jpg';
import kashmir from '../../assets/Images/newbanner.jpg';
import gangotri from '../../assets/Images/gangotri.jpg'; // ✅ add Gangotri image

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MobileTourPackage = () => {
  const navigate = useNavigate();

  const packagedata = [
    {
      image: tungnath,
      price: "21,999",
      title: "Tungnath Yatra Package",
      link: '/tungnath-detail'
    },
    {
      image: badrinath,
      price: "21,999",
      title: "Badrinath Yatra Package",
      link: '/badrinath-detail'
    },
    {
      image: kedarnath,
      price: "21,999",
      title: "Kedarnath Yatra Package",
      link: '/kedarnath-detail'
    },
    {
      image: gangotri,
      price: "21,999",
      title: "Gangotri Yatra Package",
      link: '/gangotri-detail'
    },
    {
      image: kashmir,
      price: "21,999",
      title: "Mussoorie Package",
      link: '/kashmir-detail'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    
  };

  return (
    <section className="lg:py-20 py-10 bg-gray-50 tour md:hidden block">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Heading */}
        <div className="text-center md:mb-16 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Best Tour Packages <span className="text-[#00bcd4]">In India</span>
          </h2>
          <p className="text-gray-500 md:text-lg text-md max-w-2xl mx-auto">
            Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo,
            lacinia eget consectetur sed, convallis at tellus.
          </p>
          <div className="mt-4 w-24 h-1 bg-[#00bcd4] mx-auto rounded-full"></div>
        </div>

        {/* Slider Section */}
        <Slider {...settings}>
          {packagedata.map((pkg, index) => (
            <div key={index} className="p-3">
              <div className="w-full shadow-sm shadow-blue-gray-300 relative rounded-md overflow-hidden bg-white">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-[220px] object-cover rounded-t-lg transition-all duration-700 hover:scale-110"
                />

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow text-[#00bcd4] font-bold text-sm">
                  ₹ {pkg.price}
                </div>

                {/* Package Details */}
                <div className="relative py-4 px-3">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="border border-[#00bcd4] text-[#00bcd4] px-3 py-1 rounded-full">
                      Custom
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegClock />
                      &nbsp; 9 Days / 8 Nights
                    </span>
                  </div>

                  <p className="font-bold text-gray-800">{pkg.title}</p>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <SlCalender />
                    <p>Dates on request</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">
                    <button
                      className="border border-[#00bcd4] text-[#00bcd4] text-xs uppercase w-1/2 hover:bg-[#00bcd4] hover:text-white py-2 rounded-s-lg transition"
                      onClick={() => navigate(pkg.link)}
                    >
                      View Details
                    </button>
                    <button
                      className="bg-[#00bcd4] text-xs uppercase w-1/2 text-white py-2 rounded-e-lg"
                      onClick={() => navigate('/contact')}
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MobileTourPackage;
