import React from "react";
import {
  FiPhone,
  FiMail,
  FiTwitter,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

const Contact = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1b1b1b" }}>
      <div className="container mx-auto px-4 py-8 text-white">
        <div className="text-center mb-10 mt-10">
          <p className="text-gray-300">GET IN TOUCH</p>
          <h2 className="text-3xl lg:text-5xl text-yellow-600 font-bold pt-4 ">
            CONTACT US
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 px-4">
            <form className="space-y-4">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full py-2 px-4 border border-gray-300 rounded text-white" // Change text color to white
                    style={{ backgroundColor: "#1b1b1b" }}
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full py-2 mt-2 px-4 border border-gray-300 rounded text-white" // Change text color to white
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
                  {" "}
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-yellow-600">
                NEED TO KNOW MORE?
              </h2>
              <p className="text-gray-300">Reach out to us for any inquiries</p>
              <div className="flex flex-col space-y-4 mt-4">
                <div className="flex items-center">
                  <FiPhone className="mr-2 text-white text-xl" />
                  <div>
                    <p>+2348061278922</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiMail className="mr-2 text-white text-xl" />
                  <div>
                    <p>amare.kharis@gmail.com</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiTwitter className="text-white text-xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/p/CuuDi_cN_P-/?igsh=bTIzeHJsaGdzMWO1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiInstagram className="text-white text-xl" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiFacebook className="text-white text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
