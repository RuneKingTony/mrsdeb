import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  EMAILS,
  INSTAGRAM_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  whatsappHref,
} from "../site";

const EMPTY = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = "Please tell us your name.";
  if (!v.email.trim()) errors.email = "Please add an email address so we can reply.";
  else if (!EMAIL_RE.test(v.email.trim())) errors.email = "That email address doesn’t look complete. Check for a missing @ or domain.";
  if (!v.message.trim()) errors.message = "Please write a short message about what you need.";
  return errors;
}

const Field = ({ id, label, error, multiline, ...props }) => {
  const Tag = multiline ? "textarea" : "input";
  return (
    <div>
      <label htmlFor={id} className="label text-stone">{label}</label>
      <Tag
        id={id}
        name={id}
        className={`field ${multiline ? "min-h-[9rem] resize-y" : ""}`}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#f0a08e]">{error}</p>
      )}
    </div>
  );
};

const Channel = ({ href, label, value, external }) => (
  <li className="border-b border-[color:var(--line)]">
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center justify-between gap-6 py-6"
    >
      <span>
        <span className="label block text-stone">{label}</span>
        <span className="mt-1 block break-all text-xl font-medium tabular-nums tracking-wide transition-colors group-hover:text-gold md:text-2xl">
          {value}
        </span>
      </span>
      <FiArrowUpRight aria-hidden="true" className="shrink-0 text-xl text-stone transition-[color,transform] duration-500 group-hover:rotate-45 group-hover:text-gold" />
    </a>
  </li>
);

const Contacts = () => {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  // No backend: compose the message in the visitor's own email app.
  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }
    const subject = values.subject.trim() || `Enquiry from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
    window.location.href = `mailto:${EMAILS[1]}?cc=${EMAILS[0]}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="shell pb-28 pt-[calc(var(--nav-h)+5rem)] md:pb-40 md:pt-[calc(var(--nav-h)+8rem)]">
      <h1 className="display-xl">Contact</h1>
      <p className="mt-8 max-w-xl text-lg text-stone md:text-xl">
        Need to know more? Reach out for any enquiry. WhatsApp is usually the
        fastest way to reach us.
      </p>

      <div className="mt-20 grid gap-20 md:mt-28 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <h2 className="display-m mb-8">Direct lines</h2>
          <ul className="border-t border-[color:var(--line)]">
            <Channel href={whatsappHref("Hello Amare Kharis, I would like to enquire about your services.")} label="WhatsApp" value={WHATSAPP_NUMBER} external />
            <Channel href={PHONE_HREF} label="Phone" value={PHONE_NUMBER} />
            {EMAILS.map((e) => (
              <Channel key={e} href={`mailto:${e}`} label="Email" value={e} />
            ))}
            <Channel href={INSTAGRAM_URL} label="Instagram" value="Amare Kharis" external />
          </ul>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <h2 className="display-m">Write to us</h2>
          <p className="mt-3 text-stone">
            Sending opens your email app with the message ready to go.
          </p>
          <form className="mt-10 space-y-8" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-8 sm:grid-cols-2">
              <Field id="name" label="Your name" autoComplete="name" value={values.name} onChange={update("name")} error={errors.name} />
              <Field id="email" label="Your email" type="email" autoComplete="email" value={values.email} onChange={update("email")} error={errors.email} />
            </div>
            <Field id="subject" label="Subject (optional)" value={values.subject} onChange={update("subject")} />
            <Field id="message" label="Message" multiline rows={5} value={values.message} onChange={update("message")} error={errors.message} />
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:gap-8">
              <button type="submit" className="btn-gold">Compose email</button>
              <p className="text-sm text-stone" role="status">
                {sent ? "Your email app should now be open. If nothing happened, write to us directly at " + EMAILS[1] + "." : ""}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
