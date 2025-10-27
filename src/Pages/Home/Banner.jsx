import React from "react";
import { FaPhoneAlt, FaAnchor } from "react-icons/fa";
import bannerImg from "../../assets/Images/banner.jpg"; // replace with your actual image path

const Banner = () => {
    return (
        <section
            className="h-screen bg-cover bg-center flex items-center"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}
        >


            <div className="relative container mx-auto px-6 md:px-16 lg:px-24 text-white">
                <div className="max-w-xl">
                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                        Explore the <br />
                        World <span className="text-[#00bcd4]">Now</span> !
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-gray-200 mt-6 leading-relaxed">
                        Looking for your dream vacation destination but don’t know where to
                        start? With the help of experienced and knowledgeable travel agents,
                        you can plan the trip of a lifetime with ease.
                    </p>

                    {/* Contact Section */}
                    <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <div className="flex items-center gap-4">
                            <FaAnchor className="text-4xl text-[#00bcd4]" />
                            <div>
                                <p className="text-sm text-gray-300 uppercase tracking-widest">
                                    Book Your Trip !
                                </p>
                                <p className="text-xl font-semibold flex items-center gap-2">
                                    <FaPhoneAlt className="text-[#00bcd4]" />
                                    +91 1234567890
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="bg-[#00bcd4] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#008fc7] transition-all duration-300 shadow-md">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
