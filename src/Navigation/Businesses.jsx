import React from 'react';
import ServiceIndex from '../components/ServiceIndex';

const Businesses = () => (
  <section className="shell pb-28 pt-[calc(var(--nav-h)+5rem)] md:pb-40 md:pt-[calc(var(--nav-h)+8rem)]">
    <h1 className="display-xl">Businesses</h1>
    <div className="mb-16 mt-12 grid md:mb-24 md:grid-cols-12 md:gap-8">
      <p className="text-lg leading-relaxed text-stone md:col-span-6 md:col-start-7 md:text-xl">
        We are dedicated to propelling your business towards growth and
        achievement. With innovative strategies, tailored solutions and an
        unwavering commitment to excellence, we stand as your trusted partner
        through the complexities of modern business.
      </p>
    </div>
    <ServiceIndex />
  </section>
);

export default Businesses;
