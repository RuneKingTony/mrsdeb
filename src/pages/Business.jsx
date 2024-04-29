import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaClipboardList, FaGift, FaHome, FaTasks, FaTools, FaUser, FaUtensils } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const services = [
  { icon: <FaUser/>, name: 'Corporate Gifting', description: 'Explore our diverse selection of corporate gifts and tailor-made solutions for every occasion. '},
  { icon: <FaGift />, name: 'Souvenirs for all Events', description: 'Souvenirs perfect for every event and occasion.' },
  { icon: <FaUtensils />, name: 'Kitchen Essentials', description: 'Essential kitchen items for the modern workplace.' },
  { icon: <FaHome />, name: 'Amare Household', description: 'Amare Household products for a touch of elegance at home or in the office.' },
  { icon: <FaTools />, name: 'Amare Concierge Services', description: 'Concierge services to streamline your busy schedule.' },
  { icon: <FaTasks/>, name: 'Specialized Services', description: 'Specialized solutions designed to meet unique corporate requirements.' },
  { icon: <FaClipboardList />, name: 'Project organization Services', description: 'Project organization services to ensure smooth execution and success.' },
];

const BusinessSection = () => {
  const controls = useAnimation();
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: false, rootMargin: '-100px 0px' });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: false, rootMargin: '-100px 0px' });

  useEffect(() => {
    if (headerInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, headerInView]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#1b1b1b'}}>
      <div className="mt-14"> {/* Added padding to the very top */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-yellow-600"
          ref={headerRef}
        >
        BUSINESSES 
        </motion.h1>
      </div>
      
      {/* Additional content here */}
      <div className="my-8">
        <p className="text-white text-lg">Catalysts for Growth and Success.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" ref={servicesRef}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: servicesInView ? index * 0.1 + 0.2 : 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-start p-4 rounded-lg" // Added padding and rounded corners
            
          >
            <motion.span 
              className="text-4xl text-yellow-600 rounded-full p-2" 
            >
              {service.icon}
            </motion.span>
            <motion.span className="mt-4 text-lg font-semibold text-white">
              {service.name}
            </motion.span>
            <motion.p className="mt-2 text-sm text-gray-300" style={{ maxWidth: "300px" }}> {/* Reduced text size */}
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Learn More Button */}
      <Link to="/businesses" className='pt-8 pr-24' onClick={() => window.scrollTo(0, 0)}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-yellow-600 text-white py-2 px-4 flex items-center transition duration-300 hover:bg-yellow-700"
        >
          Learn More
          <motion.svg
            className="w-5 h-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            whileHover={{ x: -5 }} // Adjusted x value for whileHover
            whileTap={{ x: 5 }}    // Adjusted x value for whileTap
          >
            <motion.path
              fillRule="evenodd"
              d="M13.293 11.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 1 0 1.414-1.414L13 12.586l2.293-2.293a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414z"
              clipRule="evenodd"
            />
          </motion.svg>
        </motion.button>
      </Link>
    </div>
  );
};

export default BusinessSection;
