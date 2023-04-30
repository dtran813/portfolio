import styles from './Experience.module.css';
import ExperienceCard from './ExperienceCard';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { experiences } from '../constants';
import { textVariant } from '../../utils/motion';
import { VerticalTimeline } from 'react-vertical-timeline-component';

function ExperienceSection() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">-Career Highlights-</p>
        <h2 className="sectionHeadText">Work Experience.</h2>
      </motion.div>

      <div className={styles.timelineWrapper}>
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
}

const Experience = SectionWrapper(ExperienceSection, 'experience');

export default Experience;
