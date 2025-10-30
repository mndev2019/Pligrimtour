import React from 'react';


const PackageDetailBanner = ({title , image }) => {
    return (
        <>
            <section
                className="relative md:h-[70vh] h-[60vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${image })` }}
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

export default PackageDetailBanner;

