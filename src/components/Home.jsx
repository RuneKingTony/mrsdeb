import React from 'react'
import BusinessSection from '../pages/Business'
import Contact from '../pages/Contact'
import LandingPage from '../pages/Landingpage'
import ServicePage from '../pages/Services'
import SkillsSection from '../pages/Skills'


const Home = () => {
  return (
    <div>
     
      <div className='h-5/6' >
      <LandingPage/>
      <div/>
      <BusinessSection/>
      <ServicePage/>
      <SkillsSection/>
      <Contact/>
      </div>
     
    </div>
  )
}

export default Home
