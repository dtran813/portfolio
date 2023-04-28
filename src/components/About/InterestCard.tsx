import styles from './About.module.css';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

interface InterestCardProps {
  index: number;
  interest: string;
  imgSrc: string;
}

export default function InterestCard({
  index,
  interest,
  imgSrc,
}: InterestCardProps) {
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
