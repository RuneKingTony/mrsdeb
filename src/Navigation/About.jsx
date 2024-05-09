import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../assets/black.jpeg";
import missionImage from "../assets/bout.jpeg";
import valuesImage from "../assets/jnm.jpeg";

const About = () => {
  const [upperRef, upperInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [lowerRef, lowerInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const textVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  const lowerTextVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <div className="relative flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center bg-black opacity-90"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundColor: "#1b1b1b",
          padding:"30px",
          textAlign: "center", // Center align text
        }}
      >
        <div className="container mx-auto text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-600 mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-white leading-relaxed md:leading-loose">
            Business Executive specialized in seamlessly managing C-suit executives' personal and business affairs, coordinating projects, and arranging customized corporate services with precision and reliability.
          </p>
        </div>
      </section>

      {/* Grid Section 1 */}
      <section
        ref={upperRef}
        className="py-8 md:py-16 px-4 md:px-8 flex-1"
        style={{ backgroundColor: "#1b1b1b", paddingTop: "64px" }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grigd-cols-2 gap-8 items-center">
            <motion.div
              className="p-8"
              initial="hidden"
              animate={upperInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              <h2 className="text-4xl font-semibold mb-4 text-yellow-600">
                Empowering Success through Seamless Support
              </h2>
              <p className="text-white text-lg">
                With our exceptional organizational skills, attention to detail, managing teams, and effective communication, we help our clients focus on their core business activities while we handle their administrative and personal tasks.
              </p>
            </motion.div>
            <div className="p-8 rounded-lg shadow-md">
              <img
                src={missionImage}
                alt="Mission"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section 2 */}
      <section
        ref={lowerRef}
        className="py-8 md:py-16 px-4 md:px-8 flex-1"
        style={{ backgroundColor: "#1b1b1b", paddingTop: "64px" }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <img
                src={valuesImage}
                alt="Values"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <motion.div
              className="p-8 shadow-md"
              initial="hidden"
              animate={lowerInView ? "visible" : "hidden"}
              variants={lowerTextVariants}
            >
              <h2 className="text-4xl font-semibold mb-4 text-yellow-600">
                Elevating Your Efficiency and Productivity
              </h2>
              <p className="text-white text-lg">
                Whether representing businesses, consulting for businesses, driving startups, managing schedules, travel arrangements, personnel, organizational tasks, and email management, we are dedicated to ensuring that our clients receive the highest level of support. So, if you're looking for executive personal assistants who can help represent your business, consult, or streamline your workload and increase your productivity, we're here to help!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
