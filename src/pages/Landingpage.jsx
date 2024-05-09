import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from React Router
import image1 from '../assets/black.jpeg';

const LandingPage = () => {
  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden bg-cover bg-center">
      <div
        className="absolute inset-0 flex justify-center h-full items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})` }}
      />
      <motion.div
        className="relative w-full overflow-hidden rounded-lg shadow-lg"
        style={{ height: "90vh", maxWidth: "90vw", margin: "auto", borderRadius: "20px" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="inset-0 bg-gradient-to-b from-transparent to-black opacity-" /> {/* Adjusted overlay positioning */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
          <div style={{ maxWidth: "90%" }} className="p-6 md:p-12 text-center">
            <p className="text-sm md:text-lg">Welcome to</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-yellow-600">AMARE KHARIS SERVICES</h2>
            <p className="text-base italic md:text-lg lg:text-xl mb-8">
              Perfection and excellence with style
            </p>
            {/* Wrap the button with Link component */}
            <Link to="/businesses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-yellow-600 px-6 py-3 md:px-8 md:py-4 rounded-md hover:bg-yellow-600 hover:text-gray-800 hover:border-transparent transition-all duration-300 ease-in-out"
              >
                Explore Our Services
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
