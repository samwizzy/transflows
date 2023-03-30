import React from 'react'
import Banner from "../components/Banner"
import Services from "../components/Services"
import About from "../components/About"
import Project from "../components/Project"
import Testimonial from "../components/Testimonial"
import WhyChooseUs from "../components/WhyChooseUs"
import Team from "../components/Team"
import Contact from "../components/Contact"
import Blog from "../components/Blog"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <div className='Home'>
      <Banner />
      <Services />
      <About />
      <Project />
      <Testimonial />
      <WhyChooseUs />
      <Team />
      <Contact />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home