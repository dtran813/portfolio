import { motion } from 'framer-motion';

import { SectionWrapper } from '../../hoc';
import { fadeIn, textVariant } from '../../utils/motion';
function ProjectSection() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">-My Work-</p>
        <h2 className="sectionHeadText">Projects.</h2>
      </motion.div>
    </>
  );
}

const Project = SectionWrapper(ProjectSection, 'project');

export default Project;
