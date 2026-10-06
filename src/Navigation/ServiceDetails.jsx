import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useServiceContext } from '../serviceContext';
import { EMAILS, parseDescription, whatsappHref } from '../site';

const ServiceDetail = () => {
  const { id } = useParams();
  const { services } = useServiceContext();
  const index = services.findIndex((s) => s.id.toString() === id);
  const service = services[index];

  useEffect(() => {
    if (service) document.title = `${service.name} · Amare Kharis`;
  }, [service]);

  if (!service) {
    return (
      <section className="shell flex min-h-[80vh] flex-col justify-end pb-24 pt-40">
        <h1 className="display-xl">Service not found</h1>
        <p className="mt-6 max-w-xl text-stone">
          We could not find that service. It may have been renamed.
        </p>
        <Link to="/businesses" className="link-rule mt-10 self-start">See all businesses</Link>
      </section>
    );
  }

  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];
  const blocks = parseDescription(service.description);

  return (
    <article className="shell pb-24 pt-[calc(var(--nav-h)+3rem)] md:pb-32 md:pt-[calc(var(--nav-h)+5rem)]">
      <Link to="/businesses" className="label inline-flex items-center gap-2 text-stone transition-colors hover:text-bone">
        <FiArrowLeft aria-hidden="true" /> All businesses
      </Link>

      <header className="mt-12 md:mt-20">
        <h1 className="display-xl max-w-5xl">{service.name}</h1>
        <p className="mt-8 max-w-2xl text-xl leading-snug text-stone md:text-2xl">
          {service.sub}
        </p>
      </header>

      <div className="mt-16 grid gap-14 border-t border-[color:var(--line)] pt-14 md:mt-24 md:grid-cols-12 md:gap-8">
        <div className="max-w-[68ch] space-y-6 text-lg leading-relaxed text-bone/90 md:col-span-7">
          {blocks.map((b, i) =>
            b.type === 'p' ? (
              <p key={i}>{b.text}</p>
            ) : (
              <ul key={i} className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
                {b.items.map((item, j) => (
                  <li key={j} className="py-5">
                    {item.lead && <strong className="block font-medium text-bone">{item.lead}</strong>}
                    <span className={item.lead ? 'mt-1 block text-stone' : ''}>{item.text}</span>
                  </li>
                ))}
              </ul>
            )
          )}
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <div className="border border-[color:var(--line)] p-8 md:sticky md:top-[calc(var(--nav-h)+2rem)]">
            <h2 className="display-m">Discuss this service</h2>
            <p className="mt-4 text-stone">
              Tell us what you need and we will come back to you with a plan.
            </p>
            <a
              href={whatsappHref(`Hello Amare Kharis, I would like to enquire about ${service.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8 w-full"
            >
              Message on WhatsApp
            </a>
            <a
              href={`mailto:${EMAILS[1]}?subject=${encodeURIComponent(`Enquiry: ${service.name}`)}`}
              className="btn-line mt-3 w-full"
            >
              Email us
            </a>
          </div>
        </aside>
      </div>

      <nav className="mt-24 grid border-t border-[color:var(--line)] sm:grid-cols-2" aria-label="More businesses">
        <Link to={`/services/${prev.id}`} className="group border-b border-[color:var(--line)] py-8 sm:border-b-0 sm:border-r sm:pr-8">
          <span className="label inline-flex items-center gap-2 text-stone"><FiArrowLeft aria-hidden="true" /> Previous</span>
          <span className="mt-3 block font-display text-2xl transition-colors group-hover:text-gold md:text-3xl">{prev.name}</span>
        </Link>
        <Link to={`/services/${next.id}`} className="group py-8 text-right sm:pl-8">
          <span className="label inline-flex items-center gap-2 text-stone">Next <FiArrowRight aria-hidden="true" /></span>
          <span className="mt-3 block font-display text-2xl transition-colors group-hover:text-gold md:text-3xl">{next.name}</span>
        </Link>
      </nav>
    </article>
  );
};

export default ServiceDetail;
