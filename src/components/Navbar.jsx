import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav
      className={`shadow-lg ${
        scrolled ? "h-20" : "h-28"
      } fixed w-full z-10 transition-all duration-300 ease-in-out`}
      style={{ backgroundColor: "#1b1b1b" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
        <div className="flex items-center">
          <Link to="/" className="text-yellow-600 font-bold ">
            <span
              className="text-4xl"
              style={{ fontFamily: "Ballet, cursive" }}
            >
              A
            </span>
            MARE KHARIS
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-0 left-0 w-full pt-20 z-20`} style={{backgroundColor: '#2b2b2b'}}
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-start space-y-4">
            <div className="flex justify-between w-full">
              <Link to="/" onClick={() => { scrollToTop(); closeMobileMenu(); }} className="text-yellow-600 font-bold">
                <span className="text-4xl" style={{ fontFamily: "Ballet, cursive" }}>A</span> MARE KHARIS
              </Link>
              <button
                onClick={closeMobileMenu}
                className="text-gray-300 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <Link to="/" onClick={() => { scrollToTop(); closeMobileMenu(); }} className="text-gray-300 hover:text-yellow-600 transition duration-300 ease-in-out">
              Home
            </Link>
            <Link to="/about" onClick={() => { scrollToTop(); closeMobileMenu(); }} className="text-gray-300 hover:text-yellow-600 transition duration-300 ease-in-out">
              About
            </Link>
            <Link to="/businesses" onClick={() => { scrollToTop(); closeMobileMenu(); }} className="text-gray-300 hover:text-yellow-600 transition duration-300 ease-in-out">
              Business
            </Link>
            <Link to="/contacts" onClick={() => { scrollToTop(); closeMobileMenu(); }} className="text-gray-300 hover:text-yellow-600 transition duration-300 ease-in-out">
              Contact
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-4">
            <Link to="/" onClick={scrollToTop} className="relative text-gray-300 hover:text-yellow-600 px-3 py-2 transition duration-300 ease-in-out transform hover:scale-110">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ease-in-out transform scale-x-0"></span>
            </Link>
            <Link to="/about" onClick={scrollToTop} className="relative text-gray-300 hover:text-yellow-600 px-3 py-2 transition duration-300 ease-in-out transform hover:scale-110">
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ease-in-out transform scale-x-0"></span>
            </Link>
            <Link to="/businesses" onClick={scrollToTop} className="relative text-gray-300 hover:text-yellow-600 px-3 py-2 transition duration-300 ease-in-out transform hover:scale-110">
              Business
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ease-in-out transform scale-x-0"></span>
            </Link>
            <Link to="/contacts" onClick={scrollToTop} className="relative text-gray-300 hover:text-yellow-600 px-3 py-2 transition duration-300 ease-in-out transform hover:scale-110">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ease-in-out transform scale-x-0"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
