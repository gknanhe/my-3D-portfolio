import React from "react";
// for tilt effect
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// a higher order componant to animate and display proper ou sub componants

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, icon, title }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          option={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", " ", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
      >
        {/* I'm a skilled software developer with experience in Typescript and
        Javascript , and experties in frameworks like React, Node.js and
        Three.js. I'm a quick lerner and collaborate closely with clients to
        create efficient, scalable , and user-friendly solutions that solve real
        world problems, Let's work together to bring your ideas to life! */}
        I am Ganesh Nanhe, a skillful front-end web developer with a strong
        passion for creating dynamic and user-friendly websites. I thrive on
        collaborating effectively to drive projects forward.
        <br />
        <br /> I find development to be a canvas where I turn innovative ideas
        into engaging online experiences. Beyond coding, I bring a keen eye for
        design, ensuring not just functionality but also a seamless and visually
        appealing user interface. I am driven by the belief that excellent
        software has the power to positively impact and improve the lives of
        those around me.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
