import React, { useEffect } from "react";
import InnerBanner from "../../Component/InnerBanner";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPlane, FaUmbrellaBeach, FaMountain } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 900 });
    }, []);
    return (
        <>
            <InnerBanner title="Contact Us" />

            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white lg:py-20 py-10 overflow-hidden">
                {/* Decorative gradient blur */}
                <div className="absolute top-0 left-0 w-80 h-80 bg-[#00bcd4] rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00bcd4] rounded-full blur-3xl opacity-20"></div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
                    {/* Heading */}
                    <div className="text-center mb-16" data-aos="flip-left">
                        <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold mb-4 tracking-tight">
                            Let’s <span className="text-[#00bcd4]">Connect</span>
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto lg:text-lg text-md">
                            Have questions about our tour packages or travel plans? Reach out to our team — we’re here to help you plan your next adventure.
                        </p>
                    </div>

                    {/* Contact Info + Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info Card */}
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl transition-all hover:shadow-[#00bcd4]/50 hover:-translate-y-1">
                            <h3 className="text-2xl font-semibold mb-6 text-[#00bcd4]">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#00bcd4]/20 p-4 rounded-full">
                                        <FaMapMarkerAlt className="text-[#00bcd4] text-2xl" />
                                    </div>
                                    <p className="text-gray-200">
                                        123, Wanderlust Street, Kanpur, India
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-[#00bcd4]/20 p-4 rounded-full">
                                        <FaPhoneAlt className="text-[#00bcd4] text-2xl" />
                                    </div>
                                    <p className="text-gray-200">+91 123456789</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-[#00bcd4]/20 p-4 rounded-full">
                                        <FaEnvelope className="text-[#00bcd4] text-2xl" />
                                    </div>
                                    <p className="text-gray-200">info@travel.com</p>
                                </div>
                            </div>

                            {/* Tour & Travel Info Section */}
                            <div className="mt-10">
                                <h4 className="text-lg font-medium text-[#00bcd4] mb-4">
                                    Our Travel Specialties
                                </h4>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <FaPlane className="text-[#00bcd4] text-lg" />
                                        <p className="text-gray-300">Domestic Tours</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaUmbrellaBeach className="text-[#00bcd4] text-lg" />
                                        <p className="text-gray-300">Beach Vacations</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaMountain className="text-[#00bcd4] text-lg" />
                                        <p className="text-gray-300">Adventure & Hill Station Packages</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl transition-all hover:shadow-[#00bcd4]/50 hover:-translate-y-1">
                            <h3 className="text-2xl font-semibold mb-6 text-[#00bcd4]">
                                Send a Message
                            </h3>

                            <form className="space-y-5">
                                <div>
                                    <label className="block text-gray-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter your name"
                                        className="w-full bg-transparent border border-gray-500 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] placeholder-gray-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email"
                                        className="w-full bg-transparent border border-gray-500 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] placeholder-gray-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        required
                                        placeholder="Tell us about your travel plans..."
                                        className="w-full bg-transparent border border-gray-500 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] placeholder-gray-400"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#00bcd4] text-white font-semibold py-3 rounded-md hover:bg-[#00acc1] transition-all duration-300 shadow-lg hover:shadow-[#00bcd4]/50"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="mt-10">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0514989295954!2d80.3212804753655!3d26.86592456398212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37f43b0cc49f%3A0x59de39431cb70842!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1695478300000!5m2!1sen!2sin"
                    className="w-full h-96 border-0"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>
        </>
    );
};

export default Contact;
