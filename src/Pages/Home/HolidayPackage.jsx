import React from "react";

// Import your destination images
// import kedarnath from "../../assets/Images/kedarnath.jpg";
// import tungnath from "../../assets/Images/tungnath.jpg";
// import badrinath from "../../assets/Images/badrinath.jpg";
// import yamunotri from "../../assets/Images/yamunotri.jpg";
// import gangotri from "../../assets/Images/gangotri.jpg";
import image from '../../assets/Images/about.webp'

const destinations = [
    { name: "Kedarnath", img: image },
    { name: "Tungnath", img: image },
    { name: "Badrinath", img: image },
    { name: "Yamunotri", img: image },
    { name: "Gangotri", img: image },
];

const HolidayPackage = () => {
    return (
        <section className="py-20 bg-gray-50" id="holiday-packages">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Popular <span className="text-[#00bcd4]">Holiday Packages</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Explore India’s most spiritual and breathtaking destinations
                    </p>
                    <div className="mt-4 w-24 h-1 bg-[#00bcd4] mx-auto rounded-full"></div>
                </div>


                {/* Destination Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {destinations.map((place, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                        >
                            <img
                                src={place.img}
                                alt={place.name}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex items-end justify-center">
                                <h3 className="text-white text-xl font-semibold mb-4 opacity-90">
                                    {place.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HolidayPackage;

