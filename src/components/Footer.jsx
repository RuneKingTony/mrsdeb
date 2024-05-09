import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic to subscribe the user to the newsletter
    console.log(`Subscribing ${email} to the newsletter...`);
    // Clear the input field after submission
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-gray-300 py-8" style={{ backgroundColor: "#2b2b2b" }}>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4 px-4">
        <div>
          <h4 className="font-semibold text-lg mb-4">About Us</h4>
          <p className="leading-relaxed">
          Business Executive specializing in providing efficient and reliable support to busy professionals and entrepreneurs.

          </p>
          <p className="mt-4 leading-relaxed">
            Expertise in managing C-Suite Executives' personal affairs and
            projects, representing businesses, and arranging customized
            corporate services and professional projects.
          </p>
          <Link
            to="/about" // Update this to the correct route for the about me page
            onClick={scrollToTop} // Add onClick event to scroll to top
            className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg inline-block"
          >
            Learn More
          </Link>
        </div>
       
        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <ul>
          <li className="mb-2">
  <a href="https://www.instagram.com/p/CuuDi_cN_P-/?igsh=bTIzeHJsaGdzMWO1" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram mr-2"></i>Instagram
  </a>
</li>

            <li className="mb-2">
              <Link to="/">
                <i className="fab fa-facebook mr-2"></i>Facebook{" "}
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/">
                <i className="fab fa-twitter mr-2"></i>Twitter
              </Link>
            </li>
           
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Subscribe to Newsletter</h4>
          <form onSubmit={handleSubmit} className="flex mb-4">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange}
              className="px-4 py-2 rounded-l-lg border-gray-400 border outline-none w-full"
              style={{ maxWidth: "300px" }} // Adjust the width as needed
            />
            <button
              type="submit"
              className="px-2 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-r-lg sm:px-6 sm:py-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center py-4">
        <hr className="border-gray-400 my-8" />
        <p>
          &copy; {new Date().getFullYear()} AmareKhais. All rights reserved.
        </p>
      </div>
      <button
        className="fixed bottom-10 right-10 bg-gray-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
