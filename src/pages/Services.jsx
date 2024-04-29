import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiBriefcase, FiUsers, FiBookOpen, FiClipboard, FiSearch, FiUserPlus, FiSettings, FiFlag, FiBarChart2,FiSmile, FiSend } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';



const services = [
  { icon: <FiSend/>, name: 'Travel Management', description: 'Streamlined booking processes to save time and hassle.'},
  { icon: <FiClipboard />, name: 'Correspondence', description: 'Handle written communication effectively' },
  { icon: <FiSearch />, name: 'Research', description: 'Conduct thorough online research' },
  { icon: <FiBookOpen />, name: 'Startup Consultant', description: 'Provide guidance to startup ventures' },
  { icon: <FiUsers />, name: 'Personnel Management', description: 'Manage personnel and human resources' },
  { icon: <FiBriefcase />, name: 'Consultant', description: 'Offer professional consultancy services' },
  { icon: <FiUserPlus />, name: 'HNI Executive Personal Assistant', description: 'Provide personal assistance to high-net-worth individuals' },
  { icon: <FiBriefcase />, name: 'Business Executive Assistant', description: 'Assist business executives in daily tasks' },
  { icon: <FiSettings />, name: 'Business Representative', description: 'Act as a representative for business interests' },
  { icon: <FiUsers />, name: 'Customer Relations Management', description: 'Manage and improve customer relationships' },
  { icon: <FiFlag />, name: 'Stakeholder Management', description: 'Engage and manage stakeholders effectively' },
  { icon: <FiBarChart2 />, name: 'Project Organization Services', description: 'Oversee and coordinate project activities' },
  { icon: <FiBriefcase />, name: 'Business Development ', description: 'Assist in business development initiatives' },
  { icon: <FiSmile />, name: 'Personal Assistant', description: 'Provide personalized assistance as needed' },
];

const ServicePage = () => {
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
          PROFESSIONAL SERVICES
        </motion.h1>
      </div>
      
      {/* Additional content here */}
      <div className="my-8">
        <p className="text-white text-lg">Empowering Your Success Through Expertise.</p>
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
            <motion.p className="mt-2 text-sm text-gray-300"> {/* Reduced text size */}
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
  
    </div>
  );
};

export default ServicePage;
