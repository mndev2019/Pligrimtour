import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import InnerBanner from '../../Component/InnerBanner';
import BookForm from '../../Component/BookForm';
import hotel1 from '../../assets/Images/hotel1.jpg';
import hotel2 from '../../assets/Images/hotel2.jpg';
import hotel3 from '../../assets/Images/hotel3.jpg';
import hotel4 from '../../assets/Images/hotel4.jpg';
import gangotribanner from '../../assets/Images/gangotri.jpg'
import PackageDetailBanner from '../../Component/PackageDetailBanner';

const GangotriDetail = () => {
  const faqdata = [
    {
      question: "What is the best time to visit Gangotri Temple?",
      answer:
        "The best time to visit Gangotri is between May and October, when the weather is pleasant, and the temple is open for pilgrims. The temple remains closed during winter due to heavy snowfall."
    },
    {
      question: "How can I reach Gangotri Temple?",
      answer:
        "Gangotri can be reached by road from Haridwar, Rishikesh, or Dehradun. The nearest railway station is Rishikesh, and the closest airport is Jolly Grant Airport (Dehradun)."
    },
    {
      question: "Are accommodation and food available near Gangotri?",
      answer:
        "Yes, there are comfortable hotels, guesthouses, and dharamshalas available near Gangotri Temple. Vegetarian food and local cuisine are easily available."
    }
  ];

  const [active, setActive] = useState('Itinerary');
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <PackageDetailBanner title="Gangotri Tour Package" image={gangotribanner} />
      <section className="py-10 bg-gray-100 lg:px-10 px-5">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-4">
          {/* Left Content Section */}
          <div className="lg:col-span-8 col-span-1 lg:order-1 order-2">
            <div className="w-full">
              <h2 className="text-4xl font-semibold text-black">About the Trip</h2>
              <p className="text-gray-700 my-5">
                Gangotri, located in the Uttarkashi district of Uttarakhand, is the origin of the sacred River Ganga. 
                It is one of the four pilgrimage sites of the Char Dham Yatra. 
                The temple, dedicated to Goddess Ganga, stands at an altitude of 3,100 meters amid majestic Himalayas. 
                Our Gangotri Tour Package ensures a divine experience filled with spiritual bliss and natural beauty.
              </p>

              {/* Tab Buttons */}
              <div className="flex items-center w-full gap-3 mt-2 overflow-x-auto scrollbar-hide">
                {['Itinerary', 'Inclusions/Exclusions', 'Price'].map((itm, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(itm)}
                    className={`cursor-pointer px-3 tracking-widest text-nowrap uppercase text-xs lg:py-3 py-1 flex-shrink-0 hover:text-white font-bold hover:bg-[#00bcd4] outline-none ${
                      active === itm ? 'bg-[#00bcd4] text-white' : 'bg-gray-300'
                    }`}
                  >
                    {itm}
                  </button>
                ))}
              </div>

              {/* Itinerary Section */}
              {active === 'Itinerary' && (
                <div className="mt-5 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Trip Itinerary</h3>
                    <div className="space-y-4">
                      {/* Day 1 */}
                      <div className="border border-gray-200 rounded-lg shadow-sm bg-white">
                        <div className="bg-[#00bcd4] text-white font-medium p-3 rounded-t-lg">
                          Day 1 – Arrival at Haridwar / Rishikesh
                        </div>
                        <div className="p-4 text-gray-700">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Arrive at Haridwar or Rishikesh and check into your hotel.</li>
                            <li>Attend Ganga Aarti at Har Ki Pauri in the evening.</li>
                            <li>Overnight stay in Haridwar/Rishikesh.</li>
                          </ul>
                        </div>
                      </div>

                      {/* Day 2 */}
                      <div className="border border-gray-200 rounded-lg shadow-sm bg-white">
                        <div className="bg-[#00bcd4] text-white font-medium p-3 rounded-t-lg">
                          Day 2 – Drive to Uttarkashi
                        </div>
                        <div className="p-4 text-gray-700">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Breakfast and drive to Uttarkashi (approx. 6-7 hours).</li>
                            <li>Visit Vishwanath Temple and local attractions.</li>
                            <li>Overnight stay in Uttarkashi.</li>
                          </ul>
                        </div>
                      </div>

                      {/* Day 3 */}
                      <div className="border border-gray-200 rounded-lg shadow-sm bg-white">
                        <div className="bg-[#00bcd4] text-white font-medium p-3 rounded-t-lg">
                          Day 3 – Visit Gangotri Temple
                        </div>
                        <div className="p-4 text-gray-700">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Early morning drive to Gangotri (approx. 100 km).</li>
                            <li>Darshan and puja at Gangotri Temple.</li>
                            <li>Return to Uttarkashi for overnight stay.</li>
                          </ul>
                        </div>
                      </div>

                      {/* Day 4 */}
                      <div className="border border-gray-200 rounded-lg shadow-sm bg-white">
                        <div className="bg-[#00bcd4] text-white font-medium p-3 rounded-t-lg">
                          Day 4 – Departure
                        </div>
                        <div className="p-4 text-gray-700">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Breakfast and check-out from the hotel.</li>
                            <li>Drive back to Haridwar/Rishikesh for departure.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">FAQs</h3>
                    <div className="space-y-3">
                      {faqdata.map((item, index) => (
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
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Inclusions/Exclusions */}
              {active === 'Inclusions/Exclusions' && (
                <div className="w-full mt-5">
                  <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
                    <div className="col-span-1 bg-white shadow-md rounded-lg p-5">
                      <h2 className="text-xl font-semibold mb-3 text-[#00bcd4]">Inclusions</h2>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Accommodation in standard hotels or lodges.</li>
                        <li>Daily breakfast and dinner.</li>
                        <li>Private vehicle for the entire journey.</li>
                        <li>Darshan assistance at Gangotri Temple.</li>
                        <li>Professional driver and all applicable taxes.</li>
                      </ul>
                    </div>

                    <div className="col-span-1 bg-white shadow-md rounded-lg p-5">
                      <h2 className="text-xl font-semibold mb-3 text-[#00bcd4]">Exclusions</h2>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Airfare or train tickets.</li>
                        <li>Lunch and personal expenses.</li>
                        <li>Pony or palki charges (if applicable).</li>
                        <li>Travel insurance or medical expenses.</li>
                        <li>Anything not mentioned in inclusions.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Price Section */}
              {active === 'Price' && (
                <div className="mt-6 bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-[#00bcd4] mb-3">
                    Gangotri Tour Package Price
                  </h2>
                  <p className="text-gray-700 mb-3">
                    Our Gangotri Dham Yatra packages are crafted for a divine and peaceful journey, perfect for families and spiritual seekers.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><span className="font-semibold">Standard Package:</span> ₹8,999 per person (3 Nights / 4 Days)</li>
                    <li><span className="font-semibold">Deluxe Package:</span> ₹12,999 per person (3 Nights / 4 Days)</li>
                    <li><span className="font-semibold">Premium Package:</span> ₹17,999 per person (Includes Palki & Guide Assistance)</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3 italic">
                    *Prices may vary depending on travel dates and hotel category.
                  </p>
                  <div className="mt-5">
                    <button className="bg-[#00bcd4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#009cb3] transition">
                      Book Now
                    </button>
                  </div>
                </div>
              )}

              {/* Hotel Rooms Gallery */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-5">Hotel Rooms Gallery</h3>
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

          {/* Right Side Booking Form */}
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

export default GangotriDetail;
