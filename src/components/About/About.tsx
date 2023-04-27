import styles from './About.module.css';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../../hoc';
import { fadeIn, textVariant } from '../../utils/motion';
import { services } from '../constants';

interface ServiceCardProps {
  index: number;
  title: string;
  background: string;
}

function ServiceCard({ index, title, background }: ServiceCardProps) {
  return (
    <Tilt className="Tilt" transitionSpeed={500}>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={styles.serviceCard}
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          // filter: 'blur(1px)',
          filter: 'contrast(120%)',
        }}
      >
        <div className="">
          <h3 className="">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">-Introduction-</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className={styles.overview}>
        I'm a tech enthusiast with experience in Python, Java, JavaScript, and
        frameworks like React and Node.js. I pride myself on paying attention to
        details and having strong organizational skills, which allows me to
        contribute effectively to any team. My passion for knowledge drives me
        to continuously learn and grow, and I'm currently exploring photography
        to expand my creative horizons. In addition to my professional pursuits,
        I enjoy staying active and healthy by hitting the gym regularly.
      </motion.p>

      <div className={styles.serviceWrapper}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, 'about');
