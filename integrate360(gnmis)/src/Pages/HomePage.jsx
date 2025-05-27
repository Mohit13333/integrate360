import React from 'react'
import AdmissionsBanner from '../components/layouts/AdmissionsBanner'
import Navbar from '../components/layouts/navbar'
import ImgLayout from '../components/home/ImgLayout'
import About from '../components/home/About'
import Footer from '../components/layouts/Footer'
import Programs from '../components/home/Programs'
import Recruiters from '../components/home/Recruiters'
import NoticesSection from '../components/home/NoticeSection'
import AlumniCarousel from '../components/home/AlumniCarousel'
import TestimonialSection from '../components/home/TestimonialSection'
import EventsSection from '../components/home/EventSection'

const HomePage = () => {
    return (
        <div className="w-full overflow-x-hidden">
            <AdmissionsBanner />
            <Navbar />
            <ImgLayout />
            <About />
            <Programs />
            <Recruiters />
            <NoticesSection />
            <EventsSection />
            <AlumniCarousel />
            <TestimonialSection />
            <Footer />
        </div>
    )
}

export default HomePage
