import React from "react";
import kashmir from "../../assets/Images/newbanner.jpg";
import kedarnath from "../../assets/Images/kedarnath.webp";
import tungnath from "../../assets/Images/tungnath.jpeg";
import badrinath from "../../assets/Images/badrinath.jpg";
import yamunotri from "../../assets/Images/yamunotri.jpg";
import InnerBanner from "../../Component/InnerBanner";
import { useNavigate } from "react-router-dom";

const destinations = [
  { name: "Kashmir", tours: "02 Tour", img: kashmir , link:"/kashmir-detail" },
  { name: "Kedarnath", tours: "04 Tour", img: kedarnath, link: '/kedarnath-detail' },
  { name: "Tungnath", tours: "03 Tour", img: tungnath, link: '/tungnath-detail' },
  { name: "Badrinath", tours: "02 Tour", img: badrinath, link:'/badrinath-detail' },
  { name: "Yamunotri", tours: "05 Tour", img: yamunotri, link:'/yamunotri-detail'},
];

const OurPackages = () => {
    const navigate = useNavigate();
    return (
        <>
         <InnerBanner title="Our Package"/>
        <section className="lg:py-16 py-10  bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="lg:text-4xl text-3xl font-bold text-gray-800 mb-3">
                        Our <span className="text-[#00bcd4]">Packages</span> 
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Explore our special pilgrimage destinations and tour packages
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {destinations.map((place, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            onClick={()=> navigate(place.link)}
                        >
                            {/* Image */}
                            <img
                                src={place.img}
                                alt={place.name}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

                            {/* Text */}
                            <div className="absolute bottom-6 left-6 text-white z-10">
                                <h3 className="text-2xl font-semibold mb-1">{place.name}</h3>
                                <p className="text-sm">{place.tours}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
       
    );
};

export default OurPackages;

