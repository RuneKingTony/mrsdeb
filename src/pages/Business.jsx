import React from 'react';
import { Link } from 'react-router-dom';
import ServiceIndex from '../components/ServiceIndex';

const BusinessSection = () => (
  <section className="shell py-24 md:py-36" aria-labelledby="businesses-heading">
    <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-12 md:items-end md:gap-8">
      <h2 id="businesses-heading" className="display-l md:col-span-7">
        Businesses
      </h2>
      <p className="max-w-md text-lg text-stone md:col-span-5">
        Catalysts for growth and success. Seven lines of business, each run
        with the same discretion and care.
      </p>
    </div>
    <ServiceIndex />
    <div className="mt-12">
      <Link to="/businesses" className="link-rule">All businesses</Link>
    </div>
  </section>
);

export default BusinessSection;
