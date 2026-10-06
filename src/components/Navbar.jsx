import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS, whatsappHref } from "../site";

export const Wordmark = ({ className = "" }) => (
  <span className={`inline-flex items-baseline text-bone ${className}`}>
    <span className="font-script text-[2.1rem] leading-none text-gold" aria-hidden="true">
      A
    </span>
    <span className="ml-2 font-display text-[0.875rem] font-semibold uppercase tracking-[0.08em]" aria-hidden="true">
      mare Kharis
    </span>
    <span className="sr-only">Amare Kharis</span>
  </span>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        solid ? "border-b border-[color:var(--line)] bg-ink" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="shell flex h-[var(--nav-h)] items-center justify-between" aria-label="Main">
        <Link to="/" className="relative z-10 -my-2 py-2">
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `label relative py-2 transition-colors duration-300 hover:text-bone ${
                    isActive
                      ? "text-bone after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-gold"
                      : "text-stone"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={whatsappHref("Hello Amare Kharis, I would like to enquire about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="label rounded-full border border-[color:var(--line-strong)] px-5 py-2.5 text-bone transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              WhatsApp
            </a>
          </li>
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="label relative z-10 -mr-2 flex h-11 items-center gap-3 px-2 text-bone md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
          <span className="relative block h-3 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-px w-5 bg-current transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0.5"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-current transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-2.5"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-[var(--nav-h)] bg-ink transition-[opacity,visibility] duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="shell flex h-full flex-col justify-between pb-10 pt-8">
          <ul className="border-t border-[color:var(--line)]">
            {[{ to: "/", label: "Home" }, ...NAV_LINKS].map((l, i) => (
              <li key={l.to} className="border-b border-[color:var(--line)]">
                <NavLink
                  ref={i === 0 ? firstLinkRef : undefined}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `flex items-baseline justify-between py-5 font-display text-3xl font-semibold uppercase ${
                      isActive ? "text-gold" : "text-bone"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={whatsappHref("Hello Amare Kharis, I would like to enquire about your services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
