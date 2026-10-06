import React from "react";
import { Link } from "react-router-dom";
import deskImage from "../assets/web/jnm.webp";
import travelImage from "../assets/web/window.webp";
import { whatsappHref } from "../site";

const About = () => (
  <>
    <section className="shell pb-20 pt-[calc(var(--nav-h)+5rem)] md:pb-32 md:pt-[calc(var(--nav-h)+8rem)]">
      <h1 className="display-xl">About</h1>
      <div className="mt-12 grid md:grid-cols-12 md:gap-8">
        <p className="text-[1.5rem] font-medium leading-[1.3] tracking-[-0.015em] md:col-span-9 md:col-start-4 md:text-[2.25rem] md:leading-[1.2]">
          A business executive specialized in seamlessly managing C‑suite
          executives’ personal and business affairs, coordinating projects, and
          arranging customized corporate services with precision and reliability.
        </p>
      </div>
    </section>

    <section className="shell pb-24 md:pb-36" aria-labelledby="about-support">
      <div className="grid items-end gap-10 md:grid-cols-12 md:gap-8">
        <div className="overflow-hidden md:col-span-7">
          <img
            src={deskImage}
            alt="A grand station information desk at night"
            className="photo-grade aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <h2 id="about-support" className="display-m">
            Empowering success through seamless support
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone">
            With exceptional organizational skills, attention to detail, team
            management and effective communication, we help our clients focus on
            their core business while we handle their administrative and
            personal tasks.
          </p>
        </div>
      </div>
    </section>

    <section className="shell pb-24 md:pb-36" aria-labelledby="about-efficiency">
      <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:order-2 md:col-span-5 md:col-start-8">
          <img
            src={travelImage}
            alt="An airport apron seen through an aircraft window"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="md:order-1 md:col-span-6">
          <h2 id="about-efficiency" className="display-m">
            Elevating your efficiency and productivity
          </h2>
          <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-stone">
            Representing and consulting for businesses, driving startups,
            managing schedules, travel arrangements, personnel, organizational
            tasks and email: we are dedicated to giving our clients the highest
            level of support. If you are looking for executive personal
            assistants who can represent your business, consult, or streamline
            your workload and increase your productivity, we are here to help.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
            <a
              href={whatsappHref("Hello Amare Kharis, I would like to enquire about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Message on WhatsApp
            </a>
            <Link to="/businesses" className="link-rule">Explore the businesses</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
