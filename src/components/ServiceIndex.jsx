import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { useServiceContext } from '../serviceContext';

// The seven business lines as a typographic index. Rows reverse to gold on hover/focus.
const ServiceIndex = () => {
  const { services } = useServiceContext();

  return (
    <ul className="border-t border-[color:var(--line)]">
      {services.map((s) => (
        <li key={s.id} className="border-b border-[color:var(--line)]">
          <Link
            to={`/services/${s.id}`}
            className="group relative isolate grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 py-6 md:grid-cols-12 md:gap-x-8 md:py-8 focus-visible:outline-offset-[-1px]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -inset-x-4 -z-10 origin-left scale-x-0 bg-gold transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 md:-inset-x-6"
            />
            <span className="font-display text-[1.25rem] font-semibold uppercase leading-tight tracking-[-0.01em] transition-colors duration-500 group-hover:text-ink group-focus-visible:text-ink md:col-span-6 md:text-[1.875rem]">
              {s.name}
            </span>
            <span className="col-span-2 row-start-2 max-w-md text-stone transition-colors duration-500 group-hover:text-ink group-focus-visible:text-ink md:col-span-5 md:row-start-auto">
              {s.sub}
            </span>
            <FiArrowUpRight
              aria-hidden="true"
              className="col-start-2 row-start-1 justify-self-end text-2xl text-stone transition-[color,transform] duration-500 group-hover:rotate-45 group-hover:text-ink group-focus-visible:text-ink md:col-span-1 md:col-start-12"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ServiceIndex;
