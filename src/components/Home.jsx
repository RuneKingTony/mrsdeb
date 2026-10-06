import React from 'react'
import { Link } from 'react-router-dom'
import BusinessSection from '../pages/Business'
import Contact from '../pages/Contact'
import LandingPage from '../pages/Landingpage'
import ServicePage from '../pages/Services'
import SkillsSection from '../pages/Skills'
import wing from '../assets/web/image2.webp'

const Statement = () => (
  <section className="shell pb-8 pt-24 md:pb-12 md:pt-40" aria-label="About Amare Kharis">
    <div className="grid md:grid-cols-12 md:gap-8">
      <p className="text-[1.625rem] font-medium leading-[1.25] tracking-[-0.015em] md:col-span-10 md:col-start-2 md:text-[2.75rem] md:leading-[1.15]">
        Business executive support, seamlessly managing C‑suite executives’
        personal and business affairs, coordinating projects, and arranging
        customized corporate services{' '}
        <span className="text-gold">with precision and reliability.</span>
      </p>
      <div className="mt-10 md:col-span-10 md:col-start-2">
        <Link to="/about" className="link-rule">About Amare Kharis</Link>
      </div>
    </div>
  </section>
)

const Interlude = () => (
  <section aria-labelledby="concierge-heading">
    <div className="relative h-[52vh] min-h-[20rem] overflow-hidden md:h-[64vh]">
      <img
        src={wing}
        alt="An aircraft wing above the clouds, seen from a cabin window"
        loading="lazy"
        className="photo-grade-deep h-full w-full origin-[32%_58%] scale-[1.45] object-cover object-[45%_62%]"
      />
    </div>
    <div className="shell grid gap-8 pt-10 md:grid-cols-12 md:gap-8 md:pt-14">
      <h2 id="concierge-heading" className="display-m md:col-span-5">
        Within Nigeria and beyond.
      </h2>
      <div className="md:col-span-6 md:col-start-7">
        <p className="text-lg text-stone">
          Amare V.I.P Concierge plans and runs travel for business meetings,
          shopping and sightseeing: hotels, shortlets, transport and private
          jets, air tickets and Visa on Arrival, handled down to the last detail.
        </p>
        <Link to="/services/5" className="link-rule mt-8">Concierge services</Link>
      </div>
    </div>
  </section>
)

const Home = () => (
  <>
    <LandingPage />
    <Statement />
    <BusinessSection />
    <Interlude />
    <ServicePage />
    <SkillsSection />
    <Contact />
  </>
)

export default Home
