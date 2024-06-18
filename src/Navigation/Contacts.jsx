import React, { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
// import axios from "axios";

const Contacts = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // const sendMail = async () => {
  //   if (!email || !subject || !message) {
  //     alert("All fields are required");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     await axios.post("http://localhost:3000/send-email", {
  //       email,
  //       subject,
  //       message
  //     });
  //     alert("Email sent successfully");
  //     setEmail("");
  //     setSubject("");
  //     setMessage("");
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     alert("An error occurred while sending the email");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
            <form
              className="space-y-4"
              // onSubmit={(e) => {
              //   e.preventDefault();
              //   sendMail();
              // }}
            >
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Recipient Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 px-4 border border-gray-300 rounded text-white"
                  style={{ backgroundColor: "#1b1b1b" }}
                />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  placeholder="Subject"
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full py-2 px-4 border border-gray-300 rounded text-white"
                  style={{ backgroundColor: "#1b1b1b" }}
                />
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  placeholder="Message"
                  rows="6"
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full py-2 px-4 border border-gray-300 rounded text-white"
                  style={{ backgroundColor: "#1b1b1b" }}
                ></textarea>
                <button
                  type="submit"
                  className="py-2 px-4 bg-yellow-600 text-white rounded cursor-pointer transition duration-300 hover:bg-yellow-700 w-full"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Email"}
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
                      amare.kharis@gmail.com
                    </a>
                    <br />
                    <a
                      href="mailto:contact@amarekharis.com"
                      className="text-white text-lg lg:text-2xl"
                    >
                      contact@amarekharis.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center pt-8">
                  <a href={`https://wa.me/+2347034907189`} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="mr-4 text-white text-4xl lg:text-5xl hover:text-yellow-600" />
                  </a>
                  <div>
                    <p className="text-white text-lg lg:text-2xl">
                      +2347034907189
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
