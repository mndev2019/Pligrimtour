import React from "react";
import aboutImg from "../../assets/Images/about.webp"; // replace with your actual image path
import logoIcon from "../../assets/Images/aboutplane.webp"; // replace with your orange circular logo

const About = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10">
                {/* Left Side Image Section */}
                <div className="relative w-full md:w-1/2">
                    <img
                        src={aboutImg}
                        alt="about"
                        className="rounded-tl-[80px] rounded-br-[80px] w-full h-[480px] object-cover"
                    />

                    {/* Top Orange Box */}
                    <div className="absolute -top-10 -right-8 bg-[#FF6600] text-white rounded-md px-6 py-4 shadow-lg">
                        <h3 className="text-2xl font-bold">5+ Years</h3>
                        <p className="text-sm font-medium">Of Experience</p>
                    </div>

                    {/* Center Circular Logo */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                        <img
                            src={logoIcon}
                            alt="logo"
                            className="w-36 h-36 rounded-full border-4 border-white shadow-xl"
                        />
                    </div>

                    {/* Bottom Blue Box */}
                    <div className="absolute -bottom-10 -left-8 bg-[#00bcd4] text-white rounded-md px-8 py-4 shadow-lg">
                        <h3 className="text-2xl font-bold">991+</h3>
                        <p className="text-sm font-medium">Happy Clients</p>
                    </div>
                </div>

                {/* Right Side Content */}
                <div className="w-full md:w-1/2 mt-20 md:mt-0">
                    <h4 className="text-[#00bcd4] font-semibold uppercase mb-2">
                        We Are Pilgrim Tour Planner
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
                        We Are The Best For <br /> Your Dream Travel
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        "At Pilgrim Tour Planner Agency, we craft unforgettable experiences
                        tailored to wanderlust seekers worldwide. Specializing in both
                        domestic and international tour packages, our dedicated team ensures
                        every journey exceeds expectations. With a commitment to client
                        satisfaction at our core, we meticulously design each itinerary, from
                        cultural immersions to adventure-packed expeditions. Whether exploring
                        iconic landmarks or hidden gems, every moment is curated with passion
                        and expertise. Join us on a journey where every destination becomes an
                        extraordinary memory. Welcome to Pilgrim Tour Planner Agency, where
                        wanderlust meets satisfaction."
                    </p>

                    <button className="bg-[#00bcd4] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#e65700] transition-all duration-300 shadow-md">
                        VIEW MORE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
