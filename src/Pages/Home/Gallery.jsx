import React, { useEffect } from "react";
import img1 from "../../assets/Images/yamunotri.jpg";
import img2 from "../../assets/Images/tungnath.jpeg";
import img3 from "../../assets/Images/kedarnathnew.jfif";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
    useEffect(() => {
        AOS.init({ duration: 900 });
    }, []);
    return (
        <section className="py-10 bg-[#00bcd426]">
            <div className=" mx-auto px-6 lg:px-15">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
                    <div className="relative lg:block hidden" data-aos="zoom-in-down">
                        <img
                            src={img3}
                            alt="Hot Air Balloons"
                            className="rounded-2xl w-full h-[550px] object-cover shadow-md"
                        />
                    </div>
                    <div>
                        <h4 className="text-[#00bcd4] font-semibold text-lg mb-3">
                            Go & Discover
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                            Divine Pilgrim Journeys
                        </h2>
                        <p className="text-gray-600 text-lg max-w-md">
                            Experience the serenity of India’s sacred places as you travel through ancient temples,
                            holy rivers, and spiritual landscapes.
                        </p>
                        {/* 3 Image Gallery Row */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mt-5">
                            <div data-aos="zoom-in-down">
                                <img
                                    src={img1}
                                    alt="Beach"
                                    className="rounded-2xl w-full sm:h-[300px] h-[200px] object-cover shadow-md hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div data-aos="zoom-in-down">
                                <img
                                    src={img2}
                                    alt="Temple"
                                    className="rounded-2xl w-full sm:h-[300px] h-[200px] object-cover shadow-md hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                        </div>
                    </div>



                </div>


            </div>
        </section>
    );
};

export default Gallery;
