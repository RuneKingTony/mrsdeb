import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaClipboardList, FaGift, FaHome, FaShoppingCart, FaTasks, FaTools, FaUser,} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useServiceContext } from '../serviceContext';

const Businesses = () => {
  const { services } = useServiceContext();
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
      <div className="mt-32">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl font-bold mb-4 text-yellow-600"
          ref={headerRef}
        >
          BUSINESSES 
        </motion.h1>
      </div>

      <div className="my-8">
        <p className="text-white text-lg text-center">We are dedicated to propelling your business towards unprecedented growth and achievement. <br/>With our innovative strategies, tailored solutions, and unwavering commitment to excellence,<br/> we stand as your trusted partner in navigating the complexities of modern business landscapes.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" ref={servicesRef}>
        {services.map((service) => (
          <Link key={service.id} to={`/services/${service.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: servicesInView ? service.id * 0.1 + 0.2 : 0 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-start p-4 rounded-lg " style={{backgroundColor: '#2b2b2b'}}
            >
              {service.name === 'Corporate Gifting' && <FaUser className="text-4xl text-yellow-600 rounded-full p-2" />}
              {service.name === 'Souvenirs for all Events' && <FaGift className="text-4xl text-yellow-600 rounded-full p-2" />}
              {service.name === 'Amare Shopper' && <FaShoppingCart className="text-4xl text-yellow-600 rounded-full p-2" />}
              {service.name === 'Amare Household' && <FaHome className="text-4xl text-yellow-600 rounded-full p-2" />}
              {service.name === 'Amare Concierge Services' && <FaTools className="text-4xl text-yellow-600 rounded-full p-2" />}
              {service.name === 'Specialized Services' && <FaTasks className="text-4xl text-yellow-600 rounded-full p-2" />}
              {service.name === 'Project organization Services' && <FaClipboardList className="text-4xl text-yellow-600 rounded-full p-2" />}
              <span className="mt-4 text-lg font-semibold text-white">
                {service.name}
              </span>
              <span className="mt-4 text-sm font-semibold text-white">
                {service.sub}
              </span>
              <p className="mt-2 text-sm text-gray-300" style={{ maxWidth: "300px" }}>
               
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Businesses;
