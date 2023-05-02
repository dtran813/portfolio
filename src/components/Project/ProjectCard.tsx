import styles from './Project.module.css';
import Tilt from 'react-parallax-tilt';

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  liveLink: string;
}

interface Tag {
  name: string;
  color: string;
}

export default function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  liveLink,
}: ProjectCardProps) {
  return (
    <Tilt
      className={styles.tilt}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      transitionSpeed={600}
    >
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
        className={styles.wrapper}
      >
        <a
          href={liveLink}
          aria-label={`Check out the ${name} website`}
          target="_blank"
          className={styles.imgWrapper}
        >
          <img
            src={image}
            alt={`A homepage photo of ${name} website`}
            className={styles.projectImg}
          />
        </a>

        <div className={styles.projectInfo}>
          <h3 className={styles.projectName}>{name}</h3>
          <p className={styles.projectDesc}>{description}</p>

          <div className={styles.tagWrapper}>
            {tags.map(tag => (
              <p key={`${name}-${tag.name}`} className={tag.color}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}
