import styles from './About.module.css';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../../hoc';
import { fadeIn, textVariant } from '../../utils/motion';
import { interests } from '../constants';

interface CardProps {
  index: number;
  interest: string;
  imgSrc: string;
}

function Card({ index, interest, imgSrc }: CardProps) {
  return (
    <Tilt
      className={styles.tilt}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      transitionSpeed={500}
    >
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`${styles.cardShadow} green-pink-gradient`}
      >
        <div
          className={styles.cardContent}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <h3 className={styles.interestText}>{interest}</h3>
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

      <div className={styles.cardWrapper}>
        {interests.map((item, index) => (
          <Card key={item.interest} index={index} {...item} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, 'about');
