import React from 'react'

const BookForm = () => {
    return (
        <section className=" bg-gray-100">
            <div className=" mx-auto bg-white rounded-2xl shadow-lg lg:p-8 p-4 border-t-4 border-[#00bcd4]">
                <h2 className="text-3xl font-semibold text-center text-[#00bcd4] mb-6">
                    Book Tours
                </h2>

                <form className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00bcd4]"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email ID</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00bcd4]"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00bcd4]"
                        />
                    </div>

                    {/* Adults and Children */}
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">No. of Adults</label>
                            <input
                                type="number"
                                min="1"
                                placeholder="Adults"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00bcd4]"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">No. of Children</label>
                            <input
                                type="number"
                                min="0"
                                placeholder="Children"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00bcd4]"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Message</label>
                        <textarea
                            rows="4"
                            placeholder="Write your message..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00bcd4]"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#00bcd4] hover:bg-[#009cb3] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Submit Booking
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default BookForm
