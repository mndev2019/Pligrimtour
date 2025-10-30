import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import InnerBanner from '../../Component/InnerBanner';
import BookForm from '../../Component/BookForm';
import hotel1 from '../../assets/Images/hotel1.jpg'
import hotel2 from '../../assets/Images/hotel2.jpg'
import hotel3 from '../../assets/Images/hotel3.jpg'
import hotel4 from '../../assets/Images/hotel4.jpg'

const KashmirDetail = () => {
    const faqdata = [
    {
        question: "What is the best time to visit Mussoorie?",
        answer: "The best time to visit Mussoorie is from March to June when the weather is pleasant and perfect for sightseeing. For those who enjoy misty hills and lush greenery, the monsoon months of July to September are also beautiful. Winter, from December to February, offers a chance to see snowfall."
    },
    {
        question: "What are the must-visit attractions in Mussoorie?",
        answer: "Top attractions include Kempty Falls, Gun Hill, Camel’s Back Road, Lal Tibba, Company Garden, and the bustling Mall Road. Nearby places like Dhanaulti and Landour also offer peaceful retreats and stunning mountain views."
    },
];


    const [active, setActive] = useState('Itinerary');
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <InnerBanner title="Mussoorie Tour Package" />
            <section className='py-10 bg-gray-100 lg:px-10 px-5'>
                <div className='grid lg:grid-cols-12 grid-cols-1 gap-4'>
                    <div className='lg:col-span-8 col-span-1 lg:order-1 order-2'>
                        <div className="w-full">
                            <h2 className='text-4xl font-semibold text-black'>
                                About the Trip
                            </h2>
                            <p className='text-gray-700 my-5'>
                            Known as the “Queen of Hills,” Mussoorie is a charming hill station nestled in the foothills of the Himalayas. From the scenic views of Doon Valley and the cascading Kempty Falls to the peaceful Camel’s Back Road and bustling Mall Road, Mussoorie offers the perfect blend of natural beauty, tranquility, and colonial charm. Our Mussoorie Tour Package ensures a refreshing and memorable experience for nature lovers and leisure travelers alike.
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
                                                <li>Accommodation in well-rated hotels or houseboats.</li>
                                                <li>Daily breakfast and dinner during the stay.</li>
                                                <li>Private vehicle for all transfers and sightseeing.</li>
                                                <li>Shikara ride on Dal Lake (once during the trip).</li>
                                                <li>All tolls, parking, and driver allowances.</li>
                                                <li>Local sightseeing of Srinagar, Gulmarg, Pahalgam, and Sonmarg.</li>
                                            </ul>
                                        </div>

                                        {/* Exclusions */}
                                        <div className="col-span-1 bg-white shadow-md rounded-lg p-5">
                                            <h2 className="text-xl font-semibold mb-3 text-[#00bcd4]">Exclusions</h2>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Airfare or train fare to and from Srinagar.</li>
                                                <li>Lunch and personal expenses like tips, laundry, etc.</li>
                                                <li>Entrance fees to monuments and gardens.</li>
                                                <li>Gondola ride in Gulmarg or pony rides (optional).</li>
                                                <li>Travel insurance or emergency evacuation costs.</li>
                                                <li>Anything not mentioned in the inclusions.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Price Section */}
                            {active === "Price" && (
                                <div className="mt-6 bg-white shadow-md rounded-lg p-6">
                                    <h2 className="text-2xl font-semibold text-[#00bcd4] mb-3">
                                        Kashmir Tour Package Price
                                    </h2>
                                    <p className="text-gray-700 mb-3">
                                        Our Kashmir Tour Packages are designed for comfort, luxury, and unforgettable experiences, covering the best attractions in the valley.
                                    </p>

                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li><span className="font-semibold">Standard Package:</span> ₹13,999 per person (4 Nights / 5 Days)</li>
                                        <li><span className="font-semibold">Deluxe Package:</span> ₹19,999 per person (4 Nights / 5 Days)</li>
                                        <li><span className="font-semibold">Premium Package:</span> ₹29,999 per person (Luxury Stay with Houseboat Experience)</li>
                                    </ul>

                                    <p className="text-gray-600 text-sm mt-3 italic">
                                        *Prices may vary depending on season, accommodation category, and travel group size.
                                    </p>

                                    <div className="mt-5">
                                        <button className="bg-[#00bcd4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#009cb3] transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            )}
                            {/* Hotel Rooms Gallery Section */}
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

export default KashmirDetail;
