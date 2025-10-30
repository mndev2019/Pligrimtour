import React from "react";
import img1 from "../../assets/Images/kedarnath.webp";
import img2 from "../../assets/Images/tungnath.jpeg";
import img3 from "../../assets/Images/gallery.jpg";

const Gallery = () => {
    return (
        <section className="py-10 bg-[#00bcd426]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
                    <div className="relative lg:block hidden">
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
                            Breathtaking Cities
                        </h2>
                        <p className="text-gray-600 text-lg max-w-md">
                            Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo,
                            lacinia eget consectetur sed, convallis at tellus.
                        </p>
                        {/* 3 Image Gallery Row */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mt-5">
                            <div>
                                <img
                                    src={img1}
                                    alt="Beach"
                                    className="rounded-2xl w-full sm:h-[300px] h-[200px] object-cover shadow-md hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div>
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
