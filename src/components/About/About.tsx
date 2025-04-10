import InterestCard from "./InterestCard";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { interests } from "../constants";

function AboutSection() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">-Introduction-</p>
        <h2 className="sectionHeadText">Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.15, 1)} className="overview">
        I am a technology enthusiast with experience in Python, Java,
        JavaScript, and frameworks such as React and Node.js. I take pride in my
        attention to detail and strong organizational skills, which enable me to
        contribute effectively to any team. Driven by a passion for knowledge, I
        am committed to continuous learning, particularly in software and web
        development skills. In my free time, I enjoy playing video games,
        hiking, and staying active by working out regularly.
      </motion.p>

      <div className="cardWrapper">
        {interests.map((item, index) => (
          <InterestCard key={item.interest} index={index} {...item} />
        ))}
      </div>
    </>
  );
}

const About = SectionWrapper(AboutSection, "about");

export default About;
