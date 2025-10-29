import React from 'react';
import bannerImg from "../assets/Images/newbanner.jpg";

const InnerBanner = ({title}) => {
    return (
        <>
            <section
                className="relative md:h-[70vh] h-[60vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                {/* Overlay (optional, gives nice dark shade for contrast) */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Title */}
                <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center top-10">
                    {title}
                </h1>
            </section>
        </>
    );
};

export default InnerBanner;

