import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import tungnath from '../../assets/Images/tungnath.jpeg'
import badrinath from '../../assets/Images/badrinath.jpg'
import kedarnath from '../../assets/Images/kedarnath.webp'
import kashmir from '../../assets/Images/newbanner.jpg'
import { useNavigate } from 'react-router-dom'

const TourPackage = () => {
    const navigate = useNavigate();
    const packagedata = [
        {
            image: tungnath,
            price: "21,999",
            title: "Tungnath Yatra Package",
            link:'/tungnath-detail'
        },
        {
            image: badrinath,
            price: "21,999",
            title: "Badrinath Yatra Package",
             link:'/badrinath-detail'
        },
        {
            image: kedarnath,
            price: "21,999",
            title: "Kedarnath Yatra Package",
             link:'/kedarnath-detail'
            
        },
        {
            image: kashmir,
            price: "21,999",
            title: "Kashmir  Package",
             link:'/kashmir-detail'
        }
    ];

    return (
        <>
            <section className="lg:py-20 py-10 bg-gray-50 tour">

                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center md:mb-16 mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Best Tour Packages <span className="text-[#00bcd4]">In India</span>
                        </h2>
                        <p className="text-gray-500 md:text-lg text-md max-w-2xl mx-auto">
                            Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convgallis at tellus. Vestibulum ac diam sit.
                        </p>
                        <div className="mt-4 w-24 h-1 bg-[#00bcd4] mx-auto rounded-full"></div>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                        {packagedata.map((packages) => (
                            <>
                                <div className="col-span-1">
                                    <div className="w-full h-full shadow-sm shadow-blue-gray-300 relative rounded-md overflow-hidden">
                                        <img
                                            src={packages.image}
                                            alt=""
                                            className="w-full h-[220px] rounded-t-lg overflow-hidden bannerSlide transition-all duration-1000"
                                        />

                                        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow text-[#00bcd4] font-bold text-sm">
                                            ₹ {packages.price}
                                        </div>

                                        <div className="w-full z-20 h-52 relative">
                                            <div className="tourtext flex mb-2 flex-col gap-2 text-black w-full py-4 px-2">
                                                {/* Top Row */}
                                                <div className="flex justify-between text-xs">
                                                    <div>
                                                        <span className="border border-[#00bcd4] text-[#00bcd4] md:px-3 px-2 py-1 rounded-full">
                                                            Custom
                                                        </span>
                                                    </div>

                                                    <span className='flex items-center gap-1'>
                                                        <FaRegClock />
                                                        &nbsp; 9 Days / 8 Nights
                                                    </span>
                                                </div>

                                                {/* Location and Dates */}
                                                <div className="w-full">
                                                    <p>
                                                        <span className="font-bold">
                                                            {packages.title}
                                                        </span>
                                                    </p>


                                                    <div className='flex items-center gap-2'>
                                                        <SlCalender />
                                                        <p>
                                                            Dates on request
                                                        </p>
                                                    </div>


                                                </div>

                                                {/* Buttons */}
                                                <div className="w-full p-2 absolute flex gap-2 bottom-0 left-0">
                                                    <button className="border border-[#00bcd4] text-[#00bcd4] text-xs uppercase w-1/2 hover:bg-[#00bcd4] hover:text-white mt-4 py-2 rounded-s-lg"
                                                    onClick={()=> navigate(packages.link)}
                                                    >
                                                        View Details
                                                    </button>
                                                    <button className="bg-[#00bcd4] text-xs uppercase w-1/2 text-white mt-4 py-2 rounded-e-lg" onClick={()=> navigate('/contact')}>
                                                        Enquire Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}


                    </div>
                </div>
            </section>
        </>
    )
}

export default TourPackage
