import React from 'react';

const services = [
  { name: 'Travel Management', description: 'Travel assistance for smoother, more efficient trip planning, leaving you more time to enjoy the journey.' },
  { name: 'Correspondence', description: 'Written communication handled effectively.' },
  { name: 'Research', description: 'Thorough online research.' },
  { name: 'Startup Consultant', description: 'Guidance for startup ventures.' },
  { name: 'Personnel Management', description: 'Personnel and human resources, managed.' },
  { name: 'Consultant', description: 'Professional consultancy services.' },
  { name: 'HNI Executive Personal Assistant', description: 'Personal assistance for high-net-worth individuals.' },
  { name: 'Business Executive Assistant', description: 'Support for business executives in their daily tasks.' },
  { name: 'Business Representative', description: 'Representation of your business interests.' },
  { name: 'Customer Relations Management', description: 'Customer relationships managed and improved.' },
  { name: 'Stakeholder Management', description: 'Stakeholders engaged and managed effectively.' },
  { name: 'Project Organization Services', description: 'Project activities overseen and coordinated.' },
  { name: 'Business Development', description: 'Support for business development initiatives.' },
  { name: 'Personal Assistant', description: 'Personalized assistance, as and when needed.' },
];

const ServicePage = () => (
  <section className="shell py-24 md:py-36" aria-labelledby="services-heading">
    <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end md:gap-8">
      <h2 id="services-heading" className="display-l md:col-span-7">
        Professional services
      </h2>
      <p className="max-w-sm text-lg text-stone md:col-span-4 md:col-start-9">
        Empowering your success through expertise.
      </p>
    </div>
    <dl className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <div key={s.name} className="border-t border-[color:var(--line)] py-6">
          <dt className="text-lg font-semibold text-bone">{s.name}</dt>
          <dd className="mt-1.5 text-stone">{s.description}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default ServicePage;
