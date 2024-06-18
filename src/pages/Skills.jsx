import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../assets/skillss.jpeg";

const skillsData = [
  { name: "Organization", percentage: 100 },
  { name: "Adaptability", percentage: 96},
  { name: "Attention to Detail", percentage: 100 },
  { name: "Confidentiality", percentage: 100 },
  { name: "Management", percentage: 98 },
];

const SkillsSection = () => {
  const { ref, inView } = useInView();
  const [loadedSkills, setLoadedSkills] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (inView && !isMobile) {
      const interval = setInterval(() => {
        setLoadedSkills((prevSkills) => {
          const nextSkillIndex = prevSkills + 1;
          if (nextSkillIndex > skillsData.length) {
            clearInterval(interval);
          }
          return nextSkillIndex;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [inView, isMobile]);

  return (
    <div
      ref={ref}
      key={inView}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-24 py-8 px-8 sm:px-12 lg:px-16 pb-24"
      style={{ backgroundColor: "#1b1b1b" }}
    >
      <div className="relative flex justify-center items-center p-4 sm:p-0">
        <motion.img
          src={image}
          alt="Skills"
          className="w-full max-w-md relative"
          style={{ width: "100%", maxWidth: "600px" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.h2
          className="absolute text-2xl font-bold text-center text-white"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          PROFESSIONAL SKILLS
        </motion.h2>
      </div>
      <div className="flex flex-col p-4">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isMobile || loadedSkills > index ? 1 : 0, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-white">
                {skill.name}:
              </span>
              <span className="text-lg font-semibold text-white">
                {isMobile || loadedSkills > index ? skill.percentage : 0}%
              </span>
            </div>
            <div className="flex items-center bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-yellow-600 rounded-full h-full"
                initial={{ width: 0 }}
                animate={{
                  width: isMobile || loadedSkills > index ? `${skill.percentage}%` : 0,
                }}
                transition={{ duration: 3 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default SkillsSection;
