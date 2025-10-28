import React from "react";
import { FaPhoneAlt, FaAnchor } from "react-icons/fa";
import bannerImg from "../../assets/Images/newbanner.jpg"; // background image
import img1 from "../../assets/Images/kedarnath.webp"; 
import img2 from "../../assets/Images/bannerright.jpg"; 

const Banner = () => {
    return (
        <section
            className="relative h-screen flex items-center bg-cover bg-center overflow-hidden "
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}
        >
            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between text-white">

                {/* LEFT CONTENT */}
                <div className="max-w-2xl text-left">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        Explore the World
                        <span className="text-[#00bcd4]"> Now!</span>
                    </h1>

                    <p className="text-lg text-gray-200 mt-4 leading-relaxed">
                        Begin your sacred Chardham Yatra with comfort and devotion. Our expert team
                        ensures every moment of your journey is filled with peace, beauty, and blessings.
                    </p>

                    {/* Contact Section */}
                    <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
                        <div className="flex items-center gap-4">
                            <FaAnchor className="text-4xl text-[#00bcd4]" />
                            <div>
                                <p className="text-sm text-gray-300 uppercase tracking-widest">
                                    Book Your Trip!
                                </p>
                                <p className="text-xl font-semibold flex items-center gap-2">
                                    <FaPhoneAlt className="text-[#00bcd4]" />
                                    +91 1234567890
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="bg-[#00bcd4] text-white font-semibold py-3 px-10 rounded-full hover:bg-[#009fb3] transition-all duration-300 shadow-lg hover:shadow-[#00bcd4]/50">
                            Book Now
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGES */}
                <div className="mt-12 lg:mt-0 flex items-center gap-8 relative">
                    {/* Left (taller) image */}
                    <div className="w-56 h-80 rounded-[3rem] overflow-hidden shadow-xl border-4 border-white/20">
                        <img
                            src={img1}
                            alt="Travel Destination 1"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Right (smaller) image */}
                    <div className="w-48 h-64 rounded-[3rem] overflow-hidden shadow-xl border-4 border-white/20 mt-10 hidden md:block">
                        <img
                            src={img2}
                            alt="Travel Destination 2"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* Soft glow accent */}
            <div className="absolute bottom-20 right-20 hidden md:block">
                <div className="w-24 h-24 bg-[#00bcd4]/20 rounded-full shadow-[0_0_50px_15px_#00bcd4] animate-pulse"></div>
            </div>
        </section>
    );
};

export default Banner;
