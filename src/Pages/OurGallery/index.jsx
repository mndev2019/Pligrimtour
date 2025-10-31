import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import InnerBanner from "../../Component/InnerBanner";

import img1 from "../../assets/Images/newbanner.jpg";
import img2 from "../../assets/Images/kedarnathnew.jfif";
import img3 from "../../assets/Images/badrinathnew.jfif";
import img4 from "../../assets/Images/tungnath.jpeg";
import img5 from "../../assets/Images/yamunotri.jpg";
import img6 from "../../assets/Images/rishikeshnew.webp";

const galleryImages = [img1, img2, img3, img4, img5, img6];

const OurGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 900});
  }, []);

  return (
    <>
      <InnerBanner title="Our Gallery" />

      <section className="py-16 bg-[#f8ffff]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">

          {/* Heading */}
          <div
            className="text-center mb-12"
            data-aos="flip-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Explore Our <span className="text-[#00bcd4]">Beautiful Moments</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              A glimpse of the divine journeys, peaceful moments, and breathtaking pilgrim destinations.
            </p>
            <div className="mt-4 w-24 h-1 bg-[#00bcd4] mx-auto rounded-full"></div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 150}  // stagger effect
              >
                {/* Image */}
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-72 object-cover rounded-3xl transition-all duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#00bcd4]/0 group-hover:bg-[#00bcd4]/40 transition-all duration-500 rounded-3xl"></div>

                {/* Text on Hover */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-xl font-semibold">Pilgrim Tour</p>
                  <p className="text-white text-sm">Beautiful Destination</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default OurGallery;
