import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

import { projects } from '../constants';
import { SectionWrapper } from '../../hoc';
import { fadeIn, textVariant } from '../../utils/motion';

function ProjectSection() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">-My Work-</p>
        <h2 className="sectionHeadText">Projects.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.15, 1)} className="overview">
        The following are some of my projects that showcase my journey from
        simple tasks to real-world examples of complex problem-solving,
        practical project management, and proficiency with various technologies.
        Each project is briefly described and accompanied by links to its code
        repository or live demo, providing insight into the skills and expertise
        demonstrated throughout my work.
      </motion.p>

      <div className="cardWrapper">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
}

const Project = SectionWrapper(ProjectSection, 'project');

export default Project;
