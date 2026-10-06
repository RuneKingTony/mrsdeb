import React from "react";
import { Link } from "react-router-dom";
import { EMAILS, PHONE_HREF, PHONE_NUMBER, whatsappHref } from "../site";

// Closing call to action on the home page.
const Contact = () => (
  <section className="shell pb-28 pt-6 md:pb-40 md:pt-10" aria-labelledby="contact-heading">
    <div className="grid gap-12 pt-16 md:grid-cols-12 md:gap-8 md:pt-24">
      <h2 id="contact-heading" className="display-xl md:col-span-7">
        Need to know more?
      </h2>
      <div className="flex flex-col justify-end md:col-span-5">
        <p className="max-w-md text-lg text-stone">
          Reach out for any enquiry. Tell us what needs handling and we will
          take it from there.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappHref("Hello Amare Kharis, I would like to enquire about your services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Message on WhatsApp
          </a>
          <Link to="/contacts" className="btn-line">Send an email</Link>
        </div>
        <p className="mt-8 text-stone">
          Or call <a href={PHONE_HREF} className="text-bone underline decoration-[color:var(--line-strong)] hover:decoration-gold">{PHONE_NUMBER}</a>
          {" · "}
          <a href={`mailto:${EMAILS[0]}`} className="text-bone underline decoration-[color:var(--line-strong)] hover:decoration-gold">{EMAILS[0]}</a>
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
