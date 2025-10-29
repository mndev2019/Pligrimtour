import React from 'react'
import Banner from './Banner'
import About from './About'
import HolidayPackage from './HolidayPackage'
import TourPackage from './TourPackage'
import Gallery from './Gallery'
import Testimonial from './Testimonial'

const Home = () => {
    return (
        <>
            <Banner />
            <About/>
            <HolidayPackage/>
            <TourPackage/>
            <Gallery/>
            <Testimonial/>

        </>
    )
}

export default Home
