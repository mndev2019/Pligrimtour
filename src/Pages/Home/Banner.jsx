import React, { useEffect } from "react";
import { FaPhoneAlt, FaAnchor } from "react-icons/fa";
import bannerImg from "../../assets/Images/newbanner.jpg";
import img1 from "../../assets/Images/kedarnathnew.jfif";
import img2 from "../../assets/Images/bannerright.jpg";
import img3 from '../../assets/Images/badrinathnew.jfif'
import img4 from '../../assets/Images/yamunotri.jpg'
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);
  const navigate = useNavigate();
  return (
    <section
      className="relative min-h-[90vh] md:h-screen flex items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between text-white top-[30px]" >
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-left" data-aos="zoom-in-right">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            Explore the
            <span className="text-[#00bcd4]"> Chardham!</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-200 mt-3 leading-relaxed">
            Begin your sacred Chardham Yatra with comfort and devotion. Our expert team
            ensures every moment of your journey is filled with peace, beauty, and blessings.
          </p>

          {/* Contact + Button */}
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start  gap-6">
            <div className="flex items-center gap-3 sm:gap-4 text-left">
              <FaAnchor className="text-3xl sm:text-4xl text-[#00bcd4]" />
              <div>
                <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest">
                  Book Your Trip!
                </p>
                <p className="text-lg sm:text-xl font-semibold flex items-center justify-center sm:justify-start gap-2">
                  <FaPhoneAlt className="text-[#00bcd4]" />
                  +91 1234567890
                </p>
              </div>
            </div>

            {/* Button */}
            <button onClick={() => navigate('/contact')} className="cursor-pointer bg-[#00bcd4] text-white font-semibold py-2.5 sm:py-3 px-8 sm:px-10 rounded-full hover:bg-[#009fb3] transition-all duration-300 shadow-lg hover:shadow-[#00bcd4]/50 text-sm sm:text-base">
              Book Now
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:flex hidden justify-center lg:justify-end items-center gap-6 relative">

          {/* LEFT SIDE IMAGES */}
          <div className="flex flex-col gap-6">
            {/* Top Left Image */}
            <div className="w-44 sm:w-48 md:w-60 h-48 sm:h-56 md:h-64 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/20">
              <img
                src={img1}
                alt="Destination 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onClick={() => navigate('/kedarnath-detail')}
              />
            </div>

            {/* Bottom Left Image */}
            <div className="w-40 sm:w-44 md:w-52 h-40 sm:h-48 md:h-56 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/20">
              <img
                src={img2}
                alt="Destination 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onClick={() => navigate('/kashmir-detail')}
              />
            </div>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="flex flex-col gap-6 mt-10">
            {/* Top Right Image */}
            <div className="w-36 sm:w-40 md:w-48 h-40 sm:h-48 md:h-56 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/20">
              <img
                src={img3}
                alt="Destination 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onClick={() => navigate('/badrinath-detail')}
              />
            </div>

            {/* Bottom Right Image */}
            <div className="w-44 sm:w-48 md:w-56 h-48 sm:h-56 md:h-64 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/20">
              <img
                src={img4}
                alt="Destination 4"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onClick={() => navigate('/yamunotri-detail')}
              />
            </div>
          </div>

        </div>

      </div>

      {/* Soft glow accent */}
      <div className="absolute bottom-10 right-10 sm:bottom-16 sm:right-20 hidden md:block">
        <div className="w-16 sm:w-24 h-16 sm:h-24 bg-[#00bcd4]/20 rounded-full shadow-[0_0_50px_15px_#00bcd4] animate-pulse"></div>
      </div>
    </section>
  );
};

export default Banner;
