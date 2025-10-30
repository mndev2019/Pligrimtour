import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import InnerBanner from '../../Component/InnerBanner';
import BookForm from '../../Component/BookForm';

const YamunotriDetail = () => {
    const faqdata = [
        {
            question: "What is the best time to visit Yamunotri Temple?",
            answer: "The best time to visit Yamunotri is between May and October. The temple opens in late April or early May and closes around Diwali due to heavy snowfall in winter."
        },
        {
            question: "How do I reach Yamunotri Temple?",
            answer: "Yamunotri can be reached by road till Janki Chatti. From there, the temple is about 6 km away, which can be covered by trekking or using pony/palki services."
        },
        {
            question: "Are accommodation and food available near Yamunotri?",
            answer: "Yes, you can find comfortable guest houses and dharamshalas at Janki Chatti and Barkot. Vegetarian meals are easily available at local eateries and hotels."
        },
    ];

    const [active, setActive] = useState('Itinerary');
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <InnerBanner title="Yamunotri Tour Package" />
            <section className='py-10 bg-gray-100 lg:px-10 px-5'>
                <div className='grid lg:grid-cols-12 grid-cols-1 gap-4'>
                    <div className='lg:col-span-8 col-span-1 lg:order-1 order-2'>
                        <div className="w-full">
                            <h2 className='text-4xl font-semibold text-black'>
                                About the Trip
                            </h2>
                            <p className='text-gray-700 my-5'>
                                Yamunotri, the source of the sacred Yamuna River, is one of the four holy Char Dham pilgrimage sites in Uttarakhand. Perched at an altitude of 3,293 meters in the Garhwal Himalayas, Yamunotri is surrounded by breathtaking peaks and glaciers. The temple, dedicated to Goddess Yamuna, is a perfect blend of spiritual peace and scenic beauty. Our Yamunotri Tour Package ensures a soulful and comfortable pilgrimage experience.
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
                                <div className="mt-5 space-y-3">
                                    {faqdata.map((item, index) => (
                                        <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
                                            <button
                                                className="w-full flex justify-between items-center md:p-2 p-3 text-left font-medium bg-gray-100 hover:bg-[#00bcd4] transition"
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                <span className="text-gray-800 md:text-[16px] text-[14px]">{item.question}</span>
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
                                    ))}
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
                                                <li>Accommodation in standard hotels or lodges.</li>
                                                <li>Daily breakfast and dinner as per the plan.</li>
                                                <li>Private vehicle for the entire journey.</li>
                                                <li>Assistance for Yamunotri Temple Darshan.</li>
                                                <li>Experienced driver and all applicable taxes.</li>
                                                <li>Professional local guide (if required).</li>
                                            </ul>
                                        </div>

                                        {/* Exclusions */}
                                        <div className="col-span-1 bg-white shadow-md rounded-lg p-5">
                                            <h2 className="text-xl font-semibold mb-3 text-[#00bcd4]">Exclusions</h2>
                                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                <li>Airfare or train fare to and from Haridwar/Rishikesh.</li>
                                                <li>Lunch and personal expenses such as tips or laundry.</li>
                                                <li>Pony, palki, or doli charges for the Yamunotri trek.</li>
                                                <li>Travel insurance and emergency medical expenses.</li>
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
                                        Yamunotri Tour Package Price
                                    </h2>
                                    <p className="text-gray-700 mb-3">
                                        Our Yamunotri Dham Yatra packages are crafted for a peaceful and comfortable spiritual journey, perfect for families and devotees.
                                    </p>

                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li><span className="font-semibold">Standard Package:</span> ₹7,999 per person (2 Nights / 3 Days)</li>
                                        <li><span className="font-semibold">Deluxe Package:</span> ₹10,999 per person (2 Nights / 3 Days)</li>
                                        <li><span className="font-semibold">Premium Package:</span> ₹15,999 per person (Includes Palki/Pony & Guide Assistance)</li>
                                    </ul>

                                    <p className="text-gray-600 text-sm mt-3 italic">
                                        *Prices may vary depending on group size, travel dates, and accommodation type.
                                    </p>

                                    <div className="mt-5">
                                        <button className="bg-[#00bcd4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#009cb3] transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar Booking Form */}
                    <div className="lg:col-span-4 col-span-1 lg:order-2 order-1 h-full">
                        <BookForm />
                    </div>
                </div>
            </section>
        </>
    );
};

export default YamunotriDetail;
