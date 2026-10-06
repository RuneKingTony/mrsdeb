import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiPause, FiPlay } from 'react-icons/fi';
import assist from '../assets/web/skillss.webp';
import travel from '../assets/web/window.webp';
import desk from '../assets/web/jnm.webp';
import { whatsappHref } from '../site';

const LOOKS = [
  {
    src: assist,
    alt: 'Hands typing on a laptop at a wooden desk',
    title: 'Executive & personal assistance',
    to: '/about',
    position: '50% 35%',
  },
  {
    src: travel,
    alt: 'An airport apron seen through an aircraft window',
    title: 'Concierge & travel, within Nigeria and beyond',
    to: '/services/5',
    position: '50% 50%',
  },
  {
    src: desk,
    alt: 'A grand station information desk at night',
    title: 'Project organization, from inception to delivery',
    to: '/services/7',
    position: '50% 45%',
  },
];

const LOOK_MS = 7000;
const ease = [0.16, 1, 0.3, 1];

// Full-bleed opening: photographs crossfade behind the name, set large across the foot of the frame.
const LandingPage = () => {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const playing = !paused && !reduce;

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % LOOKS.length), LOOK_MS);
    return () => clearTimeout(t);
  }, [index, playing]);

  const look = LOOKS[index];

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden" aria-label="Introduction">
      <div className="absolute inset-0 -z-10 bg-ink-raised">
        <AnimatePresence initial={false}>
          <motion.img
            key={look.src}
            src={look.src}
            alt={look.alt}
            className="photo-grade absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: look.position }}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: reduce ? 0.01 : 1.6, ease: 'easeInOut' },
              scale: { duration: LOOK_MS / 1000 + 1.6, ease: 'linear' },
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(27,27,27,0.7)_0%,rgba(27,27,27,0)_22%,rgba(27,27,27,0.15)_45%,rgba(27,27,27,0.92)_82%,var(--ink)_100%)]" />
      </div>

      <div className="shell mt-auto pb-8 pt-[calc(var(--nav-h)+6rem)] md:pb-10">
        <h1 className="display-xl text-[clamp(2.75rem,9.4vw,6rem)]">
          {['Amare', 'Kharis'].map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? false : { y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.12, ease }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-8 grid gap-8 border-t border-[color:var(--line-strong)] pt-8 md:grid-cols-12 md:items-end md:gap-8"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease }}
        >
          <p className="max-w-[34rem] text-lg leading-relaxed text-bone/80 md:col-span-6 md:text-xl">
            One trusted executive for your personal and business affairs:
            assistance, representation, concierge, gifting and projects.{' '}
            <span className="font-semibold text-gold">Perfection and excellence with style.</span>
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5 md:col-span-6 md:justify-end">
            <a
              href={whatsappHref('Hello Amare Kharis, I would like to enquire about your services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Message on WhatsApp
            </a>
            <Link to="/businesses" className="link-rule">
              Explore the businesses
            </Link>
          </div>
        </motion.div>

        <div className="mt-10 flex items-center justify-between gap-6">
          <p className="text-sm text-stone" aria-live="polite">
            <span className="text-bone">{look.title}</span>
            <span aria-hidden="true"> · </span>
            <Link to={look.to} className="text-gold underline-offset-4 hover:underline">
              View details
            </Link>
          </p>
          <div className="flex shrink-0 items-center gap-3">
            <ol className="flex gap-1.5" aria-label="Choose image">
              {LOOKS.map((l, i) => (
                <li key={l.src}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show image ${i + 1}: ${l.title}`}
                    aria-current={i === index}
                    className="flex h-8 w-8 items-center md:w-12"
                  >
                    <span className="relative block h-0.5 w-full overflow-hidden rounded-full bg-[color:var(--line-strong)]">
                      {i === index && (
                        <motion.span
                          key={`${index}-${playing}`}
                          className="absolute inset-y-0 left-0 bg-gold"
                          initial={{ width: playing ? '0%' : '100%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: playing ? LOOK_MS / 1000 : 0, ease: 'linear' }}
                        />
                      )}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            {!reduce && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
                className="flex h-8 w-8 items-center justify-center rounded-full text-stone transition-colors hover:text-bone"
              >
                {paused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
