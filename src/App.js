// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './Navigation/About';
import Businesses from './Navigation/Businesses';
import ServiceDetail from './Navigation/ServiceDetails';
import { ServiceProvider } from './serviceContext';
import Contacts from './Navigation/Contacts';

const TITLES = {
  '/': 'Amare Kharis Services',
  '/about': 'About · Amare Kharis',
  '/businesses': 'Businesses · Amare Kharis',
  '/contacts': 'Contact · Amare Kharis',
};

// Resets scroll and the document title on every route change.
function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
    if (TITLES[pathname]) document.title = TITLES[pathname];
  }, [pathname, hash]);
  return null;
}

function NotFound() {
  return (
    <section className="shell flex min-h-[80vh] flex-col justify-end pb-24 pt-40">
      <h1 className="display-xl">Page not found</h1>
      <p className="mt-6 max-w-xl text-stone">
        The page you were looking for has moved or no longer exists.
      </p>
      <Link to="/" className="link-rule mt-10 self-start">Return home</Link>
    </section>
  );
}

function App() {
  return (
    <Router>
      <RouteEffects />
      <a
        href="#main"
        className="label sr-only z-50 bg-gold px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <ServiceProvider>
        <Navbar />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="businesses" element={<Businesses />} />
            <Route path="services/:id" element={<ServiceDetail />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </ServiceProvider>
    </Router>
  );
}

export default App;
