import React from "react";
import image1 from '../assets/Images/about.webp'
import image2 from '../assets/Images/banner.jpg'
import image3 from '../assets/Images/kedarnath.webp'
import image4 from '../assets/Images/kedarnath.webp'
import image5 from '../assets/Images/newbanner.jpg'
import image6 from '../assets/Images/gallery.jpg'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-[#f8f8f8] text-gray-800 py-10 px-6 md:px-16">
            <div className="grid md:grid-cols-3 gap-10">
                {/* Logo + Description */}
                <div>
                    {/* <img
            src="/logo.png"
            alt="Wandering Tour Planner"
            className="w-48 mb-4"
          /> */}
                    <h2 className="text-lg">
                        LOGO
                    </h2>
                    <p className="text-md leading-relaxed font-semibold">
                        Crafting bespoke  international journeys. Our motto:
                        client satisfaction drives every adventure. Your unforgettable voyage
                        starts here.
                    </p>
                    <div className="flex gap-3 mt-4">
                        <a
                            href="#"
                            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all duration-300"
                        >
                            <FaFacebookF size={16} />
                        </a>
                        <a
                            href="#"
                            className="bg-sky-400 text-white p-2 rounded-full hover:bg-sky-500 transition-all duration-300"
                        >
                            <FaTwitter size={16} />
                        </a>
                        <a
                            href="#"
                            className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-all duration-300"
                        >
                            <FaInstagram size={16} />
                        </a>
                    </div>

                </div>

                {/* Useful Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 relative">
                        Useful Links
                        <span className="absolute left-0 bottom-[-4px] w-12 h-[2px] bg-[#00bcd4]"></span>
                    </h2>
                    <ul className="space-y-2 text-md font-semibold">
                        <li><a href="#" className="hover:text-[#00bcd4]">Home</a></li>
                        <li><a href="#" className="hover:text-[#00bcd4]">About Us</a></li>
                        <li><a href="#" className="hover:text-[#00bcd4]">Domestic</a></li>

                        <li><a href="#" className="hover:text-[#00bcd4]">Contact Us</a></li>
                    </ul>
                </div>

                {/* Gallery */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 relative">
                        Our Gallery
                        <span className="absolute left-0 bottom-[-4px] w-12 h-[2px] bg-[#00bcd4]"></span>
                    </h2>
                    <div className="grid grid-cols-3 gap-2">
                        {[image1, image2, image3, image4, image5, image6].map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt="Gallery"
                                className="rounded-lg object-cover h-20 w-full"
                            />
                        ))}
                    </div>
                </div>


            </div>

            <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm">
                <p>
                    © 2025 <span className="font-semibold">Pilgrim Tour Planner</span> |
                    Powered by <a href="#" className="text-[#00bcd4] hover:underline">Ramot It Services</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
