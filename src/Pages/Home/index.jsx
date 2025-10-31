import React from 'react'
import Banner from './Banner'
import About from './About'
import HolidayPackage from './HolidayPackage'
import TourPackage from './TourPackage'
import Gallery from './Gallery'
import Testimonial from './Testimonial'
import MobileHolidayPackage from './MobileHolidayPackage'
import MobileTourPackage from './MobileTourPackage'

const Home = () => {
    return (
        <>
            <Banner />
            <About/>
            <HolidayPackage/>
            {/* <MobileHolidayPackage/> */}
            <TourPackage/>
            <MobileTourPackage/>
            <Gallery/>
            <Testimonial/>

        </>
    )
}

export default Home
