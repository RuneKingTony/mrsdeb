import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contacts = () => {
  const whatsappNumber = "+2347034907189";
  const whatsappLink = `https://wa.me/${+2347034907189}`;

  return (
    <div className="min-h-screen pt-24" style={{ backgroundColor: "#1b1b1b" }}>
      <div className="container mx-auto px-4 py-8 text-white">
        <div className="text-center mb-10 mt-10">
          <p className="text-gray-400 text-lg">GET IN TOUCH</p>
          <h2 className="text-3xl lg:text-5xl text-yellow-600 font-bold pt-4">
            CONTACT US
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-yellow-600 mb-8">
              NEED TO KNOW MORE?
            </h2>
            <form className="space-y-4">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full py-2 px-4 border border-gray-300 rounded text-white"
                    style={{ backgroundColor: "#1b1b1b" }}
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full py-2 mt-2 px-4 border border-gray-300 rounded text-white"
                    style={{ backgroundColor: "#1b1b1b" }}
                  />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full py-2 px-4 border border-gray-300 rounded bg-white text-gray-800"
                  style={{ backgroundColor: "#1b1b1b" }}
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="6"
                  className="w-full py-2 px-4 border border-gray-300 rounded bg-white text-gray-800"
                  style={{ backgroundColor: "#1b1b1b" }}
                ></textarea>
                <button
                  type="submit"
                  className="py-2 px-4 bg-yellow-600 text-white rounded cursor-pointer transition duration-300 hover:bg-yellow-700 w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
            <div className="mb-8">
              <p className="text-gray-400 mb-4">
                Reach out to us for any inquiries
              </p>
              <div className="flex flex-col space-y-6 lg:space-y-8">
                <div className="flex items-center">
                  <FiPhone className="mr-4 text-white text-4xl lg:text-5xl" />
                  <div>
                    <p className="text-white text-lg lg:text-2xl">
                      +2348061278922
                    </p>
                  </div>
                </div>
                <div className="flex items-center pt-8">
                  <FiMail className="mr-4 text-white text-4xl lg:text-5xl" />
                  <div>
                    <a
                      href="mailto:amare.kharis@gmail.com"
                      className="text-white text-lg lg:text-2xl"
                    >
                      amare.kharis@gmail.com,
                    </a>
                    <br />
                    <a
                      href="mailto:contact@amare.kharis@gmail.com"
                      className="text-white text-lg lg:text-2xl"
                    >
                      contact@amare.kharis@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center pt-8">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="mr-4 text-white text-4xl lg:text-5xl hover:text-yellow-600" />
                  </a>
                  <div>
                    <p className="text-white text-lg lg:text-2xl">
                      {whatsappNumber}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
