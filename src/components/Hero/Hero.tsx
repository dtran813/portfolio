import styles from './Hero.module.css';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className={styles.heroWrapper}>
      <motion.p
        animate={{
          opacity: [0, 0.5, 1],
          y: [-25, 0],
        }}
        transition={{
          duration: 0.5,
        }}
        className={styles.mdText}
      >
        Hi, my name is &nbsp;
      </motion.p>
      <div>
        <h1 className={styles.name}>
          <SplitText text={'Duc Tran.'} role="heading" />
        </h1>
      </div>
      <motion.p
        animate={{
          opacity: [0, 0.5, 1],
          y: [-25, 0],
        }}
        transition={{
          duration: 0.5,
        }}
        className={styles.lgText}
      >
        I love to see all the beautiful things on the web.
      </motion.p>
      <motion.p
        animate={{
          opacity: [0, 0.5, 1],
          y: [-25, 0],
        }}
        transition={{
          duration: 0.5,
        }}
        className={styles.lgText}
      >
        And soon, you will see me build some of them.
      </motion.p>

      <a href="#contact" className={styles.btn}>
        Contact Me
      </a>
    </section>
  );
}

interface Props {
  text: string;
  role: string;
}

function SplitText({ text, role }: Props) {
  return (
    <span aria-label={text} role={role}>
      {text.split('').map((char, index) => {
        return (
          <motion.span
            key={index}
            aria-hidden={true}
            animate={{
              opacity: [0, 1, 1],
              y: [25, -25, 0],
            }}
            transition={{
              duration: 0.75,
              delay: 0.5 + index / 10,
            }}
            style={{
              display: char === ' ' ? 'inline' : 'inline-block',
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
}
