import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";

import BookForm from '../../Component/BookForm';
import hotel1 from '../../assets/Images/hotel1.jpg'
import hotel2 from '../../assets/Images/hotel2.jpg'
import hotel3 from '../../assets/Images/hotel3.jpg'
import hotel4 from '../../assets/Images/hotel4.jpg'
import PackageDetailBanner from '../../Component/PackageDetailBanner';
import badrinathBanner from '../../assets/Images/badrinath.jpg'

const BadrinathDetail = () => {
    const faqdata = [
        {
            question: "What is the best time to visit Badrinath Temple?",
            answer: "The ideal time to visit Badrinath is between May and October, except during the monsoon (July–August). The temple usually opens in May and closes in November before winter sets in."
        },
        {
            question: "How can I reach Badrinath?",
            answer: "Badrinath is well connected by road from Rishikesh, Haridwar, and Dehradun. The nearest railway station is at Haridwar, and the closest airport is Jolly Grant Airport in Dehradun."
        },
        {
            question: "Is there any accommodation available near Badrinath Temple?",
            answer: "Yes, there are several options available including budget hotels, dharamshalas, and GMVN guest houses offering comfortable stays near the temple premises."
        },
    ];

    const [active, setActive] = useState('Itinerary');
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <PackageDetailBanner title="Badrinath Tour Package" image={badrinathBanner}  />
            <section className='py-10 bg-gray-100 lg:px-10 px-5'>
                <div className='grid lg:grid-cols-12 grid-cols-1 gap-4'>
                    <div className='lg:col-span-8 col-span-1 lg:order-1 order-2'>
                        <div className="w-full">
                            <h2 className='text-4xl font-semibold text-black'>
                                About the Trip
                            </h2>
                            <p className='text-gray-700 my-5'>
                                Badrinath, one of the sacred Char Dham pilgrimage sites, is located in the Chamoli district of Uttarakhand. Dedicated to Lord Vishnu, the Badrinath Temple stands at an elevation of 3,133 meters along the banks of the Alaknanda River. Surrounded by the Nar and Narayan mountain ranges, this holy destination offers a spiritually uplifting experience amid nature’s pristine beauty.
                            </p>

                            <div className="flex items-center w-full gap-3 mt-2 overflow-x-auto scrollbar-hide">
                                {['Itinerary', 'Inclusions/Exclusions', 'Price'].map((itm, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActive(itm)}
                                        className={`cursor-pointer px-3 tracking-widest text-nowrap uppercase text-xs lg:py-3 py-1 flex-shrink-0 hover:text-white font-bold hover:bg-[#00bcd4] outline-none ${active === itm ? 'bg-[#00bcd4] text-white' : 'bg-gray-300'
                                            }`}
                                    >
                                        {itm}
                                    </button>
                                ))}
                            </div>

                            {/* Itinerary / FAQ Section */}
                            {active === "Itinerary" && (
                                <div className="mt-5 space-y-6">
                                    {/* Itinerary Section */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Trip Itinerary</h3>
                                        <div className="space-y-4">
                                            {/* Day 1 */}
                                            <div className="border border-gray-200 rounded-lg shadow-sm bg-white">
                                                <div className="bg-[#00bcd4] text-white font-medium p-3 rounded-t-lg">
                                                    Day 1 – Arrival & City Exploration
                                                </div>
                                                <div className="p-4 text-gray-700">
                                                    <ul className="list-disc pl-5 space-y-1">
                                                        <li>Arrival at destination and hotel check-in.</li>
                                                        <li>Welcome drink and short briefing.</li>
                                                        <li>Explore the nearby local market and dinner at a traditional restaurant.</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Day 2 */}
                                            <div className="border border-gray-200 rounded-lg shadow-sm bg-white">
                                                <div className="bg-[#00bcd4] text-white font-medium p-3 rounded-t-lg">
                                                    Day 2 – Sightseeing & Adventure
                                                </div>
                                                <div className="p-4 text-gray-700">
                                                    <ul className="list-disc pl-5 space-y-1">
                                                        <li>Breakfast at the hotel.</li>
                                                        <li>Visit popular tourist attractions and monuments.</li>
                                                        <li>Evening leisure time with optional activities.</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Day 3 */}
                                            <div className="border border-gray-200 rounded-lg shadow-sm bg-white">
                                                <div className="bg-[#00bcd4] text-white font-medium p-3 rounded-t-lg">
                                                    Day 3 – Departure
                                                </div>
                                                <div className="p-4 text-gray-700">
                                                    <ul className="list-disc pl-5 space-y-1">
                                                        <li>Breakfast and check-out.</li>
                                                        <li>Transfer to the airport/train station.</li>
                                                        <li>Trip concludes with happy memories.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ Section */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">FAQs</h3>
                                        <div className="space-y-3">
                                            {faqdata.length > 0 ? (
                                                faqdata.map((item, index) => (
                                                    <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
                                                        <button
                                                            className="w-full flex justify-between items-center md:p-2 p-3 text-left font-medium bg-gray-100 hover:bg-[#00bcd4] transition"
                                                            onClick={() => toggleAccordion(index)}
                                                        >
                                                            <span className="text-gray-800 md:text-[16px] text-[14px]">
                                                                {item.question}
                                                            </span>
                                                            <span className="text-gray-600 bg-[#00bcd4] p-1 rounded-full">
                                                                {activeIndex === index ? (
                                                                    <LuMinus size={20} className="text-white" />
                                                                ) : (
                                                                    <FiPlus size={20} className="text-white" />
                                                                )}
                                                            </span>
                                                        </button>
                                                        {activeIndex === index && (
                                                            <div className="p-4 text-gray-700 bg-white border-t md:text-[16px] text-[14px]">
                                                                {item.answer}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-center text-gray-600">No FAQs available.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Inclusions / Exclusions Section */}
                            {active === "Inclusions/Exclusions" && (
                                <div className="w-full mt-5">
                                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
                                        {/* Inclusions */}
                                        <div className="col-span-1 bg-white shadow-md rounded-lg p-5">
                                            <h2 className="text-xl font-semibold mb-3 text-[#00bcd4]">Inclusions</h2>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Accommodation in comfortable hotels or lodges.</li>
                                                <li>Daily breakfast and dinner as per the itinerary.</li>
                                                <li>Transportation by private vehicle for the entire journey.</li>
                                                <li>Assistance for Badrinath Temple Darshan.</li>
                                                <li>All tolls, parking charges, and driver allowances.</li>
                                                <li>Professional guide (if required).</li>
                                            </ul>
                                        </div>

                                        {/* Exclusions */}
                                        <div className="col-span-1 bg-white shadow-md rounded-lg p-5">
                                            <h2 className="text-xl font-semibold mb-3 text-[#00bcd4]">Exclusions</h2>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Airfare or train fare to and from Haridwar/Rishikesh.</li>
                                                <li>Lunch and personal expenses like laundry, tips, etc.</li>
                                                <li>Entry fees for sightseeing spots or activities.</li>
                                                <li>Travel insurance or medical expenses.</li>
                                                <li>Anything not mentioned under inclusions.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Price Section */}
                            {active === "Price" && (
                                <div className="mt-6 bg-white shadow-md rounded-lg p-6">
                                    <h2 className="text-2xl font-semibold text-[#00bcd4] mb-3">
                                        Badrinath Tour Package Price
                                    </h2>
                                    <p className="text-gray-700 mb-3">
                                        Our Badrinath Yatra Packages are designed to provide a comfortable and spiritually enriching journey, catering to all types of travelers.
                                    </p>

                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li><span className="font-semibold">Standard Package:</span> ₹8,999 per person (3 Nights / 4 Days)</li>
                                        <li><span className="font-semibold">Deluxe Package:</span> ₹11,999 per person (3 Nights / 4 Days)</li>
                                        <li><span className="font-semibold">Premium Package:</span> ₹19,999 per person (Luxury Stay with VIP Darshan Assistance)</li>
                                    </ul>

                                    <p className="text-gray-600 text-sm mt-3 italic">
                                        *Prices may vary depending on travel dates, accommodation type, and season.
                                    </p>

                                    <div className="mt-5">
                                        <button className="bg-[#00bcd4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#009cb3] transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            )}    {/* Hotel Rooms Gallery Section */}
                            <div className="mt-10">
                                <h3 className="text-xl font-semibold text-gray-800 mb-5">
                                    Hotel Rooms Gallery
                                </h3>
                                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                                    {[hotel1, hotel2, hotel3, hotel4].map((src, index) => (
                                        <div
                                            key={index}
                                            className="overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300"
                                        >
                                            <img
                                                src={src}
                                                alt={`Hotel Room ${index + 1}`}
                                                className="w-full h-56 object-cover transform hover:scale-105 transition duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Booking Form */}
                    <div className="lg:col-span-4 col-span-1 lg:order-2 order-1 h-full">
                        <div className="sticky top-24">
                            <BookForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BadrinathDetail;
