import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Aarav Sharma',
      role: 'Traveler from India',
      review:
        'Our trip to Bali was unforgettable! Everything from flights to hotel bookings was perfectly managed. Highly recommend this agency for stress-free travel!',
    },
    {
      name: 'Emily Johnson',
      role: 'Adventure Enthusiast',
      review:
        'I booked my Thailand adventure with them, and it was beyond amazing. The team made sure we had local guides, hidden gems, and seamless experiences!',
    },
    {
      name: 'Rohan Mehta',
      role: 'Family Vacationer',
      review:
        'We planned our honeymoon in Maldives, and it was absolutely magical. Excellent service, personalized attention, and perfect planning!',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="testimonial relative flex items-center justify-center py-16 md:py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(163deg, #000000ED 0%, #434a5411 100%)',
          opacity: 0.9,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="text-white text-center md:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            What Our <span className="text-[#00bcd4]">Clients Say</span>
          </h2>
          <p className="text-gray-200 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            We’ve helped thousands of travelers explore breathtaking destinations around the world.
            Here’s what they have to say about their experiences.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-[#00bcd4] mx-auto md:mx-0 rounded-full"></div>
        </div>

        {/* Right Section (Slider) */}
        <div className="text-white w-full max-w-xl mx-auto md:mx-0">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index}>
                <div className="bg-white/10 backdrop-blur-md border border-[#00bcd4]/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl mx-2 sm:mx-4 min-h-[280px] sm:min-h-[320px] flex flex-col justify-center">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#00bcd4] text-base sm:text-xl mr-1" />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-sm sm:text-lg font-medium sm:font-semibold text-gray-100 mb-4 sm:mb-6 leading-relaxed text-center md:text-left">
                    “{item.review}”
                  </p>

                  {/* Name & Role */}
                  <div className="text-center md:text-left">
                    <h4 className="text-[#00bcd4] text-lg sm:text-xl font-bold">{item.name}</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
