import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";
import { Wordmark } from "./Navbar";
import {
  EMAILS,
  INSTAGRAM_URL,
  NAV_LINKS,
  PHONE_HREF,
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  whatsappHref,
} from "../site";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 1.2);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="border-t border-[color:var(--line)] bg-ink text-stone">
      <div className="shell grid gap-14 py-20 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Link to="/" aria-label="Amare Kharis, home">
            <Wordmark />
          </Link>
          <p className="mt-6 max-w-sm leading-relaxed">
            Business executive support for busy professionals and entrepreneurs:
            C‑suite personal affairs, business representation, and customized
            corporate services and projects.
          </p>
        </div>

        <nav className="md:col-span-2" aria-label="Footer">
          <h2 className="label mb-5 font-sans text-bone">Pages</h2>
          <ul className="space-y-3">
            <li><Link to="/" className="transition-colors hover:text-bone">Home</Link></li>
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-bone">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-5">
          <h2 className="label mb-5 font-sans text-bone">Reach us</h2>
          <ul className="space-y-3">
            <li>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-bone">
                WhatsApp {WHATSAPP_NUMBER}
              </a>
            </li>
            <li>
              <a href={PHONE_HREF} className="transition-colors hover:text-bone">Phone {PHONE_NUMBER}</a>
            </li>
            {EMAILS.map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className="break-all transition-colors hover:text-bone">{e}</a>
              </li>
            ))}
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-bone">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-[color:var(--line)] py-8 text-sm sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Amare Kharis Services. All rights reserved.</p>
        <p>Perfection and excellence with style.</p>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center rounded-full justify-center border border-[color:var(--line-strong)] bg-ink text-bone transition-[opacity,transform,border-color,color] duration-500 hover:border-gold hover:text-gold ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        tabIndex={showTop ? 0 : -1}
      >
        <FiArrowUp aria-hidden="true" />
      </button>
    </footer>
  );
};

export default Footer;
