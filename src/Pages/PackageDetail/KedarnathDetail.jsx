import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import InnerBanner from '../../Component/InnerBanner';
import BookForm from '../../Component/BookForm';

const KedarnathDetail = () => {
    const faqdata = [
        {
            question: "What is the best time to visit Kedarnath?",
            answer: "The best time to visit Kedarnath is between May and June or September and October, when the weather is pleasant and the temple is open for pilgrims."
        },
        {
            question: "How difficult is the trek to Kedarnath Temple?",
            answer: "The trek to Kedarnath is around 16 km from Gaurikund. It is considered a moderate trek, and ponies, palkis, or helicopter services are available for those who prefer not to walk."
        },
        {
            question: "What are the inclusions in the Kedarnath tour package?",
            answer: "The package generally includes transportation, accommodation, meals, and assistance for temple darshan. Helicopter service or pony charges are usually optional extras."
        },
    ];

    const [active, setActive] = useState('Itinerary');
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <InnerBanner title="Kedarnath Tour Package" />
            <section className='py-10 bg-gray-100 lg:px-10 px-5'>
                <div className='grid lg:grid-cols-12 grid-cols-1  gap-4'>
                    <div className='lg:col-span-8 col-span-1 lg:order-1 order-2'>
                        <div className="w-full">
                            <h2 className='lg:text-4xl text-3xl font-semibold text-black'>
                                About the Trip
                            </h2>
                            <p className='text-gray-700 my-5'>
                                Nestled in the majestic Garhwal Himalayas, Kedarnath is one of the twelve Jyotirlingas and holds immense spiritual significance for devotees worldwide. Our Kedarnath Yatra Package offers a seamless blend of spirituality, adventure, and natural beauty.
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


                            {/* Conditional Rendering for Itinerary */}
                            {active === "Itinerary" && (
                                <div className="mt-5 space-y-3">
                                    {faqdata.length > 0 ? (
                                        faqdata.map((item, index) => (
                                            <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
                                                <button
                                                    className="w-full flex justify-between items-center md:p-2 p-3 text-left font-medium bg-gray-100 hover:bg-[#00bcd4]  transition"
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
                                        ))
                                    ) : (
                                        <p className="text-center text-gray-600">No FAQs available.</p>
                                    )}
                                </div>
                            )}
                            {
                                active === "Inclusions/Exclusions" && (
                                    <>
                                        <div className="w-full mt-5">
                                            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
                                                {/* Inclusions */}
                                                <div className="col-span-1 bg-white shadow-md rounded-lg p-5">
                                                    <h2 className="text-xl font-semibold mb-3 text-[#00bcd4]">Inclusions</h2>
                                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                        <li>Accommodation in well-rated hotels or guest houses.</li>
                                                        <li>Daily breakfast and dinner as per itinerary.</li>
                                                        <li>Transportation by private vehicle for the entire trip.</li>
                                                        <li>Assistance for Kedarnath Temple Darshan.</li>
                                                        <li>All toll taxes, parking, and driver allowances included.</li>
                                                        <li>Professional tour guide assistance (if applicable).</li>
                                                    </ul>
                                                </div>

                                                {/* Exclusions */}
                                                <div className="col-span-1 bg-white shadow-md rounded-lg p-5">
                                                    <h2 className="text-xl font-semibold mb-3 text-[#00bcd4]">Exclusions</h2>
                                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                                        <li>Airfare or train fare to and from Haridwar/Rishikesh.</li>
                                                        <li>Helicopter, pony, or palki charges for Kedarnath trek.</li>
                                                        <li>Lunch and personal expenses such as laundry, tips, etc.</li>
                                                        <li>Entry fees to monuments or sightseeing spots.</li>
                                                        <li>Any kind of travel insurance or emergency evacuation costs.</li>
                                                        <li>Anything not mentioned in the “Inclusions” section.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            {active === "Price" && (
                                <div className="mt-6 bg-white shadow-md rounded-lg p-6">
                                    <h2 className="text-2xl font-semibold text-[#00bcd4] mb-3">
                                        Kedarnath Tour Package Price
                                    </h2>
                                    <p className="text-gray-700 mb-3">
                                        The Kedarnath Yatra Package is thoughtfully designed to offer comfort, convenience,
                                        and a spiritual experience within your budget.
                                    </p>

                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li><span className="font-semibold">Standard Package:</span> ₹9,999 per person (3 Nights / 4 Days)</li>
                                        <li><span className="font-semibold">Deluxe Package:</span> ₹12,999 per person (3 Nights / 4 Days)</li>
                                        <li><span className="font-semibold">Premium Package:</span> ₹29,999 per person (Includes Helicopter Service)</li>
                                    </ul>

                                    <p className="text-gray-600 text-sm mt-3 italic">
                                        *Prices may vary depending on travel dates, accommodation choice, and availability.
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
                    <div className="lg:col-span-4 col-span-1 lg:order-2 order-1 h-full">
                        <BookForm />
                    </div>
                </div>
            </section>
        </>
    );
};

export default KedarnathDetail;
