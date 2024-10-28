import { useState } from 'react'
// import { Navbar } from '../components/navbar'
import { SectionCarousel } from '../components/SectionCarousel'
import { Section2 } from '../components/Section2'
import { Section3 } from '../components/Section3'
import { Redtag } from '../components/Redtag'
import { Testimonials } from '../components/Testimonials'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>

          {/* <Navbar/> */}
          <SectionCarousel/>
          <Section2/>
          <Section3/>
          <Redtag/>
          <Testimonials/>          
          <Footer/>
        
    </>
  )
}

export default HomePage